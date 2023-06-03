import cartShop from "../../../assets/image/cartShop.png";

const ShopHeader = () => {
  return (
    <div className="w-full bg-primary flex items-center rounded-br-3xl rounded-bl-3xl pb-5">
      <div className="w-full flex my-8 mx-10 items-center">
        <img src={cartShop} alt="cartShop" />
        <div className="mr-5">
          <h5 className="text-H5 font-bold text-white mb-3">
            فروشگاه کارت ساز
          </h5>
          <p className="text-Body-XS font-light text-white">
            فروش پیراهن,کفش و البسه
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
