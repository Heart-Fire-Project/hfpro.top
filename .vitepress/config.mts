import { defineConfig } from 'vitepress'
// import { en, search as enSearch } from "./en";
import { zhHans, search as zhHansSearch } from './zh-Hans'

export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  cleanUrls: true,
  srcDir: './src',
  sitemap: {
    hostname: 'https://hfpro.dev',
  },
  locales: {
    root: { label: '简体中文', ...zhHans },
    // en: { label: "English", ...en },
  },
  themeConfig: {
    logo: '/logo.png',
    externalLinkIcon: false,
    aside: 'left',
    outline: false,
    docFooter: {
      prev: false,
      next: false,
    },
    search: {
      provider: 'local',
      options: {
        locales: { ...zhHansSearch /* , ...enSearch */ },
      },
    },
  },
})
