import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdBasket } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import ReactApexChart from "react-apexcharts";

import { getItemFromLocalStorage } from "../utils/localStorage";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

function DashboardPage({username}) {
  const [chart, setChart] = React.useState({
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
        labels: {
          style: {
            fontSize: "16px", // Change font size
            fontFamily: "lale",
          },
        },
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
      yaxis: {
        labels: {
          style: {
            fontSize: "16px", // Change font size
            fontFamily: "lale",
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      theme: {
        fontFamily: "lale",
        fontSize: "32px", // Change to your desired font
      },
    },
  });
  return (
    <div>
      <DashboardHeader username={username} />
      <DashboardSidebar />
      <main className="mt-[60px] mr-[220px]">
        <h2 className="text-lg">نمودار خرید محصول توسط شما</h2>
        <div className="mt-10">
          <div id="chart">
            <ReactApexChart
              options={chart.options}
              series={chart.series}
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
