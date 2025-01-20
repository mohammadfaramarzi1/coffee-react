import React from "react";

import Heading from "../shared/Heading";
import { Link } from "react-router-dom";

function Brands() {
  return (
    <div className="container mt-16">
      <Heading title="قهوه ها بر اساس برند" />
      <div className="flex flex-wrap gap-5 justify-center mt-5 child:border child:border-brown-dark child:rounded-full child:p-2 child:text-center">
        <Link to="/products">
          <img src="/images/Figure → Frame-14.png.png" alt="" />
          <span>Griffon</span>
        </Link>
        <Link to="/products">
          <img src="/images/Figure → download.jpg.png" alt="" />
          <span>Lemm</span>
        </Link>
        <Link to="/products">
          <img src="/images/Figure → channels4_profile.jpg.png" alt="" />
          <span>Bonmano</span>
        </Link>
        <Link to="/products">
          <img
            src="/images/Figure → a2b48a8cd8b925efdcfcd699567e74967ac55aff_1607154827.jpg.png"
            alt=""
          />
          <span>Tamkins</span>
        </Link>
        <Link to="/products">
          <img src="/images/Figure → mont.png.png" alt="" />
          <span>Mont</span>
        </Link>
        <Link to="/products">
          <img src="/images/Figure → Logo-Blue-01.jpg.png" alt="" />
          <span>Alba</span>
        </Link>
        <Link to="/products">
          <img src="/images/Figure → 4ec3898f.png.png" alt="" />
          <span>Hayk</span>
        </Link>
        <Link to="/products">
          <img src="/images/Figure → 1666700746475.jpg.png" alt="" />
          <span>Xav</span>
        </Link>
      </div>
    </div>
  );
}

export default Brands;
