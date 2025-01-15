import React from "react";

import { Link } from "react-router-dom";


function ArticleSlider() {
  return (
    <div className="bg-brown-light rounded-md w-[210px] p-2 ms-auto">
      <img src="../../public/images/Frame 54.png" alt="" />
      <p className="text-sm text-justify my-4">
        لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن متن تستی
        مینویسند!
      </p>
      <div className="flex items-center gap-x-4">
        <Link to="/articles" className="flex items-center gap-x-1 text-xs">
          مشاهده بیشتر
          <svg className="w-5 h-5">
            <use href="#arrow-left"></use>
          </svg>
        </Link>
        <span className="text-xs">19 اردیبهشت 1402</span>
      </div>
    </div>
  );
}

export default ArticleSlider;
