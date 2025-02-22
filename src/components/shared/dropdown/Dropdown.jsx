import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Dropdown = ({ children, title, callback }) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  // useEffect(() => {
  //   // if (open === true) {
  //   //   setTimeout(() => {
  //   //     document.addEventListener("click", (e) => {
  //   //       if (open === false) {
  //   //         setOpen(false);
  //   //         setHover(false);
  //   //       }
  //   //     });
  //   //   }, 500);
  //   // }
  // }, [callback, open]);

  return (
    <>
      <div className={"relative h-full"}>
        <button
          onClick={() => {
            setOpen(!open);
            setHover(true);
          }}
          className={
            "cursor-pointer text-[16px] dark:text-white/95 px-2 h-full flex justify-center items-center dark:hover:bg-[#22272E] dark:hover:text-white hover:bg-[#ffc2a8] transition duration-200" +
            (hover === true && " bg-[#ffc2a8] dark:bg-[#22272E]")
          }
        >
          {title}
        </button>

        <div
          className={
            (!open && "hidden ") +
            " absolute bg-[#ffe9db]/50 dark:border-gray-700 dark:text-white/80 dark:bg-gray-800 backdrop-blur rounded-[10px] z-[1000] top-[40px] border border-orange-300 p-2" +
            (localStorage?.getItem("lang") === "fa" ? " right-0 " : " left-0 ")
          }
        >
          {children}
        </div>

        <div
          className={
            (!open && "hidden ") +
            " overlay w-full h-[100vh] bg-transparent fixed top-0 right-0 z-[999]"
          }
          onClick={() => {
            setOpen(!open);
            setHover(false);
            callback();
          }}
        ></div>
      </div>
    </>
  );
};

export default Dropdown;
