import { useUserInfo } from "../../../Context/UserContext";
import Hr from "../../../components/Hr";
import CartSort from "./CartSort";
import UserCarts from "./UserCarts";
import emptyCarts from "../../../assets/image/emptyCarts.png";
import UserProducts from "./UserProducts";

export const EmptyCart = () => {
  return (
    <>
      <div className="w-full flex justify-center overflow-x-hidden">
        <CartSort />
      </div>
      <Hr className="-mt-12"/>
      <div className="w-full flex justify-center">
        <img src={emptyCarts} alt="emptyCarts" />
      </div>
      <div className="w-full flex justify-evenly mt-16">
        <button className="bg-primary text-white py-4 px-16 text-Button-SM rounded-lg">
          افزودن به سبد خرید
        </button>
      </div>
    </>
  );
};

const Cart = () => {
  let cart = [];
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
          <p className="text-H6 font-bold text-black">سبد خرید</p>
        </div>
        <hr />

        {cart.length ? (
          <div>
            <div>
              <div className="m-3">
                <h4 className="text-H4 text-primary font-bold">
                  فروشگاه مسل شاپ
                </h4>
                <p className="text-Caption-md mt-2 font-light">
                  {userInfo.name} عزیز خوش آمدید!
                </p>
              </div>
            </div>
              <Hr/>
            <div className="w-full flex justify-evenly">
              <button className="bg-primary text-white py-4 px-8 text-Button-SM rounded-lg">
                سبد خرید
              </button>
              <button className="bg-main-black text-white py-4 px-8 text-Button-SM rounded-lg mr-4">
                ثبت محصول
              </button>
            </div>
            <UserCarts cart={cart} />
            <UserProducts />
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </main>
  );
};

export default Cart;
