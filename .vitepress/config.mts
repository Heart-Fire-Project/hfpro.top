import { defineConfig } from "vitepress";
import { en, search as enSearch } from "./en";
import { zhHans, search as zhHansSearch } from "./zh-Hans";

export default defineConfig({
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  cleanUrls: true,
  rewrites: {
    "index.md": "index.md",
    ":file(.*)/index.md": ":file/index.md",
    ":file(.*).md": ":file/index.md",
  },
  srcDir: "./src",
  sitemap: {
    hostname: "https://hfpro.top",
  },
  locales: {
    en: { label: "English", ...en },
    root: { label: "简体中文", ...zhHans },
  },
  themeConfig: {
    logo: "/logo.png",
    externalLinkIcon: false,
    aside: "left",
    outline: false,
    docFooter: {
      prev: false,
      next: false,
    },
    search: {
      provider: "local",
      options: {
        locales: { ...zhHansSearch, ...enSearch },
      },
    },
  },
});
