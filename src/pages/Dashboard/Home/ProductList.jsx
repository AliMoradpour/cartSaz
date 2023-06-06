import Product from "./Product";

const ProductList = ({filteredProducts}) => {
  
  return (
    <div className="w-full flex flex-wrap gap-4">
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
