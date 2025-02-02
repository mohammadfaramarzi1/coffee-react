import React, { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import { useProducts } from "../context/ProductsProvider";
import Loader from "../components/Loader";
import { useSearchParams } from "react-router-dom";
import {
  filterProductsByCategory,
  filterProductsBySearch,
} from "../utils/products";

function ProductsListPage() {
  const [state, dispatch, products] = useProducts();
  if (!products.length) return <Loader />;

  const [dispalyed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams({});

  console.log(dispalyed);

  useEffect(() => {
    setDisplayed(products);
  }, []);

  useEffect(() => {
    setSearchParams(query);
    // let filtredProducts = filterProductsBySearch(dispalyed, query.search);
    // filtredProducts = filterProductsByCategory(filtredProducts, query.category);
    // setDisplayed(filtredProducts);
  }, [query]);

  console.log(query);

  return (
    <div className="container my-10">
      <CategoryList setQuery={setQuery} />
      <Search search={search} setSearch={setSearch} setQuery={setQuery} />
      <ProductsList products={dispalyed} />
    </div>
  );
}

export default ProductsListPage;
