const Input = ({
  // eslint-disable-next-line react/prop-types
  onInput,
  // eslint-disable-next-line react/prop-types
  id,
  // eslint-disable-next-line react/prop-types
  name,
  // eslint-disable-next-line react/prop-types
  type,
  // eslint-disable-next-line react/prop-types
  placeholder,
  // eslint-disable-next-line react/prop-types
  autoFocus,
  // eslint-disable-next-line react/prop-types
  className,
  readOnly,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        onInput={onInput}
        readOnly={readOnly}
        className={
          "w-full focus-visible:outline-0 p-2 h-[45px] dark:bg-[#393B40] dark:border-gray-600 dark:focus-visible:border-[#FF5C00] border-2 rounded-[10px] transition-all duration-300 focus-visible:border-[#FF5C00] focus-visible:shadow-input " +
          className
        }
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
    </>
  );
};

export default Input;
