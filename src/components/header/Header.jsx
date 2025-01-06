import Dropdown from "../shared/dropdown/Dropdown.jsx";
import DropdownItem from "../shared/dropdown/DropdownItem.jsx";

const Header = () => {

    return (<>
        <header className={"header bg-[#ffdecc] h-[35px] w-[100vw] flex justify-start items-center pr-[75px] gap-[20px]"}>
            <Dropdown title={"اسناد"}>
                <DropdownItem title={"باز کردن فایل"} />
                <DropdownItem title={"باز کردن فایل"} />
            </Dropdown>
        </header>
    </>)
}

export default Header