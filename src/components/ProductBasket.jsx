import React from "react";

function ProductBasket({ data, dispatch }) {
  const { img, title, quantity, newprice } = data;
  console.log(data);
  return (
    <div className="my-6 flex items-center justify-between gap-x-8">
      <div className="flex items-center gap-x-3">
        <button
          onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
          className="bg-brown-medium px-2 rounded-full"
        >
          x
        </button>
        <img src={img} alt="" className="w-[52px] sm:w-[80px] md:w-[130px]" />
        <h3 className="text-xs sm:text-sm xl:text-lg text-center">{title}</h3>
      </div>
      <div className="flex justify-between items-center gap-x-6 md:gap-x-12">
        <span className="text-xs sm:text-sm xl:text-lg text-center">
          {(quantity * newprice).toLocaleString()} تومان
        </span>
        <div className="bg-brown-light w-[100px] sm:w-[120px] flex items-center justify-between flex-col sm:flex-row gap-x-2 mt-3 md:mt-0 md:gap-x-3 rounded-md p-1 md:p-2">
          <div className="flex items-center flex-col sm:flex-row gap-x-1 md:gap-x-3">
            <div className="flex items-center gap-x-1 my-2 sm:my-0">
              {quantity >= 1 && (
                <button
                  onClick={() =>
                    dispatch({ type: "INCREASE_ITEM", payload: data })
                  }
                  className="bg-brown-medium rounded-full flex items-center justify-center p-2 w-10 h-8"
                >
                  <svg className="w-3 h-3">
                    <use href="#plus"></use>
                  </svg>
                </button>
              )}
              {quantity === 0 && (
                <button
                  onClick={() => dispatch({ type: "ADD_ITEM", payload: data })}
                  className="bg-brown-medium rounded-full flex items-center justify-center p-2 w-10 h-8"
                >
                  <svg className="w-8 h-6">
                    <use href="#add-cart"></use>
                  </svg>
                </button>
              )}
              {quantity > 0 && <span>{quantity}</span>}
              {quantity > 1 && (
                <button
                  onClick={() =>
                    dispatch({ type: "DECREMENT_ITEM", payload: data })
                  }
                  className="bg-brown-medium rounded-full flex items-center justify-center p-2 w-10 h-8"
                >
                  <svg className="w-1 h-1">
                    <use href="#minus"></use>
                  </svg>
                </button>
              )}
              {quantity === 1 && (
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: data })
                  }
                  className="bg-brown-medium rounded-full flex items-center justify-center p-2 w-10 h-8"
                >
                  <svg className="w-10 h-6">
                    <use href="#delete-cart"></use>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
        <span className="text-xs sm:text-sm xl:text-lg text-center">
          {newprice.toLocaleString()} تومان
        </span>
      </div>
    </div>
  );
}

export default ProductBasket;
