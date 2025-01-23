import React from "react";

function ShortProductBasket({ data, isMobile }) {
  const { img, title, newprice } = data;
  return (
    <div className="flex items-center gap-x-2 mt-5 text-center">
      <img src={img} alt="" className={isMobile ? "w-16" : "w-10"} />
      <h5 className={isMobile ? "text-md" : "text-xs"}>{title}</h5>
      <span className={isMobile ? "text-md" : "text-xs"}>
        {newprice.toLocaleString()} تومان
      </span>
    </div>
  );
}

export default ShortProductBasket;
