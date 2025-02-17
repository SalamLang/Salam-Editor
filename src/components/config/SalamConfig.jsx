import {useContext, useEffect, useState} from "react";
import Run from "../run/Run.jsx";
import {useLocation} from "react-router-dom";
import {toast} from "react-hot-toast";
import Svg from "../shared/Svg.jsx";
import TrueContext from "../../context/TrueContext.jsx";
import {useTranslation} from "react-i18next";

// eslint-disable-next-line react/prop-types
const ToastMessage = ({text}) => {
    return (
        <>
            <div
                className="flex items-center dark:bg-[#2E2E3E] dark:text-white text-[#363636] leading-[1.3] will-change-transform shadow-[0_3px_10px_rgba(0,0,0,0.1),0_3px_3px_rgba(0,0,0,0.05)] max-w-[350px] pointer-events-auto px-2.5 py-2 cursor-pointer rounded-lg bg-white gap-3"
                onClick={() => {
                    navigator.clipboard.writeText(text).then(() => {
                        toast.success("کپی شد!");
                    });
                }}
            >
                <div className="go2534082608 shrink-0"></div>
                {text}
                <Svg name={"copy"}/>
            </div>
        </>
    );
};

const SalamConfig = () => {
    const [isReady, setIsReady] = useState(false);
    const location = useLocation();
    const {isTrue, setIsTrue} = useContext(TrueContext);
    const {t} = useTranslation();

    useEffect(() => {
        window.code = "";

        let id;

        toast.remove(id);

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

                setIsReady(true);
                window.isReady = true;
            },
            print: (text) => {
                toast.remove(id);
                setIsTrue(true);
                console.log(isTrue);
                window.true = true;
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
                setIsTrue(false);
                window.true = false;
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

                toast.remove(id ?? "0");

                id = toast.custom(<ToastMessage text={text}/>, {
                    position: "bottom-center",
                    duration: 5000,
                });
            }
        };

        window.downloadIframeHTML = (isTrue) => {
            if (isTrue === false) {
                toast.error(
                    t("codeError"),
                    localStorage?.getItem("theme") === "dark"
                        ? {
                            style: {
                                background: "#333",
                                color: "#fff",
                            },
                        }
                        : "",
                );
            }

            if (isTrue === true) {
                let iframe = document.querySelector("iframe");
                let iframeDocument =
                    iframe.contentDocument || iframe.contentWindow.document;
                let htmlContent = iframeDocument.documentElement.outerHTML;

                let blob = new Blob([htmlContent], {type: "text/html"});
                let link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "output.html";
                link.click();
            }
        };
    }, [location]);

    return <>{isReady && location.pathname === "/run" && <Run level={1}/>}</>;
};

export default SalamConfig;
