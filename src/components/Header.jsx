import React, { useRef } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

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
      <DesktopHeader
        overlayHandler={overlayHandler}
        cardBasketElem={cardBasketElem}
        closeBasketHandler={closeBasketHandler}
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
      />
      <div className="overlay" ref={overlayElem}></div>
    </header>
  );
}

export default Header;
