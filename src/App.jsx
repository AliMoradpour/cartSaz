import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home/Home";
import Updates from "./pages/Updates/Updates";
import Faq from "./pages/Faq/Faq";
import Contact from "./pages/Contact/Contact";
import UserInfoProvider from "./Context/UserContext";
import Login from "./pages/Login/Login";
import Signup from "./pages/signup/Signup";
import Dashboard from "./pages/DashBoard/Dashboard";


import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <UserInfoProvider>
      <ToastContainer />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
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
