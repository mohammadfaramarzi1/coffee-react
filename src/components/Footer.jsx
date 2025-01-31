import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#333] text-white py-5 px-12">
      <div className="flex justify-between gap-y-5 sm:gap-y-0 flex-wrap border-b border-brown-medium pb-8 mb-8">
        <div className="flex items-center gap-x-2.5">
          <div className="bg-brown-medium w-[70px] h-[70px] rounded-full flex items-center justify-center">
            <FaPhoneAlt className="text-3xl" />
          </div>
          <div>
            <h5 className="text-md md:text-xl">تلفن تماس</h5>
            <span className="text-sm font-light">09936655897</span>
          </div>
        </div>
        <div className="flex items-center gap-x-2.5">
          <div className="bg-brown-medium w-[70px] h-[70px] rounded-full flex items-center justify-center">
            <FaLocationDot className="text-3xl" />
          </div>
          <div>
            <h5 className="text-md md:text-xl">آدرس</h5>
            <span className="text-sm font-light"> تهران ، آزادی</span>
          </div>
        </div>
        <div className="flex items-center gap-x-2.5">
          <div className="bg-brown-medium w-[70px] h-[70px] rounded-full flex items-center justify-center">
            <FaRegClock className="text-3xl" />
          </div>
          <div>
            <h5 className="text-md md:text-xl">ساعات کاری:</h5>
            <span className="text-sm font-light">8 صبح الی 11 شب</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center w-[136px] xl:w-[150px]">
          <img
            src="/openmoji_roasted-coffee-bean.png"
            alt=""
            className="w-10 h-10"
          />
          <h1 className="block text-xl xl:text-xl">میم کافه</h1>
        </Link>
        <div className="flex justify-between gap-x-5">
          <Link to="https://www.instagram.com/" className="hover:text-brown-medium transition-colors">
            <FaInstagram className="text-xl" />
          </Link>
          <Link to="https://www.whatsapp.com/" className="hover:text-brown-medium transition-colors">
            <FaWhatsapp className="text-xl" />
          </Link>
          <Link to="https://telegram.org/" className="hover:text-brown-medium transition-colors">
            <FaTelegram className="text-xl" />
          </Link>
        </div>
      </div>
      <p className="text-center text-brown-medium mt-5">تمام حقوق این سایت متعلق به میم کافه میباشد</p>
    </footer>
  );
}

export default Footer;
