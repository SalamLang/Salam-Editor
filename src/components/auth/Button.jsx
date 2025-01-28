// eslint-disable-next-line react/prop-types
const Button = ({ type, className, children, onClick, disabled }) => {
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
        {disabled === true ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={"w-[40px] mx-auto animate-spin"}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4.97498 12H7.89998"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M11.8 5V8"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M18.625 12H15.7"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M11.8 19V16"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M6.97374 16.95L9.04203 14.8287"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M6.97374 7.05001L9.04203 9.17133"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M16.6262 7.05001L14.5579 9.17133"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M16.6262 16.95L14.5579 14.8287"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
        ) : (
          children
        )}
      </button>
    </>
  );
};

export default Button;
