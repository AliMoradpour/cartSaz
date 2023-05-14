import tLogo from "../../assets/image/transparent-logo.png";
import Hr from "../../components/Hr";

const Intro = () => {
  return (
    <div className="mt-44">
      <div className="relative flex justify-center">
        <div className="-mt-12">
          <img src={tLogo} alt="logo" className="w-[361px] h-[372px]" />
        </div>
        <h1 className="text-H3 md:text-H1 font-extrabold  absolute text-center">
          سامانه مدیریت<span className="text-primary"> هوشمند</span>
          <br />
          سفارش های اینترنتی
        </h1>
        <button className="absolute bottom-32 md:bottom-20 flex p-5 bg-primary text-white rounded-full text-Overline-LG">
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span>مشاهده ویدئو معرفی</span>
        </button>
        <p className="absolute bottom-0 w-[350px] text-center md:w-[809px] md:text-Body-MD text-Body-SM font-light md:font-normal">
          کارت ساز آمده تا دیگر نیازی به یادداشت سفارش های خود در دفتر و یا
          سررسید نباشید.به راحتی سفارشات خود را مدیریت کنید و آن ها را تعیین
          وضعیت کنید.حتی به راحتی برگه ارسال پرینت کنید و آن را اختصاصی استفاده
          کنید.
        </p>
      </div>
      <div className="mt-8 w-full flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6">
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <Hr />
    </div>
  );
};

export default Intro;
