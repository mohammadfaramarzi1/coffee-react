import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const isShowLogin = location.pathname !== "/login";
  const isShowRegister = location.pathname !== "/register";
  const isShowDashboard = !location.pathname.includes("/dashboard")

  return (
    <>
      {isShowLogin && isShowRegister && isShowDashboard && <Header />}
      {children}
      {isShowLogin && isShowRegister && isShowDashboard && <Footer />}
    </>
  );
}

export default Layout;
