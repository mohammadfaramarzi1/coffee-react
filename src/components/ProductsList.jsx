import React from "react";
import ProductBox from "./ProductBox";

function ProductsList({ products }) {
  return (
    <div className="flex flex-wrap gap-y-5 gap-x-2 md:gap-x-5 justify-center sm:justify-between">
      {products.map((product) => (
        <ProductBox key={product.id} data={product} />
      ))}
    </div>
  );
}

export default ProductsList;
