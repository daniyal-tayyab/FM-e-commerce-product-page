import React from "react";
import Button from "./Button";
import CartItem from "./CartItem";

const items = [1];

const CartDropDown = () => {
  return (
    <div className={items.length ? "cart-dropdown" : "cart-dropdown-empty"}>
      <div className={items.length ? "" : "cart-text"}>Cart</div>
      {items.length ? (
        <>
          <CartItem />
          <Button>Checkout</Button>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default CartDropDown;
