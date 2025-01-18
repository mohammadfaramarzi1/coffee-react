import React from "react";

function ContactUs() {
  return (
    <div className="container">
      <div className="flex flex-col sm:flex-row bg-brown-medium rounded-md my-10 overflow-hidden max-w-[800px] mx-auto">
        <img
          src="/images/coffee-beans-min.jpg"
          alt=""
          className="w-full sm:w-[450px] sm:h-[450px]"
        />
        <form className="w-full p-5 flex flex-col justify-center gap-y-10">
          <div className="flex justify-between gap-x-5 gap-y-0 sm:gap-y-5">
            <input
              type="text"
              placeholder="نام"
              className="w-full outline-none border-b border-brown-dark bg-transparent text-brown-dark placeholder-brown-light pb-2"
            />
            <input
              type="text"
              placeholder="نام خانوادگی"
              className="w-full outline-none border-b border-brown-dark bg-transparent text-brown-dark placeholder-brown-light pb-2"
            />
          </div>
          <div className="flex justify-between gap-x-5 gap-y-0 sm:gap-y-5">
            <input
              type="email"
              placeholder="ایمیل"
              className="w-full outline-none border-b border-brown-dark bg-transparent text-brown-dark placeholder-brown-light pb-2"
            />
            <input
              type="text"
              placeholder="شماره تماس"
              className="w-full outline-none border-b border-brown-dark bg-transparent text-brown-dark placeholder-brown-light pb-2"
            />
          </div>
          <textarea
            className="outline-none border-b border-brown-dark bg-transparent text-brown-dark placeholder-brown-light pb-1 my-5 overflow-hidden"
            rows="5"
            name=""
            id=""
            placeholder="پیغام خود را وارد کنید..."
          ></textarea>
          <button className="bg-brown-light rounded-md w-32 h-10 mx-auto">
            ارسال پیغام
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
