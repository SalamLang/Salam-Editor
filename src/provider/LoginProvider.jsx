import { useState, useEffect } from "react";
import LoginContext from "../context/LoginContext.jsx";
import { checkToken } from "../components/config/AxiosConfig.js";
import Loading from "../components/loading/Loading.jsx";

// eslint-disable-next-line react/prop-types
const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkToken().then((result) => {
      setLogin(result);
      setLoading(false);
    });
  }, []);

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {loading && <Loading />}
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
