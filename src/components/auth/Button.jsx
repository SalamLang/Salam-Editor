import Svg from "../shared/Svg.jsx";

// eslint-disable-next-line react/prop-types
const Button = ({
  type,
  className,
  children,
  onClick,
  disabled,
  theme = "#fff",
}) => {
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
        {disabled === true ? <Svg name={"loading"} theme={theme} /> : children}
      </button>
    </>
  );
};

export default Button;
