// eslint-disable-next-line react/prop-types
const Label = ({ form, children }) => {
  return (
    <>
      <label form={form} className={"block"}>
        {children}
      </label>
    </>
  );
};

export default Label;
