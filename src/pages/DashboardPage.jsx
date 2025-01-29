import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdBasket } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import ReactApexChart from "react-apexcharts";

import { getItemFromLocalStorage } from "../utils/localStorage";

function DashboardPage() {
  const username = getItemFromLocalStorage("user", "name");
  const [state, setState] = React.useState({
    series: [
      {
        name: "امسال",
        data: [4, 5, 28, 51, 42, 109, 100],
      },
      {
        name: "سال قبل",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      colors: ["#4F2C19", "#B0A27B"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2025-09-19T00:00:00.000Z",
          "2025-09-19T01:30:00.000Z",
          "2025-09-19T02:30:00.000Z",
          "2025-09-19T03:30:00.000Z",
          "2025-09-19T04:30:00.000Z",
          "2025-09-19T05:30:00.000Z",
          "2025-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });
  return (
    <div>
      <header className="fixed top-0 right-0 left-0 bg-brown-medium p-3 text-center">
        <h1>
          <span className="text-lg">{username} </span> خوش آمدید❤️
        </h1>
      </header>
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
      <main className="mt-[60px] mr-[220px]">
        <h2 className="text-lg">نمودار خرید محصول توسط شما</h2>
        <div className="mt-10">
          <div id="chart">
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="area"
              height={350}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
