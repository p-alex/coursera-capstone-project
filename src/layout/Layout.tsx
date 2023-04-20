import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="">{<Outlet />}</main>
      <Footer />
    </>
  );
};

export default Layout;
