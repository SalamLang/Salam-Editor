// eslint-disable-next-line react/prop-types
const Input = ({ onInput, id, name, classname, type, children }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        onInput={onInput}
        className={classname + " "}
      />
    </>
  );
};

export default Input;
