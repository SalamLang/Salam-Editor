import { useState } from "react";
import { Tooltip } from "react-tooltip";

const Share = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        className={
          "absolute top-1/2 -translate-y-1/2 left-[10px] flex items-center justify-center cursor-pointer"
        }
        data-tooltip-id="share"
        data-tooltip-content="اشتراک گذاری"
      >
        <button>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={"w-[20px]"}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M7.05025 1.53553C8.03344 0.552348 9.36692 0 10.7574 0C13.6528 0 16 2.34721 16 5.24264C16 6.63308 15.4477 7.96656 14.4645 8.94975L12.4142 11L11 9.58579L13.0503 7.53553C13.6584 6.92742 14 6.10264 14 5.24264C14 3.45178 12.5482 2 10.7574 2C9.89736 2 9.07258 2.34163 8.46447 2.94975L6.41421 5L5 3.58579L7.05025 1.53553Z"
                fill="#276EF6"
              ></path>
              <path
                d="M7.53553 13.0503L9.58579 11L11 12.4142L8.94975 14.4645C7.96656 15.4477 6.63308 16 5.24264 16C2.34721 16 0 13.6528 0 10.7574C0 9.36693 0.552347 8.03344 1.53553 7.05025L3.58579 5L5 6.41421L2.94975 8.46447C2.34163 9.07258 2 9.89736 2 10.7574C2 12.5482 3.45178 14 5.24264 14C6.10264 14 6.92742 13.6584 7.53553 13.0503Z"
                fill="#276EF6"
              ></path>
              <path
                d="M5.70711 11.7071L11.7071 5.70711L10.2929 4.29289L4.29289 10.2929L5.70711 11.7071Z"
                fill="#276EF6"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      <Tooltip
        id={"share"}
        className={"z-[1005] !rounded-[10px] !text-[14px]"}
      />
    </>
  );
};

export default Share;
