import { NavLink, Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import instagram from "../assets/image/instagram.png";
import telegram from "../assets/image/telegram.png";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-8">
      <div className="flex items-center">
        <img src={logo} alt="logo" />
        <span className="font-bold mr-8 pt-2">
          ساخته شده با <span className="heart">❤️</span> توسط علی مرادپور
        </span>
      </div>
      <div className="flex my-10 md:hidden">
        <NavLink
          to="/updates"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary mx-2"
              : "md:hidden block mx-2 text-main-black"
          }>
          آپدیت ها
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary mx-2"
              : "md:hidden block mx-2 text-main-black"
          }>
          سوالات متداول
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary mx-2"
              : "md:hidden block mx-2 text-main-black"
          }>
          تماس با ما
        </NavLink>
      </div>
      <div className="flex items-center">
        <span className="ml-5 border-[1.5px] p-2 rounded-full cursor-pointer hover:border-[#D12879] grayscale hover:grayscale-0">
          <img src={instagram} alt="instagram logo"/>
        </span>
        <span className="border-[1.5px] p-2 rounded-full cursor-pointer hover:border-primary grayscale hover:grayscale-0">
          <img src={telegram} alt="telegram logo" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
