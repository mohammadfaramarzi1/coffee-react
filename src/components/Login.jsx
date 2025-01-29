import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { addToLocalStorage } from "../utils/localStorage";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const changeHandler = (event) => {
    const name = event.target.name;
    console.log(name);
    const value = event.target.value.trim();
    setForm((form) => ({ ...form, [name]: value }));
  };
  const clickHandler = () => {
    addToLocalStorage("user", form);
    toast.success("با موفقیت ثبت نام کردید. خوش آمدید");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
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
      <form className="mt-16" onSubmit={(event) => event.preventDefault()}>
        <div className="bg-brown-light w-16 h-16 rounded-full mx-auto">
          <svg className="w-[66px] h-[50px]">
            <use href="#category-coffee"></use>
          </svg>
        </div>
        <h2 className="my-5 text-xl">ثبت نام / ورود</h2>
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          name="name"
          className="block my-5 border border-brown-dark rounded-md px-4 py-1 outline-none"
          value={form.name}
          onChange={(event) => changeHandler(event)}
        />
        <input
          type="text"
          name="email"
          placeholder="ایمیل"
          className="block my-5 border border-brown-dark rounded-md px-4 py-1 outline-none"
          value={form.email}
          onChange={(event) => changeHandler(event)}
        />
        <input
          type="password"
          placeholder="رمز"
          name="password"
          className="block my-5 border border-brown-dark rounded-md px-4 py-1 outline-none"
          value={form.password}
          onChange={(event) => changeHandler(event)}
        />
        <button
          onClick={clickHandler}
          className="bg-brown-medium w-full rounded-md text-white hover:text-brown-dark transition-colors"
        >
          ثبت نام
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Register;
