const CartItem = ({ cartItem }) => {
  return (
    <div className="cart-item-container">
      <div className="cart-item-image-container">
        <img
          className="cart-item-image"
          src={cartItem.image}
          alt={cartItem.name}
        />
        <p className="cart-item-count">{cartItem.count}</p>
      </div>
      <div className="cart-item-text-container">
        <p className="cart-item-name">{cartItem.name}</p>
        <p className="cart-item-price">R {cartItem.price}</p>
      </div>
      <p className="cart-item-overall-price">
        R {cartItem.price * cartItem.count}
      </p>
    </div>
  );
};

export default CartItem;
