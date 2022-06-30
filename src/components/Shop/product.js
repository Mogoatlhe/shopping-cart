import { useState } from "react";

const Product = ({ shoeData }) => {
  const [cartCount, setCartCount] = useState(0);

  const incrementCartCount = () => {
    setCartCount(cartCount + 1);
  };

  const decrementCartCount = () => {
    setCartCount(cartCount - 1);
  };

  return (
    <div className="product-container">
      <img
        className="product-image"
        src={shoeData.assets[0].base_url}
        alt={shoeData.name}
      />
      <p className="product-text">
        {shoeData.name}
        <span>R{shoeData.price}</span>
      </p>
      <div className="product-cart-container">
        <button className="add-to-cart" onClick={incrementCartCount}>
          +
        </button>
        <div className="cart-count">{cartCount}</div>
        <button className="remove-from-cart" onClick={decrementCartCount}>
          -
        </button>
      </div>
    </div>
  );
};

export default Product;
