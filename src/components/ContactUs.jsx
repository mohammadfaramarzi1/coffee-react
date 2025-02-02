import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const clickHandler = () => {
    if (
      form.name.length < 3 ||
      form.lastName.length < 3 ||
      form.email.length < 8 ||
      form.phone.length < 11 ||
      !form.message
    ) {
      toast.error("تعداد کاراکترهای وارد شده صحیح نمیباشد.");
      return
    }
    toast.success("پیغام شما با موفقیت ارسال شد. با سپاس از همکاری شما");
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="container">
      <div className="flex flex-col sm:flex-row bg-brown-medium rounded-md my-10 overflow-hidden max-w-[800px] mx-auto">
        <img
          src="/images/coffee-beans-min.jpg"
          alt=""
          className="w-full sm:w-[450px] sm:h-[450px]"
        />
        <form
          className="w-full p-5 flex flex-col justify-center gap-y-10"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="flex justify-between gap-x-5 gap-y-0 sm:gap-y-5">
            <input
              type="text"
              placeholder="نام"
              value={form.name}
              onChange={(event) => changeHandler(event)}
              name="name"
              className="w-full outline-none border-b border-brown-dark bg-transparent text-brown-dark placeholder-brown-light pb-2"
            />
            <input
              type="text"
              placeholder="نام خانوادگی"
              value={form.lastName}
              onChange={(event) => changeHandler(event)}
              name="lastName"
              className="w-full outline-none border-b border-brown-dark bg-transparent text-brown-dark placeholder-brown-light pb-2"
            />
          </div>
          <div className="flex justify-between gap-x-5 gap-y-0 sm:gap-y-5">
            <input
              type="email"
              placeholder="email"
              value={form.email}
              onChange={(event) => changeHandler(event)}
              name="email"
              className="w-full outline-none border-b border-brown-dark bg-transparent text-brown-dark placeholder-brown-light pb-2"
            />
            <input
              type="text"
              placeholder="شماره تماس"
              value={form.phone}
              onChange={(event) => changeHandler(event)}
              name="phone"
              className="w-full outline-none border-b border-brown-dark bg-transparent text-brown-dark placeholder-brown-light pb-2"
            />
          </div>
          <textarea
            className="outline-none border-b border-brown-dark bg-transparent text-brown-dark placeholder-brown-light pb-1 my-5 overflow-hidden"
            rows="5"
            value={form.message}
            onChange={(event) => changeHandler(event)}
            name="message"
            id=""
            placeholder="پیغام خود را وارد کنید..."
          ></textarea>
          <button
            onClick={clickHandler}
            className="bg-brown-light rounded-md w-32 h-10 mx-auto"
          >
            ارسال پیغام
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default ContactUs;
