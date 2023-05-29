import iran from "../../assets/image/iran.png";
import columnLogo from "../../assets/image/column-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useUserInfo, useUserInfoActions } from "../../Context/UserContext";
import Input from "./Input";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  number: Yup.string()
    .required("شماره بده پاره کنیم :)")
    .matches(/^[0-9]{11}$/, "تعدادش کمه که"),
});

const Login = () => {
  const navigate = useNavigate();
  const userInfo = useUserInfo();
  const setUserInfo = useUserInfoActions();

  const onSubmit = () => {
    setUserInfo(userInfo);
    navigate("/shop");
  };

  const initialValues = {
    number: "",
  };

  const formik = useFormik({
    initialValues: userInfo || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div>
        <img src={columnLogo} alt="logo" />
      </div>
      <h4 className="text-H6 font-bold my-8">ورود/ثبت نام فروشگاه</h4>
      <p className="text-Body-SM font-light my-3">
        جهت ورود به پنل ابتدا شماره تماس خود را وارد کنید
      </p>

      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-row-reverse items-center justify-center border-2 p-2 rounded-lg">
          <img src={iran} alt="iran" className="w-5 h-5 rounded-full" />
          <p className="text-Caption-md font-bold ml-3 mt-1">۹۸+</p>
          <Input
            name="number"
            formik={formik}
            placeholder="9xxx"
            type="number"
          />
        </div>
        {formik.errors.number && formik.touched.number && (
          <span className="text-Caption-md font-bold text-red-500">
            {formik.errors.number}
          </span>
        )}
        <button
          type="submit"
          disabled={!formik.isValid}
          className="bg-primary text-white py-2 px-10 rounded-lg w-full mt-10 disabled:cursor-not-allowed disabled:opacity-40">
          ورود
        </button>
      </form>

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
