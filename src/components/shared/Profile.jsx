import Button from "../auth/Button.jsx";
import Svg from "./Svg.jsx";
import Line from "./Line.jsx";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Profile = () => {
  const [clicked, setClicked] = useState(false);
  const logout = () => {
    setClicked(true);
    toast.success("برای تایید مجدد کلیک کنید");
  };

  return (
    <>
      <div className="w-full h-full p-3">
        <Line title={"اطلاعات حساب"} className={"mt-2"} />
        <Button
          type={"button"}
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
