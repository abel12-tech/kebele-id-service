// App.js
import { Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import User from "./components/User";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
