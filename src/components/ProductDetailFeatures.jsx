import React, { useEffect } from "react";
import AOS from "aos";

import { calcQuantity } from "../utils/products";
import { useParams } from "react-router-dom";

import "aos/dist/aos.css";

function ProductDetailFeatures({ state, data, dispatch }) {
  const { percent, title, img, type, volume, brand, quality, newprice } = data;
  const { id } = useParams();
  const quantity = calcQuantity(state, id);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container my-10 flex justify-between flex-wrap">
        <div className="flex gap-x-4">
          <div className="relative border border-brwon-dark rounded-md w-[250px] md:w-[350px] h-[260px] sm:h-[350px] py-2 md:py-4">
            <span className="absolute top-2 left-2 md:top-5 md:left-5 bg-brown-light rounded-full p-1">
              {percent}%
            </span>
            <img
              src={img}
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
            <h2 className="text-xl md:text-2xl">{title}</h2>
            <h3 className="text-lg md:text-xl text-brown-medium my-3">
              ویژگی های محصول
            </h3>
            <h4 className="text-sm">
              <span className="text-brown-medium">جنس محصول: </span>
              {quality}
              ۱۰۰٪
            </h4>
            <h4 className="text-sm">
              <span className="text-brown-medium">کارایی: </span>استفاده روزمره
            </h4>
            <h4 className="text-sm">
              <span className="text-brown-medium">اندازه: </span>
              {volume} گرم
            </h4>
            <h4 className="text-sm">
              <span className="text-brown-medium">نوع محصول: </span>
              {brand}
            </h4>
            <h4 className="text-sm">
              <span className="text-brown-medium">نوع بسته بندی: </span>
              {type}
            </h4>
            <div className="bg-brown-light w-[120px] sm:w-[300px] flex items-center flex-col sm:flex-row justify-between gap-x-2 mt-3 md:mt-0 md:gap-x-3 rounded-md p-1 md:p-2">
              <div className="flex items-center flex-col sm:flex-row gap-x-1 md:gap-x-3">
                <div className="flex items-center gap-x-1 my-2 sm:my-0">
                  {quantity >= 1 && (
                    <button
                      onClick={() =>
                        dispatch({ type: "INCREASE_ITEM", payload: data })
                      }
                      className="bg-brown-medium rounded-full flex items-center justify-center p-2 w-10 h-8"
                    >
                      <svg className="w-3 h-3">
                        <use href="#plus"></use>
                      </svg>
                    </button>
                  )}
                  {quantity === 0 && (
                    <button
                      onClick={() =>
                        dispatch({ type: "ADD_ITEM", payload: data })
                      }
                      className="bg-brown-medium rounded-full flex items-center justify-center p-2 w-10 h-8"
                    >
                      <svg className="w-8 h-6">
                        <use href="#add-cart"></use>
                      </svg>
                    </button>
                  )}
                  {quantity > 0 && <span>{quantity}</span>}
                  {quantity > 1 && (
                    <button
                      onClick={() =>
                        dispatch({ type: "DECREMENT_ITEM", payload: data })
                      }
                      className="bg-brown-medium rounded-full flex items-center justify-center p-2 w-10 h-8"
                    >
                      <svg className="w-1 h-1">
                        <use href="#minus"></use>
                      </svg>
                    </button>
                  )}
                  {quantity === 1 && (
                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE_ITEM", payload: data })
                      }
                      className="bg-brown-medium rounded-full flex items-center justify-center p-2 w-10 h-8"
                    >
                      <svg className="w-10 h-6">
                        <use href="#delete-cart"></use>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
              <h2>
                {newprice.toLocaleString()} <span>تومان</span>
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
    </>
  );
}

export default ProductDetailFeatures;
