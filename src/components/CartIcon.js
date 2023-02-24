import React from "react";

import { ReactComponent as ShoppingIcon } from "../images/icon-cart.svg";

const CartIcon = ({ toggleCartIcon }) => {
  return (
    <div className="cart-icon" onClick={toggleCartIcon}>
      <ShoppingIcon />
      <span className="cart-icon__item-count">13</span>
    </div>
  );
};

export default CartIcon;
