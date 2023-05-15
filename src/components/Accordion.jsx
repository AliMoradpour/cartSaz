import { useState } from "react";

const Accordion = ({ title, description }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="my-4">
      <h2>
        <button
          type="button"
          className={
            isShow
              ? "flex items-center justify-between w-full p-5 font-medium text-Body-MD text-main-black border rounded-xl border-b-0"
              : "flex items-center justify-between w-full p-5 font-medium text-Body-MD text-main-black border rounded-xl"
          }
          onClick={() => setIsShow((prevState) => !prevState)}>
          <div className="flex items-center">
            <span className="w-2 h-[2px] bg-primary p-1 rounded-full ml-2"></span>
            <span>{title}</span>
          </div>
          <svg
            className={
              isShow
                ? "rotate-180 w-6 h-6 transition-all duration-300"
                : "w-6 h-6 transition-all duration-300"
            }
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"></path>
          </svg>
        </button>
      </h2>
      <div className={isShow ? "block -mt-5" : "hidden"}>
        <div className="p-4 border border-t-0">
          <p className="mb-2 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
