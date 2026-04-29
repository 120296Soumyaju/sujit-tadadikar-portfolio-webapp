import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { GamificationHUD } from "./GamificationHUD";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <GamificationHUD />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
