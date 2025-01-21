import React from "react";

function ProductDetailDesc({ productDesc }) {
  return (
    <div className="container border border-brown-dark rounded-md p-3 my-5">
      <h5 className="text-lg md:text-2xl">توضیحات محصول</h5>
      <p className="text-sm md:text-md text-brown-medium mt-5 text-justify">
        {productDesc}
      </p>
    </div>
  );
}

export default ProductDetailDesc;
