import { Link } from "react-router-dom";
import { useUserInfo } from "../../../Context/UserContext";

const ProfileInfo = () => {
  let userInfo = useUserInfo();
  if (userInfo.length) {
    return userInfo;
  } else if (!userInfo.length) {
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
  }

  return (
    <>
      <div className="w-full flex items-center justify-around my-4">
        <span>
          <p className="text-Body-XS text-[#74787C]">نام شما</p>
          <h4 className="text-Body-MD text-black">{userInfo.name}</h4>
        </span>
        <span>
          <p className="text-Body-XS text-[#74787C]">شماره تماس</p>
          <h4 className="text-Body-MD text-black">{userInfo.number}</h4>
        </span>
      </div>
      <div>
        <p className="text-Body-XS text-[#74787C]">ایمیل (اختیار)</p>
        <h4 className="text-Body-MD text-black">
          {userInfo.email === "" ? "---" : userInfo.email}
        </h4>
      </div>
      <hr />
      <div className="w-full flex flex-col justify-around my-4 gap-y-4">
        <span>
          <p className="text-Body-XS text-[#74787C]">نام فروشگاه</p>
          <h4 className="text-Body-MD text-black">{userInfo.shopName}</h4>
        </span>
        <span>
          <p className="text-Body-XS text-[#74787C]">آدرس فروشگاه</p>
          <h4 className="text-Body-MD text-black">
            Instagram.com/{userInfo.instagramId}
          </h4>
        </span>
        <span>
          <p className="text-Body-XS text-[#74787C]">حوزه فروشگاه</p>
          <h4 className="text-Body-MD text-black">{userInfo.typeofActivity}</h4>
        </span>
      </div>
      <hr />
      <div className="my-3">
        <p className="text-Body-XS text-[#74787C]">آدرس فرستنده (اختیار)</p>
        <h4 className="text-Body-MD text-black">
          {userInfo.address === "" ? "---" : userInfo.address}
        </h4>
      </div>
      <div>
        <p className="text-Body-XS text-[#74787C]">کد پستی (اختیار)</p>
        <h4 className="text-Body-MD text-black">
          {userInfo.zipcode === "" ? "---" : userInfo.zipcode}
        </h4>
      </div>
      <div className="w-full flex justify-center items-center">
        <Link
          to="editProfile"
          className="bg-black px-24 py-4 mx-auto text-white rounded-lg text-Button-SM">
          ویرایش پروفایل
        </Link>
      </div>
    </>
  );
};

export default ProfileInfo;
