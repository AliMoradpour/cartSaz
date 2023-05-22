import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Input from "./Input";
import SelectComponent from "./SelectComponent";
import { useNavigate, Link } from "react-router-dom";
import { useUserInfo, useUserInfoActions } from "../../Context/UserContext";

const selectOptions = [
  { label: "انتخاب شود", value: "" },
  { label: "پوشاک", value: "clothing" },
  { label: "خوراکی", value: "edible" },
  { label: "لوازم خانگی", value: "homeAppliances" },
  { label: "لوازم یدکی", value: "spareParts" },
  { label: "تکنولوژی", value: "technology" },
];

const validationSchema = Yup.object({
  name: Yup.string().required("اسم رو وارد نکردی !").min(5, "حداقل 5 کاراکتر"),
  instagramId: Yup.string()
    .required("آیدی اینستاگرام فراموش نشه :)")
    .min(4, "کمتر از 4 تا که نمیشه :)"),
  shopName: Yup.string()
    .required("خب ما چی صداتون کنیم پس :)")
    .min(5, "کمتر از 5 تا حرف نباشه لطفا"),
  number: Yup.string()
    .required("شماره بده پاره کنیم :)")
    .matches(/^[0-9]{11}$/, "تعدادش کمه که")
    .nullable(),
  TypeofActivity: Yup.string().required("توی کدوم حوزه فعالیت میکنی؟"),
});

const Signup = () => {
  const userInfo = useUserInfo();
  const setUserInfo = useUserInfoActions();
  const navigate = useNavigate();

  const onSubmit = () => {
    setUserInfo(userInfo);
    navigate("/shop");
  };

  const initialValues = {
    name: "",
    instagramId: "",
    shopName: "",
    number: "",
    TypeofActivity: "",
  };

  const formik = useFormik({
    initialValues: userInfo || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div>
      <div className="flex flex-col items-center m-4 justify-evenly">
        <div className="w-full flex items-center justify-between">
          <Link to="/login" className="flex items-center text-Caption-md ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 ml-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            ورود به حساب کاربری
          </Link>
          <Link to="/" className="text-red-500 underline underline-offset-4 block md:hidden">
            خروج
          </Link>
        </div>
        <hr className="w-screen mt-4"/>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col items-center">
        <div className="my-10 flex flex-col max-w-[300px] w-full">
          <Input
            label="نام و نام خانوادگی"
            name="name"
            formik={formik}
            placeholder="مثال : علی مرادپور"
          />
          <Input
            placeholder="Instagram.Com/"
            label="ایدی پیج اینستاگرام"
            name="instagramId"
            formik={formik}
          />
          <Input
            label="نام فروشگاه"
            name="shopName"
            formik={formik}
            placeholder="مثال : موبایلینو"
          />
          <Input
            label="شماره تماس"
            name="number"
            formik={formik}
            placeholder="09xxxxxxxxx"
          />
          <SelectComponent
            formik={formik}
            selectOptions={selectOptions}
            name="TypeofActivity"
          />
          <button
            type="submit"
            disabled={!formik.isValid}
            className="bg-primary text-white py-2 px-8 rounded-lg w-full mt-10 disabled:cursor-not-allowed disabled:opacity-40">
            تکمیل ثبت نام
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
