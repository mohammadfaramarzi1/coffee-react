import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

function EmptyBasket() {
  return (
    <div className="my-3">
      <div className="flex items-center justify-center">
        <img
          src="/images/11518398.jpg"
          className="w-[400px]"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center gap-x-5 my-3">
        <h3 className="text-xl">محصولی در سبد خرید وجود ندارد!</h3>
        <Link
          to="/products"
          className="flex items-center justify-between px-2 text-white hover:text-brown-dark transition-colors bg-brown-medium h-[50px] w-[210px] rounded-full"
        >
          مشاهده بیشر
          <FaLongArrowAltLeft />
        </Link>
      </div>
    </div>
  );
}

export default EmptyBasket;
