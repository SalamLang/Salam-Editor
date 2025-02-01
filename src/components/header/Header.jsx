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

const Header = () => {
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  const [openSave, setOpenSave] = useState(false);
  const params = useParams();

  return (
    <>
      <header
        className={
          "header relative bg-[#ffdecc] h-[40px] w-[100vw] flex justify-start items-center pr-[45px] sm:pr-[60px] gap-[10px]"
        }
      >
        <Dropdown title={"اسناد"}>
          <DropdownItem
            title={"باز کردن فایل"}
            callback={() => {
              openFilePicker();
            }}
          />
          {/*<hr className={"opacity-100 bg-gray-300 my-2 h-[1px] border-0"}/>*/}
          <DropdownItem
            title={"خروجی در فایل سلام"}
            callback={() => {
              handleSaveFile();
            }}
          />
          <DropdownItem
            title={"خروجی سایت"}
            callback={() => {
              window.downloadIframeHTML();
            }}
          />
          <DropdownItem
            title={"ذخیره کد"}
            callback={() => {
              setOpenSave(true);
            }}
          />
        </Dropdown>
        {login === false && (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className={
              "cursor-pointer text-[16px] px-2 h-full flex justify-center items-center hover:bg-[#ffc2a8] transition duration-200"
            }
          >
            ورود به حساب
          </button>
        )}
        {params.id && <Share />}
      </header>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        className={"hidden"}
        onChange={handleFileChange}
        accept={".salam"}
      />
      <SaveCode
        login={login}
        show={openSave}
        callback={() => {
          setOpenSave(false);
        }}
      />
    </>
  );
};

export default Header;
