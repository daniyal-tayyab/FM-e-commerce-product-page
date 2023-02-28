import React, { useState, useContext } from "react";

import { CartContext } from "../contexts/CartContext";

import coverImage from "../images/image-product-1.jpg";

import { ReactComponent as IconPlus } from "../images/icon-plus.svg";
import { ReactComponent as IconMinus } from "../images/icon-minus.svg";
import { ReactComponent as IconPrevious } from "../images/icon-previous.svg";
import { ReactComponent as IconNext } from "../images/icon-next.svg";

import Button from "./Button";

import { thumbImagesArray } from "../utils/data";

const product = {
  id: 1,
  image: coverImage,
  name: "Fall limited edition Sneakers",
  price: "125",
};

const ProductSection = () => {
  const { addItemToCart, removeItemFromCart, cartCount } =
    useContext(CartContext);
  const [mainImage, setMainImage] = useState(coverImage);
  const [selected, setSelected] = useState(thumbImagesArray);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);

  const handleThumbClick = (id) => {
    setSelected((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return { ...item, selected: true };
        } else {
          return { ...item, selected: false };
        }
      });
    });
  };

  const handleImageChange = (image, id) => {
    setMainImage(image);
    handleThumbClick(id);
  };

  const handleNextImage = () => {
    if (currentItemIndex < 3) {
      setCurrentItemIndex(currentItemIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (currentItemIndex > 0) {
      setCurrentItemIndex(currentItemIndex - 1);
    }
  };

  const toggleLightBox = () => setShowLightBox(!showLightBox);

  const handleAddToCart = () => {
    console.log("hehe");
    addItemToCart(product);
  };

  return (
    <div className="product-section">
      <div className="product-section__main">
        <div className="product-section__main__images">
          <div>
            {window.screen.width > 600 ? (
              <img
                className="product-section__main__images__cover"
                src={mainImage}
                alt="product"
                onClick={toggleLightBox}
              />
            ) : (
              <img
                className="product-section__main__images__cover"
                src={selected[currentItemIndex].cover}
                alt="product"
                onClick={toggleLightBox}
              />
            )}

            <span
              className="product-section__main__images__cover--previous"
              onClick={handlePreviousImage}
            >
              <IconPrevious></IconPrevious>
            </span>
            <span
              className="product-section__main__images__cover--next"
              onClick={handleNextImage}
            >
              <IconNext></IconNext>
            </span>
          </div>
          <div className="product-section__main__images__thumb">
            {selected.map(({ id, thumb, cover, selected }) => (
              <img
                key={id}
                src={thumb}
                alt="thumb"
                onClick={() => handleImageChange(cover, id)}
                className={`product-section__main__images__thumb${
                  selected ? "--img-selected" : ""
                }`}
              />
            ))}
          </div>
        </div>
        <div className="product-section__main__content">
          <p className="heading-tertiary u-color-orange-bold u-font-small u-bold u-ls-2">
            SNEAKER COMPANY
          </p>
          <h1 className="heading-primary u-ls-2 u-mt-small">
            Fall limited edition
            <br /> sneakers
          </h1>
          <p className="product-section__main__content__description u-mt-medium">
            These low-profile sneakers are your perfect casual waer companion.
            Featurig a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="product-section__main__content__price-bar u-mt-medium">
            <p className="u-bold">$125.00</p>
            <span className="u-color-orange-bold">50%</span>
          </div>
          <p className="product-section__main__content__old-price">$250.00</p>

          <div className="product-section__main__content__cart u-mt-small">
            <div className="product-section__main__content__cart__counter">
              <span>
                <IconMinus onClick={() => removeItemFromCart(product)} />
              </span>
              <span className="product-section__main__content__cart__counter--count u-bold">
                {cartCount}
              </span>
              <span>
                <IconPlus onClick={() => addItemToCart(product)} />
              </span>
            </div>
            <Button handleAddToCart={handleAddToCart}>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
