import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="pt-3">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-x-2 text-3xl">
          <img src="/openmoji_roasted-coffee-bean.png" alt="" />
          میم کافه
        </Link>
        <nav className="w-[700px]">
          <ul className="flex justify-between px-8 py-3 rounded-full text-brown-light bg-brown-dark text-xl overflow-hidden">
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
        <div className="flex gap-x-4">
          <Link
            to="/login"
            className="flex gap-x-2 border border-brown-dark rounded-full px-2 py-3 transition-colors hover:bg-brown-dark hover:text-brown-light"
          >
            <svg className="w-5 h-5">
              <use href="#user"></use>
            </svg>
            ورود / ثبت نام
          </Link>
          <Link
            to="/basket"
            className="flex items-center gap-x-4 bg-brown-medium rounded-full px-2"
          >
            <svg className="w-5 h-5">
              <use href="#basket"></use>
            </svg>
            <span className="text-white">0 تومان</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
