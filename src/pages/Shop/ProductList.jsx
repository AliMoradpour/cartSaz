import {useUserInfo, useUserInfoActions} from "../../Context/UserContext"

const ProductList = () => {
  const userInfo = useUserInfo()
  const setUserInfo = useUserInfoActions();
  console.log(localStorage.getItem(userInfo))

  return <div>
    {userInfo.shopName}
  </div>;
};

export default ProductList;
