import Hr from "../../../components/Hr"
import emptyProducts from "../../../assets/image/emptyProducts.png"
import ProductSort from "./ProductSort"

const Products = () => {
  return (
    <main className="w-full flex justify-center items-center">
      <div className="max-w-[1250px] w-full px-8">
        <div className="w-full m-3">
          <p className="text-H6 font-bold text-black">محصولات</p>
        </div>
        <hr />
        <div className="w-full flex justify-center overflow-x-hidden">
        <ProductSort />
        </div>
          <Hr />
        <div className="w-full flex justify-center">
          <img src={emptyProducts} alt="emptyProducts" />
        </div>
        <div className="w-full flex justify-evenly mt-16">
          <button className="bg-primary text-white py-4 px-16 text-Button-SM rounded-lg">
            افزودن محصول
          </button>
        </div>
      </div>
    </main>
  )
}

export default Products