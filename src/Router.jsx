import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ProductsListPage from "./pages/ProductsListPage";
import LoginPage from "./pages/LoginPage";
import BasketPage from "./pages/BasketPage";
import ArticlesPage from "./pages/ArticlesPage";
import ProductDetail from "./components/ProductDetail";
import ArticlesDetail from "./components/ArticleDetail";
import DashboardPage from "./pages/DashboardPage";
import Buy from "./components/Buy"
import Setting from "./components/Setting"

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/products" element={<ProductsListPage />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:id" element={<ArticlesDetail />} />
      <Route path="/dashboard" element={<DashboardPage />} >
        <Route path="setting" element={<Setting />} />
        <Route path="buy" element={<Buy />} />
      </Route>
    </Routes>
  );
}

export default Router;
