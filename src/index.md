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
      link: './maps'

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

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

<style scoped>
  .vp-doc a {
    text-decoration: unset;
  }
  .hfpro.fill {
    height: 10vw;
  }
  .vp-doc h1 {
    margin-top: 1em;
  }
</style>

<script setup>
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'

import { VPTeamMembers } from 'vitepress/theme'

import mail from '../.vitepress/icon/mail.svg?raw'
import qq from '../.vitepress/icon/qq.svg?raw'

const members = [
  {
    avatar: 'https://littleskin.cn/avatar/414892',
    name: 'Beiyao',
    title: '创始人/翻译',
    desc: "你可以叫我北遥/北药/beiyao",
    links: [
      { icon: 'github', link: 'https://github.com/beiyaohhhc' },
      { icon: 'discord', link: 'https://discord.com/users/844536118895706152' },
      { icon: {svg: qq}, link: 'https://wpa.qq.com/wpa_jump_page?uin=2383615282', ariaLabel: '腾讯 QQ' },
      { icon: 'x', link: 'https://x.com/beiyao5200' },
      { icon: {svg: mail}, link: 'mailto:beiyao.chen@qq.com', ariaLabel: '电子邮件' }
    ]
  },
  {
    avatar: 'https://littleskin.cn/avatar/263879',
    name: '1KYR',
    title: '翻译',
    links: [
      { icon: 'github', link: 'https://github.com/Seayay' },
      { icon: {svg: mail}, link: 'mailto:1kyr@hfpro.top', ariaLabel: '电子邮件' }
    ]
  },
  {
    avatar: 'https://littleskin.cn/avatar/537190',
    name: 'Roser / Rsrsr',
    title: '美工/翻译/数据包/建筑/策划',
    desc: "彼岸双生 = 顶级劳工",
    links: [
      { icon: 'github', link: 'https://github.com/R7sr' },
      { icon: {svg: qq}, link: 'https://wpa.qq.com/wpa_jump_page?uin=3374287798', ariaLabel: '腾讯 QQ' },
      { icon: {svg: mail}, link: 'mailto:Roser7419@outlook.com', ariaLabel: '电子邮件' }
    ]
  },
  {
    avatar: 'https://littleskin.cn/avatar/415151',
    name: 'HeimNad',
    title: '技术',
    desc: "心火计划最大闲人",
    links: [
      { icon: 'github', link: 'https://github.com/HeimNad' },
      { icon: {svg: qq}, link: 'https://wpa.qq.com/wpa_jump_page?uin=5278626', ariaLabel: '腾讯 QQ' },
      { icon: {svg: mail}, link: 'mailto:5278626@qq.com', ariaLabel: '电子邮件' }
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
      { icon: {svg: qq}, link: 'https://wpa.qq.com/wpa_jump_page?uin=1434230923', ariaLabel: '腾讯 QQ' },
      { icon: 'x', link: 'https://x.com/IamHePingGe' },
      { icon: 'youtube', link: 'https://www.youtube.com/@P1ge0nLee0' },
      { icon: {svg: mail}, link: 'mailto:me@lee0p1ge0n.top', ariaLabel: '电子邮件' }
    ]
  },
  {
    avatar: 'https://littleskin.cn/avatar/player/XieXiLin',
    name: 'uı̣ꓶı̣Xǝı̣X',
    title: '打杂/翻译',
    links: [
      { icon: 'github', link: 'https://github.com/XieXiLin2' },
      { icon: {svg: mail}, link: 'mailto:support@xiexilin.com', ariaLabel: '电子邮件' }
    ]
  },
  {
    avatar: 'https://littleskin.cn/avatar/player/SmallSkrua',
    name: 'SmallSkrua',
    title: '策划',
    links: [
      { icon: 'github', link: 'https://github.com/SmallSkrua' },
      { icon: {svg: mail}, link: 'mailto:1436924406@qq.com', ariaLabel: '电子邮件' }
    ]
  },
  {
    avatar: 'https://littleskin.cn/avatar/138166',
    name: 'LittleChest',
    title: '卖萌',
    desc: "饿饿，饭饭~",
    links: [
      { icon: 'github', link: 'https://github.com/LittleChest' },
      { icon: 'discord', link: 'https://discord.com/users/894903639808831488' },
      { icon: {svg: qq}, link: 'https://wpa.qq.com/wpa_jump_page?uin=2191038130', ariaLabel: '腾讯 QQ' },
      { icon: 'x', link: 'https://x.com/littlechestw' },
      { icon: {svg: mail}, link: 'mailto:little@littlew.top', ariaLabel: '电子邮件' }
    ],
    sponsor: "https://afdian.com/a/LittleChest",
    actionText: '赞助'
  }
]

if (useData().isDark.value === true) {
  var giscus_theme = "dark"
} else {
  var giscus_theme = "light"
}
var giscus_theme
</script>

<div class="hfpro fill" />

# 成员列表

<VPTeamMembers size="small" :members="members" />

<br />

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
