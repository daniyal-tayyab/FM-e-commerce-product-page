import React from "react";

const Button = ({ children, handleAddToCart }) => {
  return (
    <div className="btn" onClick={handleAddToCart}>
      {children}
    </div>
  );
};

export default Button;
