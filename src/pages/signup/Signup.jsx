import logo from "../../assets/image/column-logo.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="flex items-center m-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
        <Link to="/login" className="text-Caption-md mr-2">
          ورود به حساب کاربری
        </Link>
      </div>
      <div>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Signup;
