import React, { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import { useProducts } from "../context/ProductsProvider";
import Loader from "../components/Loader";
import { useSearchParams } from "react-router-dom";

function ProductsListPage() {
  const [state, dispatch, products] = useProducts();
  const [dispalyed, setDisplayed] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams({});
  const query = {};

  useEffect(() => {
    setDisplayed(products);
  }, []);

  return (
    <div className="container my-10">
      <CategoryList setSearchParams={setSearchParams} />
      <Search />
      {products ? <ProductsList products={products} /> : <Loader />}
    </div>
  );
}

export default ProductsListPage;
