import {useEffect} from "react";
import "../../scripts/codemirror.js"
import EditorService from "../../services/EditorService.js";
import {useLocation} from "react-router-dom";

const Editor = () => {
    let location = useLocation();

    useEffect(() => {
        EditorService((updateText) => {
            console.log(updateText)
        })
    }, [location])

    return (<>
        <main
            className={"editor-container w-[calc(100%-50px)] h-[calc(100vh-35px)] bg-[#FFF1E9] rounded-tr-[15px] rtl after:inline-block after:border-0 after:z-[-1] after:w-[30px] after:h-[30px] float-end after:bg-[#ffdecc] after:absolute relative after:top-0 after:right-0"}>
            <div id="editor" className={"rounded-tr-[15px] overflow-hidden"}></div>
        </main>
    </>);
};

export default Editor;
