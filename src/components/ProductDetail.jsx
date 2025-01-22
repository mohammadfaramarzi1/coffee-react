import React from "react";
import ProductDetailFeatures from "./ProductDetailFeatures";
import ProductDetailDesc from "./ProductDetailDesc";
import ProductDetailSuggest from "./ProductDetailSuggest";
import { useProducts } from "../context/ProductsProvider";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

function ProductDetail() {
  const [state, dispatch, products] = useProducts();
  const { id } = useParams();

  const mainProduct = products.find((product) => product.id === id);

  return (
    <>
      {mainProduct ? (
        <div>
          <ProductDetailFeatures
            state={state}
            data={mainProduct}
            dispatch={dispatch}
          />
          <ProductDetailDesc productDesc={mainProduct.desc} />
          <ProductDetailSuggest products={products} dispatch={dispatch} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ProductDetail;
