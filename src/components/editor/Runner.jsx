import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import useDevice from "../../hooks/useDevice.jsx";

// eslint-disable-next-line react/prop-types
const Runner = ({ callback }) => {
  const [hidden, setHidden] = useState(true);
  const device = useDevice();

  function debounce(cb, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  const debouncedChange = debounce(() => {
    setHidden(true);
  }, 3000);

  const runOutput = (level = 1) => {
    const level1 = () => {
      window.open("/run", "_blank");
    };

    const level2 = () => callback(2);

    const level3 = () => callback(3);

    if (level === 1) {
      level1();
    } else if (level === 2) {
      level2();
    } else if (level === 3) {
      level3();
    } else {
      console.error("Level not found");
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      e.preventDefault();
      setHidden(false);

      debouncedChange();
    });

    document.addEventListener("keydown", function (event) {
      if (event.ctrlKey && event.key.toLowerCase() === "b") {
        event.preventDefault();

        runOutput(1);
      }
    });

    if (device !== undefined && device === "mobile") {
      runOutput(3);
    } else if (device !== undefined && device === "pc") {
      runOutput(2);
    }
  }, [device]);

  return (
    <>
      <div
        className={
          "shadow-orange dark:border-gray-500 fixed top-[75px] transition-all duration-1000 z-[998] bg-white dark:bg-[#22272E] w-fit h-[40px] rounded-[10px] border flex justify-end items-center px-3 gap-1 flex-row-reverse " +
          (hidden && " !opacity-0 pointer-events-none") +
          (localStorage?.getItem("lang") === "fa"
            ? " left-[70px] "
            : " right-[70px] ")
        }
      >
        <button
          className={"cursor-pointer"}
          data-tooltip-id="level-1"
          data-tooltip-content="اجرا در صفحه دیگر"
          onClick={() => {
            runOutput(1);
          }}
        >
          <svg
            width="42"
            height="36"
            viewBox="-8 -7 42 36"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="fill-transparent stroke-orange-500 -ml-[6px] rtl:-mr-[10px] ltr:-mr-[9px]"
          >
            <path
              d="M15 19h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a1 1 0 0 0-1 1"
              fill="none"
            ></path>
            <path d="M12 17V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2Z"></path>
          </svg>
        </button>
        <button
          className={"cursor-pointer "}
          data-tooltip-id="level-2"
          data-tooltip-content="اجرا به صورت عمودی"
          onClick={() => {
            runOutput(2);
          }}
        >
          <svg
            width="42"
            height="36"
            viewBox="-8 -7 42 36"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="fill-transparent stroke-orange-500 rtl:-mr-[9px] ltr:-mr-[5px]"
          >
            <path
              d="M12 3h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9"
              fill="none"
            ></path>
            <path d="M3 17V5a2 2 0 0 1 2-2h7a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2Z"></path>
          </svg>
        </button>
        <button
          className={"cursor-pointer "}
          data-tooltip-id="level-3"
          data-tooltip-content="اجرا به صورت افقی"
          onClick={() => {
            runOutput(3);
          }}
        >
          <svg
            width="42"
            height="36"
            viewBox="-8 -7 42 36"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="fill-transparent stroke-orange-500 rtl:-mr-[7px] ltr:-mr-[9px] ltr:-ml-[9px]"
          >
            <path d="M23 11V3H3v8h20Z" strokeWidth="0"></path>
            <path
              d="M23 17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2ZM22 11H4"
              fill="none"
            ></path>
          </svg>
        </button>
        <Tooltip id="level-1" className={"!text-[12px] !rounded-[10px]"} />
        <Tooltip id="level-2" className={"!text-[12px] !rounded-[10px]"} />
        <Tooltip id="level-3" className={"!text-[12px] !rounded-[10px]"} />
      </div>
    </>
  );
};

export default Runner;
