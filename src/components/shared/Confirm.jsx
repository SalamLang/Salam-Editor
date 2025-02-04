import Modal from "./Modal.jsx";
import { useEffect, useState } from "react";
import Button from "../auth/Button.jsx";

const Confirm = ({ accept, reject, show, callback }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <>
      <Modal
        show={open}
        callback={() => {
          callback();
          reject();
        }}
        fixed={false}
        className={"w-[400px] !h-auto"}
      >
        <img
          src="/images/confirm.png"
          alt="confirm"
          className={"block mx-auto w-[110px]"}
        />
        <h1 className={"text-red-600 text-[18px] font-bold text-center -mt-2"}>
          از کار خودت مطمئنی؟
        </h1>

        <div
          className={"flex justify-center items-center gap-[10px] px-4 pb-4"}
        >
          <Button
            theme={"#E7000B"}
            className={
              "border-2 bg-transparent !text-red-600 hover:shadow-xl transition-all duration-300 !shadow-red-600/30 border-red-600 flex justify-center items-center gap-2"
            }
            onClick={() => {
              accept();
            }}
          >
            اره مطمئنم
          </Button>
          <Button
            theme={"#bababa"}
            className={
              "border-2 bg-transparent !text-gray-400/95 !border-gray-400/95 flex justify-center items-center gap-2 hover:shadow-xl transition-all duration-300 !shadow-gray-600/30"
            }
            onClick={() => {
              reject();
            }}
          >
            نه ولش کن!
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Confirm;
