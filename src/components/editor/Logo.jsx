import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import LoginContext from "../../context/LoginContext.jsx";
import Modal from "../shared/Modal.jsx";
import Profile from "../shared/Profile.jsx";
import Codes from "../shared/Codes.jsx";
import Svg from "../shared/Svg.jsx";

const Logo = () => {
  const { login } = useContext(LoginContext);
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLogin(login);
  }, [login, location]);

  const [openProfile, setOpenProfile] = useState(false);

  const [tabs, setTabs] = useState([
    {
      id: "profile",
      label: "پروفایل",
      active: true,
      element: <Profile />,
    },
    { id: "codes", label: "کد های من", active: false, element: <Codes /> },
  ]);

  return (
    <>
      {isLogin === false && (
        <Link to={"/"}>
          <img
            src="/images/favicon.svg"
            alt="salam logo"
            className={
              "w-[40px] z-[10] absolute top-[0px] " +
              (localStorage?.getItem("lang") === "fa"
                ? " right-[5px] "
                : " left-[5px] ")
            }
          />
        </Link>
      )}

      {isLogin === true && (
        <>
          <div
            className={
              "p-1 rounded-full w-[40px] bg-white cursor-pointer h-[40px] absolute top-0 right-[5px]"
            }
            onClick={() => {
              setOpenProfile(true);
            }}
          >
            <img
              src="/images/profile.png"
              alt="profile picture"
              className={"w-full h-full object-cover"}
            />
          </div>
          <Modal
            bars={false}
            show={openProfile}
            callback={() => {
              setOpenProfile(false);
            }}
            className={"!w-[750px] !h-[450px] relative"}
          >
            <div className="w-full h-full flex">
              <div className={"side basis-3/12 border-l p-3"}>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={
                      "flex justify-start items-center gap-2 w-full rounded-[10px] p-2 " +
                      (tab.active === true &&
                        "bg-orange-500 text-white fill-white stroke-white")
                    }
                    onClick={() => {
                      let result = tabs.map((t) => ({
                        ...t,
                        active: t.id === tab.id,
                      }));

                      setTabs(result);
                    }}
                  >
                    <Svg
                      name={tab.id}
                      theme={tab.active === true ? "#fff" : "#000"}
                    />
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className={"basis-10/12"}>
                {tabs.map(
                  (tab) =>
                    tab.active === true && (
                      <div key={tab.id} className={"w-full h-full"}>
                        {tab.element}
                      </div>
                    ),
                )}
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default Logo;
