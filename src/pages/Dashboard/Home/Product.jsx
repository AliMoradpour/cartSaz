import { Link } from "react-router-dom"

const Product = ({item}) => {
  return (
    <Link to={`${item.id}`} className="w-44 md:w-64 h-auto border border-[#CBCBCB] rounded-lg">
        <div className="w-full flex justify-center my-4">
            <img src={item.image} alt={item.name} className="md:w-52"/>
        </div>
        <hr />
        <div className="p-4">
            <h4 className="whitespace-nowrap text-Body-XS text-main-black">{item.name}</h4>
            <p className="text-Button-SM text-[#00966D] font-bold"> {item.price} تومان</p>
        </div>
    </Link>
  )
}

export default Product