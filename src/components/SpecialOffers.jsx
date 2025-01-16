import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import ProductBox from "./ProductBox";

import "swiper/css";
import "swiper/css/free-mode";

function SpecialOffers() {
  return (
    <div data-aos="zoom-in-out" className="relative container flex flex-col h-[300px] bg-brown-dark text-brown-light rounded-lg mt-10 p-5 w-[350px] sm:w-[600px] md:w-[800px]">
      <h3 className="text-lg md:text-xl text-center my-3 block">
        تخفیفات ویژه
      </h3>
      <div className="hidden sm:flex sm:w-[400px] md:w-[500px] lg:w-[600px] items-center justify-center">
        <img src="/images/Mask group.png" alt="" />
        <img src="/images/Mask group.png" alt="" />
      </div>
      <div className="absolute bg-brown-medium w-[300px] sm:w-[500px] md:w-[700px] -bottom-[200px] sm:-bottom-[240px] right-0 left-0 mx-auto rounded-lg p-5">
        <div className="flex justify-evenly pb-3 border-b border-b-brown-light">
          <h4 className="text-xs md:text-lg">دسته بندی ها</h4>
          <div className="flex gap-x-5 text-xs md:text-lg">
            <button className="active" type="button">
              دانه قهوه
            </button>
            <button type="button">پودریجات</button>
            <button type="button">اکسسوری</button>
          </div>
        </div>
        <div className="mt-5">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              400: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffers;
