import {useEffect} from "react";
import "../../scripts/codemirror.js"
import EditorService from "../../services/EditorService.js";
import Draggable from "react-draggable";

const salamAdd = () => {
    const script = document.createElement('script');
    script.src = 'salam-wa.js';
    script.onload = () => {
        console.log('Salam module reloaded.');
    };

    document.body.appendChild(script);
}

const Editor = () => {
    useEffect(() => {
        // salamAdd();
        EditorService(() => {
            return [{
                label: "صفحه", type: "keyword", apply: "صفحه" + ":\n\nتمام"
            }, {
                label: "دکمه",
                type: "variable",
                apply: "دکمه" + ":\n\nتمام",
                info: "این تگ برای ایجاد یک دکمه به کار میرود.",
            }]
        }, (updateText) => {
            // SalamService(updateText);
        })
    }, [])

    return (<>
        <main
            className={"editor-container w-[calc(100%-50px)] h-[calc(100vh-35px)] bg-[#FFF1E9] rounded-tr-[15px] rtl after:inline-block after:border-0 after:z-[-1] after:w-[30px] after:h-[30px] float-end after:bg-[#ffdecc] after:absolute relative after:top-0 after:right-0"}>
            <div id="editor" className={"rounded-tr-[15px] overflow-auto h-[calc(100vh-35px)]"}></div>
        </main>
        <Draggable>
            <div className={"window"}></div>
        </Draggable>
    </>);
};

export default Editor;