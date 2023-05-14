import frame from "../../assets/image/frame.png";
import phone from "../../assets/image/phone.png";

const DisplayMode = () => {
  return (
    <div className="flex flex-col justify-center text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-orange-100 px-4 py-2 rounded-full ">
          <p className="text-secondary">حالت نمایش</p>
        </div>
      </div>

      <h4 className="text-H4 font-bold">سیستمی کاملا تحت وب و آنلاین</h4>

      <p className="text-Body-MD font-light mt-2">
        سیستم کارت ساز کاملا تحت وب اجرا شده است و نیازی به هیچ سخت افزار خاصی
        برای دیتاهای خود ندارید. به راحتی مشتریان را مدیریت کنید و سفارشات خود
        را به موقع ارسال و آن ها را جمع آوری کنید.
      </p>

      <div className="mt-6 flex justify-center items-center w-full">
        <div className="relative">
          <img src={frame} alt="frame" className="w-[348px] md:w-[810px]" />
          <img
            src={phone}
            alt="phone"
            className="w-[105px] md:w-[234px] absolute bottom-0 -left-10"
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayMode;
