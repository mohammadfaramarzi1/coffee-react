import React from "react";

import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

function ArticleSlider({ id, title, createdAt, img }) {
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
          <FaLongArrowAltLeft />
        </Link>
        <span className="text-xs">{createdAt}</span>
      </div>
    </div>
  );
}

export default ArticleSlider;
