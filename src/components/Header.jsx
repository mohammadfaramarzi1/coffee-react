import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="/openmoji_roasted-coffee-bean.png" alt="" />
        میم کافه
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link to="/products">لیست محصولات</Link>
          </li>
          <li>
            <Link to="/services">خدمات</Link>
          </li>
          <li>
            <Link to="/about">درباره ما</Link>
          </li>
          <li>
            <Link to="/contact">تماس با ما</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
