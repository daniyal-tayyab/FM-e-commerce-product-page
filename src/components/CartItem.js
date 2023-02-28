import React from "react";

import { ReactComponent as DeleteIcon } from "../images/icon-delete.svg";

import itemImage from "../images/image-product-1-thumbnail.jpg";

const CartItem = ({ cartItem, deleteItemFromCart }) => {
  const { price, quantity } = cartItem;
  return (
    <div className="cart-item">
      <img className="cart-item__image" src={itemImage} alt="cart-item" />
      <div className="cart-item__description">
        <h3 className="heading-tertiary">Fall limited addition Sneakers</h3>
        <p className="cart-item__description__text">
          ${price}.00 x {quantity}{" "}
          <span> ${(price * quantity).toFixed(2)}</span>
        </p>
      </div>
      <DeleteIcon
        className="cart-item__delete"
        onClick={() => deleteItemFromCart(cartItem)}
      />
    </div>
  );
};

export default CartItem;
