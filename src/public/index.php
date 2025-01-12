<?php

function reverse_proxy($target_url) {

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $target_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false); // 无需自动处理 我们会手动处理
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // 兼容
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false); // 兼容

    // 转发请求方法 (GET, POST, etc.)
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $_SERVER['REQUEST_METHOD']);

    // 转发请求头
    $headers = [];
    foreach (getallheaders() as $name => $value) {
        if ($name != 'Host') { // 避免重复 Host 头
            $headers[] = "$name: $value";
        }
    }
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    // 转发 POST 数据
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        curl_setopt($ch, CURLOPT_POSTFIELDS, file_get_contents('php://input'));
    }

    // 转发 cookies
    if (isset($_SERVER['HTTP_COOKIE'])) {
        curl_setopt($ch, CURLOPT_COOKIE, $_SERVER['HTTP_COOKIE']);
    }

    // 执行请求
    $response = curl_exec($ch);

    // 获取 header 大小
    $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);

    // 分离 header 和 body
    $header = substr($response, 0, $header_size);
    $body = substr($response, $header_size);

    // 处理 cookies
    preg_match_all('/Set-Cookie: (.*)/i', $header, $matches);
    foreach ($matches[1] as $cookie) {
        header('Set-Cookie: ' . $cookie, false);
    }

    // 处理重定向
    preg_match('/Location: (.*)/i', $header, $matches);
    if (isset($matches[1])) {
        $redirect_url = $matches[1];

        // 将目标 URL 的域名替换为本地域名
        $target_host = parse_url($target_url, PHP_URL_HOST);
        $local_host = $_SERVER['HTTP_HOST'];
        $redirect_url = str_replace($target_host, $local_host, $redirect_url);
        header('Location: ' . $redirect_url, true, curl_getinfo($ch, CURLINFO_HTTP_CODE)); // 传递原始状态码
        exit;
    }

    // 设置 HTTP 状态码
    http_response_code(curl_getinfo($ch, CURLINFO_HTTP_CODE));

    // 输出 body
    echo $body;

    curl_close($ch);
}

// 获取请求路径和查询参数
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$query = isset(parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY)['query']) ? '?'.parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY)['query'] : '';

// 目标 URL
$target_url = 'https://alpha.hfpro.top' . $path . $query;

reverse_proxy($target_url);
?>
