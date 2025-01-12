import { useEffect, useState } from "react";
import "../../scripts/codemirror.js";
import EditorService from "../../services/EditorService.js";
import { useLocation } from "react-router-dom";
import Runner from "./Runner.jsx";

const salamAdd = () => {
  const script = document.createElement("script");
  script.src = "salam-wa.js";
  script.onload = () => {
    console.log("Salam module reloaded.");
  };

  document.body.appendChild(script);
};

const Editor = () => {
  const [size, setSize] = useState({ width: 300, height: 200 });
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const location = useLocation();

  useEffect(() => {
    const editor = document.querySelector("#editor");
    if (editor) {
      editor.innerHTML = "";
    }

    // salamAdd();
    EditorService(
      () => {
        return [
          {
            label: "صفحه",
            type: "keyword",
            apply: "صفحه" + ":\n\nتمام",
          },
          {
            label: "دکمه",
            type: "variable",
            apply: "دکمه" + ":\n\nتمام",
            info: "این تگ برای ایجاد یک دکمه به کار میرود.",
          },
        ];
      },
      (updateText) => {
        // SalamService(updateText);
      },
    );
  }, [location]);

  return (
    <>
      <main
        className={
          "editor-container w-[calc(100%-50px)] h-[calc(100vh-35px)] bg-[#FFF1E9] rounded-tr-[15px] rtl after:inline-block after:border-0 after:z-[-1] after:w-[30px] after:h-[30px] float-end after:bg-[#ffdecc] after:absolute relative after:top-0 after:right-0"
        }
      >
        <div
          id="editor"
          className={"rounded-tr-[15px] overflow-auto h-[calc(100vh-35px)]"}
        ></div>
      </main>

      <Runner />
      {/*<Rnd*/}
      {/*    size={{ width: size.width, height: size.height }}*/}
      {/*    position={{ x: position.x, y: position.y }}*/}
      {/*    onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}*/}
      {/*    onResizeStop={(e, direction, ref, delta, position) => {*/}
      {/*        setSize({*/}
      {/*            width: ref.offsetWidth,*/}
      {/*            height: ref.offsetHeight,*/}
      {/*        });*/}
      {/*        setPosition(position);*/}
      {/*    }}>*/}
      {/*    <div className={"window"}>*/}
      {/*        */}
      {/*    </div>*/}
      {/*</Rnd>*/}
    </>
  );
};

export default Editor;
