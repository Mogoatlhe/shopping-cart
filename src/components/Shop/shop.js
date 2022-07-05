import Nav from "../Nav/nav";
import Checkout from "./Checkout/checkout";
import Products from "./products";

const Shop = () => {
  return (
    <div id="shop-container" className="container">
      <Nav page="shop" />
      <Products />
      <Checkout />
    </div>
  );
};

export default Shop;
