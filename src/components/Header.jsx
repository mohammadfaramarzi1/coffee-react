import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      {/* 
            Desktop Header
        */}
      <div className="container hidden md:flex justify-between items-center pt-3">
        <Link to="/" className="flex items-center max-w-25">
          <img
            src="/openmoji_roasted-coffee-bean.png"
            alt=""
            className="w-10 h-10"
          />
          <h1 className="block text-2xl xl:text-3xl">میم کافه</h1>
        </Link>
        <nav className="w-[600px] xl:w-[700px]">
          <ul className="flex justify-between px-8 py-3 rounded-full text-brown-light bg-brown-medium text-lg xl:text-xl">
            <li className="">
              <NavLink to="/">صفحه اصلی</NavLink>
            </li>
            <li>
              <NavLink to="/products">لیست محصولات</NavLink>
            </li>
            <li>
              <NavLink to="/services">خدمات</NavLink>
            </li>
            <li>
              <NavLink to="/about">درباره ما</NavLink>
            </li>
            <li>
              <NavLink to="/contact">تماس با ما</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-2 xl:gap-x-4 mr-4 xl:mr-0">
          <Link
            to="/login"
            className="flex gap-x-2 border border-brown-dark rounded-full px-2 py-3 transition-colors hover:bg-brown-dark hover:text-brown-light"
          >
            <svg className="w-5 h-5">
              <use href="#user"></use>
            </svg>
            <span className="hidden xl:block">ورود / ثبت نام</span>
          </Link>
          <Link
            to="/basket"
            className="flex items-center gap-x-4 bg-brown-medium rounded-full px-2"
          >
            <svg className="w-5 h-5">
              <use href="#basket"></use>
            </svg>
            <span className="hidden xl:block text-white">0 تومان</span>
          </Link>
        </div>
      </div>

      {/* 
            Mobile Header      
      */}
      <div className="flex md:hidden justify-between items-center bg-brown-medium px-4">
        <div className="bg-brown-light rounded-full p-1 cursor-pointer flex items-center justify-center">
          <svg className="w-6 h-6">
            <use href="#3-line-menu"></use>
          </svg>
        </div>
        <Link to="/" className="flex items-center">
          <img src="/openmoji_roasted-coffee-bean.png" alt="" />
          <h1 className="text-xl">میم کافه</h1>
        </Link>
        <div className="bg-brown-light rounded-full p-1 cursor-pointer flex items-center justify-center">
          <svg className="w-6 h-6">
            <use href="#basket"></use>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
