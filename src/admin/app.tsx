import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    light: {
      colors: {
        primary500: "#5577ff",
        primary600: "#5577ff",
        primary700: "#5577ff",
        buttonPrimary500: "#fe9c17",
        buttonPrimary600: "#fe9c17",
      },
    },
    dark: {
      colors: {
        primary600: "#5577ff",
        primary500: "#5577ff",
        primary700: "#5577ff",
        buttonPrimary500: "#fe9c17",
        buttonPrimary600: "#5577ff",
      },
    },
    tutorials: false,
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title":
          "Shuvo Baroi website admin dashboard",

        "app.components.LeftMenu.navbrand.workplace": "Testing",

        "Auth.form.welcome.title": "Welcome to ShuvoBaroi!",

        "Auth.form.welcome.subtitle": "Login to your account",

        "Settings.profile.form.section.experience.interfaceLanguageHelp":
          "Preference changes will apply only to you.",
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
