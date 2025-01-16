import React from "react";
import { Link } from "react-router-dom";

function ProductBox() {
  return (
    <div className="border border-brown-dark w-[200px] bg-white text-brown-dark rounded-md pt-10 pb-3 px-6">
      <Link to="/products">
        <div className="relative flex items-center justify-center">
          <img src="/images/image 13 (2).png" alt="" />
          <span className="absolute -top-5 -left-4 bg-brown-light rounded-full p-1">
            10%
          </span>
        </div>
        <h3 className="text-sm my-3 text-center">
          دانه قهوه باکسی برند Boxilian
        </h3>
        <div className="text-xs flex justify-between">
          <span className="text-brown-medium">دانه قهوه</span>
          <div className="flex flex-col">
            <span className="line-through text-brown-medium">
              340,000 تومان
            </span>
            <span>240,000 تومان</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductBox;
