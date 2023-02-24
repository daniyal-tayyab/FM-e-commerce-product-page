import React from "react";

import coverImage from "../images/image-product-1.jpg";
import thumb1 from "../images/image-product-1-thumbnail.jpg";
import thumb2 from "../images/image-product-2-thumbnail.jpg";
import thumb3 from "../images/image-product-3-thumbnail.jpg";
import thumb4 from "../images/image-product-4-thumbnail.jpg";

const ProductSection = () => {
  return (
    <div className="product-section">
      <div className="product-section__main">
        <div className="product-section__main__images">
          <img
            className="product-section__main__images--cover"
            src={coverImage}
            alt="product"
          />
          <div className="product-section__main__images--thumb">
            <img src={thumb1} alt="thumb" />
            <img src={thumb2} alt="thumb" />
            <img src={thumb3} alt="thumb" />
            <img src={thumb4} alt="thumb" />
          </div>
        </div>
        <div className="product-section__main__content">content</div>
      </div>
    </div>
  );
};

export default ProductSection;
