import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

import Heading from "../shared/Heading";
import ProductBox from "./ProductBox";
import { useProducts } from "../context/ProductsProvider";

function MostSale() {
  const [state, dispatch, products] = useProducts();
  return (
    <div className="container mt-[300px]">
      <Heading title="پر فروش ترین محصولات" />
      <div className="flex flex-wrap justify-center sm:justify-between gap-5 mt-5">
        {products.slice(0, 6).map((product) => (
          <ProductBox key={product.id} data={product} />
        ))}
      </div>
      <Link
        to="/products"
        className="flex items-center justify-between px-2 mx-auto mt-8 text-white hover:text-brown-dark transition-colors bg-brown-medium h-[50px] w-[210px] rounded-full"
      >
        مشاهده بیشر
        <FaLongArrowAltLeft />
      </Link>
    </div>
  );
}

export default MostSale;
