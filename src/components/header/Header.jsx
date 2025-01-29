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
          "header relative bg-[#ffdecc] h-[35px] w-[100vw] flex justify-start items-center pr-[75px] gap-[10px]"
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
        </Dropdown>
        <Dropdown title={"امکانات"}>
          {login === false && (
            <DropdownItem
              title={"ورود به حساب"}
              callback={() => {
                navigate("/login");
              }}
            />
          )}
          <DropdownItem
            title={"ذخیره کد"}
            callback={() => {
              setOpenSave(true);
            }}
          />
        </Dropdown>
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
