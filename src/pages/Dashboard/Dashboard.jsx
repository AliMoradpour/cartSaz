import { useState } from "react";
import { useUserInfo } from "../../Context/UserContext";
import Hr from "../../components/Hr";
import Cart from "./Cart";
import Navigation from "./Navigation";
import Products from "./Products";

const Dashboard = () => {
  const [nav, setNav] = useState("home");

  let userInfo = {};
  if (userInfo.length) {
    userInfo = useUserInfo();
  } else if (!userInfo.length) {
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
  }

  return (
    <main className="w-full flex justify-center items-center">
      <div className="max-w-[1250px] w-full px-[32px]">
        <div className="w-full m-3">
          <p className="text-H6 font-bold text-black">خانه</p>
        </div>
        <hr />
        <div>
          <div className="m-3">
            <h4 className="text-H4 text-primary font-bold">فروشگاه مسل شاپ</h4>
            <p className="text-Caption-md mt-2 font-light">
              {userInfo.name} عزیز خوش آمدید!
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Hr />
        </div>
        <div className="w-full flex justify-evenly">
          <button className="bg-primary text-white py-4 px-8 text-Button-SM rounded-lg">
            سبد خرید
          </button>
          <button className="bg-main-black text-white py-4 px-8 text-Button-SM rounded-lg mr-4">
            ثبت محصول
          </button>
        </div>

        <Cart />

        <Products />
        <Navigation nav={nav} setNav={setNav}/>
      </div>
    </main>
  );
};

export default Dashboard;
