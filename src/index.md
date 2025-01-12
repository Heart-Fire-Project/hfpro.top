---
layout: home
title: 心火计划
titleTemplate: false

hero:
  name: 心火计划
  tagline: 一个关于 Minecraft 的计划。
  image:
    src: /logo.png
    alt: 心火计划
  actions:
    - theme: brand
      text: 浏览作品
      link: "./maps"

features:
  - icon: 🤔
    title: 心火计划是什么？
    details: 心火计划是一个由 Minecraft 玩家组成的热情社区。我们的使命是通过翻译和共享，让每一个 Minecraft 的世界都能被大多数的玩家所理解和享受。
  - icon: 🧭
    title: 跨越语言障碍
    details: 我们的团队专注于翻译 Minecraft 地图，我们都致力于让这些世界的故事和环境能被更多的玩家所理解，让语言不再成为探索新世界的障碍。
  - icon: 💝
    title: 创造并分享优质的 Minecraft 体验
    details: 在心火计划中，我们深信创新和创造力是推动我们前进的动力。我们鼓励每一位成员将他们的想象力注入到 Minecraft 的世界中，创造出独一无二的地图，让每个玩家都能体验到不一样的冒险。
---

<script setup>
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'

import { VPTeamMembers } from 'vitepress/theme'
const mail = {svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 900 900"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>'}
const qq = {svg:'<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512"><path d="M454.943 278.922a67.951 67.951 0 0 0-28.276-17.002v-91.254C426.667 76.409 350.258 0 256 0S85.333 76.409 85.333 170.667v91.254a67.929 67.929 0 0 0-28.276 17.002c-26.66 26.662-26.66 69.883 0 96.544l28.276-28.276V358.4c0 47.502 19.418 90.453 50.736 121.392C130.925 489.387 128 500.35 128 512h256c0-11.65-2.925-22.613-8.071-32.208 31.319-30.937 50.737-73.89 50.737-121.392v-11.209l28.276 28.276c26.661-26.662 26.661-69.883.001-96.545M375.467 358.4c0 34.256-14.345 66.045-39.18 88.489a68.22 68.22 0 0 0-20.553-3.156c-25.709 0-48.09 14.218-59.733 35.215-11.643-20.997-34.024-35.215-59.733-35.215a68.153 68.153 0 0 0-20.553 3.156c-24.835-22.444-39.18-54.231-39.18-88.489V145.067c0-42.347 34.453-76.8 76.8-76.8 15.439 0 30.15 4.512 42.667 12.919 12.517-8.407 27.226-12.919 42.667-12.919 42.349 0 76.8 34.453 76.8 76.8V358.4z"/><path d="m256 187.733-51.2 34.134 51.2 51.2 51.2-51.2z"/></svg>'}
const members = [
  {
    avatar: 'https://littleskin.cn/avatar/138166',
    name: 'LittleChest',
    title: '卖萌',
    desc: "饿饿，饭饭~",
    links: [
      { icon: 'github', link: 'https://github.com/LittleChest' },
      { icon: 'discord', link: 'https://discord.com/users/894903639808831488' },
      { icon: qq, link: 'https://wpa.qq.com/wpa_jump_page?uin=2191038130', ariaLabel: '腾讯 QQ' },
      { icon: 'x', link: 'https://twitter.com/littlechestw' },
      { icon: mail, link: 'mailto:little@littlew.top', ariaLabel: '电子邮件' }
    ],
    sponsor: "https://afdian.net/a/LittleChest",
    actionText: '赞助'
  },
  {
    avatar: 'https://littleskin.cn/avatar/414892',
    name: 'Beiyao',
    title: '创始人/翻译',
    desc: "你可以叫我北遥/北药/beiyao",
    links: [
      { icon: 'github', link: 'https://github.com/beiyaohhhc' },
      { icon: 'discord', link: 'https://discord.com/users/844536118895706152' },
      { icon: qq, link: 'https://wpa.qq.com/wpa_jump_page?uin=2383615282', ariaLabel: '腾讯 QQ' },
      { icon: 'x', link: 'https://twitter.com/beiyao5200' },
      { icon: mail, link: 'mailto:beiyao.chen@qq.com', ariaLabel: '电子邮件' }
    ]
  },
  {
    avatar: 'https://littleskin.cn/avatar/263879',
    name: '1KYR',
    title: '翻译',
    links: [
      { icon: 'github', link: 'https://github.com/Seayay' },
      { icon: mail, link: 'mailto:1kyr@hfpro.top', ariaLabel: '电子邮件' }
    ]
  },
  {
    avatar: 'https://littleskin.cn/avatar/415151',
    name: 'HeimNad',
    title: '技术',
    desc: "心火计划最大闲人",
    links: [
      { icon: 'github', link: 'https://github.com/HeimNad' },
      { icon: qq, link: 'https://wpa.qq.com/wpa_jump_page?uin=5278626', ariaLabel: '腾讯 QQ' },
      { icon: mail, link: 'mailto:5278626@qq.com', ariaLabel: '电子邮件' }
    ],
    sponsor: "https://payme.heimnad.top",
    actionText: '赞助'
  },
  {
    avatar: 'https://littleskin.cn/avatar/364649',
    name: 'P1ge0nLee0',
    title: '打杂/翻译/宣发',
    desc: "咕咕咕，咕咕咕咕咕咕咕。",
    links: [
      { icon: 'github', link: 'https://github.com/GGHePinGG' },
      { icon: 'discord', link: 'https://discord.com/users/843090662350127114' },
      { icon: qq, link: 'https://wpa.qq.com/wpa_jump_page?uin=1434230923', ariaLabel: '腾讯 QQ' },
      { icon: 'x', link: 'https://twitter.com/IamHePingGe' },
      { icon: 'youtube', link: 'https://www.youtube.com/@P1ge0nLee0' },
      { icon: mail, link: 'mailto:me@lee0p1ge0n.top', ariaLabel: '电子邮件' }
    ]
  },
  {
    avatar: 'https://littleskin.cn/avatar/player/Rsrsr',
    name: 'Roser / Rsrsr',
    title: '美工/翻译/数据包/建筑/策划',
    desc: "彼岸双生 = 顶级劳工",
    links: [
      { icon: 'github', link: 'https://github.com/Roser7419' },
      { icon: qq, link: 'https://wpa.qq.com/wpa_jump_page?uin=3374287798', ariaLabel: '腾讯 QQ' },
      { icon: mail, link: 'mailto:Roser@7419.studio', ariaLabel: '电子邮件' }
    ]
  },
  {
    avatar: 'https://littleskin.cn/avatar/player/XieXiLin',
    name: 'uı̣ꓶı̣Xǝı̣X',
    title: '打杂/翻译',
    links: [
      { icon: 'github', link: 'https://github.com/XieXiLin2' },
      { icon: mail, link: 'mailto:support@xiexilin.com', ariaLabel: '电子邮件' }
    ]
  },
  {
    avatar: 'https://littleskin.cn/avatar/player/SmallSkrua',
    name: 'SmallSkrua',
    title: '策划',
    links: [
      { icon: 'github', link: 'https://github.com/SmallSkrua' },
      { icon: mail, link: 'mailto:1436924406@qq.com', ariaLabel: '电子邮件' }
    ]
  }
]

if (useData().isDark.value === true) {
  var giscus_theme = "dark"
} else {
  var giscus_theme = "light"
}
var giscus_theme
</script>
<br />
<br />
<br />
<br />

# 成员列表

<VPTeamMembers size="small" :members="members" />

<br />

# 赞助列表

[![赞助列表](https://afdian.hfpro.top/sponsor.svg)](https://afdian.net/a/HfPro)

# 讨论板

<Giscus
  repo="Heart-Fire-Project/.github"
  repoId="R_kgDOLY_Opg"
  mapping="number"
  term="1"
  reactionsEnabled="1"
  inputPosition="top"
  :theme=giscus_theme
  lang="zh-CN"
/>

或者，请向 [admin@hfpro.top](mailto:admin@hfpro.top) 发送邮件。
