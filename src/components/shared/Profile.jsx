import Button from "../auth/Button.jsx";
import Svg from "./Svg.jsx";
import Line from "./Line.jsx";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal.jsx";
import Confirm from "./Confirm.jsx";

const Profile = () => {
  const [clicked, setClicked] = useState(false);
  // const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);

  const logout = () => {
    setClicked(true);
    setConfirm(true);
  };

  const accept = () => {};

  const reject = () => {};

  return (
    <>
      <div className="w-full h-full p-3">
        <Line title={"اطلاعات حساب"} className={"mt-2"} />
        <Button
          type={"button"}
          theme={"#E7000B"}
          disabled={clicked}
          className={
            "border-2 bg-transparent !text-red-600 border-red-600 flex justify-center items-center gap-2"
          }
          onClick={logout}
        >
          <Svg name={"alert"} theme={"#E7000B"} />
          خروج از حساب
        </Button>
      </div>

      <Confirm
        show={confirm}
        callback={() => {
          setConfirm(false);
        }}
        accept={accept()}
        reject={reject()}
      />
    </>
  );
};

export default Profile;
