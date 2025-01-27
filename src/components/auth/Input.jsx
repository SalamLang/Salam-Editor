// eslint-disable-next-line react/prop-types
const Input = ({ onInput, id, name, type, children }) => {
  return (
    <>
      <div
        className={"h-[45px] w-full border rounded-[10px] overflow-hidden flex"}
      >
        <div
          className={
            "basis-[45px] shrink-0 h-[45px] border-l flex justify-center items-center"
          }
        >
          {children}
        </div>
        <div className={"h-[45px] basis-full"}>
          <input
            type={type}
            id={id}
            name={name}
            onInput={onInput}
            className={"w-full h-full focus-visible:outline-0 p-2 text-[18px]"}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
