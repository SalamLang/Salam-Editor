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
      ></Modal>
    </>
  );
};

export default Setting;
