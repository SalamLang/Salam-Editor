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
        }
      },
      print: (text) => {
        console.log("print-Log:", text);
      },
      printErr: (text) => {
        console.log("printErr-Error:", text);
      },
    };
  }, []);

  return <>{isReady && <Run level={1} />}</>;
};

export default SalamConfig;
