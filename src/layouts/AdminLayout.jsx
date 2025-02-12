import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/admin/Header.jsx";
import { useContext, useEffect, useState } from "react";
import LoginContext from "../context/LoginContext.jsx";
import Loading from "../components/loading/Loading.jsx";

const AdminLayout = () => {
  const { isAdmin } = useContext(LoginContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAdmin !== true) {
      navigate("/");
    } else {
      setLoading(false);
    }
  }, [isAdmin, navigate]);

  return (
    <>
      {loading === true && <Loading />}
      {loading === false && (
        <>
          <Header />
          <div
            className={
              "w-[98%] h-[calc(100vh-102px)] relative border bg-white mx-auto mt-3 rounded-[15px] p-4 overflow-auto"
            }
          >
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};

export default AdminLayout;
