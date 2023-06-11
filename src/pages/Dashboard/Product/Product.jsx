import { Link } from "react-router-dom";
import cartShop from "/src/assets/image/cartShop.png";
import { useMatch } from "react-router-dom";
import { products } from "/src/constant/data";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Product = () => {
  const match = useMatch("/:firstRoute/:secondRoute");
  const { secondRoute } = match.params;
  const product = products[secondRoute - 1];
  const { instagramId } = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <>
      <nav className="w-full py-6 px-2 flex items-center">
        <Link to="/dashboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 mr-4">
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </Link>

        <div className="flex items-center mr-4">
          <img src={cartShop} alt="cartShop" className="w-10 ml-3" />
          <h6 className="text-H6 text-main-black">فروشگاه کارت ساز</h6>
        </div>
      </nav>
      <hr />
      <div className="w-full max-w-6xl mx-auto px-8 my-7">
        <h5 className="text-H5 font-bold text-primary mb-10">{product.name}</h5>
        <Swiper
          className="w-full md:flex md:flex-col md:justify-center"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}>
          <SwiperSlide className="w-full flex justify-center">
            <img src={product.image} alt={product.name} className="w-80" />
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center">
            <img src={product.image} alt={product.name} className="w-80" />
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center">
            <img src={product.image} alt={product.name} className="w-80" />
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center">
            <img src={product.image} alt={product.name} className="w-80" />
          </SwiperSlide>
          <div className="mt-16"> </div>
        </Swiper>
        <div className="w-full flex justify-between items-center mb-10">
          <p>قیمت</p>
          <h5 className="text-[#00966D] font-bold">{product.price} تومان</h5>
        </div>
        <hr />
        <div className="mt-4">
          <h3 className="text-Body-MD text-[#74787C] mr-3 font-light">
            توضیحات
          </h3>
          <p className="text-Body-XS font-light px-5 text-[#74787C]">
            {product.desc}
          </p>
        </div>

        <div className="my-10 mx-auto bg-primary text-white py-5 rounded-xl text-Button-SM text-center">
          <Link to={`https://www.instagram.com/${instagramId}`}>
            خرید مستقیم از دایرکت اینستاگرام
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
