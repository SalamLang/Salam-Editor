// eslint-disable-next-line react/prop-types
const Label = ({ type, className, children, onClick, disabled }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={
          "rounded-[10px] bg-[#FF5C00] w-full h-[45px] mt-4 text-white hover:opacity-90 transition-all duration-300 " +
          className
        }
      >
        {children}
      </button>
    </>
  );
};

export default Label;
