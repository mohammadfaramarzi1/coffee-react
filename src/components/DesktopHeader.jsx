import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ShortProductBasket from "./ShortProductBasket";
import { FaUser } from "react-icons/fa";
import { BsBasket3Fill } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";

function DesktopHeader({
  overlayHandler,
  cardBasketElem,
  closeBasketHandler,
  state,
  isLogin,
}) {
  return (
    <div className="container hidden md:flex justify-between items-center pt-3">
      <Link to="/" className="flex items-center w-[136px] xl:w-[150px]">
        <img
          src="/openmoji_roasted-coffee-bean.png"
          alt=""
          className="w-10 h-10"
        />
        <h1 className="block text-xl xl:text-3xl">میم کافه</h1>
      </Link>
      <nav className="w-[600px] xl:w-[700px]">
        <ul className="flex justify-between px-8 py-3 rounded-full text-white bg-brown-medium text-lg xl:text-xl ">
          <li>
            <NavLink to="/" className="hover:text-[#ebdcad] transition-colors">
              صفحه اصلی
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="hover:text-[#ebdcad] transition-colors"
            >
              لیست محصولات
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articles"
              className="hover:text-[#ebdcad] transition-colors"
            >
              مقالات
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-[#ebdcad] transition-colors"
            >
              درباره ما
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-[#ebdcad] transition-colors"
            >
              تماس با ما
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex gap-x-2 xl:gap-x-4 mr-4 xl:mr-0">
        {isLogin ? (
          <Link
            to="/dashboard"
            className="flex gap-x-2 items-center border border-brown-dark rounded-full px-2 py-3 transition-colors hover:bg-brown-dark hover:text-brown-light"
          >
            <FaUser className="text-lg" />
            <span className="hidden xl:block">حساب کاربری</span>
          </Link>
        ) : (
          <Link
            to="/login"
            className="flex items-center gap-x-2 border border-brown-dark rounded-full px-2 py-3 transition-colors hover:bg-brown-dark hover:text-brown-light"
          >
            <FaUser className="text-lg" />
            <span className="hidden xl:block">ورود / ثبت نام</span>
          </Link>
        )}
        <div
          onClick={overlayHandler}
          className="relative flex items-center gap-x-4 bg-brown-medium rounded-full px-2 cursor-pointer z-20"
        >
          <BsBasket3Fill />
          {!!state.count && (
            <span className="absolute bg-brown-light rounded-full w-6 h-6 top-0 -left-3 text-brown-dark flex items-center justify-center">
              {state.count}
            </span>
          )}
        </div>
        <div className="card-basket" ref={cardBasketElem}>
          <button
            onClick={closeBasketHandler}
            className="text-brown-medium ml-auto text-xl bg-white rounded-full  hover:text-brown-dark transition-colors"
          >
            <GiCancel />
          </button>
          {state.count ? (
            state.selectedItems.map((item) => (
              <ShortProductBasket data={item} key={item.id} isMobile={false} />
            ))
          ) : (
            <p className="text-center mt-5">
              هیچ محصولی در سبد خرید وجود ندارد
            </p>
          )}
          <Link
            to="/basket"
            className="block text-center text-brown-medium mt-16 bg-white rounded-lg hover:text-brown-dark transition-colors py-1"
          >
            سبد خرید
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
