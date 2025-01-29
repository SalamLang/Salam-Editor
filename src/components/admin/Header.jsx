import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

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
        <nav>
          <Link to={"/admin"}>خانه</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
