import React from "react";
import Heading from "../shared/Heading";
import ProductBox from "../components/ProductBox";

function ProductDetailSuggest() {
  return (
    <div className="container">
      <Heading title="مصحولات مرتبط" />
      <div className="flex justify-center sm:justify-between gap-3 flex-wrap my-5">
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </div>
    </div>
  );
}

export default ProductDetailSuggest;
