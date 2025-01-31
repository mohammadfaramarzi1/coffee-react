import React from "react";
import { Link, NavLink } from "react-router-dom";
import ShortProductBasket from "./ShortProductBasket";
import { IoMenu } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { BsBasket3Fill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

function MobileHeader({
  showMobileNavHandler,
  mobileNavElem,
  closeMobileNavHandler,
  mobileOverlayHandler,
  cardBasketMobileElem,
  closeBasketMobileHandler,
  state,
  isLogin,
}) {
  return (
    <div className="flex md:hidden justify-between items-center bg-brown-medium px-4">
      <div
        onClick={showMobileNavHandler}
        className="bg-brown-light rounded-full p-1 cursor-pointer flex items-center justify-center transition-all delay-75"
      >
        <IoMenu className="text-lg" />
      </div>
      <div ref={mobileNavElem} className="mobile-nav">
        <button
          onClick={closeMobileNavHandler}
          className="bg-white text-brown-medium rounded-full text-xl hover:text-brown-dark transition-colors"
        >
          <MdOutlineCancel className="text-lg" />
        </button>
        <ul className="flex flex-col gap-y-5 mt-8 child:text-lg">
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
      </div>
      <Link to="/" className="flex items-center">
        <img src="/openmoji_roasted-coffee-bean.png" alt="" />
        <h1 className="text-xl">میم کافه</h1>
      </Link>
      <div className="flex gap-x-3">
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
          onClick={mobileOverlayHandler}
          className="relative bg-brown-light rounded-full p-1 cursor-pointer flex items-center justify-center"
        >
          <BsBasket3Fill className="text-lg" />
          {!!state.count && (
            <span className="absolute bg-brown-light rounded-full w-6 h-6 top-0 -left-3 text-brown-dark flex items-center justify-center">
              {state.count}
            </span>
          )}
        </div>
      </div>
      <div className="card-basket-mobile" ref={cardBasketMobileElem}>
        <button
          onClick={closeBasketMobileHandler}
          className="text-xl bg-white rounded-full text-brown-medium hover:text-brown-dark transition-colors"
        >
          <MdOutlineCancel className="text-lg" />
        </button>
        {state.count ? (
          state.selectedItems.map((item) => (
            <ShortProductBasket isMobile={true} key={item.id} data={item} />
          ))
        ) : (
          <p className="mt-4">هیچ محصولی در سبد خرید وجود ندارد.</p>
        )}
        <Link
          to="/basket"
          className="block w-full text-center bg-white rounded-lg py-2 text-brown-medium hover:text-brown-dark transition-colors"
        >
          سبد خرید
        </Link>
      </div>
    </div>
  );
}

export default MobileHeader;
