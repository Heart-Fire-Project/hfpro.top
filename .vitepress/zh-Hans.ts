import { defineConfig, type DefaultTheme } from 'vitepress'
let adjectives: Array<string> = ['可爱的', '伟大的', '笨蛋']
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)]

const qq = {
  svg: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512"><path d="M454.943 278.922a67.951 67.951 0 0 0-28.276-17.002v-91.254C426.667 76.409 350.258 0 256 0S85.333 76.409 85.333 170.667v91.254a67.929 67.929 0 0 0-28.276 17.002c-26.66 26.662-26.66 69.883 0 96.544l28.276-28.276V358.4c0 47.502 19.418 90.453 50.736 121.392C130.925 489.387 128 500.35 128 512h256c0-11.65-2.925-22.613-8.071-32.208 31.319-30.937 50.737-73.89 50.737-121.392v-11.209l28.276 28.276c26.661-26.662 26.661-69.883.001-96.545M375.467 358.4c0 34.256-14.345 66.045-39.18 88.489a68.22 68.22 0 0 0-20.553-3.156c-25.709 0-48.09 14.218-59.733 35.215-11.643-20.997-34.024-35.215-59.733-35.215a68.153 68.153 0 0 0-20.553 3.156c-24.835-22.444-39.18-54.231-39.18-88.489V145.067c0-42.347 34.453-76.8 76.8-76.8 15.439 0 30.15 4.512 42.667 12.919 12.517-8.407 27.226-12.919 42.667-12.919 42.349 0 76.8 34.453 76.8 76.8V358.4z"/><path d="m256 187.733-51.2 34.134 51.2 51.2 51.2-51.2z"/></svg>',
}

export const zhHans = defineConfig({
  title: '心火计划',
  titleTemplate: ' 心火计划',
  description: '一个关于 Minecraft 的计划。',
  lang: 'zh-Hans',

  themeConfig: {
    socialLinks: [
      {
        icon: qq,
        link: 'tencent://groupwpa/?param=7b2267726f757055696e223a3433393133363637322c2274696d655374616d70223a313731393736363232352c22617574684b6579223a2274346b3279566e6443716f2f356a7a49785945704c3168784852753434726f564a333247386d6548675048434d656e303547737663474c567a2066394c51474b222c2261757468223a22227d',
        ariaLabel: '腾讯 QQ',
      },
      { icon: 'discord', link: 'https://discord.com/invite/Vb6eJ7e33X' },
      { icon: 'github', link: 'https://github.com/Heart-Fire-Project' },
    ],

    footer: {
      message: '由' + adjective + ' LittleChest 构建',
      copyright: '© ' + new Date().getFullYear() + ' 心火计划',
    },

    outline: {
      label: '总览',
    },

    langMenuLabel: '切换语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  'zh-hans': {
    translations: {
      button: {
        buttonText: '搜索',
        buttonAriaLabel: '请问您今天要来点什么？',
      },
      modal: {
        noResultsText: '无法找到相关结果，要不换个关键词试试？',
        resetButtonTitle: '清除查询条件',
        footer: {
          selectText: '选择',
          navigateText: '切换',
        },
      },
    },
  },
}
