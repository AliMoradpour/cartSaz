import {  useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import CartPage from "./Carts/Cart";
import Shop from "./Home/Shop";
import Products from "./Products/Products";
import Profile from "./Profile/Profile";

const Dashboard = () => {
  const [nav, setNav] = useState("home");

  const menuRender = () => {
    switch (nav) {
      case "home":
        return <Shop />;
      case "carts":
        return <CartPage />;
      case "products":
        return <Products />;
      case "profile":
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {menuRender()}
      <div className="xl:hidden">
        <MobileNav nav={nav} setNav={setNav} />
      </div>
      <div className="hidden xl:block">
        <DesktopNav nav={nav} setNav={setNav} />
      </div>
    </>
  );
};

export default Dashboard;
