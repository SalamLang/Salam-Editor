import { useState } from "react";
import { Tooltip } from "react-tooltip";
import Modal from "../shared/Modal.jsx";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Share = () => {
  const [openModal, setOpenModal] = useState(false);
  const params = useParams();

  const copyAddress = () => {
    navigator.clipboard
      .writeText("https://editor.salamlang.ir/" + params?.id)
      .then(() => {
        toast.success("کپی شد!", {
          position: "bottom-center",
        });
      });
  };

  return (
    <>
      <div
        className={
          "absolute top-1/2 -translate-y-1/2 left-[10px] flex items-center justify-center cursor-pointer"
        }
        data-tooltip-id="share"
        data-tooltip-content="اشتراک گذاری"
      >
        <button
          onClick={() => {
            setOpenModal(true);
          }}
        >
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
      <Modal
        show={openModal}
        className={"!w-[330px] h-auto pb-8"}
        callback={() => {
          setOpenModal(false);
        }}
      >
        <img
          src="/images/share.png"
          className={"w-[100px] mx-auto mt-[30px]"}
          alt=""
        />
        <h1 className={"text-center text-[19px] mt-3 font-bold"}>
          این لینک رو میتونی استفاده کنی
        </h1>
        <p
          className={
            "text-center text-gray-400 text-[13px] w-[200px] mt-3 mx-auto"
          }
        >
          برای به اشتراک گذاشتن لینک زیر به دوستان خود ارسال کنید
        </p>
        <div
          className={
            "w-[85%] h-[45px] p-[3px] mt-4 rounded-[15px] border mx-auto flex justify-center items-center"
          }
        >
          <div
            className={
              "w-full h-full rounded-[10px] bg-[#e6efff] flex items-center px-3 cursor-pointer justify-between flex-row-reverse"
            }
            data-tooltip-id="copy"
            data-tooltip-content="کپی"
          >
            <span className={"text-[#2b71f6]"} dir={"ltr"}>
              editor.salamlang.ir/{params?.id.substring(0, 6)}...
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={"w-[25px]"}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
                  stroke="#2b71f6"
                  strokeWidth="1.5"
                ></path>
                <path
                  d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
                  stroke="#2b71f6"
                  strokeWidth="1.5"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </Modal>
      <Tooltip
        id={"copy"}
        className={"z-[1005] !text-[14px] !rounded-[10px]"}
      />
    </>
  );
};

export default Share;
