import {useState} from "react";
import {Controlled as CodeMirror} from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint";

const autocomplete = (editor) => {
    const cursor = editor.getCursor();
    const token = editor.getTokenAt(cursor);
    const start = token.start;
    const end = token.end;
    const currentWord = token.string;

    // Replace this array with your language's keywords
    const keywords = ["صفحه", "جعبه", "رنگ", "تمام"];

    const suggestions = keywords
        .filter((kw) => kw.startsWith(currentWord))
        .map((kw) => ({text: kw, displayText: kw}));

    return {
        list: suggestions,
        from: CodeMirror.Pos(cursor.line, start),
        to: CodeMirror.Pos(cursor.line, end),
    };
};

const Editor = () => {
    const [code, setCode] = useState("صفحه:\n    جعبه:\n        رنگ=\"ابی\"\n    تمام\nتمام");

    return (<>
        <main
            className={"w-[calc(100%-50px)] h-[calc(100vh-35px)] bg-[#FFF1E9] rounded-tr-[15px] rtl after:inline-block after:border-0 after:z-[-1] after:w-[30px] after:h-[30px] float-end after:bg-[#ffdecc] after:absolute relative after:top-0 after:right-0"}>
            <div className={"rounded-tr-[15px] overflow-hidden"}>
                <CodeMirror
                    value={code}
                    options={{
                        mode: "javascript", // Replace with your custom mode
                        lineNumbers: false,
                        extraKeys: {
                            "Ctrl-Space": (cm) => cm.showHint({hint: autocomplete}),
                        },
                    }}
                    onBeforeChange={(editor, data, value) => {
                        setCode(value);
                    }}
                />
            </div>
        </main>
    </>);
};

export default Editor;

// <pre>{JSON.stringify(handleTreeOutput(code), null, 2)}</pre>
