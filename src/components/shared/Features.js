import { toast } from "react-toastify";
import Modal from "./Modal.jsx";

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

export const openFilePicker = () => {
  document.getElementById("fileInput").click();
};

export const handleSaveFile = () => {
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
