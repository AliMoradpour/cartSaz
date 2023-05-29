
const ShopSort = ({isClicked , setIsClicked}) => {
  return (
    <>
      <div className="w-full md:w-[500px] mx-auto md:ml-[100px]">
        <div className="bg-white flex justify-evenly items-center mx-10 py-4 rounded-xl -mt-8 border shadow">
          <button onClick={() => setIsClicked("products")} className="relative">
            <p
              className={`text-Button-SM font-bold ${
                isClicked == "products" ? "text-primary font-bold" : "text-[#74787c]"
              }`}>
              محصولات
            </p>
            <span
              className={`w-[150px] h-1  rounded-tr-xl rounded-tl-xl p-1 absolute -bottom-4 -right-10 ${
                isClicked == "products" && "bg-primary"
              }`}></span>
          </button>
          <span className="border-r-2 w-1 h-5 border-[#eee]"></span>
          <button onClick={() => setIsClicked("contact")} className="relative">
            <p
              className={`text-Button-SM  ${
                isClicked == "contact" ? "text-primary font-bold" : 'text-[#74787c]'
              }`}>
              تماس با ما
            </p>
            <span
              className={`w-[150px] h-1  rounded-tr-xl rounded-tl-xl p-1 absolute -bottom-4 -right-10 ${
                isClicked == "contact" && "bg-primary"
              }`}></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopSort;
