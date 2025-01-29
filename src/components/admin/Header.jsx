import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header
        className={
          "px-3 w-[98%] rounded-[15px] h-[65px] bg-white mx-auto mt-3 border flex items-center justify-start"
        }
      >
        <Link to={"/admin"}>
          <img
            src="/images/favicon.svg"
            alt="salam icon"
            className={"w-[45px]"}
          />
        </Link>
        <nav></nav>
      </header>
    </>
  );
};

export default Header;
