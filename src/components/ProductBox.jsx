import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductsProvider";
import { calcQuantity } from "../utils/products";

function ProductBox({ data }) {
  const { id, title, percent, img, preprice, newprice, brand } = data;
  const [state, dispatch, products] = useProducts();
  const quantity = calcQuantity(state, id);
  console.log(state)

  return (
    <div className="border border-brown-dark w-[200px] bg-white text-brown-dark rounded-md pt-10 pb-3 px-6">
      <Link to={`/products/${id}`}>
        <div className="relative flex items-center justify-center">
          <img src={img} alt={title} className="w-[130px] h-[210px]" />
          <span className="absolute -top-5 -left-4 bg-brown-light rounded-full p-1">
            {percent}%
          </span>
        </div>
        <h3 className="text-sm my-3 text-center">{title}</h3>
      </Link>
      <div className="text-xs flex justify-between">
        <span className="text-brown-medium">{brand}</span>
        <div className="flex flex-col">
          <span className="line-through text-brown-medium">
            {preprice.toLocaleString()} تومان
          </span>
          <span>{newprice.toLocaleString()} تومان</span>
        </div>
      </div>
      <div className="bg-brown-light flex items-center justify-between mx-auto flex-col sm:flex-row mt-3 md:mt-0 md:gap-x-3 rounded-md p-1 md:p-2">
        <div className="flex items-center flex-col sm:flex-row mx-auto gap-x-2 md:gap-x-3">
          <div className="flex items-center gap-x-2 my-2 sm:my-0">
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
                onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
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
    </div>
  );
}

export default ProductBox;
