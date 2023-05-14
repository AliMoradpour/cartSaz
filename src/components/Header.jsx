import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";

const Header = () => {
  return (
    <header className="flex items-center my-5 justify-between">
      <img src={logo} alt="logo" />
      <div className="flex items-center">
        <Link to="updates" className="hidden md:block mx-2 text-main-black">
          آپدیت ها
        </Link>
        <Link to="login" className="hidden md:block mx-2 text-main-black">
          سوالات متداول
        </Link>
        <Link to="login" className="hidden md:block mx-2 text-main-black">
          تماس با ما
        </Link>
        <Link
          to="login"
          className="border border-3 mr-8 border-primary text-primary rounded-[8px] py-2 px-4 hover:bg-primary hover:text-white transition-all">
          ورود یا ثبت نام
        </Link>
      </div>
    </header>
  );
};

export default Header;
