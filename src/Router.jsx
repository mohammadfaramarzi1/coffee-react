import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage"
import ProductsListPage from "./pages/ProductsListPage"
import ServicesPage from "./pages/ServicesPage"

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/products" element={<ProductsListPage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
}

export default Router;
