import { useEffect, useState } from "react";
import Modal from "./Modal.jsx";
import Button from "../auth/Button.jsx";
import { changeTheme } from "./Feautres/Features.js";
import Line from "./Line.jsx";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Setting = ({ show, callback }) => {
  const [saveModal, setSaveModal] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    setSaveModal(show);
  }, [show]);

  const handleLang = (e) => {
    let lang = e.target.id;

    localStorage.setItem("lang", lang);

    i18n.changeLanguage(lang);
    document.dir = lang === "fa" ? "rtl" : "ltr";

    let doc = document.documentElement;

    doc.classList.remove("fa");
    doc.classList.remove("en");

    doc.classList.add(lang);

    toast.success(
      t("success"),
      localStorage?.getItem("theme") === "dark"
        ? {
            style: {
              background: "#333",
              color: "#fff",
            },
          }
        : "",
    );

    navigate("/");
  };

  return (
    <>
      <Modal
        show={saveModal}
        bars={false}
        callback={() => {
          setSaveModal(false);
          callback();
        }}
        className={"w-[600px] p-3"}
      >
        <Line title={t("appearance")} className={"mt-0 mb-4"} />
        <div className={"flex items-center gap-[20px]"}>
          <span>{t("theme")}</span>
          <label form="switch" className="toggle">
            <input
              type="checkbox"
              className="input"
              id="switch"
              defaultChecked={localStorage?.getItem("theme") === "dark"}
              onChange={(e) => {
                changeTheme();
                toast.success(
                  t("success"),
                  localStorage?.getItem("theme") === "dark"
                    ? {
                        style: {
                          background: "#333",
                          color: "#fff",
                        },
                      }
                    : "",
                );
              }}
            />
            <div className="icon icon--moon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="32"
                height="32"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="icon icon--sun">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="32"
                height="32"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
              </svg>
            </div>
          </label>
        </div>

        <Line title={t("advanced")} className={"mb-4"} />
        <div className="flex justify-start items-center gap-[20px]">
          <span>{t("changeLang")}</span>
          <div className={"flex justify-start items-center gap-[20px]"}>
            <button
              className={
                "w-[100px] h-[40px] border-2 dark:border-gray-500 border-dashed rounded-[10px] " +
                (localStorage?.getItem("lang") === "en" &&
                  " bg-[#FF5B00] text-white border-[#FF8B00]")
              }
              id={"en"}
              onClick={handleLang}
            >
              English
            </button>
            <button
              className={
                "w-[100px] h-[40px] border-2 dark:border-gray-500 border-dashed rounded-[10px] " +
                (localStorage?.getItem("lang") === "fa" &&
                  " bg-[#FF5B00] text-white border-[#FF8B00]")
              }
              id={"fa"}
              onClick={handleLang}
            >
              فارسی
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Setting;
