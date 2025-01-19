import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const isShowLogin = location.pathname !== "/login";
  const isShowRegister = location.pathname !== "/register";

  return (
    <>
      {isShowLogin && isShowRegister && <Header />}
      {children}
      {isShowLogin && isShowRegister && <Footer />}
    </>
  );
}

export default Layout;
