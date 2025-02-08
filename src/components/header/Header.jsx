import Dropdown from "../shared/dropdown/Dropdown.jsx";
import DropdownItem from "../shared/dropdown/DropdownItem.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import LoginContext from "../../context/LoginContext.jsx";
import {
  handleFileChange,
  handleSaveFile,
  openFilePicker,
} from "../shared/Feautres/Features.js";
import SaveCode from "../shared/Feautres/SaveCode.jsx";
import Share from "./Share.jsx";
import Setting from "../shared/Setting.jsx";
import { useTranslation } from "react-i18next";
import TrueContext from "../../context/TrueContext.jsx";
import { toast } from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);
  const { t } = useTranslation();
  const { isTrue } = useContext(TrueContext);
  const [openSave, setOpenSave] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const params = useParams();
  return (
    <>
      <header
        className={
          "header relative bg-[#ffdecc] dark:bg-[#3C3F41] border-gray-600 h-[42px] w-[100vw] flex justify-start items-center px-[45px] sm:px-[60px] gap-[10px]"
        }
      >
        <Dropdown title={t("files")}>
          <DropdownItem
            title={t("openSalamFile")}
            callback={() => {
              openFilePicker();
            }}
          />
          {/*<hr className={"opacity-100 bg-gray-300 my-2 h-[1px] border-0"}/>*/}
          <DropdownItem
            title={t("exportSalamFile")}
            callback={() => {
              handleSaveFile(isTrue, t);
            }}
          />
          <DropdownItem
            title={t("exportSite")}
            callback={() => {
              window.downloadIframeHTML(isTrue);
            }}
          />
          <DropdownItem
            title={t("saveCode")}
            callback={() => {
              if (isTrue === false) {
                toast.error(
                  t("codeError"),
                  localStorage?.getItem("theme") === "dark"
                    ? {
                        style: {
                          background: "#333",
                          color: "#fff",
                        },
                      }
                    : "",
                );
              } else {
                setOpenSave(true);
              }
            }}
          />
          <DropdownItem
            title={t("setting")}
            callback={() => {
              setOpenSetting(true);
            }}
          />
        </Dropdown>
        {login === false && (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className={
              "cursor-pointer text-[16px] dark:text-white/95 px-2 h-full dark:hover:bg-[#22272E] dark:hover:text-white flex justify-center items-center hover:bg-[#ffc2a8] transition duration-200"
            }
          >
            {t("login")}
          </button>
        )}
        {params.id && <Share />}
      </header>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        className={"hidden"}
        onChange={(e) => {
          handleFileChange(e);
          navigate("/");
        }}
        accept={".salam"}
      />
      <SaveCode
        login={login}
        show={openSave}
        callback={() => {
          setOpenSave(false);
        }}
      />
      <Setting
        show={openSetting}
        callback={() => {
          setOpenSetting(false);
        }}
      />
    </>
  );
};

export default Header;
