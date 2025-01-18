import React from "react";
import ProductsList from "../components/ProductsList";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";

function ProductsListPage() {
  return (
    <div className="container my-10">
      <CategoryList />
      <Search />
      <ProductsList />
    </div>
  );
}

export default ProductsListPage;
