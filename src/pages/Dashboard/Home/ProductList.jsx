import Product from "./Product";

const ProductList = ({filteredProducts}) => {
  
  return (
    <div className="w-full flex flex-wrap justify-center md:justify-start gap-4 mb-20 px-10">
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
