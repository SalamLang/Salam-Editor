import Button from "../auth/Button.jsx";
import Svg from "./Svg.jsx";
import Line from "./Line.jsx";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    setClicked(true);
    setTimeout(() => {
      localStorage.removeItem("token");
      toast.success("از حساب خارج شدید.");
      navigate("/");
      setClicked(false);
    }, 2000);
  };

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
    </>
  );
};

export default Profile;
