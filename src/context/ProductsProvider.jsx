import React, { createContext, useContext, useEffect, useState } from "react";
import BASE_URL from "../utils/url";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => {
  const result = useContext(ProductsContext);
  return result;
};

export { useProducts };
export default ProductsProvider;
