import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LangConfig = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    let lang = localStorage?.getItem("lang");

    if (!lang) {
      localStorage.setItem("lang", "fa");
    }

    i18n.changeLanguage(lang);
    document.dir = localStorage.getItem("lang") === "fa" ? "rtl" : "ltr";

    let doc = document.documentElement;
    doc.classList.remove("fa");
    doc.classList.remove("en");

    doc.classList.add(lang);
  }, [i18n, location]);
};

export default LangConfig;
