import { useState } from "react";
import ShopHeader from "./ShopHeader";
import ShopSort from "./ShopSort";
import ProductList from "./ProductList";
import ShopContact from "./ShopContact";
import ShopSearch from "./ShopSearch";

const Shop = () => {
  const [isClicked, setIsClicked] = useState("products");

  return (
    <>
      <ShopHeader />
      <ShopSort setIsClicked={setIsClicked} isClicked={isClicked} />
      <ShopSearch />
      <div className="flex">
        <div className="w-1/4 h-screen hidden xl:block"></div>
        <div className="xl:w-3/4 xl:-mr-36 mt-6">
          {isClicked == "products" ? <ProductList /> : <ShopContact />}
        </div>
      </div>
    </>
  );
};

export default Shop;
