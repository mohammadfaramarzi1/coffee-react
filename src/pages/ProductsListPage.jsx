import React from "react";
import ProductsList from "../components/ProductsList";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import { useProducts } from "../context/ProductsProvider";
import Loader from "../components/Loader";

function ProductsListPage() {
  const [state, dispatch, products] = useProducts();

  return (
    <div className="container my-10">
      <CategoryList />
      <Search />
      {products ? <ProductsList products={products} /> : <Loader />}
    </div>
  );
}

export default ProductsListPage;
