// eslint-disable-next-line react/prop-types
const DropdownItem = ({ title, callback }) => {

    return (<>
        <button className={"text-nowrap !text-[14px] p-1.5 pr-3 hover:bg-[#276EF6] transition duration-200 rounded-[5px] hover:text-white min-w-[200px] flex justify-start items-center"} onClick={() => {
            callback()
        }}>{ title }</button>
    </>)
}

export default DropdownItem