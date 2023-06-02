const Dheader = () => {
  return (
    <div className="w-full flex justify-around items-center my-3">
      <div>
        <p>داشبورد</p>
      </div>
      <div className="flex justify-between">
        <button className="bg-primary text-white py-4 px-8 text-Button-SM rounded-lg">افزودن سبد خرید</button>
        <button className="bg-main-black text-white py-4 px-8 text-Button-SM rounded-lg mr-4">ثبت محصول</button>
      </div>
    </div>
  )
};

export default Dheader;
