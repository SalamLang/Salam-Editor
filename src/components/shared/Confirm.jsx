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
        className={"w-[500px] h-[250px]"}
      ></Modal>
    </>
  );
};

export default Confirm;
