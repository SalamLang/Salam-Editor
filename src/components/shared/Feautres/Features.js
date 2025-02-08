import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import TrueContext from "../../../context/TrueContext.jsx";

export const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    if (file.name.endsWith(".salam")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        toast.success("فایل وارد شد", {
          position: "bottom-right",
        });
        localStorage.setItem("code", e.target.result);
      };
      reader.readAsText(file);
    } else {
      toast.error("فرمت فایل وارد شده اشتباه است.", {
        position: "bottom-right",
      });
    }
  }
};

export const openFilePicker = () => {
  document.getElementById("fileInput").click();
};

export const handleSaveFile = (isTrue) => {
  if (isTrue === false) {
    toast.error("کد دارای ارور است.");
  }

  if (isTrue === true) {
    const fileName = "myFile.salam";
    const fileContent = localStorage.getItem("code") ?? "";
    const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  }
};

export const changeTheme = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};
