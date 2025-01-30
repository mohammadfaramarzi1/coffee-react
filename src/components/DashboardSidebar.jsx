import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosSettings, IoMdBasket } from "react-icons/io";
import { NavLink } from "react-router-dom";

function DashboardSidebar() {
  return (
    <aside className="fixed  top-0 bottom-0 p-5 child:flex child:items-center child:gap-x-3 child:mt-10 child:text-lg bg-brown-medium">
      <NavLink to="/dashboard">
        <FaHome />
        صفحه اصلی
      </NavLink>
      <NavLink to="buy">
        <IoMdBasket />
        محصولات خریداری شده
      </NavLink>
      <NavLink to="setting">
        <IoIosSettings />
        تنظیمات
      </NavLink>
    </aside>
  );
}

export default DashboardSidebar;
