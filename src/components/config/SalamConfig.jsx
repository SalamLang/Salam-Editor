import { useEffect, useState } from "react";
import Run from "../run/Run.jsx";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const SalamConfig = () => {
  const [isReady, setIsReady] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.code = "";

    window.Module = {
      noInitialRun: true,
      onRuntimeInitialized: () => {
        console.log(
          "%c2.salam loaded success",
          `
          padding: 3px 10px;
          border-radius: 5px;
          color: white;
          background-color: #00BC1C;
          font-family: estedad, sans-serif;
          font-size: 15px;
          `,
        );

        if (location.pathname === "/run" || location.pathname === "/") {
          setIsReady(true);
          window.isReady = true;
        } else {
          window.isReady = false;
        }
      },
      print: (text) => {
        window.code += text;
        console.log(
          "%cprint-Log => " + text,
          `
          padding: 3px 10px;
          border-radius: 5px;
          color: white;
          background-color: #7200BE;
          font-family: estedad, sans-serif;
          font-size: 15px;
          `,
        );
      },
      printErr: (text) => {
        console.error(
          "%cprint-Log => " + text,
          `
          padding: 3px 10px;
          border-radius: 5px;
          color: white;
          background-color: #FF0000;
          font-family: estedad, sans-serif;
          font-size: 15px;
          `,
        );

        // if (text.startsWith("Lexer Error")) {
        //   toast.error("ارور در خوانش کد!", {
        //     position: "bottom-center",
        //   });
        // } else if (text.toString().trim().startsWith("Parser Error")) {
        //   toast.error("ارور در خوانش کد!", {
        //     position: "bottom-center",
        //   });
        // }
        // else {
        //   toast.error(text, {
        //     position: "bottom-center",
        //   });
        // }
      },
    };
  }, []);

  return <>{isReady && location.pathname === "/run" && <Run level={1} />}</>;
};

export default SalamConfig;
