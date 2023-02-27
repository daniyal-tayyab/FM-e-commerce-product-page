import React, { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

import Button from "./Button";
import CartItem from "./CartItem";

const items = [1];

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={cartItems.length ? "cart-dropdown" : "cart-dropdown-empty"}>
      <div className={cartItems.length ? "" : "cart-text"}>Cart</div>
      {cartItems.length ? (
        <>
          {cartItems.map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem.id} />
          ))}
          <Button>Checkout</Button>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default CartDropDown;
