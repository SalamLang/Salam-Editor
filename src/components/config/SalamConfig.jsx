import { useEffect, useState } from "react";
import Run from "../run/Run.jsx";
import { useLocation } from "react-router-dom";

const SalamConfig = () => {
  const [isReady, setIsReady] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.Module = {
      noInitialRun: true,
      onRuntimeInitialized: () => {
        console.log(
          "%c2.salam loaded success",
          `
          padding: 10px;
          border-radius: 10px;
          color: white;
          background-color: #00BC1C;
          font-family: estedad, sans-serif;
          font-size: 18px;
          `,
        );

        if (location.pathname === "/run") {
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
        console.log("printErr-Error:", text);
      },
    };
  }, []);

  return <>{isReady && <Run level={1} />}</>;
};

export default SalamConfig;
