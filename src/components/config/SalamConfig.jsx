import { useEffect, useState } from "react";
import Run from "../run/Run.jsx";
import { useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import Svg from "../shared/Svg.jsx";

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
        // } else {
        // toast.error(text, {
        //   position: "bottom-center",
        // });
        // }

        if (!text.startsWith("program exited")) {
          toast.error("seyed", {
            duration: 50000,
          });
          toast.custom(
            <>
              <div
                className={
                  "flex items-center text-[#363636] leading-[1.3] will-change-transform shadow-[0_3px_10px_rgba(0,0,0,0.1),0_3px_3px_rgba(0,0,0,0.05)] max-w-[350px] pointer-events-auto px-2.5 py-2 rounded-lg bg-white gap-3"
                }
              >
                <div className="go2534082608 shrink-0"></div>
                {text}
                <Svg name={"copy"} />
              </div>
            </>,
            {
              position: "bottom-center",
            },
          );
        }
      },
    };

    window.downloadIframeHTML = () => {
      let iframe = document.querySelector("iframe");
      let iframeDocument =
        iframe.contentDocument || iframe.contentWindow.document;
      let htmlContent = iframeDocument.documentElement.outerHTML;

      let blob = new Blob([htmlContent], { type: "text/html" });
      let link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "output.html";
      link.click();
    };
  }, [location]);

  return <>{isReady && location.pathname === "/run" && <Run level={1} />}</>;
};

export default SalamConfig;
