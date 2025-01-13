import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="container p-28 text-center">
      <div>
        <h2 className="text-xl md:text-2xl">
          <span className="text-4xl md:text-6xl text-brown-medium">قهوه</span> یادت نره
        </h2>
        <p className="text-xs sm:text-lg md:text-xl my-10">
          بهترین و با کیفیت ترین قهوه ها و اکسسوری ها در میم کافه
        </p>
        <Link
          to="/products"
          className="bg-brown-medium rounded-full text-white px-4 py-2 hover:text-brown-dark transition-colors"
        >
          نمایش محصولات
        </Link>
      </div>
      <div className="mt-10">
        <img
          src="/images/Hero-cofee-house.png.png"
          alt="coffee banner"
          className="w-full mx-auto"
        />
        <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-0 sm:justify-between items-center bg-brown-light rounded-md sm:rounded-full py-2.5 sm:py-[25px] px-2.5 sm:px-14 sm:-mt-[19px] -mt-2.5 md:-mt-[26px]  lg:-mt-[38px] xl:-mt-[50px]">
          <div>
            <h3 className="text-2xl md:text-3xl">+100</h3>
            <span className="text-gray-800">نوع قهوه</span>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl">+1000</h3>
            <span className="text-gray-800">مشتری راضی</span>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl">+3</h3>
            <span className="text-gray-800">شعبه</span>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl">+100</h3>
            <span className="text-gray-800">اکسسوری</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
