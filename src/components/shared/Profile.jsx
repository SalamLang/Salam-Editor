import Button from "../auth/Button.jsx";
import Svg from "./Svg.jsx";

const Profile = () => {
  return (
    <>
      <div className="w-full h-full p-3">
        <Button
          type={"button"}
          className={
            "border-2 bg-transparent !text-red-600 border-red-600 flex justify-center items-center gap-2"
          }
        >
          <Svg name={"alert"} theme={"#E7000B"} />
          خروج از حساب
        </Button>
      </div>
    </>
  );
};

export default Profile;
