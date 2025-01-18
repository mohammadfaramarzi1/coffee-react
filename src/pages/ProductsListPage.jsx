import React from "react";
import ProductBox from "../components/ProductBox";
import ProductsList from "../components/ProductsList";
import { Link } from "react-router-dom";
import CategoryList from "../components/CategoryList";

function ProductsListPage() {
  return (
    <div className="container my-10">
      <CategoryList />
      <ProductsList />
    </div>
  );
}

export default ProductsListPage;
