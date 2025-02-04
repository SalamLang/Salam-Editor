const Loading = () => {
  return (
    <>
      <div
        className={
          "w-full h-[100vh] z-[10000] fixed top-0 right-0 dark:bg-[#1C2128] bg-[#FFF1E9] flex justify-center items-center flex-col gap-4"
        }
      >
        <img src={"/images/favicon.svg"} alt="" className={"w-[80px]"} />
        <p className={"text-[#FF5C00] text-[20px] dark:text-white"}>
          منتظر بمانید...
        </p>
      </div>
    </>
  );
};

export default Loading;
