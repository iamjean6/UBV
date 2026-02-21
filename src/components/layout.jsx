import { Outlet } from "react-router-dom";
import Navbar from "../UI/navbar";
import Footer from "./footer";
import Carttab from "./carttab";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Carttab />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
