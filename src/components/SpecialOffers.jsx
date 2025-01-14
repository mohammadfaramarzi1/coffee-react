import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";

function SpecialOffers() {
  return (
    <div className="relative container flex flex-col h-[300px] bg-brown-dark text-brown-light rounded-lg mt-10 p-5 w-[350px] sm:w-[600px] md:w-[800px]">
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
            <SwiperSlide className="w-[230px] bg-white text-brown-dark rounded-md pt-10 pb-3 px-6">
              <Link to="/products">
                <div className="relative flex items-center justify-center">
                  <img src="../../public/images/image 13 (2).png" alt="" />
                  <span className="absolute -top-5 -left-4 bg-brown-light rounded-full p-1">
                    10%
                  </span>
                </div>
                <h3 className="text-sm my-3 text-center">
                  دانه قهوه باکسی برند Boxilian
                </h3>
                <div className="text-xs flex justify-between">
                  <span className="text-brown-medium">دانه قهوه</span>
                  <div className="flex flex-col">
                    <span className="line-through text-brown-medium">
                      340,000 تومان
                    </span>
                    <span>240,000 تومان</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="w-[230px] bg-white text-brown-dark rounded-md pt-10 pb-3 px-6">
              <Link to="/products">
                <div className="relative flex items-center justify-center">
                  <img src="../../public/images/image 13 (2).png" alt="" />
                  <span className="absolute -top-5 -left-4 bg-brown-light rounded-full p-1">
                    10%
                  </span>
                </div>
                <h3 className="text-sm my-3 text-center">
                  دانه قهوه باکسی برند Boxilian
                </h3>
                <div className="text-xs flex justify-between">
                  <span className="text-brown-medium">دانه قهوه</span>
                  <div className="flex flex-col">
                    <span className="line-through text-brown-medium">
                      340,000 تومان
                    </span>
                    <span>240,000 تومان</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="w-[230px] bg-white text-brown-dark rounded-md pt-10 pb-3 px-6">
              <Link to="/products">
                <div className="relative flex items-center justify-center">
                  <img src="../../public/images/image 13 (2).png" alt="" />
                  <span className="absolute -top-5 -left-4 bg-brown-light rounded-full p-1">
                    10%
                  </span>
                </div>
                <h3 className="text-sm my-3 text-center">
                  دانه قهوه باکسی برند Boxilian
                </h3>
                <div className="text-xs flex justify-between">
                  <span className="text-brown-medium">دانه قهوه</span>
                  <div className="flex flex-col">
                    <span className="line-through text-brown-medium">
                      340,000 تومان
                    </span>
                    <span>240,000 تومان</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="w-[230px] bg-white text-brown-dark rounded-md pt-10 pb-3 px-6">
              <Link to="/products">
                <div className="relative flex items-center justify-center">
                  <img src="../../public/images/image 13 (2).png" alt="" />
                  <span className="absolute -top-5 -left-4 bg-brown-light rounded-full p-1">
                    10%
                  </span>
                </div>
                <h3 className="text-sm my-3 text-center">
                  دانه قهوه باکسی برند Boxilian
                </h3>
                <div className="text-xs flex justify-between">
                  <span className="text-brown-medium">دانه قهوه</span>
                  <div className="flex flex-col">
                    <span className="line-through text-brown-medium">
                      340,000 تومان
                    </span>
                    <span>240,000 تومان</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="w-[230px] bg-white text-brown-dark rounded-md pt-10 pb-3 px-6">
              <Link to="/products">
                <div className="relative flex items-center justify-center">
                  <img src="../../public/images/image 13 (2).png" alt="" />
                  <span className="absolute -top-5 -left-4 bg-brown-light rounded-full p-1">
                    10%
                  </span>
                </div>
                <h3 className="text-sm my-3 text-center">
                  دانه قهوه باکسی برند Boxilian
                </h3>
                <div className="text-xs flex justify-between">
                  <span className="text-brown-medium">دانه قهوه</span>
                  <div className="flex flex-col">
                    <span className="line-through text-brown-medium">
                      340,000 تومان
                    </span>
                    <span>240,000 تومان</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="w-[230px] bg-white text-brown-dark rounded-md pt-10 pb-3 px-6">
              <Link to="/products">
                <div className="relative flex items-center justify-center">
                  <img src="../../public/images/image 13 (2).png" alt="" />
                  <span className="absolute -top-5 -left-4 bg-brown-light rounded-full p-1">
                    10%
                  </span>
                </div>
                <h3 className="text-sm my-3 text-center">
                  دانه قهوه باکسی برند Boxilian
                </h3>
                <div className="text-xs flex justify-between">
                  <span className="text-brown-medium">دانه قهوه</span>
                  <div className="flex flex-col">
                    <span className="line-through text-brown-medium">
                      340,000 تومان
                    </span>
                    <span>240,000 تومان</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="w-[230px] bg-white text-brown-dark rounded-md pt-10 pb-3 px-6">
              <Link to="/products">
                <div className="relative flex items-center justify-center">
                  <img src="../../public/images/image 13 (2).png" alt="" />
                  <span className="absolute -top-5 -left-4 bg-brown-light rounded-full p-1">
                    10%
                  </span>
                </div>
                <h3 className="text-sm my-3 text-center">
                  دانه قهوه باکسی برند Boxilian
                </h3>
                <div className="text-xs flex justify-between">
                  <span className="text-brown-medium">دانه قهوه</span>
                  <div className="flex flex-col">
                    <span className="line-through text-brown-medium">
                      340,000 تومان
                    </span>
                    <span>240,000 تومان</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="w-[230px] bg-white text-brown-dark rounded-md pt-10 pb-3 px-6">
              <Link to="/products">
                <div className="relative flex items-center justify-center">
                  <img src="../../public/images/image 13 (2).png" alt="" />
                  <span className="absolute -top-5 -left-4 bg-brown-light rounded-full p-1">
                    10%
                  </span>
                </div>
                <h3 className="text-sm my-3 text-center">
                  دانه قهوه باکسی برند Boxilian
                </h3>
                <div className="text-xs flex justify-between">
                  <span className="text-brown-medium">دانه قهوه</span>
                  <div className="flex flex-col">
                    <span className="line-through text-brown-medium">
                      340,000 تومان
                    </span>
                    <span>240,000 تومان</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffers;
