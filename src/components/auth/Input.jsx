// eslint-disable-next-line react/prop-types
const Input = ({ onInput, id, name, type, children }) => {
  return (
    <>
      <div className={"h-[45px] w-full border rounded-[10px] flex"}>
        {/*<div className={"w-[45px] bg-blue-700"}>{children}</div>*/}
        <div className={"w-full bg-yellow-500 h-[45px]"}>
          {/*<input type={type} id={id} name={name} onInput={onInput} />*/}
        </div>
      </div>
    </>
  );
};

export default Input;
