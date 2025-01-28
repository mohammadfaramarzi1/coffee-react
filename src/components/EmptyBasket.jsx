import React from "react";
import { Link } from "react-router-dom";

function EmptyBasket() {
  return (
    <div className="my-5">
      <div className="flex items-center justify-center">
        <img
          src="/images/11518398.jpg"
          className="w-[400px]"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center gap-x-5 my-5">
        <h3 className="text-xl">محصولی در سبد خرید وجود ندارد!</h3>
        <Link
          to="/products"
          className="flex items-center justify-between px-2 text-white hover:text-brown-dark transition-colors bg-brown-medium h-[50px] w-[210px] rounded-full"
        >
          مشاهده بیشر
          <svg className="w-6 h-6">
            <use href="#arrow-left"></use>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default EmptyBasket;
