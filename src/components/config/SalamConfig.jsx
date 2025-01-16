import { useEffect } from "react";
import { runSalam } from "../../services/SalamService";

const SalamConfig = () => {
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
                      font-family: estedad, sansserif;
                      font-size: 18px;
                    `,
        );
        window.isReady = true;
      },
      print: (text) => {
        console.log("print-Log:", text);
      },
      printErr: (text) => {
        console.log("printErr-Error:", text);
      },
    };

    window.salam = "salam";
  }, []);

  return null;
};

export default SalamConfig;
