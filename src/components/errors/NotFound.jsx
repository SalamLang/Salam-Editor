import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className={"flex h-[100vh] flex-col items-center justify-center"}>
        <h1
          className={
            "text-[200px] -mb-8 font-black text-[#FF5C00] text-center text-shadow"
          }
        >
          404
        </h1>
        <p className={"text-center text-[#FF5C00] text-[20px]"}>
          صفحه مورد نظر یافت نشد!
        </p>
        <Link
          to={"/"}
          className={
            "bg-[#FF5C00] block text-center w-[150px] mt-8 mx-auto text-white p-3 px-4 rounded-full"
          }
        >
          رفتن به ادیتور
        </Link>
      </div>
    </>
  );
};

export default NotFound;
