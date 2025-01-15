import React from "react";
import { Link } from "react-router-dom";

function Introduce() {
  return (
    <div className="container flex flex-col-reverse sm:flex-row sm:flex-row gap-x-3  mt-16 bg-brown-dark rounded-md text-brown-light py-4 px-32">
      <div className="flex flex-col justify-center text-center sm:text-right">
        <h4 className="text-2xl md:text-4xl text-brown-medium">میم کافه</h4>
        <p className="text-sm md:text-lg text-justify my-5 sm:max-w-[500px]">
          با بیش از ده سال تجربه در اداره کافه‌ها و رستوران‌ها، و پنج سال سابقه
          در عرصه‌ی آموزش و تولید و فروش قهوه، ما در زمینه‌ی خدمات قهوه به شما
          اطمینان می‌دهیم. تخصص ما در ترکیب بی‌نظیر علم قهوه با تجربه رستورانی،
          تجربه‌ی بی‌نظیری را برای شما ایجاد خواهیم کرد.
        </p>
        <Link to="/about" className="bg-brown-medium rounded-full w-32 h-10 !leading-10 text-center hover:text-brown-dark transition-colors text-sm md:text-lg mx-auto sm:mr-0">درباره ما</Link>
      </div>
      <div className="flex items-center justify-center mb-5 sm:mb-0">
        <img src="../../public/images/Border (1).png" alt="" />
      </div>
    </div>
  );
}

export default Introduce;
