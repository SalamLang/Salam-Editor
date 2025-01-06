import Dropdown from "../shared/dropdown/Dropdown.jsx";
import DropdownItem from "../shared/dropdown/DropdownItem.jsx";
import {useState} from "react";
import {toast} from "react-toastify";

const Header = () => {
    const [fileContent, setFileContent] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.name.endsWith(".salam")) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setFileContent(e.target.result);
                    toast.success("فایل وارد شد" , {
                        position: "bottom-right",
                    })
                };
                reader.readAsText(file);
            } else {
                toast.error("فرمت فایل وارد شده اشتباه است." , {
                    position: "bottom-right",
                })
            }
        }
    };

    const openFilePicker = () => {
        document.getElementById("fileInput").click();
    };


    return (<>
        <header
            className={"header bg-[#ffdecc] h-[35px] w-[100vw] flex justify-start items-center pr-[75px] gap-[20px]"}>
            <Dropdown title={"اسناد"}>
                <DropdownItem title={"باز کردن فایل"} callback={() => {
                    openFilePicker()
                }}/>
            </Dropdown>
        </header>
        <input
            type="file"
            id="fileInput"
            style={{display: "none"}}
            className={"hidden"}
            onChange={handleFileChange}
            accept={".salam"}
        />
    </>)
}

export default Header