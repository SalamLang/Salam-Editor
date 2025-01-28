// eslint-disable-next-line react/prop-types
const Label = ({ form, children, className }) => {
  return (
    <>
      <label form={form} className={"block " + className}>
        {children}
      </label>
    </>
  );
};

export default Label;
