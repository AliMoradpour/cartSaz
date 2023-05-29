import { useState } from "react";
import ShopHeader from "./ShopHeader";
import ShopSort from "./ShopSort";
import ProductList from "./ProductList";
import ShopContact from "./ShopContact";
import ShopSearch from "./ShopSearch";
import { useUserInfo } from "../../Context/UserContext";

const Shop = () => {
  const [isClicked, setIsClicked] = useState("products");
  const userInfo = useUserInfo();
  console.log(userInfo.length);

  return (
      <>
        <ShopHeader />
        <ShopSort setIsClicked={setIsClicked} isClicked={isClicked}/>
        <ShopSearch />
        {isClicked == "products" ? <ProductList /> : <ShopContact />}
      </>
  );
};

export default Shop;
