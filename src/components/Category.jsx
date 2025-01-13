import React from "react";
import Heading from "../shared/Heading";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="container text-center">
      <Heading title="دسته بندی محصولات" />
      <div className="grid grid-rows-1 gap-y-3 sm:gap-y-0 sm:flex gap-x-3 md:gap-x-0 md:justify-evenly mt-10">
        <Link to="/products" className="category-item">
          <img src="/images/IMG_7604-1.png.png" alt="" />
          <h4 className="text-sm sm:text-lg">دانه قهوه</h4>
        </Link>
        <Link to="/products" className="category-item">
          <img src="/images/IMG_7600.png.png" alt="" />
          <h4 className="text-sm sm:text-lg">پودریجات</h4>
        </Link>
        <Link to="/products" className="category-item">
          <img src="/images/ideogram-2.jpeg.png" alt="" />
          <h4 className="text-sm sm:text-lg">اکسسوری</h4>
        </Link>
      </div>
    </div>
  );
}

export default Category;
