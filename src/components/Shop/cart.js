import { HiOutlineShoppingCart } from "react-icons/hi";

const Cart = ({ totalCartItems }) => {
  return (
    <div id="cart-container">
      <button id="cart-button">
        <HiOutlineShoppingCart />
        <p data-testid="cart-items-total">( {totalCartItems} )</p>
      </button>
    </div>
  );
};

export default Cart;
