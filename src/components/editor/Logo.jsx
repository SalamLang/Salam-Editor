import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to={"/"}>
        <img
          src="/images/favicon.svg"
          alt="salam logo"
          className={"w-[40px] absolute top-[5px] right-[7px]"}
        />
      </Link>
    </>
  );
};

export default Logo;
