import { HiOutlineShoppingCart } from "react-icons/hi";

const Cart = ({ totalCartItems, setHidden }) => {
  const displayCheckout = () => {
    setHidden("");
  };

  return (
    <div id="cart-container">
      <button id="cart-button" onClick={displayCheckout}>
        <HiOutlineShoppingCart />
        <p data-testid="cart-items-total">( {totalCartItems} )</p>
      </button>
    </div>
  );
};

export default Cart;
