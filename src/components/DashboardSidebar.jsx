import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosSettings, IoMdBasket } from "react-icons/io";
import { IoStorefrontSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

function DashboardSidebar() {
  return (
    <aside className="fixed  top-0 bottom-0 p-3 md:p-5 child:flex child:items-center child:gap-x-3 child:mt-10 child:text-md child:md:text-lg bg-brown-medium">
      <NavLink to="/dashboard">
        <FaHome />
        صفحه اصلی
      </NavLink>
      <NavLink to="/dashboard-buy">
        <IoMdBasket />
        محصولات خریداری شده
      </NavLink>
      <NavLink to="/dashboard-setting">
        <IoIosSettings />
        تنظیمات
      </NavLink>
      <Link to="/">
        <IoStorefrontSharp />
        بازگشت به فروشگاه
      </Link>
    </aside>
  );
}

export default DashboardSidebar;
