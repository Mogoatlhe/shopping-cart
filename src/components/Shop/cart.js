import { HiOutlineShoppingCart } from "react-icons/hi";

const Cart = ({ totalCartItems }) => {
  return (
    <div id="cart-container">
      <div>
        <HiOutlineShoppingCart />
        <p>( {totalCartItems} )</p>
      </div>
    </div>
  );
};

export default Cart;
