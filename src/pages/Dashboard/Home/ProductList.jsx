import {useUserInfo} from "../../../Context/UserContext"

const ProductList = () => {
  const userInfo = useUserInfo()

  return <div>
    {userInfo.shopName}
  </div>;
};

export default ProductList;
