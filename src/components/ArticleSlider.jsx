import React from "react";

import { Link } from "react-router-dom";

function ArticleSlider({ id, title, createdAt, desc, img }) {
  return (
    <div className="bg-brown-light rounded-md w-[210px] h-[245px] p-2 ms-auto flex flex-col justify-between">
      <img src={img} alt={title} />
      <p className="text-sm text-justify my-4">{title}</p>
      <div className="flex items-center gap-x-4">
        <Link
          to={`/articles/${id}`}
          className="flex items-center gap-x-1 text-xs"
        >
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
