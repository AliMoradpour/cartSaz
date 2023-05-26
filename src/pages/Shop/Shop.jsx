import { useState } from "react";
import ShopHeader from "./ShopHeader";
import ShopSort from "./ShopSort";
import ProductList from "./ProductList";
import ShopContact from "./ShopContact";

const Shop = () => {
  const [isClicked, setIsClicked] = useState("products");

  return (
      <>
        <ShopHeader />
        <ShopSort setIsClicked={setIsClicked} isClicked={isClicked}/>
        {isClicked == "products" ? <ProductList /> : <ShopContact />}
      </>
  );
};

export default Shop;
