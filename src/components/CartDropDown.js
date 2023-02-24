import React from "react";
import Button from "./Button";
import CartItem from "./CartItem";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div>Cart</div>
      <CartItem />
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
