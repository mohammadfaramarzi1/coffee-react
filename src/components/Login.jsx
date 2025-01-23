import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-[#FFF8F5] flex flex-col justify-center items-center text-center h-screen">
      <div className="pt-5">
        <Link to="/" className="flex items-center justify-ceneter">
          <img
            src="/openmoji_roasted-coffee-bean.png"
            alt=""
            className="w-10 h-10"
          />
          <h1 className="text-3xl">میم کافه</h1>
        </Link>
      </div>
      <div className="mt-16">
        <div className="bg-brown-light w-16 h-16 rounded-full mx-auto">
          <svg className="w-[66px] h-[50px]">
            <use href="#category-coffee"></use>
          </svg>
        </div>
        <h2 className="my-5 text-xl">ورود</h2>
        <input
          type="text"
          placeholder="نام کاربری"
          className="block my-5 border border-brown-dark rounded-md px-4 py-1 outline-none"
        />
        <input
          type="text"
          placeholder="ایمیل"
          className="block my-5 border border-brown-dark rounded-md px-4 py-1 outline-none"
        />
        <input
          type="password"
          placeholder="رمز"
          className="block my-5 border border-brown-dark rounded-md px-4 py-1 outline-none"
        />
        <button className="bg-brown-medium w-full rounded-md text-white hover:text-brown-dark transition-colors">
          ورود
        </button>
        <p className="mt-5 mb-1">آیا حساب کاربری ندارید؟</p>
        <Link
          to="/register"
          className="block bg-brown-medium w-full rounded-md text-white hover:text-brown-dark transition-colors"
        >
          ثبت نام
        </Link>
      </div>
    </div>
  );
}

export default Login;
