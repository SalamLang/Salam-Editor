const Loading = () => {
  return (
    <>
      <div
        className={
          "w-full h-[100vh] flex justify-center items-center flex-col gap-4"
        }
      >
        <img src={"/images/favicon.svg"} alt="" className={"w-[80px]"} />
        <p className={"text-[#FF5C00] text-[20px]"}>منتظر بمانید...</p>
      </div>
    </>
  );
};

export default Loading;
