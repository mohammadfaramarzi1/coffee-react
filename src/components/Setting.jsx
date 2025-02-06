import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { toast, ToastContainer } from "react-toastify";

import { addToLocalStorage, getFromLocalStorage } from "../utils/localStorage";

function Setting({ username, setUsername }) {
  const [form, setForm] = useState(() => getFromLocalStorage("user"));

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const clickHandler = () => {
    addToLocalStorage("user", form);
    setUsername(form.name);
    toast.success("تغییر اطلاعات شما با موفقیت انجام شد");
  };

  return (
    <div>
      <DashboardHeader username={username} />
      <DashboardSidebar />
      <main className="mt-[60px] mr-[190px] sm:mr-[220px]">
        <h2 className="text-lg">تنظیمات کاربری</h2>
        <form
          onSubmit={(event) => event.preventDefault()}
          className="mx-auto my-5 border border-brown-dark rounded-md p-5 max-w-[400px]"
        >
          <div className="flex flex-wrap gap-3 justify-center child:flex child:items-center child:justify-between child:w-full child:gap-x-3 child:placeholder:text-sm child:text-sm">
            <div>
              <span className="text-xs sm:text-lg">نام و نام خانوادگی: </span>
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="border border-brown-dark rounded-md p-2"
                value={form.name}
                onChange={(event) => changeHandler(event)}
                name="name"
              />
            </div>
            <div>
              <span className="text-xs sm:text-lg">ایمیل: </span>
              <input
                type="text"
                placeholder="ایمیل"
                className="border border-brown-dark rounded-md p-2"
                value={form.email}
                onChange={(event) => changeHandler(event)}
                name="email"
              />
            </div>
            <div>
              <span className="text-xs sm:text-lg">رمز عبور: </span>
              <input
                type="text"
                placeholder="رمز عبور"
                className="border border-brown-dark rounded-md p-2"
                value={form.password}
                onChange={(event) => changeHandler(event)}
                name="password"
              />
            </div>
          </div>
          <button
            onClick={clickHandler}
            className="mx-auto w-full bg-brown-medium rounded-full p-2 text-white hover:text-brown-dark transition-colors mt-10"
          >
            تغییر اطلاعات
          </button>
        </form>
      </main>
      <ToastContainer />
    </div>
  );
}

export default Setting;
