import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Updates from "./pages/Updates/Updates";
import Faq from "./pages/Faq/Faq";
import Contact from "./pages/Contact/Contact";
import UserInfoProvider from "./Context/UserContext";
import Signup from "./pages/signup/Signup";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <UserInfoProvider>
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </UserInfoProvider>
  );
}

export default App;
