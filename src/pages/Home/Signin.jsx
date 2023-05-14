import signinPic from "../../assets/image/signIn.png";

const Signin = () => {
  return (
    <div className="w-full mt-14 flex justify-center relative">
      <img src={signinPic} alt="pic" className="relative" />
      <div className="absolute top-10 text-center flex justify-center flex-col items-center">
        <h1 className="text-H1 font-bold  text-white">
          هم اکنون ثبت نام کنید!
        </h1>
        <p className="text-Body-MD font-light text-white my-6">
          ثبت نام در کارت ساز رایگان است.همین الان ثبت نام کنید و کارت ساز را
          تست کنید.
        </p>
        <button className="flex bg-secondary text-white py-2 px-4 rounded-full">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6">
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
            </svg>
          </span>
          ثبت نام رایگان
        </button>
      </div>
    </div>
  );
};



export default Signin;
