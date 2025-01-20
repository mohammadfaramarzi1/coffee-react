import React from "react";
import { Link } from "react-router-dom";

function ProductBox({ id, title, img, beand, percent, preprice, newprice }) {
  return (
    <div className="border border-brown-dark w-[200px] bg-white text-brown-dark rounded-md pt-10 pb-3 px-6">
      <Link to={`/products/${id}`}>
        <div className="relative flex items-center justify-center">
          <img src={img} alt={title} className="w-[130px] h-[210px]" />
          <span className="absolute -top-5 -left-4 bg-brown-light rounded-full p-1">
            {percent}%
          </span>
        </div>
        <h3 className="text-sm my-3 text-center">{title}</h3>
        <div className="text-xs flex justify-between">
          <span className="text-brown-medium">{beand}</span>
          <div className="flex flex-col">
            <span className="line-through text-brown-medium">
              {preprice} تومان
            </span>
            <span>{newprice} تومان</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductBox;
