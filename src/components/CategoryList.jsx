import React from "react";

function CategoryList() {
  return (
    <div className="bg-brown-medium py-4 px-2 rounded-md flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row justify-between">
      <div className="flex gap-x-1">
        <svg className="w-6 h-6">
          <use href="#category"></use>
        </svg>
        <h5>دسته بندی محصولات</h5>
      </div>
      <ul className="flex items-center gap-x-4">
        <li>
          <button className="text-white">همه ی محصولات</button>
        </li>
        <li>
          <button className="text-white">دانه قهوه</button>
        </li>
        <li>
          <button className="text-white">پودریجات</button>
        </li>
        <li>
          <button className="text-white">اکسسوری</button>
        </li>
      </ul>
    </div>
  );
}

export default CategoryList;
