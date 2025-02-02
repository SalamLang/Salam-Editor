import { useEffect, useState } from "react";
import Modal from "./Modal.jsx";

const Confirm = ({ title }) => {
  const [confirmed, setConfirmed] = useState(null);

  useEffect(() => {}, []);
};

const ConfirmLayout = () => {
  return (
    <>
      <Modal show={true} className={"w-[400px] h-[350px]"}></Modal>
    </>
  );
};

export { ConfirmLayout };

export default Confirm;
