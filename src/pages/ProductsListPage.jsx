import React from "react";
import ProductBox from "../components/ProductBox";
import ProductsList from "../components/ProductsList";

function ProductsListPage() {
  return (
    <div className="container my-10">
      <ProductsList />
      <div>
        <div>
          <h5>همه ی محصولات</h5>
          
        </div>
      </div>
    </div>
  );
}

export default ProductsListPage;
