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

  const captureLint = (args) => {
    console.log("Capture Lint: ", args);

    elm_output.textContent = "";
    elm_error.textContent = "";

    try {
      const exitCode = callMain(args);

      if (exitCode !== 0) {
        return null;
      } else {
        return elm_output.textContent;
      }
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      return null;
    }
  };

  const runLint = () => {
    if (!window.isReady) {
      return;
    }

    const code = localStorage?.getItem("code");
    if (!code) {
      return;
    }

    const args = ["lint", "code", code];

    const res = captureLint(args);
    if (res !== null) {
      localStorage.setItem("code", res);
    }
  };

  const lintCode = () => {
    runLint();
    navigate("/");
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
          <DropdownItem
            title={"تمیز کردن کد"}
            callback={() => {
              lintCode();
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
