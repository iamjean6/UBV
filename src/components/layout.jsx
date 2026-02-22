import { Outlet } from "react-router-dom";
import Navbar from "../UI/navbar";
import Footer from "./footer";
import Cart from "../UI/cart"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
