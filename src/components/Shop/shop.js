import Nav from "../Nav/nav";
import { useState } from "react";
import Products from "./products";

const Shop = () => {
  const [totalCartItems, setTotalCartItems] = useState(0);

  const updateCartItems = (newTotal) => {
    setTotalCartItems(newTotal);
  };

  return (
    <div id="shop-container" className="container">
      <Nav page="shop" />
      <Products
        totalCartItems={totalCartItems}
        updateCartItems={updateCartItems}
      />
    </div>
  );
};

export default Shop;
