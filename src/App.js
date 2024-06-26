// App.js
import { Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RequestForId from "./features/apply/pages/RequestForId";
import MyRequestStatus from "./features/apply/pages/MyRequestStatus";
import UpdateProfile from "./pages/UpdateProfile";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-request-status" element={<MyRequestStatus />} />
        <Route path="/request-for-id" element={<RequestForId />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
