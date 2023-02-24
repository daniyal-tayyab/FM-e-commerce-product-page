import React from "react";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";

const App = () => {
  return (
    <div className="app">
      <div className="product-component">
        <Header />
        <ProductSection />
      </div>
    </div>
  );
};

export default App;
