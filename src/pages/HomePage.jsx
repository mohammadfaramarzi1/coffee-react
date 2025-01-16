import React from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Category from "../components/Category";
import SpecialOffers from "../components/SpecialOffers";
import MostSale from "../components/MostSale";
import Brands from "../components/Brands";
import Introduce from "../components/Introduce";
import ArticlesSlider from "../components/ArticlesSlider";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Banner />
      <Category />
      <SpecialOffers />
      <MostSale />
      <Brands />
      <Introduce />
      <ArticlesSlider />
    </>
  );
}

export default HomePage;
