import { useEffect, useRef, useState } from "react";
import "../../scripts/codemirror.js";
import EditorService from "../../services/EditorService.js";
import { useLocation } from "react-router-dom";
import Runner from "./Runner.jsx";
import SalamService from "../../services/SalamService.js";

const Editor = () => {
  const location = useLocation();
  const [levelTwo, setLevelTwo] = useState(false);
  const [levelThere, setLevelThere] = useState(false);

  let iframe = useRef();
  let error = useRef();
  let output = useRef();

  useEffect(() => {
    // handleOpen();
    const editor = document.querySelector("#editor");
    if (editor) {
      editor.innerHTML = "";
    }

    setTimeout(() => {
      SalamService(
        localStorage?.getItem("code"),
        iframe.current,
        error.current,
        output.current,
      );
    }, 300);

    EditorService(
      () => {
        return [
          {
            label: "صفحه",
            type: "keyword",
            apply: "صفحه" + ":\n\nتمام",
          },
          {
            label: "محتوا",
            type: "keyword",
            apply: "محتوا" + "=«»",
          },
          {
            label: "دکمه",
            type: "variable",
            apply: "دکمه" + ":\n\nتمام",
            // info: "این تگ برای ایجاد یک دکمه به کار میرود.",
          },
        ];
      },
      (updateText) => {
        if (updateText !== localStorage?.getItem("code")) {
          SalamService(
            updateText,
            iframe.current,
            error.current,
            output.current,
          );
        }
      },
    );
  }, [location]);

  return (
    <>
      <main
        className={
          "editor-container w-[calc(100%-50px)] h-[calc(100vh-35px)] bg-[#FFF1E9] rounded-tr-[15px] rtl after:inline-block after:border-0 after:z-[-1] after:w-[30px] after:h-[30px] float-end after:bg-[#ffdecc] after:absolute relative after:top-0 after:right-0 flex " +
          (levelThere && " flex-col")
        }
      >
        <div
          id="editor"
          className={
            (levelTwo && " !w-[50vw] h-full") +
            (levelThere && " !w-full h-[calc(50vh-17px)]") +
            " w-full rounded-tr-[15px] overflow-auto transition-all duration-300"
          }
        ></div>
        <div
          className={
            (levelTwo && " !w-[50vw] h-[calc(100vh-35px)]") +
            (levelThere && " !w-full h-[calc(50vh-17px)]") +
            " w-0 bg-white transition-all duration-300 relative overflow-auto"
          }
        >
          <iframe ref={iframe} className={"w-full h-full bg-white"}></iframe>
          <pre id="error" ref={error} className={"hidden"}></pre>
          <pre id="output" ref={output} className={"hidden"}></pre>
          <div
            className={
              (!levelTwo && "!w-0 ") +
              " resize w-[12px] h-full transition-all duration-300 cursor-col-resize absolute top-0 right-[-6px]"
            }
          ></div>
        </div>
      </main>

      <Runner
        callback={(level) => {
          if (level === 2) {
            setLevelTwo(!levelTwo);
            setLevelThere(false);
          } else if (level === 3) {
            setLevelThere(!levelThere);
            setLevelTwo(false);
          }
        }}
      />
    </>
  );
};

export default Editor;
