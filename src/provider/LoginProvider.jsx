import { useState, useEffect } from "react";
import LoginContext from "../context/LoginContext.jsx";
import { checkToken } from "../components/config/AxiosConfig.js";
import Loading from "../components/loading/Loading.jsx";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/run") {
      checkToken().then((result) => {
        setLogin(result.login);
        setIsAdmin(result?.is_admin);
        setLoading(false);
      });
    } else {
      setLogin(false);
      setIsAdmin(false);
      setLoading(false);
    }
  }, [location]);

  return (
    <LoginContext.Provider value={{ login, isAdmin, setLogin }}>
      {loading && <Loading />}
      {login !== null && children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
