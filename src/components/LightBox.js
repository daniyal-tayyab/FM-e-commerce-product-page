import React, { useState } from "react";

import coverImage from "../images/image-product-1.jpg";
import { thumbImagesArray } from "../utils/data";

import { ReactComponent as CrossIcon } from "../images/icon-close-white.svg";
import { ReactComponent as LeftArrow } from "../images/icon-previous.svg";
import { ReactComponent as RightArrow } from "../images/icon-next.svg";

const LightBox = () => {
  const [mainImage, setMainImage] = useState(coverImage);
  const [selected, setSelected] = useState(thumbImagesArray);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

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

  return (
    <div className="light-box">
      <div className="light-box__carousel">
        <CrossIcon className="close-icon" />
        <span className="prev">
          <LeftArrow />
        </span>
        <span className="next">
          <RightArrow />
        </span>
        <img
          className="light-box__carousel__cover"
          src={mainImage}
          alt="product"
        />
        <div className="light-box__carousel__thumb-box">
          {thumbImagesArray.map(({ id, thumb }) => (
            <img src={thumb} className="ight-box__carousel__thumb-box__img" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LightBox;
