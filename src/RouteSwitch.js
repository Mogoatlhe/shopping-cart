import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import "./style/shopping-cart.css";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
