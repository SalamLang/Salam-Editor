import Dropdown from "../shared/dropdown/Dropdown.jsx";
import DropdownItem from "../shared/dropdown/DropdownItem.jsx";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import LoginContext from "../../context/LoginContext.jsx";
import {
  handleFileChange,
  handleSaveFile,
  openFilePicker,
} from "../shared/Features.js";
import Modal from "../shared/Modal.jsx";
import Input from "../auth/Input.jsx";
import Label from "../auth/Label.jsx";
import Button from "../auth/Button.jsx";

const Header = () => {
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);
  const [saveModal, setSaveModal] = useState(false);

  const saveCode = () => {
    if (!login) {
      toast.error("وارد حساب خود شوید.", {
        position: "bottom-center",
      });
      return null;
    }

    setSaveModal(true);
  };

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
              saveCode();
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

      {login === true && (
        <Modal
          show={saveModal}
          className={"w-[400px] h-auto pb-4 p-3"}
          callback={() => {
            setSaveModal(false);
          }}
        >
          <h1 className={"text-[23px] text-center font-bold"}>ذخیره کد</h1>
          <Label form={"title"} required={true}>
            عنوان کد:
            <Input className={"mt-1"} name={"title"} autoFocus={true} />
          </Label>
          <Button>ذخیره کد</Button>
        </Modal>
      )}
    </>
  );
};

export default Header;
