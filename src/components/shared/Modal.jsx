import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

const Modal = ({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types
  noOverlay = false,
  // eslint-disable-next-line react/prop-types
  show = false,
  // eslint-disable-next-line react/prop-types
  className,
  // eslint-disable-next-line react/prop-types
  callback,
  bars = true,
}) => {
  const [isOpen, setIsOpen] = useState(show);

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, display: "none" }}
            animate={{ opacity: 1, display: "inline-block" }}
            exit={{ opacity: 0, display: "none" }}
            className={
              "overlay backdrop-blur-sm fixed top-0 right-0 w-full h-[100vh] bg-black/30 z-[1001]"
            }
            onClick={() => {
              if (noOverlay === false) {
                setIsOpen(false);
                callback();
              }
            }}
            key={"overlay"}
          />
        )}
        {isOpen && (
          <div
            className={
              "fixed top-1/2 right-1/2 translate-x-1/2 z-[1002] -translate-y-1/2 flex justify-center items-center"
            }
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className={
                "bg-white rounded-[20px] overflow-hidden w-[300px] h-[400px] z-[10002]" +
                " " +
                className
              }
              key={"modal"}
            >
              {bars === true && (
                <button
                  className={
                    "absolute top-[10px] rounded overflow-hidden left-[10px]"
                  }
                  onClick={() => {
                    setIsOpen(false);
                    callback();
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width={"35"}
                    height={"35"}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect width="24" height="24"></rect>
                      <path
                        d="M7 17L16.8995 7.10051"
                        stroke="#545454"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M7 7.00001L16.8995 16.8995"
                        stroke="#545454"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </button>
              )}
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Modal;
