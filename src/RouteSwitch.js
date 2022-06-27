import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Shop from "./components/Shop/shop";
import "./style/shopping-cart.css";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
