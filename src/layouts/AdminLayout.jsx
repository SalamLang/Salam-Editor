import { Outlet } from "react-router-dom";
import Header from "../components/admin/Header.jsx";

const AdminLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AdminLayout;
