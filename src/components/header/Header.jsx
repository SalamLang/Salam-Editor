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
} from "../shared/Feautres/Features.js";
import Modal from "../shared/Modal.jsx";
import Input from "../auth/Input.jsx";
import Label from "../auth/Label.jsx";
import Button from "../auth/Button.jsx";
import Form from "../auth/Form.jsx";

const Header = () => {
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);
  const [saveModal, setSaveModal] = useState(false);
  const [saveData, setSaveData] = useState({
    title: null,
  });

  const saveCode = (e) => {};

  const handleChange = (e) => {
    setSaveData({
      ...saveData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <>
      <header
        className={
          "header bg-[#ffdecc] h-[35px] w-[100vw] flex justify-start items-center pr-[75px] gap-[10px]"
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
              if (!login) {
                toast.error("وارد حساب خود شوید.", {
                  position: "bottom-center",
                });
                return null;
              }

              setSaveModal(true);
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
          <Form onSubmit={saveCode}>
            <Label form={"title"} required={true}>
              عنوان کد:
              <Input
                className={"mt-1"}
                name={"title"}
                onInput={handleChange}
                autoFocus={true}
              />
            </Label>
            <Button>ذخیره کد</Button>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default Header;
