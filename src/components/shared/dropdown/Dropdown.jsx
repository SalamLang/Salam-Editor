// eslint-disable-next-line react/prop-types
const Dropdown = ({ children, title }) => {

    return (<>
        <div className={""}>
            <button className={"cursor-pointer rounded p-2 hover:bg-[#ffdecc]"}>{ title }</button>
            { children }
        </div>
    </>)
}

export default Dropdown