import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      success: "Done successfully!",
      login: "Login",
      files: "Files",
    },
  },
  fa: {
    translation: {
      success: "با موفقیت انجام شد!",
      login: "ورود به حساب",
      files: "اسناد",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
