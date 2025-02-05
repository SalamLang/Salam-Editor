import { useEffect, useState } from "react";
import Modal from "./Modal.jsx";
import Button from "../auth/Button.jsx";

// eslint-disable-next-line react/prop-types
const Setting = ({ show, callback }) => {
  const [saveModal, setSaveModal] = useState(false);

  useEffect(() => {
    setSaveModal(show);
  }, [show]);

  return (
    <>
      <Modal
        show={saveModal}
        callback={() => {
          setSaveModal(false);
          callback();
        }}
        className={"w-[600px]"}
      >
        <Button
          onClick={() => {
            if (document.documentElement.classList.contains("dark")) {
              document.documentElement.classList.remove("dark");
            } else {
              document.documentElement.classList.add("dark");
            }
          }}
        >
          تغییر مود
        </Button>
      </Modal>
    </>
  );
};

export default Setting;
