import Button from "../auth/Button.jsx";
import Svg from "./Svg.jsx";

const Profile = () => {
  return (
    <>
      <div className="w-full h-full p-3">
        <div className="flex items-center gap-[10px] my-6">
          <span className="text-nowrap font-bold text-black text-[18px] pr-4 relative before:block before:w-[12px] before:h-[12px] before:bg-[#F8981C] before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 before:right-0">
            اطلاعات وارد کننده
          </span>
          <hr className="opacity-100 border-0 h-[1px] w-full bg-gray-300 " />
        </div>
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
