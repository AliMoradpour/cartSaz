import { useState } from "react";
import ShopHeader from "./ShopHeader";
import ShopSort from "./ShopSort";
import ProductList from "./ProductList";
import ShopContact from "./ShopContact";
import ShopSearch from "./ShopSearch";
import { products } from "/src/constant/data.js";


const Shop = () => {
  const [isClicked, setIsClicked] = useState("products");
  const [filteredProducts, setFilteredProducts] = useState([])


  return (
    <>
      <ShopHeader />
      <ShopSort setIsClicked={setIsClicked} isClicked={isClicked} />
      <ShopSearch setFilteredProducts={setFilteredProducts} products={products} />
      <div className="flex">
        <div className="w-1/4 h-screen hidden xl:block"></div>
        <div className="xl:w-3/4 xl:-mr-36 mt-6">
          {isClicked == "products" ? <ProductList filteredProducts={filteredProducts}/> : <ShopContact />}
        </div>
      </div>
    </>
  );
};

export default Shop;
