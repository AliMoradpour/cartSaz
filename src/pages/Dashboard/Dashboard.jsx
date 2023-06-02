import { useUserInfo } from "../../Context/UserContext";
import Hr from "../../components/Hr";

const Dashboard = () => {
  let userInfo = {};
  if (userInfo.length) {
    userInfo = useUserInfo();
  } else if (!userInfo.length) {
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
  }

  return (
    <>
      <div className="w-full m-3">
        <p className="text-H6 font-bold text-black">خانه</p>
      </div>
      <hr />
      <div>
        <div className="m-3">
          <h4 className="text-H4 text-primary font-bold">فروشگاه مسل شاپ</h4>
          <p>{userInfo.name} عزیز خوش آمدید!</p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Hr />
      </div>
      <div className="w-full flex justify-evenly">
        <button className="bg-primary text-white py-4 px-8 text-Button-SM rounded-lg">
          افزودن سبد خرید
        </button>
        <button className="bg-main-black text-white py-4 px-8 text-Button-SM rounded-lg mr-4">
          ثبت محصول
        </button>
      </div>

      
    </>
  );
};

export default Dashboard;
