import React from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Category from "../components/Category";
import SpecialOffers from "../components/SpecialOffers";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Category />
      <SpecialOffers />
    </>
  );
}

export default HomePage;
