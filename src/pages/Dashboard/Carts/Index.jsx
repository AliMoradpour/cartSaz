import Hr from "../../../components/Hr";
import Cart from "./Carts";
import CartsHeader from "./CartsHeader";
import Products from "./Products";

const CartPage = () => {
  
  return (
    <main className="w-full flex justify-center items-center">
      <div className="max-w-[1250px] w-full px-[32px]">
      <CartsHeader />
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
      </div>
    </main>
  );
};

export default CartPage;
