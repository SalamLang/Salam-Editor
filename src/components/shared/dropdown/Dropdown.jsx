import {useState} from "react";

// eslint-disable-next-line react/prop-types
const Dropdown = ({ children, title }) => {
    const [open, setOpen] = useState(false);

    return (<>
        <div className={"relative"}>
            <button onClick={() => {
                setOpen(!open);
            }} className={"cursor-pointer text-[16px] px-2 py-4 hover:bg-[#ffc2a8] transition duration-200"}>{ title }</button>

            <div className={(!open && "hidden ") + " absolute bg-[#ffe9db]/50 backdrop-blur rounded-[10px] z-[1000] top-[40px] right-0 border border-orange-300 p-2"}>
                { children }
            </div>

            <div className={(!open && "hidden ") + " overlay w-full h-[100vh] bg-transparent fixed top-0 right-0 z-[999]"} onClick={() => {
                setOpen(!open)
            }}></div>
        </div>
    </>)
}

export default Dropdown