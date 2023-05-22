import Layout from "../../Layout/Layout";
import instagram from "../../assets/image/instagram.png";
import whatsapp from "../../assets/image/whatsapp.png";

const Contact = () => {
  return (
    <Layout>
      <div className="mt-16">
        <h1 className="text-H3 font-bold text-primary mt-16">تماس با ما</h1>
        <ContactCart />
      </div>
    </Layout>
  );
};

export default Contact;

const ContactCart = () => {
  return (
    <div className="mt-6 mb-44">
      <h4 className="text-Body-MD font-light">
        جهت ارتباط با ما میتوانید با یکی از مسیر های زیر با ما ارتباط برقرار
        کنید :
      </h4>
      <div className="flex flex-col-reverse items-center md:flex-row justify-between">
        <div>
          <span className="flex items-center justify-center cursor-pointer text-Body-MD font-bold mt-7 border-2 border-[#D12879] text-[#D12879] p-3 md:py-4 md:px-24 rounded-xl">
            <img src={instagram} alt="instagram logo" className="ml-2" /> پیام
            در اینستاگرام
          </span>
          <span className="flex items-center justify-center cursor-pointer text-Body-MD font-bold my-7 border-2 border-[#2FDB9D] text-[#2FDB9D] p-3 md:py-4 md:px-24 rounded-xl mb-16">
            <img src={whatsapp} alt="whatsapp logo" className="ml-2" /> تماس در
            واتس اپ
          </span>
          <span>
            <p className="text-Body-MD text-main-black mb-4">
              همچنین میتوانید از ایمیل زیر جهت ارسال پیام استفاده کنید :
            </p>
            <p className="text-[20px] text-primary underline">
              Cartsaz.Com@Gmail.Com
            </p>
          </span>
        </div>
        <div className="text-primary bg-blue-100 p-8 rounded-full shadow-inner shadow-blue-200 mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-24 h-24">
            <path
              fillRule="evenodd"
              d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
