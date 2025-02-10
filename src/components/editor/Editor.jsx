import { useEffect, useRef, useState } from "react";
import "../../scripts/codemirror.js";
import EditorService from "../../services/EditorService.js";
import { useLocation, useNavigate } from "react-router-dom";
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

  const tags = useTags();
  const attr = useAttr();
  const style = useStyle();

  useEffect(() => {
    const editor = document.querySelector("#editor");
    if (editor) {
      editor.innerHTML = "";
    }

    if (localStorage?.getItem("code") === null) {
      localStorage.setItem(
        "code",
        `صفحه:
    جهت = «راست به چپ» 
    رنگ پس زمینه = «سفید»
    قلم:
      نام = «استعداد»
      منبع = «https://editor.salamlang.ir/fonts/Estedad-Light.ttf»
    تمام

    سراسری:
      نام قلم=«استعداد»
    تمام

    جعبه:   
      عرض=«100%»   
      ارتفاع=60 
      رنگ پس زمینه=«سفید»
      سایه جعبه=«0 0 15px -10px black» 
      گردی=20 
      مرز=«1px solid lightgrey»
      محتوا=«به سلام خوش اومدی»
      قرارگیری=«فلکس»
      توجیه محتوا=«مرکز»
      تراز محتوا=«مرکز»
      اندازه قلم=22
    تمام
    جعبه:
      قرارگیری=«فلکس»
      تراز محتوا=«مرکز»
      توجیه محتوا=«مرکز»
      فاصله بالا=20
      تصویر:
        عرض=120
        منبع=«https://editor.salamlang.ir/images/favicon.svg»
      تمام
    تمام
    جعبه:
      قرارگیری=«فلکس»
      تراز محتوا=«مرکز»
      توجیه محتوا=«مرکز»
      فاصله بالا=20
      پاراگراف:
        وزن قلم=700
        اندازه قلم=25
        رنگ=«نارنجی تیره» 
        محتوا=«سلام اولین زبان برنامه برنامه نویسی فارسی!!»
      تمام
    تمام
تمام`,
      );
    }

    if (tags && attr && style) {
      EditorService(
        () => {
          return [...tags, ...attr, ...style];
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

    if (window.isReady !== true) {
      let intId = setInterval(() => {
        if (window.isReady === true) {
          console.log(window.isReady);
          SalamService(
            localStorage?.getItem("code"),
            iframe.current,
            error.current,
            output.current,
          );
          clearInterval(intId);
        }
      }, 1000);
    }
  }, [attr, location, style, tags]);

  return (
    <>
      <main
        className={
          "editor-container w-full h-[calc(100vh-42px)] dark:text-white dark:bg-[#1E1F22] bg-[#FFF1E9] rtl flex " +
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
