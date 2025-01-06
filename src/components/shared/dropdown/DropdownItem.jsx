const DropdownItem = ({ title, callback }) => {

    return (<>
        <button className={"text-nowrap text-[15px] p-1.5 pr-4 hover:bg-[#276EF6] transition duration-200 rounded-[10px] hover:text-white min-w-[200px] flex justify-start items-center"} onClick={() => {
            callback()
        }}>{ title }</button>
    </>)
}

export default DropdownItem