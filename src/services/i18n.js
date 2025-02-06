import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../lang/en.json";
import faTranslations from "../lang/fa.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    fa: { translation: faTranslations },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
