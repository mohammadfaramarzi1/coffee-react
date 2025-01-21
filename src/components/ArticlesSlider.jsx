import React, { useContext } from "react";

import ArticleSlider from "./ArticleSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { ArticlesContext } from "../context/ArticlesProvider";

import "swiper/css";
import "swiper/css/free-mode";

function ArticlesSlider() {
  const articles = useContext(ArticlesContext);

  return (
    <div className="container mb-[250px] relative bg-brown-medium mt-16 text-center rounded-md text-lg pt-2 h-64">
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
          {articles.map((article) => (
            <SwiperSlide key={article.id}>
              <ArticleSlider {...article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link
        to="/articles"
        className="flex items-center justify-between px-2 mx-auto mt-48 text-white hover:text-brown-dark transition-colors bg-brown-medium h-[50px] w-[210px] rounded-full"
      >
        مشاهده بیشر
        <svg className="w-6 h-6">
          <use href="#arrow-left"></use>
        </svg>
      </Link>
    </div>
  );
}

export default ArticlesSlider;
