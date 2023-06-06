import Product from "./Product";
import { products } from "/src/constant/data.js";

const ProductList = () => {

  return (
    <div className="w-full flex flex-wrap justify-center items-start gap-4">
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
