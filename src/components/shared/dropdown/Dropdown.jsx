// eslint-disable-next-line react/prop-types
const Dropdown = ({ children, title }) => {

    return (<>
        <div className={"relative"}>
            <button className={"cursor-pointer rounded-[8px] text-[15px] px-2 py-[2px] hover:bg-[#ffc2a8] transition duration-200"}>{ title }</button>

            <div className={"absolute bg-[#ffe9db]/50 backdrop-blur rounded-[15px] z-[1000] top-[26px] right-0 border border-orange-300 p-2"}>
                { children }
            </div>
        </div>
    </>)
}

export default Dropdown