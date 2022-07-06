import { useEffect, useState } from "react";
import uniqid from "uniqid";
import CartItem from "./cartItem";
import Swal from "sweetalert2";

const Checkout = ({ hidden, setHidden, setTotalCartItems }) => {
  const noItemsInCartText = (
    <p id="empty-cart">No Items in Cart, BrokeBwoooiii</p>
  );
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const processPurchase = () => {
    localStorage.clear();
    setTotalCartItems(0);
    document.getElementById("close-checkout-btn").click();
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Purchase successful",
    });
  };

  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));

    const setCheckout = () => {
      if (cartItems !== null && cartItems.length > 0) {
        const tempTotal = cartItems.reduce(
          (accumulator, curr) =>
            accumulator + Number(curr.price) * Number(curr.count),
          0
        );
        setTotal(tempTotal);
      } else {
        cartItems = [];
        setTotal(0);
      }
    };

    const displayCartItems = () => {
      return cartItems.map((cartItem) => (
        <CartItem key={uniqid()} cartItem={cartItem} />
      ));
    };

    const onStorageChange = () => {
      cartItems = JSON.parse(localStorage.getItem("cartItems"));
      setCheckout();
      setCartItems(displayCartItems());
    };

    setCheckout();
    setCartItems(displayCartItems());

    window.addEventListener("storage", onStorageChange);

    return () => {
      window.removeEventListener("storage", onStorageChange);
    };
  }, [total, hidden]);

  const hideCheckout = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setHidden("hidden");
  };
  return (
    <div
      id="checkout-container"
      data-testid="checkout-container"
      className={hidden}
      onClick={hideCheckout}
    >
      <div id="checkout-wrapper">
        <div id="close-checkout">
          <button id="close-checkout-btn" onClick={hideCheckout}>
            X
          </button>
        </div>
        <div id="checkout-items-container">
          {cartItems.length > 0 ? cartItems : noItemsInCartText}
        </div>
        <div id="pay-details-container">
          <div id="total-price-container">
            <p>Total: R {total}</p>
          </div>
          <button
            id="pay-now-btn"
            style={{ visibility: cartItems.length > 0 ? "visible" : "hidden" }}
            onClick={processPurchase}
          >
            Pay Now
          </button>
          <div id="products-source-container">
            <p id="products-source-text">
              All the products listed here can be bought at these exact prices
              by following this link:{" "}
              <a
                href="https://superbalist.com/brands/converse/men/shoes"
                target="_blank"
                rel="noreferrer"
              >
                https://superbalist.com/brands/converse/men/shoes
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
