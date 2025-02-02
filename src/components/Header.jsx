import React, { useEffect, useRef, useState } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { useProducts } from "../context/ProductsProvider";
import { getFromLocalStorage } from "../utils/localStorage";
import { useLocation } from "react-router-dom";

let isLogin = null;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayElem = useRef(null);
  const cardBasketElem = useRef(null);
  const cardBasketMobileElem = useRef(null);
  const mobileNavElem = useRef(null);
  const location = useLocation();

  const [state] = useProducts();
  useEffect(() => {
    isLogin = getFromLocalStorage("user") || null;
  }, []);

  useEffect(() => {
    setIsOpen(false);
    if (overlayElem.current) {
      overlayElem.current.classList.remove("overlay--show");
    }
    if (cardBasketElem.current) {
      cardBasketElem.current.classList.remove("card-basket--show");
    }
    if (cardBasketMobileElem.current) {
      cardBasketMobileElem.current.classList.remove("card-basket-mobile--show");
    }
    if (mobileNavElem.current) {
      mobileNavElem.current.classList.remove("mobile-nav--show");
    }
  }, [location.pathname]);

  const overlayHandler = () => {
    setIsOpen(true);
    if (overlayElem.current) {
      overlayElem.current.classList.add("overlay--show");
    }
    setIsOpen(true);
    if (cardBasketElem.current) {
      cardBasketElem.current.classList.add("card-basket--show");
    }
  };

  const mobileOverlayHandler = () => {
    setIsOpen(true);
    overlayElem.current.classList.add("overlay--show");
    cardBasketMobileElem.current.classList.add("card-basket-mobile--show");
  };

  const closeBasketHandler = () => {
    setIsOpen(false);
    if (cardBasketElem.current) {
      cardBasketElem.current.classList.remove("card-basket--show");
    }
    if (overlayElem.current) {
      overlayElem.current.classList.remove("overlay--show");
    }
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
      <DesktopHeader
        overlayHandler={overlayHandler}
        cardBasketElem={cardBasketElem}
        closeBasketHandler={closeBasketHandler}
        state={state}
        isLogin={isLogin}
      />

      {/* 
            Mobile Header      
      */}
      <MobileHeader
        showMobileNavHandler={showMobileNavHandler}
        mobileNavElem={mobileNavElem}
        closeMobileNavHandler={closeMobileNavHandler}
        mobileOverlayHandler={mobileOverlayHandler}
        cardBasketMobileElem={cardBasketMobileElem}
        closeBasketMobileHandler={closeBasketMobileHandler}
        state={state}
        isLogin={isLogin}
      />
      <div className="overlay" ref={overlayElem}></div>
    </header>
  );
}

export default Header;
