import { useEffect } from "react";
import { runSalam } from "../../services/SalamService";

const SalamConfig = () => {
  useEffect(() => {

    window.Module = {
      noInitialRun: true,
      onRuntimeInitialized: () => {
        console.log("onRuntimeInitialized - Salam loaded successfully");
        window.isReady = true;

        const code = localStorage.getItem("code", "").toString().trim();

        if (code !== "") {
          runSalam(code);
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

  return null;
};

export default SalamConfig;
