import React from "react";

import { ReactComponent as DeleteIcon } from "../images/icon-delete.svg";

import itemImage from "../images/image-product-1-thumbnail.jpg";

const CartItem = () => {
  return (
    <div className="cart-item">
      <img className="cart-item__image" src={itemImage} alt="cart-item" />
      <div className="cart-item__description">
        <h3 className="heading-tertiary">Fall limited addition Sneakers</h3>
        <p className="cart-item__description__text">
          $125.00 x 3 <span>$375.00</span>
        </p>
      </div>
      <DeleteIcon className="cart-item__delete" />
    </div>
  );
};

export default CartItem;
