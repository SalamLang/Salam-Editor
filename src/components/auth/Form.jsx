// eslint-disable-next-line react/prop-types
const Form = ({ children, className, action, onSubmit }) => {
  return (
    <>
      <form className={className} onSubmit={onSubmit} action={action}>
        {children}
      </form>
    </>
  );
};

export default Form;
