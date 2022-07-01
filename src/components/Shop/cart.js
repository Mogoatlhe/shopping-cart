import { HiOutlineShoppingCart } from "react-icons/hi";

const Cart = ({ totalCartItems }) => {
  return (
    <div id="cart-container">
      <div>
        <HiOutlineShoppingCart />
        <p data-testid="cart-items-total">( {totalCartItems} )</p>
      </div>
    </div>
  );
};

export default Cart;
