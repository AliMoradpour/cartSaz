const Features = () => {
  return (
    <div className="flex flex-col justify-center text-center mt-10">
      <div className="flex justify-center mb-6">
        <div className="bg-orange-100 px-4 py-2 rounded-full ">
          <p className="text-secondary">امکانات</p>
        </div>
      </div>

      <h4 className="text-H4 font-bold">
        جدیدترین مدل مدیریت
        <br /> سبد خرید ها
      </h4>

      <p className="text-Body-MD font-light mt-2 text-gray-400">
        بیش از 100 ها فروشگاه سبد خرید های خود را در کارت ساز با امکانات متفاوت
        این سامانه مدیریت میکنند.
      </p>

      <div className="flex flex-col md:flex-row mt-6 gap-4 mx-10">
        <div className="flex flex-col justify-center items-center gap-4 border-2 px-14 md:px-6 py-8 rounded-xl ">
          <span className="text-primary bg-blue-100 border border-1 rounded-full p-3 shadow-inner shadow-blue-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12">
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <h5 className="text-H5 font-bold">ایجاد سبد خرید اختصاصی</h5>
          <p className="text-Body-SM font-light text-gray-400">
            با ایجاد سبد خرید اختصاصی بدون نیاز به کاربران سبد خرید های آن ها را
            خودتان بسازید و برای هر کدام یک لینک اختصاصی دریافت کنید.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 border-2 px-14 md:px-6 py-8 rounded-xl ">
          <span className="text-primary bg-blue-100 border border-1 rounded-full p-3 shadow-inner shadow-blue-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12">
              <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
            </svg>
          </span>
          <h5 className="text-H5 font-bold">ثبت پروفایل</h5>
          <p className="text-Body-SM font-light text-gray-400">
            در کارت سایز پروفایل شما ثبت میشود وکسی جزء شما نمی تواند وارد حساب
            کاربری شود.تمامی اطلاعات محفوظ می باشد.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 border-2 px-14 md:px-6 py-8 rounded-xl ">
          <span className="text-primary bg-blue-100 border border-1 rounded-full p-3 shadow-inner shadow-blue-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12">
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <h5 className="text-H5 font-bold">مدیریت زمان</h5>
          <p className="text-Body-SM font-light text-gray-400">
            به راحتی با ساخت سبدهای خرید اختصاصی زمان خود را کاهش دهید و آن را
            به راحتی مدیریت کنید.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 border-2 px-14 md:px-6 py-8 rounded-xl ">
          <span className="text-primary bg-blue-100 border border-1 rounded-full p-3 shadow-inner shadow-blue-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12">
              <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
            </svg>
          </span>
          <h5 className="text-H5 font-bold">ثبت محصول</h5>
          <p className="text-Body-SM font-light text-gray-400">
            قبل از هر چیزی محصولات خود را ثبت کنید و برای آن ها عکس بگذارید تا
            به اسانی در سبد خرید درج شود.
          </p>
        </div>
      </div> 
    </div>
  );
};

export default Features;
