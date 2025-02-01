import React, { useRef } from "react";
import { BiCategoryAlt } from "react-icons/bi";

function CategoryList({ setSearchParams }) {
  const categoryRef = useRef(null);
  console.log(categoryRef);

  const clickHandler = (event) => {
    const elem = event.target;
    const tagName = elem.tagName;
    console.log(categoryRef.current.childNodes);
    if (!tagName === "LI") return;

    categoryRef.current.childNodes.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        item.classList.add("text-white");
        console.log(categoryRef.current.childNodes);
      }
    });
    elem.classList.add("active");
    elem.classList.remove("text-white");
    setSearchParams(elem.dataset.cat);
  };

  return (
    <div className="bg-brown-medium py-4 px-2 rounded-md flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row justify-between">
      <div className="flex gap-x-1 items-center">
        <BiCategoryAlt />
        <h5>دسته بندی محصولات</h5>
      </div>
      <ul
        ref={categoryRef}
        className="flex items-center justify-center sm:justify-between gap-x-4"
        onClick={clickHandler}
      >
        <li
          data-cat="all"
          className="active hover:text-[#ebdcad] transition-colors cursor-pointer"
        >
          همه ی محصولات
        </li>
        <li
          data-cat="melo"
          className="text-white hover:text-[#ebdcad] transition-colors cursor-pointer"
        >
          ملو
        </li>
        <li
          data-cat="lavaza"
          className="text-white hover:text-[#ebdcad] transition-colors cursor-pointer"
        >
          لاوازا
        </li>
        <li
          data-cat="bonmano"
          className="text-white hover:text-[#ebdcad] transition-colors cursor-pointer"
        >
          بن مانو
        </li>
        <li
          data-cat="mesta"
          className="text-white hover:text-[#ebdcad] transition-colors cursor-pointer"
        >
          مستا
        </li>
        <li
          data-cat="peru"
          className="text-white hover:text-[#ebdcad] transition-colors cursor-pointer"
        >
          پرو
        </li>
      </ul>
    </div>
  );
}

export default CategoryList;
