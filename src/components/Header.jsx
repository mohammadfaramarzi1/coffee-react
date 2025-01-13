import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const overlayElem = useRef(null);
  const cardBasketElem = useRef(null);
  const cardBasketMobileElem = useRef(null);
  const mobileNavElem = useRef(null);

  const overlayHandler = () => {
    overlayElem.current.classList.add("overlay--show");
    cardBasketElem.current.classList.add("card-basket--show");
  };

  const mobileOverlayHandler = () => {
    overlayElem.current.classList.add("overlay--show");
    cardBasketMobileElem.current.classList.add("card-basket-mobile--show");
  };

  const closeBasketHandler = () => {
    overlayElem.current.classList.remove("overlay--show");
    cardBasketElem.current.classList.remove("card-basket--show");
  };

  const closeBasketMobileHandler = () => {
    overlayElem.current.classList.remove("overlay--show");
    cardBasketMobileElem.current.classList.remove("card-basket-mobile--show");
  };

  const closeMobileNavHandler = () => {
    overlayElem.current.classList.remove("overlay--show");
    mobileNavElem.current.classList.remove("mobile-nav--show");
  };

  const showMobileNavHandler = () => {
    overlayElem.current.classList.add("overlay--show");
    mobileNavElem.current.classList.add("mobile-nav--show");
  };

  return (
    <header>
      {/* 
            Desktop Header
        */}
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
              <NavLink
                to="/"
                className="hover:text-[#ebdcad] transition-colors"
              >
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
                to="/services"
                className="hover:text-[#ebdcad] transition-colors"
              >
                خدمات
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
          <Link
            to="/login"
            className="flex gap-x-2 border border-brown-dark rounded-full px-2 py-3 transition-colors hover:bg-brown-dark hover:text-brown-light"
          >
            <svg className="w-5 h-5">
              <use href="#user"></use>
            </svg>
            <span className="hidden xl:block">ورود / ثبت نام</span>
          </Link>
          <div
            onClick={overlayHandler}
            className="relative flex items-center gap-x-4 bg-brown-medium rounded-full px-2 cursor-pointer z-20"
          >
            <svg className="w-5 h-5">
              <use href="#basket"></use>
            </svg>
            <span className="hidden xl:block text-white">0 تومان</span>
          </div>
          <div className="card-basket" ref={cardBasketElem}>
            <button
              onClick={closeBasketHandler}
              className="text-brown-medium text-xl bg-white rounded-full px-2 hover:text-brown-dark transition-colors"
            >
              x
            </button>
            <p>هیچ محصولی در سبد خرید وجود ندارد</p>
            <Link
              to="/basket"
              className="block text-center text-brown-medium mt-16 bg-white rounded-lg hover:text-brown-dark transition-colors py-1"
            >
              سبد خرید
            </Link>
          </div>
        </div>
      </div>

      {/* 
            Mobile Header      
      */}
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
              <NavLink
                to="/"
                className="hover:text-[#ebdcad] transition-colors"
              >
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
                to="/services"
                className="hover:text-[#ebdcad] transition-colors"
              >
                خدمات
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
          <p className="mt-4">هیچ محصولی در سبد خرید وجود ندارد.</p>
          <Link
            to="/basket"
            className="block w-full text-center bg-white rounded-lg py-2 text-brown-medium hover:text-brown-dark transition-colors"
          >
            سبد خرید
          </Link>
        </div>
      </div>
      <div className="overlay" ref={overlayElem}></div>
    </header>
  );
}

export default Header;
