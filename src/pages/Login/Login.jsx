import iran from "../../assets/image/iran.png";
import columnLogo from "../../assets/image/column-logo.png";
import { Link } from "react-router-dom";

const Login = ({ setUserInfo }) => {
  const inputHandler = ({ target }) => {
    setUserInfo({ ...pervState, [target.name]: target.value });
  };

  const submitHandler = () => {
    e.preventDefualt();
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div>
        <img src={columnLogo} alt="logo" />
      </div>
      <h4 className="text-H6 font-bold my-8">ورود/ثبت نام فروشگاه</h4>
      <p className="text-Body-SM font-light my-3">
        جهت ورود به پنل ابتدا شماره تماس خود را وارد کنید
      </p>
      <span className="flex flex-row-reverse items-center justify-center border-2 p-2 rounded-lg">
        <img src={iran} alt="iran" className="w-5 h-5 rounded-full" />
        <p className="text-Caption-md font-bold ml-3 mt-1">۹۸+</p>
        <input
          type="number"
          name="number"
          className="focus:outline-none border-none text-left text-Caption-md ml-2 mt-1"
          onChange={inputHandler}
        />
      </span>
      <Link
        className="mt-10 text-white bg-primary py-4 px-32 rounded-lg text-Overline-LG"
        to="/info"
        type="submit"
        onSubmit={submitHandler}>
        ورود
      </Link>

        <Link
          to="/signup"
          className="flex items-center -ml-32 mt-4 text-Caption-md">
          ایجاد حساب کاربری
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </Link>
    </div>
  );
};

export default Login;
