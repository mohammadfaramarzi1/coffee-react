import React from "react";
import ProductBox from "./ProductBox";

function ProductsList() {
  return (
    <div className="flex flex-wrap gap-y-5 gap-x-2 md:gap-x-5 justify-center sm:justify-between">
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
    </div>
  );
}

export default ProductsList;
