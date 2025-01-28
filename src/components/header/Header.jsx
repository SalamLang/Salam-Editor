import Dropdown from "../shared/dropdown/Dropdown.jsx";
import DropdownItem from "../shared/dropdown/DropdownItem.jsx";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  let elm_output = {
    textContent: null,
  };

  let elm_error = {
    textContent: null,
  };

  // Read file
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.name.endsWith(".salam")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          toast.success("فایل وارد شد", {
            position: "bottom-right",
          });
          localStorage.setItem("code", e.target.result);
          navigate("/");
        };
        reader.readAsText(file);
      } else {
        toast.error("فرمت فایل وارد شده اشتباه است.", {
          position: "bottom-right",
        });
      }
    }
  };
  const openFilePicker = () => {
    document.getElementById("fileInput").click();
  };

  // Export file
  const handleSaveFile = () => {
    const fileName = "myFile.salam";
    const fileContent = localStorage.getItem("code") ?? "";
    const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
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
        <Dropdown title={"امکانات"}></Dropdown>
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
