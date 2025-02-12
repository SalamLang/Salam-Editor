import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      success: "Done Successfully!",
      login: "Login",
      files: "Files",
      openSalamFile: "Open a Salam file",
      exportSalamFile: "Export to Salam file",
      exportSite: "Export site",
      saveCode: "Save code",
      setting: "Setting",
      appearance: "Appearance",
      advanced: "Advanced",
      theme: "Theme",
      changeLang: "Change language",
      codeTitle: "Code title",
      mobileNumber: "Mobile",
      sendCode: "Send Code",
      matchMobileValidation: "Mobile is not incorrect",
      sendOtp: "OTP code send successfully",
      loginToSalam: "Login to Salam",
      verify: "Verify",
      otpCode: "OTP Code",
      requireOtp: "OTP is Required",
      problem: "We have a problem! Try again",
      name: "Name",
      family: "Family",
      nameRequire: "Name cannot be empty",
      familyRequire: "Family cannot be empty",
      saved: "Save Successfully.",
      codeError: "Your code have a bug.",
      salam: "Salam, the first Persian language in the world!",
      salamDescription: `Have you ever worked with Salam? Do you know how cool it is? You might say, what does it matter to me, but let me tell you about the design? are you a writer are you a teacher student? Would you like to have a place where you can build anything you want? Do you want to make your own website? Or programming at all? What's better than being able to code in your mother tongue? Faster and better! It is easier to learn.`,
      salam2: "Are you ready to travel to a new world?",
      salamDescription2: `Hello, a new trace! No one has seen anything like it
                <br />
                So why don't you do your job sooner? It's time for immigrants!
                <br />
                But this time to hello, not to...`,
    },
  },
  fa: {
    translation: {
      success: "با موفقیت انجام شد!",
      login: "ورود به حساب",
      files: "اسناد",
      openSalamFile: "باز کردن فایل سلام",
      exportSalamFile: "خروجی فایل سلام",
      exportSite: "خروجی سایت",
      saveCode: "ذخیره برنامه",
      setting: "تنظیمات",
      appearance: "ظاهری",
      advanced: "پیشرفته",
      theme: "سبک روشنایی",
      changeLang: "تغییر زبان",
      codeTitle: "عنوان برنامه",
      mobileNumber: "شماره موبایل",
      sendCode: "ارسال کد",
      matchMobileValidation: "شماره موبایل معتبر نیست",
      sendOtp: "کد ورود با موفقیت ارسال شد.",
      loginToSalam: "ورود به سلام",
      verify: "تایید",
      otpCode: "کد ورود",
      requireOtp: "کد ورود الزامی است.",
      problem: "مشکلی پیش امده! مجدد تلاش کنید.",
      name: "نام",
      family: "نام خانوادگی",
      nameRequire: "نام نباید خالی باشد.",
      familyRequire: "نام خانوادگی نباید خالی باشد.",
      saved: "ذخیره شد.",
      codeError: "کد دارای خروجی است.",
      salam: "سلام اولین زبان فارسی جهان!",
      salamDescription: `تا حالا با سلام کار کردی؟ میدونی چقدر خفنه؟ شاید بگی اخه به چه
                درد من میخوره ولی بزار بهت بگم طراحی؟ نویسنده ای؟ معلمی؟ دانش
                اموزی؟ دوست داری یه جایی باشه هرچی خواستی بسازی؟ دوست داری سایت
                شخصیتو بسازی؟ یا اصلا برنامه نویسی؟ چی ازین بهتر که بتونی با
                زبان مادریت کد بزنی؟ هم سریع تره هم بهتره دیگه! تازه یادگیریش هم
                راحت تره.`,
      salam2: "اماده ای به یه دنیای جدید سفر کنی؟",
      salamDescription2: `سلام یه دنبای جدیده! که هیچکی مثلشو ندیده
                <br />
                پس چرا زودتر کاراتو نمیکنی؟ وقت وقت مهاجراته ها!
                <br />
                اما اینبار به سلام نه به ...`,
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
