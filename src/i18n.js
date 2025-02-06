import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      success: "Done Successfully!",
      login: "Login",
      files: "Files",
      openSalamFile: "Import Salam File",
      exportSalamFile: "Export In Salam File",
      exportSite: "Export Site",
      saveCode: "Save Code",
      setting: "Setting",
      appearance: "Appearance",
      advanced: "Advanced",
      theme: "Theme",
      changeLang: "Change Language",
      codeTitle: "Code Title",
      mobileNumber: "Mobile",
      sendCode: "Send Code",
      matchMobileValidation: "Mobile Is Not Incorrect",
      sendOtp: "OTP Code Send Successfully",
      loginToSalam: "Login To Salam",
      verify: "Verify",
      otpCode: "Otp Code",
      requireOtp: "Otp Is Required",
      problem: "We Have A Problem! Try Again",
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
      appearance: "ظاهری",
      advanced: "پیشرفته",
      theme: "سبک روشنایی",
      changeLang: "تغییر زبان",
      codeTitle: "عنوان کد",
      mobileNumber: "شماره موبایل",
      sendCode: "ارسال کد",
      matchMobileValidation: "شماره موبایل معتبر نیست",
      sendOtp: "کد ورود با موفقیت ارسال شد.",
      loginToSalam: "ورود به سلام",
      verify: "تایید",
      otpCode: "کد ورود",
      requireOtp: "کد ورود الزامی است.",
      problem: "مشکلی پیش امده! مجدد تلاش کنید.",
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
