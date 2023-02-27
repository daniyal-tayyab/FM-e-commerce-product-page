import React from "react";

import coverImage from "../images/image-product-1.jpg";
import thumb1 from "../images/image-product-1-thumbnail.jpg";
import thumb2 from "../images/image-product-2-thumbnail.jpg";
import thumb3 from "../images/image-product-3-thumbnail.jpg";
import thumb4 from "../images/image-product-4-thumbnail.jpg";

import { ReactComponent as IconPlus } from "../images/icon-plus.svg";
import { ReactComponent as IconMinus } from "../images/icon-minus.svg";
import { ReactComponent as IconPrevious } from "../images/icon-previous.svg";
import { ReactComponent as IconNext } from "../images/icon-next.svg";

import Button from "./Button";

const ProductSection = () => {
  return (
    <div className="product-section">
      <div className="product-section__main">
        <div className="product-section__main__images">
          <div>
            <img
              className="product-section__main__images__cover"
              src={coverImage}
              alt="product"
            />
            <span className="product-section__main__images__cover--previous">
              <IconPrevious></IconPrevious>
            </span>
            <span className="product-section__main__images__cover--next">
              <IconNext></IconNext>
            </span>
          </div>
          <div className="product-section__main__images__thumb">
            <img src={thumb1} alt="thumb" />
            <img src={thumb2} alt="thumb" />
            <img src={thumb3} alt="thumb" />
            <img src={thumb4} alt="thumb" />
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
                <IconMinus />
              </span>
              <span className="product-section__main__content__cart__counter--count u-bold">
                0
              </span>
              <span>
                <IconPlus />
              </span>
            </div>
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
