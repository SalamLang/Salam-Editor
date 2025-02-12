// eslint-disable-next-line react/prop-types
const Label = ({ form, children, className, required, error }) => {
  return (
    <>
      <label form={form} className={"block mt-4 " + className}>
        {children[0]}
        {required === true && <span className={"text-red-600"}>*</span>}
        {children[1]}
        <span className={"text-red-600 text-[15px] mt-1 block"}>{error}</span>
      </label>
    </>
  );
};

export default Label;
