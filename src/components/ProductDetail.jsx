import React from "react";
import ProductDetailFeatures from "./ProductDetailFeatures";
import ProductDetailDesc from "./ProductDetailDesc";
import ProductDetailSuggest from "./ProductDetailSuggest";

function ProductDetail() {
  return (
    <div>
      <ProductDetailFeatures />
      <ProductDetailDesc />
      <ProductDetailSuggest />
    </div>
  );
}

export default ProductDetail;
