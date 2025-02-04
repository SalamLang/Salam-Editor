import { useEffect, useRef, useState } from "react";
import "../../scripts/codemirror.js";
import EditorService from "../../services/EditorService.js";
import { useLocation } from "react-router-dom";
import Runner from "./Runner.jsx";
import SalamService from "../../services/SalamService.js";
import useTags from "../../hooks/useTags.jsx";
import useAttr from "../../hooks/useAttr.jsx";
import useStyle from "../../hooks/useStyle.jsx";

const Editor = () => {
  const [levelTwo, setLevelTwo] = useState(false);
  const [levelThere, setLevelThere] = useState(false);
  const location = useLocation();

  let iframe = useRef();
  let error = useRef();
  let output = useRef();

  // const tags = useTags();
  // const attr = useAttr();
  // const style = useStyle();

  const tags = true;
  const attr = true;
  const style = true;

  useEffect(() => {
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

    if (tags && attr && style) {
      EditorService(
        () => {
          // return [...tags, ...attr, ...style];
          return [];
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
    }
  }, [location]);

  return (
    <>
      <main
        className={
          "editor-container w-full h-[calc(100vh-42px)] dark:text-white dark:bg-[#22272E] bg-[#FFF1E9] rtl flex " +
          (levelThere && " flex-col")
        }
      >
        <div
          id="editor"
          className={
            (levelTwo && " !w-[50vw] h-full") +
            (levelThere && " !w-full h-[calc(50vh-17px)]") +
            " w-full h-full overflow-auto"
          }
        ></div>
        <div
          className={
            (levelTwo && " !w-[50vw] h-[calc(100vh-35px)]") +
            (levelThere && " !w-full h-[calc(50vh-17px)] ") +
            " w-0 bg-white relative overflow-auto"
          }
        >
          <iframe ref={iframe} className={"w-full h-full bg-white"}></iframe>
          <pre id="error" ref={error} className={"hidden"}></pre>
          <pre id="output" ref={output} className={"hidden"}></pre>
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
