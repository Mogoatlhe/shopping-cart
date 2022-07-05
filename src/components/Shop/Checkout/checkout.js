import { useEffect, useState } from "react";

const Checkout = () => {
  const [total, setTotal] = useState(0);
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
      }
    };

    const onStorageChange = () => {
      cartItems = JSON.parse(localStorage.getItem("cartItems"));
      setCheckout();
    };

    setCheckout();

    window.addEventListener("storage", onStorageChange);

    return () => {
      window.removeEventListener("storage", onStorageChange);
    };
  }, [total]);

  return (
    <div id="checkout-container">
      <div id="checkout-wrapper">
        <div id="close-checkout">
          <button id="close-checkout-btn">X</button>
        </div>
        <div id="checkout-items-container"></div>
        <div id="pay-details-container">
          <div id="total-price-container">
            <p>Total: R {total}</p>
          </div>
          <button id="pay-now-btn">Pay Now</button>
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
