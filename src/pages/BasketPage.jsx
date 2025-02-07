import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { useProducts } from "../context/ProductsProvider";
import EmptyBasket from "../components/EmptyBasket";
import ProductBasket from "../components/ProductBasket";
import { BsBasket3Fill } from "react-icons/bs";

function BasketPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [state, dispatch] = useProducts();
  const [step, setStep] = useState(1);

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();
    setForm((form) => ({ ...form, [name]: value }));
  };

  const clickHandler = () => {
    if (
      !form.address.length ||
      form.email.length < 8 ||
      form.name.length < 3 ||
      form.phone.length < 11
    ) {
      toast.error("تعداد کاراکترهای وارد شده نامعبر میباشد.");
      return;
    }
    dispatch({
      type: "CHECKOUT",
      payload: [state.selectedItems, form],
    });
    setStep(1);
    toast.success("پرداخت شما با موفقیت انجام شد.");
  };

  return (
    <div className="container">
      <ToastContainer position="top-right" autoClose={4000} />
      <div className="my-8 flex items-center gap-x-2">
        <h2 className="text-3xl">سبد خرید</h2>
        <BsBasket3Fill />
      </div>
      {step === 1 && !!state.count && (
        <>
          <div className="flex justify-between text-xl border-b border-brown-dark pb-5">
            <h4>محصول</h4>
            <div className="flex gap-x-12 md:gap-x-32">
              <h4>مبلغ کل</h4>
              <h4>تعداد</h4>
              <h4>مبلغ واحد</h4>
            </div>
          </div>
          <div>
            {state.selectedItems.map((item) => (
              <ProductBasket key={item.id} data={item} dispatch={dispatch} />
            ))}
          </div>
          <div className="flex justify-between text-white">
            <button
              onClick={() => setStep(2)}
              className="bg-brown-medium hover:text-brown-dark transition-colors rounded-full p-3 my-5"
            >
              ادامه جهت تسویه حساب
            </button>
            <div className="bg-brown-medium rounded-full p-3 my-5">
              مبلغ کل: {state.totalPrice.toLocaleString()} تومان
            </div>
          </div>
        </>
      )}
      {step === 1 && !state.count && <EmptyBasket />}
      {step === 2 && (
        <form
          action=""
          className="flex flex-col items-center my-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 child:w-full child:sm:w-[200px] child:border child:border-brown-dark child:rounded-md child:p-2 mb-3">
            <input
              name="name"
              value={form.name}
              type="text"
              placeholder="نام و نام خانوادگی"
              onChange={(event) => changeHandler(event)}
            />
            <input
              name="email"
              value={form.email}
              type="text"
              placeholder="ایمیل"
              onChange={(event) => changeHandler(event)}
            />
            <input
              name="phone"
              value={form.phone}
              type="text"
              placeholder="شماره تماس"
              onChange={(event) => changeHandler(event)}
            />
          </div>
          <textarea
            className="w-full sm:w-[450px] p-2 border border-brown-dark rounded-md"
            placeholder="آدرس"
            name="address"
            value={form.address}
            onChange={(event) => changeHandler(event)}
          ></textarea>
          <div className="flex gap-x-3">
            <button
              onClick={clickHandler}
              className="bg-brown-medium text-white hover:text-brown-dark transition-colors rounded-full p-3 mt-3"
            >
              تسویه حساب
            </button>
            <button
              onClick={() => setStep(1)}
              className="bg-brown-medium text-white hover:text-brown-dark transition-colors rounded-full p-3 mt-3"
            >
              بازگشت به مرحله قبل
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default BasketPage;
