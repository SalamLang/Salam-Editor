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
        <nav className={"mr-6 flex justify-center items-center gap-[30px]"}>
          <Link
            to={"/admin"}
            className={
              "text-[18px] " +
              (location.pathname === "/admin" &&
                "before:w-[9px] before:h-[9px] inline-block before:bg-[#FF5C00] before:block before:rounded-full before:absolute relative pb-2 text-[#FF5C00] before:bottom-0 before:right-1/2 before:translate-x-1/2")
            }
          >
            خانه
          </Link>
          <Link
            to={"/admin/users"}
            className={
              "text-[18px] " +
              (location.pathname === "/admin/users" &&
                "before:w-[9px] before:h-[9px] inline-block before:bg-[#FF5C00] before:block before:rounded-full before:absolute relative pb-2 text-[#FF5C00] before:bottom-0 before:right-1/2 before:translate-x-1/2")
            }
          >
            کاربران
          </Link>
          <Link
            to={"/admin/codes"}
            className={
              "text-[18px] " +
              (location.pathname === "/admin/codes" &&
                "before:w-[9px] before:h-[9px] inline-block before:bg-[#FF5C00] before:block before:rounded-full before:absolute relative pb-2 text-[#FF5C00] before:bottom-0 before:right-1/2 before:translate-x-1/2")
            }
          >
            کد ها
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
