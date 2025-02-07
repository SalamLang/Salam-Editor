import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import LoginContext from "../../context/LoginContext.jsx";
import Modal from "../shared/Modal.jsx";
import Profile from "../shared/Profile.jsx";
import Codes from "../shared/Codes.jsx";
import Svg from "../shared/Svg.jsx";
import Button from "../auth/Button.jsx";
import Confirm from "../shared/Confirm.jsx";

const Logo = () => {
  const { login } = useContext(LoginContext);
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);

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

  const logout = () => {
    setClicked(true);
    setConfirm(true);
  };

  const accept = () => {
    setClicked(false);
    setConfirm(false);

    localStorage.removeItem("token");
    navigate("/");
  };

  const reject = () => {
    setClicked(false);
    setConfirm(false);
  };

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
              "p-1 rounded-full w-[40px] bg-white cursor-pointer h-[40px] absolute top-0 " +
              (localStorage?.getItem("lang") === "fa"
                ? " right-[5px] "
                : " left-[5px] ")
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
            <div className="w-full h-full flex relative">
              <div className={"side basis-3/12 border-l p-3 relative"}>
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
                <Button
                  type={"button"}
                  theme={"#E7000B"}
                  disabled={clicked}
                  className={
                    "border-2 w-[149px] bg-transparent !text-red-600 border-red-600 flex justify-center items-center gap-2 text-[15px] absolute bottom-[12px] m-0 right-[12px]"
                  }
                  onClick={() => {
                    logout();
                  }}
                >
                  <Svg name={"alert"} theme={"#E7000B"} />
                  خروج از حساب
                </Button>
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
              <Confirm
                show={confirm}
                callback={() => {
                  setConfirm(false);
                }}
                accept={accept}
                reject={reject}
              />
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default Logo;
