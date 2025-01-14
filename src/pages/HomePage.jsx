import React from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Category from "../components/Category";
import SpecialOffers from "../components/SpecialOffers";
import MostSale from "../components/MostSale";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Category />
      <SpecialOffers />
      <MostSale />
    </>
  );
}

export default HomePage;
