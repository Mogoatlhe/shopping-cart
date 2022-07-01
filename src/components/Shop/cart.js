import { HiOutlineShoppingCart } from "react-icons/hi";

const Cart = ({ totalCartItems }) => {
  return (
    <div id="cart-container">
      <HiOutlineShoppingCart />
      <p>( {totalCartItems} )</p>
    </div>
  );
};

export default Cart;
