import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      success: "Done successfully!",
      login: "Login",
      files: "Files",
      openSalamFile: "import salam file",
      exportSalamFile: "export in salam file",
      exportSite: "export site",
      saveCode: "save code",
      setting: "setting",
    },
  },
  fa: {
    translation: {
      success: "با موفقیت انجام شد!",
      login: "ورود به حساب",
      files: "اسناد",
      openSalamFile: "باز کردن فایل سلام",
      exportSalamFile: "خروجی در فایل سلام",
      exportSite: "خروجی سایت",
      saveCode: "ذخیره کد",
      setting: "تنظیمات",
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
