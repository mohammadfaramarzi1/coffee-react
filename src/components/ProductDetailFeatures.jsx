import React, { useEffect } from "react";
import AOS from "aos";
import Loader from "./Loader";

import "aos/dist/aos.css";

function ProductDetailFeatures({ product, dispatch }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {product ? (
        <div className="container my-10 flex justify-between flex-wrap">
          <div className="flex gap-x-4">
            <div className="relative border border-brwon-dark rounded-md w-[250px] md:w-[350px] h-[260px] sm:h-[350px] py-2 md:py-4">
              <span className="absolute top-2 left-2 md:top-5 md:left-5 bg-brown-light rounded-full p-1">
                {product.percent}%
              </span>
              <img
                src={product.img}
                alt=""
                className="w-[140px] md:w-[158px] h-full m-auto"
              />
              <div className="absolute bottom-2 md:bottom-5 right-2 md:right-5 bg-brown-medium rounded-full p-1">
                <svg className="w-6 h-6">
                  <use href="#zoom"></use>
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <h2 className="text-xl md:text-2xl">{product.title}</h2>
              <h3 className="text-lg md:text-xl text-brown-medium my-3">
                ویژگی های محصول
              </h3>
              <h4 className="text-sm">
                <span className="text-brown-medium">جنس محصول: </span>
                {product.quality}
                ۱۰۰٪
              </h4>
              <h4 className="text-sm">
                <span className="text-brown-medium">کارایی: </span>استفاده
                روزمره
              </h4>
              <h4 className="text-sm">
                <span className="text-brown-medium">اندازه: </span>
                {product.volume} گرم
              </h4>
              <h4 className="text-sm">
                <span className="text-brown-medium">نوع محصول: </span>
                {product.beand}
              </h4>
              <h4 className="text-sm">
                <span className="text-brown-medium">نوع بسته بندی: </span>
                {product.type}
              </h4>
              <div className="bg-brown-light flex items-center flex-col sm:flex-row gap-x-2 mt-3 md:mt-0 md:gap-x-3 rounded-md p-1 md:p-2">
                <div className="flex items-center flex-col sm:flex-row gap-x-1 md:gap-x-3">
                  <button className="bg-brown-medium rounded-lg px-4 py-1 text-white hover:text-brown-dark transition-colors">
                    افزودن به سبد خرید
                  </button>
                  <div className="flex items-center gap-x-1 my-2 sm:my-0">
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
                <h2>
                  {product.newprice} <span>تومان</span>
                </h2>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            className="flex flex-wrap flex-row justify-center gap-x-3 gap-y-3 lg:flex-col mt-5 lg:mt-0"
          >
            <div className="bg-gray-100 flex items-center justify-center text-center lg:text-right flex-wrap text-zinc-800 w-100px h-[90px] rounded-md gap-x-2 p-1">
              <div>
                <svg className="w-9 h-8">
                  <use href="#truck"></use>
                </svg>
              </div>
              <div className="flex flex-col">
                <span>شرایط ارسال</span>
                <span className="text-zinc-500 text-xs">
                  حدود ۲ الی ۶ روز کاری
                </span>
              </div>
            </div>
            <div className="bg-gray-100 flex items-center justify-center text-center lg:text-right flex-wrap text-zinc-800 w-100px h-[90px] rounded-md gap-x-2 p-1">
              <div>
                <svg className="w-9 h-8">
                  <use href="#collect"></use>
                </svg>
              </div>
              <div className="flex flex-col">
                <span>ضمانت کالا</span>
                <span className="text-zinc-500 text-xs">
                  تا ۷ روز ضمانت عودت کالا
                </span>
              </div>
            </div>
            <div className="bg-gray-100 flex items-center justify-center text-center lg:text-right flex-wrap text-zinc-800 w-100px h-[90px] rounded-md gap-x-2 p-1">
              <div>
                <svg className="w-9 h-8">
                  <use href="#support"></use>
                </svg>
              </div>
              <div className="flex flex-col">
                <span>پشتیبانی</span>
                <span className="text-zinc-500 text-xs">
                  پشتیبانی ۲۴ ساعته از تلگرام
                </span>
              </div>
            </div>
            <div className="bg-gray-100 flex items-center justify-center text-center lg:text-right flex-wrap text-zinc-800 w-100px h-[90px] rounded-md gap-x-2 p-1">
              <div>
                <svg className="w-9 h-8">
                  <use href="#money"></use>
                </svg>
              </div>
              <div className="flex flex-col">
                <span>پرداخت</span>
                <span className="text-zinc-500 text-xs">
                  پرداخت امن از درگاه مطمئن
                </span>
              </div>
            </div>
            <div className="border border-brown-dark rounded-md text-center p-3">
              <div className="bg-brown-light rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                <svg className="w-[30px] h-[30px]">
                  <use href="#call"></use>
                </svg>
              </div>
              <div className="flex flex-col mt-2">
                <span>نیاز به مشاوره دارید؟</span>
                <span>09936655897</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full text-center mt-32">
          <Loader />
        </div>
      )}
    </>
  );
}

export default ProductDetailFeatures;
