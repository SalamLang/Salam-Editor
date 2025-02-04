import Modal from "./Modal.jsx";
import { useEffect, useState } from "react";

const Confirm = ({ accept, reject, show, callback }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <>
      <Modal
        show={show}
        callback={() => {
          callback();
        }}
        fixed={false}
        className={"w-[450px] h-[250px]"}
      >
        <h1
          className={"text-red-600 text-[20px] font-bold text-center mt-[20px]"}
        >
          از کار خود مطمئنید؟
        </h1>
      </Modal>
    </>
  );
};

export default Confirm;
