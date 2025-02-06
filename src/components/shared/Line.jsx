// eslint-disable-next-line react/prop-types
const Line = ({ title, className }) => {
  return (
    <>
      <div className={"flex items-center gap-[10px] my-6 " + className}>
        <span className="text-nowrap font-bold text-black text-[18px] pr-4 relative before:block before:w-[12px] before:h-[12px] before:bg-[#FF5C00] dark:text-white/90  before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 before:right-0">
          {title}
        </span>
        <hr className="opacity-100 border-0 h-[1px] w-full bg-gray-300 dark:bg-gray-600" />
      </div>
    </>
  );
};

export default Line;
