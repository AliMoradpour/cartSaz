const ShopSearch = () => {
  return (
    <div className="mx-10 flex justify-center my-6">
      <span className="flex items-center border-2 w-full rounded-lg py-2 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-[#74787c] font-light">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          className="placeholder:text-Overline-SM placeholder:text-[#cbcbcb] mr-3 w-full outline-none text-Overline-SM"
          placeholder="جستجو محصول مورد نظر ..."
        />
      </span>
    </div>
  );
};

export default ShopSearch;
