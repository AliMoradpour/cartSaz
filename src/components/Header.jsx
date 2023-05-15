import { NavLink , Link } from "react-router-dom";
import logo from "../assets/image/logo.png";

const Header = () => {
  return (
    <header className="bg-white md:left-20 md:right-20 flex items-center py-5 justify-between">
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
      <div className="flex items-center">
        <NavLink
          to="/updates"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary mx-2 hidden md:block"
              : "hidden md:block mx-2 text-main-black"
          }>
          آپدیت ها
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary mx-2 hidden md:block"
              : "hidden md:block mx-2 text-main-black"
          }>
          سوالات متداول
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary mx-2 hidden md:block"
              : "hidden md:block mx-2 text-main-black"
          }>
          تماس با ما
        </NavLink>
        <NavLink
          to="/login"
          className="border border-3 mr-8 border-primary text-primary rounded-[8px] py-2 px-4 hover:bg-primary hover:text-white transition-all">
          ورود یا ثبت نام
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
