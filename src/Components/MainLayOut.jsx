import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Footer/Footer";

const MainLayOut = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-20 pb-6 space-y-2 min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
