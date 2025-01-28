// eslint-disable-next-line react/prop-types
const Label = ({ form, children, className }) => {
  return (
    <>
      <label form={form} className={"block mt-4 " + className}>
        {children[0]}
        <span className={"text-red-600"}>*</span>
        {children[1]}
      </label>
    </>
  );
};

export default Label;
