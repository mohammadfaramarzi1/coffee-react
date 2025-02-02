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

  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams({});

  console.log(allProducts);

  useEffect(() => {
    if (products.length) {
      setAllProducts(products);
    }
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let filteredProducts = filterProductsBySearch(products, query.search);
    filteredProducts = filterProductsByCategory(
      filteredProducts,
      query.category
    );
    setAllProducts(filteredProducts);
  }, [query]);

  if (!products.length) {
    return <Loader />;
  }

  if (!products.length) return <Loader />;

  console.log(query);

  return (
    <div className="container my-10">
      <CategoryList setQuery={setQuery} />
      <Search search={search} setSearch={setSearch} setQuery={setQuery} />
      <ProductsList products={allProducts} />
    </div>
  );
}

export default ProductsListPage;
