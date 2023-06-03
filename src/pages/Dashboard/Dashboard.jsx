import {  useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import CartPage from "./Carts/Index";
import Shop from "./Home/Shop";

const Dashboard = () => {
  const [nav, setNav] = useState("home");

  const menuRender = () => {
    switch (nav) {
      case "home":
        return <Shop />;
      case "carts":
        return <CartPage />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {menuRender()}
      <div className="md:hidden">
        <MobileNav nav={nav} setNav={setNav} />
      </div>
      <div className="hidden md:block">
        <DesktopNav nav={nav} setNav={setNav} />
      </div>
    </>
  );
};

export default Dashboard;
