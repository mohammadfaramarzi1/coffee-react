import React from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Category from "../components/Category";
import SpecialOffers from "../components/SpecialOffers";
import MostSale from "../components/MostSale";
import Brands from "../components/Brands";
import Introduce from "../components/Introduce";
import ArticlesSlider from "../components/ArticlesSlider";
import { useProducts } from "../context/ProductsProvider";

function HomePage() {
  const products = useProducts();

  return (
    <>
      <Banner />
      <Category />
      <SpecialOffers products={products} />
      <MostSale products={products} />
      <Brands />
      <Introduce />
      <ArticlesSlider />
    </>
  );
}

export default HomePage;
