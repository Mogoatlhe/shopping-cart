import { useState, useEffect } from "react";

const Product = ({ shoeData, setTotalCartItems, total }) => {
  const [cartCount, setCartCount] = useState(0);
  const [hidden, setHidden] = useState("hidden");

  const getJSON = () => JSON.parse(localStorage.getItem("cartItems"));
  const addCartItem = () => {
    return {
      name: shoeData.name,
      price: shoeData.price,
      image: shoeData.assets[0].base_url,
      count: 1,
    };
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    if (items !== null && items.length > 0) {
      const item = items.find((el) => el.name === shoeData.name);
      if (item === undefined) {
        return;
      }

      setHidden("");
      setCartCount(item.count);
    }
  }, []);

  const incrementCartCount = () => {
    setHidden("");
    setCartCount(cartCount + 1);
    const cartItems = getJSON() === null ? [] : getJSON();

    if (cartItems.length === 0) {
      cartItems.push(addCartItem());
    } else {
      const index = getJSON().findIndex((item) => item.name === shoeData.name);
      if (index === -1) {
        cartItems.push(addCartItem());
      } else {
        cartItems[index].count += 1;
      }
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    setTotalCartItems(++total.current);
    localStorage.setItem("total", total.current);
  };

  const decrementCartCount = () => {
    if (cartCount === 0) {
      return;
    } else if (cartCount === 1) {
      setHidden("hidden");
    }
    const cartItems = getJSON() === null ? [] : getJSON();
    const index = getJSON().findIndex((item) => item.name === shoeData.name);
    cartItems[index].count -= 1;
    if (cartItems[index].count === 0) {
      cartItems.splice(index, 1);
    }
    setTotalCartItems(--total.current);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCartCount(cartCount - 1);
    localStorage.setItem("total", total.current);
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
        <p className={`cart-count ${hidden}`}>{cartCount}</p>
        <button
          className={`remove-from-cart ${hidden}`}
          onClick={decrementCartCount}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Product;
