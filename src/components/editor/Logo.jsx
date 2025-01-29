import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import LoginContext from "../../context/LoginContext.jsx";
import Modal from "../shared/Modal.jsx";
import Profile from "../shared/Profile.jsx";
import Codes from "../shared/Codes.jsx";

const Logo = () => {
  const { login } = useContext(LoginContext);
  const [openProfile, setOpenProfile] = useState(false);

  const tabs = [
    { id: "profile", label: "پروفایل", active: true, element: <Profile /> },
    { id: "codes", label: "کد های من", active: false, element: <Codes /> },
  ];

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
        <>
          <div
            className={
              "border border-gray-300 p-1 rounded-full w-[40px] bg-white cursor-pointer h-[40px] absolute top-[5px] right-[7px]"
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
            show={openProfile}
            callback={() => {
              setOpenProfile(false);
            }}
            className={"!w-[750px] !h-[450px] p-3"}
          >
            <div className="w-full h-full flex">
              <div className={"side basis-2/12"}>
                {tabs.map((tab) => (
                  <button key={tab.id} className={"block"}>
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className={"basis-10/12"}>
                {tabs.map(
                  (tab) =>
                    tab.active === true && (
                      <div key={tab.id}>{tab.element}</div>
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
