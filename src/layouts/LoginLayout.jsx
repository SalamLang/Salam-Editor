import Login from "../components/auth/Login.jsx";
import Verify from "../components/auth/Verify.jsx";
import { useContext, useEffect, useState } from "react";
import LoginContext from "../context/LoginContext.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const EditorLayout = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [mobile, setMobile] = useState(null);
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
      navigate("/");
    }
  }, [login, navigate]);

  return (
    <>
      {login === false && (
        <>
          {isVerifying === false && (
            <Login
              callback={(mobile) => {
                setIsVerifying(true);
                setMobile(mobile);
              }}
            />
          )}
          {isVerifying && <Verify mobile={mobile} />}
        </>
      )}
    </>
  );
};

export default EditorLayout;
