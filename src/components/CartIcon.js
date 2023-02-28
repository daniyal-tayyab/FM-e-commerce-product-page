import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import { ReactComponent as ShoppingIcon } from "../images/icon-cart.svg";

const CartIcon = ({ toggleCartIcon }) => {
  const { cartCount } = useContext(CartContext);
  return (
    <div className="cart-icon" onClick={toggleCartIcon}>
      <ShoppingIcon />
      {cartCount > 0 && (
        <span className="cart-icon__item-count">{cartCount}</span>
      )}
    </div>
  );
};

export default CartIcon;
