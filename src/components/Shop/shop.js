import Nav from "../Nav/nav";
import Products from "./products";

const Shop = () => {
  return (
    <div id="shop-container" className="container">
      <Nav page="shop" />
      <Products />
    </div>
  );
};

export default Shop;
