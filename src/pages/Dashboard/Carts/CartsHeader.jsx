import { useUserInfo } from "../../../Context/UserContext";

const CartsHeader = () => {
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
          <p className="text-Caption-md mt-2 font-light">
            {userInfo.name} عزیز خوش آمدید!
          </p>
        </div>
      </div>
    </>
  );
};

export default CartsHeader;
