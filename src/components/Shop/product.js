import { useState } from "react";

const Product = ({ shoeData }) => {
  const [cartCount, setCartCount] = useState(0);

  const incrementCartCount = (e) => {
    const add = e.target;
    const count = add.nextSibling;
    const removeFromCartButton = count.nextSibling;
    count.classList.remove("hidden");
    removeFromCartButton.classList.remove("hidden");
    setCartCount(cartCount + 1);
  };

  const decrementCartCount = (e) => {
    const removeFromCartButton = e.target;
    const count = removeFromCartButton.previousSibling;

    if (cartCount === 0) {
      return;
    } else if (cartCount === 1) {
      count.classList.add("hidden");
      removeFromCartButton.classList.add("hidden");
    }
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
        <p className="cart-count hidden">{cartCount}</p>
        <button
          className="remove-from-cart hidden"
          onClick={decrementCartCount}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Product;
