import React from "react";
import { useProducts } from "../context/ProductsProvider";
import EmptyBasket from "../components/EmptyBasket";

function BasketPage() {
  const [state, dispatch] = useProducts();
  console.log(state);

  return (
    <div className="container">
      <div className="my-8 flex items-center gap-x-2">
        <h2 className="text-3xl">سبد خرید</h2>
        <svg className="w-6 h-6">
          <use href="#basket"></use>
        </svg>
      </div>
      {state.count ? (
        <>
          <div className="flex justify-between text-xl">
            <h4>محصول</h4>
            <div className="flex gap-x-32">
              <h4>مبلغ کل</h4>
              <h4>تعداد</h4>
              <h4>مبلغ واحد</h4>
            </div>
          </div>
        </>
      ) : (
        <EmptyBasket />
      )}
    </div>
  );
}

export default BasketPage;
