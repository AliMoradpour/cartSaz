import { createContext, useContext, useState } from "react";

const UserInfoContext = createContext();
const UserInfoContextDispatcher = createContext();

const UserInfoProvider = ({ children }) => {
  const [user, setUser] = useState({
      name: "",
      instagramId: "",
      shopName: "",
      number: "",
      typeofActivity: "",
      email: "",
      address: "",
      zipcode: "",
  });

  return (
    <UserInfoContext.Provider value={user}>
      <UserInfoContextDispatcher.Provider value={setUser}>
        {children}
      </UserInfoContextDispatcher.Provider>
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;

export const useUserInfo = () => useContext(UserInfoContext);
export const useUserInfoActions = () => useContext(UserInfoContextDispatcher);
