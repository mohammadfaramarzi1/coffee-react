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
        <div className="bg-brown-light flex items-center justify-between mx-auto flex-col sm:flex-row mt-3 md:mt-0 md:gap-x-3 rounded-md p-1 md:p-2">
            <div className="flex items-center flex-col sm:flex-row mx-auto gap-x-2 md:gap-x-3">
              <div className="flex items-center gap-x-2 my-2 sm:my-0">
                <button className="bg-brown-medium rounded-full flex items-center justify-center p-2 w-6 h-6">
                  <svg className="w-3 h-3">
                    <use href="#plus"></use>
                  </svg>
                </button>
                <span>1</span>
                <button className="bg-brown-medium rounded-full flex items-center justify-center p-2 w-6 h-6">
                  <svg className="w-3 h-1">
                    <use href="#minus"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
      </Link>
    </div>
  );
}

export default ProductBox;
