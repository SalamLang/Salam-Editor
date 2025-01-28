import Dropdown from "../shared/dropdown/Dropdown.jsx";
import DropdownItem from "../shared/dropdown/DropdownItem.jsx";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "../../context/LoginContext.jsx";
import {
  handleFileChange,
  handleSaveFile,
  openFilePicker,
  saveCode,
} from "../shared/Features.js";

const Header = () => {
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  return (
    <>
      <header
        className={
          "header bg-[#ffdecc] h-[35px] w-[100vw] flex justify-start items-center pr-[75px] gap-[20px]"
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
              saveCode(login);
            }}
          />
        </Dropdown>
      </header>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        className={"hidden"}
        onChange={handleFileChange}
        accept={".salam"}
      />
    </>
  );
};

export default Header;
