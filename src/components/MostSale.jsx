import React from "react";
import Heading from "../shared/Heading";
import { Link } from "react-router-dom";
import ProductBox from "./ProductBox";

function MostSale() {
  return (
    <div className="container mt-[300px]">
      <Heading title="پر فروش ترین محصولات" />
      <div className="flex flex-wrap justify-center sm:justify-between gap-5 mt-5">
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
    </div>
  );
}

export default MostSale;
