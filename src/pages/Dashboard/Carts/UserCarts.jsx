const UserCarts = ({cart}) => {
    return (
      <div className="w-full mx-4 mt-6">
        <h5 className="text-H5 font-bold text-black flex items-center">
            <span className="w-3 h-3 border-4 border-primary rounded-full ml-3"></span>
            آخرین سبد خریدها
          </h5>
        <div className="w-full flex items-center justify-center my-20">
          <p className="text-Body-XS text-[#74787C]">
            {cart.length ? (
              cart.map((item) => <div>{item.name}</div>)
            ) : (
              <p className="text-Body-XS text-[#74787C]">
                اطلاعاتی جهت نمایش وجود ندارد.
              </p>
            )}
          </p>
        </div>
      </div>
    );
  };
  
  export default UserCarts;
  