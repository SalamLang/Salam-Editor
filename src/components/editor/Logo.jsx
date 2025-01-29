import { Link } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "../../context/LoginContext.jsx";

const Logo = () => {
  const { login } = useContext(LoginContext);
  return (
    <>
      {login === false && (
        <Link to={"/"}>
          <img
            src="/images/favicon.svg"
            alt="salam logo"
            className={"w-[40px] absolute top-[5px] right-[7px]"}
          />
        </Link>
      )}

      {login === true && (
        <div
          className={
            "border border-gray-300 p-1 rounded-full w-[40px] bg-white cursor-pointer h-[40px] absolute top-[5px] right-[7px]"
          }
        >
          <img
            src="/images/profile.png"
            alt="profile picture"
            className={"w-full h-full object-cover"}
          />
        </div>
      )}
    </>
  );
};

export default Logo;
