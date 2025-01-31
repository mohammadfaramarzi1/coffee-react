import React from "react";
import { BiCategoryAlt } from "react-icons/bi";

function CategoryList() {
  return (
    <div className="bg-brown-medium py-4 px-2 rounded-md flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row justify-between">
      <div className="flex gap-x-1 items-center">
        <BiCategoryAlt />
        <h5>دسته بندی محصولات</h5>
      </div>
      <ul className="flex items-center gap-x-4">
        <li>
          <button className="text-white hover:text-brown-light transition-colors">همه ی محصولات</button>
        </li>
        <li>
          <button className="text-white hover:text-brown-light transition-colors">دانه قهوه</button>
        </li>
        <li>
          <button className="text-white hover:text-brown-light transition-colors">پودریجات</button>
        </li>
        <li>
          <button className="text-white hover:text-brown-light transition-colors">اکسسوری</button>
        </li>
      </ul>
    </div>
  );
}

export default CategoryList;
