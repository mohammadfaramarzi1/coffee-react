import React from "react";
import ProductBox from "./ProductBox";
import useProducts from "../context/ProductsProvider";

function ProductsList() {
  const [state, dispatch, products] = useProducts();

  return (
    <div className="flex flex-wrap gap-y-5 gap-x-2 md:gap-x-5 justify-center sm:justify-between">
      {products.map((product) => (
        <ProductBox key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductsList;
