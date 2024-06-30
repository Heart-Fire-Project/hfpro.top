import { defineConfig, type DefaultTheme } from "vitepress";
let adjectives: Array<string> = ["Lovely", "Great", "Baka"];
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

const qq = {
  svg: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512"><path d="M454.943 278.922a67.951 67.951 0 0 0-28.276-17.002v-91.254C426.667 76.409 350.258 0 256 0S85.333 76.409 85.333 170.667v91.254a67.929 67.929 0 0 0-28.276 17.002c-26.66 26.662-26.66 69.883 0 96.544l28.276-28.276V358.4c0 47.502 19.418 90.453 50.736 121.392C130.925 489.387 128 500.35 128 512h256c0-11.65-2.925-22.613-8.071-32.208 31.319-30.937 50.737-73.89 50.737-121.392v-11.209l28.276 28.276c26.661-26.662 26.661-69.883.001-96.545M375.467 358.4c0 34.256-14.345 66.045-39.18 88.489a68.22 68.22 0 0 0-20.553-3.156c-25.709 0-48.09 14.218-59.733 35.215-11.643-20.997-34.024-35.215-59.733-35.215a68.153 68.153 0 0 0-20.553 3.156c-24.835-22.444-39.18-54.231-39.18-88.489V145.067c0-42.347 34.453-76.8 76.8-76.8 15.439 0 30.15 4.512 42.667 12.919 12.517-8.407 27.226-12.919 42.667-12.919 42.349 0 76.8 34.453 76.8 76.8V358.4z"/><path d="m256 187.733-51.2 34.134 51.2 51.2 51.2-51.2z"/></svg>',
};

export const en = defineConfig({
  title: "Heart Fire Project",
  titleTemplate: " Heart Fire Project",
  description: "A project about Minecraft",
  lang: "en",

  themeConfig: {
    socialLinks: [
      { icon: "discord", link: "https://discord.com/invite/Vb6eJ7e33X" },
      {
        icon: qq,
        link: "tencent://groupwpa/?param=7b2267726f757055696e223a3433393133363637322c2274696d655374616d70223a313731393736363232352c22617574684b6579223a2274346b3279566e6443716f2f356a7a49785945704c3168784852753434726f564a333247386d6548675048434d656e303547737663474c567a2066394c51474b222c2261757468223a22227d",
        ariaLabel: "Tencent QQ",
      },
      { icon: "github", link: "https://github.com/Heart-Fire-Project" },
    ],

    nav: [
      {
        text: "Blog",
        link: "https://blog.hfpro.top",
      },
    ],

    footer: {
      message: "Build by " + adjective + " LittleChest",
      copyright: "© " + new Date().getFullYear() + " Heart Fire Project",
    },

    outline: {
      label: "Overview",
    },

    langMenuLabel: "Switch Language",
    returnToTopLabel: "Back to top",
    sidebarMenuLabel: "Menu",
    darkModeSwitchLabel: "Theme",
    lightModeSwitchTitle: "Switch to light mode",
    darkModeSwitchTitle: "Switch to dark mode",
  },
});

export const search: DefaultTheme.LocalSearchOptions["locales"] = {
  en: {
    translations: {
      button: {
        buttonText: "Search",
        buttonAriaLabel: "What can I get for you today?",
      },
      modal: {
        noResultsText: "Unable to find relevant results, how about trying a different keyword?",
        resetButtonTitle: "Clear the search criteria",
        footer: {
          selectText: "Select",
          navigateText: "Switch",
        },
      },
    },
  },
};
