
const ShopSearch = ({ setFilteredProducts, products }) => {
  const searchHandler = ({target}) => {
    const filteredProducts = products.filter((p) =>
      p.name.includes(target.value)
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="mx-10 flex justify-center md:justify-start xl:mr-28 xl:-mt-12 my-6">
      <span className="flex items-center border-2 w-full md:w-1/2 rounded-lg py-2 px-4 bg-white focus:shadow">
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
          className="placeholder:text-Overline-SM placeholder:text-[#cbcbcb] mr-3 w-full outline-none text-Overline-SM bg-transparent"
          placeholder="جستجو محصول مورد نظر ..."
          onChange={searchHandler}
        />
      </span>
    </div>
  );
};

export default ShopSearch;
