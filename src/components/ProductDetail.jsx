import React from "react";
import ProductDetailFeatures from "./ProductDetailFeatures";
import ProductDetailDesc from "./ProductDetailDesc";
import ProductDetailSuggest from "./ProductDetailSuggest";
import { useProducts } from "../context/ProductsProvider";

function ProductDetail() {
  const [state, dispatch, products] = useProducts();

  return (
    <div>
      <ProductDetailFeatures products={products} dispatch={dispatch}  />
      <ProductDetailDesc products={products} dispatch={dispatch} />
      <ProductDetailSuggest products={products} dispatch={dispatch} />
    </div>
  );
}

export default ProductDetail;
