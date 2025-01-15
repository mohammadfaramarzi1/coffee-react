import React from "react";

import ArticleSlider from "./ArticleSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

function ArticlesSlider() {
  return (
    <div className="container relative bg-brown-medium mt-16 text-center rounded-md text-lg pt-2 h-64">
      <h3>مقالات میم کافه</h3>
      <div className="flex justify-between child:h-[200px]">
        <svg>
          <use href="#articles-svg"></use>
        </svg>
        <svg>
          <use href="#articles-svg"></use>
        </svg>
      </div>
      <div className="absolute right-0 left-28 sm:left-56 md:left-[23px] lg:left-[80px] -bottom-[125px]">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            400: {
              slidesPerView: 1,
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
            <ArticleSlider />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleSlider />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleSlider />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleSlider />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleSlider />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ArticlesSlider;
