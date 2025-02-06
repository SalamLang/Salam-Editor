import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      language: "Language",
    },
  },
  fa: {
    translation: {
      welcome: "خوش آمدید",
      language: "زبان",
    },
  },
  ar: {
    translation: {
      welcome: "أهلاً وسهلاً",
      language: "اللغة",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
