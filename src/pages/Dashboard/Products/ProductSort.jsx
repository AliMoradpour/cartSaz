import { useState } from "react";

const ProductSort = () => {
  const [sort, setSort] = useState("All");

  return (
    <div className="flex items-center justify-between mt-4 overflow-x-scroll scrollbar-hide gap-x-4 scrollbarnone">
      <button
        onClick={() => setSort("All")}
        className={`mr-4 p-2 flex flex-col items-center justify-center relative  text-Button-SM ${
          sort == "All" ? "text-primary font-bold" : "text-[#CBCBCB]"
        }`}>
        <span
          className={`w-[50px] rounded-lg h-1 bg-primary absolute bottom-0 ${
            sort != "All" && "hidden"
          }`}></span>
        همه
      </button>
      <button
        onClick={() => setSort("Uncomplete")}
        className={`p-2 flex flex-col items-center justify-center relative text-Button-SM whitespace-nowrap ${
          sort == "Uncomplete" ? "text-primary font-bold" : "text-[#CBCBCB]"
        }`}>
        <span
          className={`w-[50px] rounded-lg h-1 bg-primary absolute bottom-0 ${
            sort != "Uncomplete" && "hidden"
          }`}></span>
        منتظر تکمیل
      </button>
      <button
        onClick={() => setSort("ReadyToSend")}
        className={`p-2 flex flex-col items-center justify-center relative text-Button-SM whitespace-nowrap ${
          sort == "ReadyToSend" ? "text-primary font-bold" : "text-[#CBCBCB]"
        }`}>
        <span
          className={`w-[50px] rounded-lg h-1 bg-primary absolute bottom-0 ${
            sort != "ReadyToSend" && "hidden"
          }`}></span>
        آماده ارسال
      </button>
      <button
        onClick={() => setSort("Done")}
        className={`p-2 flex flex-col items-center justify-center relative text-Button-SM whitespace-nowrap ${
          sort == "Done" ? "text-primary font-bold" : "text-[#CBCBCB]"
        }`}>
        <span
          className={`w-[50px] rounded-lg h-1 bg-primary absolute bottom-0 ${
            sort != "Done" && "hidden"
          }`}></span>
        تمام شده
      </button>
      <button
        onClick={() => setSort("Canceled")}
        className={` p-2 flex flex-col items-center justify-center relative text-Button-LG whitespace-nowrap ${
          sort == "Canceled" ? "text-primary font-bold" : "text-[#CBCBCB]"
        }`}>
        <span
          className={`w-[50px] rounded-lg h-1 bg-primary absolute bottom-0 ${
            sort != "Canceled" && "hidden"
          }`}></span>
        لغو شده
      </button>
    </div>
  );
};

export default ProductSort;
