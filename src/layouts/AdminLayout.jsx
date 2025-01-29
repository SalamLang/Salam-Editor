import { Outlet } from "react-router-dom";
import Header from "../components/admin/Header.jsx";

const AdminLayout = () => {
  return (
    <>
      <Header />
      <div
        className={
          "w-[98%] h-[calc(100vh-102px)] border bg-white mx-auto mt-3 rounded-[15px] p-4"
        }
      >
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
