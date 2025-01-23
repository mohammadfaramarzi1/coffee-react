import React from "react";
import { Link, NavLink } from "react-router-dom";
import ShortProductBasket from "./ShortProductBasket";

function MobileHeader({
  showMobileNavHandler,
  mobileNavElem,
  closeMobileNavHandler,
  mobileOverlayHandler,
  cardBasketMobileElem,
  closeBasketMobileHandler,
  state,
}) {
  return (
    <div className="flex md:hidden justify-between items-center bg-brown-medium px-4">
      <div
        onClick={showMobileNavHandler}
        className="bg-brown-light rounded-full p-1 cursor-pointer flex items-center justify-center transition-all delay-75"
      >
        <svg className="w-6 h-6">
          <use href="#3-line-menu"></use>
        </svg>
      </div>
      <div ref={mobileNavElem} className="mobile-nav">
        <button
          onClick={closeMobileNavHandler}
          className="bg-white text-brown-medium rounded-full px-2 text-xl hover:text-brown-dark transition-colors"
        >
          x
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
      <div
        onClick={mobileOverlayHandler}
        className="bg-brown-light rounded-full p-1 cursor-pointer flex items-center justify-center"
      >
        <svg className="w-6 h-6">
          <use href="#basket"></use>
        </svg>
      </div>
      <div className="card-basket-mobile" ref={cardBasketMobileElem}>
        <button
          onClick={closeBasketMobileHandler}
          className="text-xl bg-white rounded-full px-2 text-brown-medium hover:text-brown-dark transition-colors"
        >
          x
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
