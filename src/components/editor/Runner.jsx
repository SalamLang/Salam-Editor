import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";

const Runner = ({ callback }) => {
  const [hidden, setHidden] = useState(true);

  const navigate = useNavigate();

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

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      e.preventDefault();
      setHidden(false);

      debouncedChange();
    });
  }, []);

  const runOutput = (level = 1) => {
    const level1 = () => {
      window.open("/run", "_blank");
    };

    const level2 = () => {
      callback();
    };

    const level3 = () => {};

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

  return (
    <>
      <div
        className={
          (hidden && "opacity-0 ") +
          " shadow-orange fixed top-[75px] transition-all duration-1000 left-[70px] z-[998] bg-white w-fit h-[40px] rounded-[10px] border flex justify-end items-center px-3 gap-1 flex-row-reverse"
        }
      >
        <button
          className={"cursor-pointer "}
          data-tooltip-id="level-1"
          data-tooltip-content="اجرا در صفحه دیگر"
          onClick={() => {
            runOutput(1);
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className={"w-[20px]"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"
                fill="#276EF6"
              ></path>
            </g>
          </svg>
        </button>
        <button
          className={"cursor-pointer "}
          data-tooltip-id="level-2"
          data-tooltip-content="اجرا به صورت دوگانه"
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
            className="fill-sky-100 stroke-sky-500 -mr-[7px]"
          >
            <path
              d="M12 3h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9"
              fill="none"
            ></path>
            <path d="M3 17V5a2 2 0 0 1 2-2h7a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2Z"></path>
          </svg>
        </button>
        <Tooltip id="level-1" className={"!text-[12px] !rounded-[10px]"} />
        <Tooltip id="level-2" className={"!text-[12px] !rounded-[10px]"} />
      </div>
    </>
  );
};

export default Runner;
