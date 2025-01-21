import React from "react";
import Heading from "../shared/Heading";
import ProductBox from "../components/ProductBox";

function ProductDetailSuggest({ products }) {
  return (
    <div className="container">
      <Heading title="مصحولات مرتبط" />
      <div className="flex justify-center sm:justify-between gap-3 flex-wrap my-5">
        {products.slice(0, 4).map((product) => (
          <ProductBox key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductDetailSuggest;
