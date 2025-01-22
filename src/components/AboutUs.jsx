import React, { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="my-8 text-center">
      <div className="about-banner">
        <h2 className="text-3xl">به فروشگاه میم کافه خوش آمدید!</h2>
        <p className="text-xl text-brown-medium my-2">
          ما عاشق قهوه‌ای هستیم که لحظات روزمره شما را خاص‌تر می‌کند. با سال‌ها
          تجربه در انتخاب، برشته‌کاری و ارائه بهترین دانه‌های قهوه از سراسر
          جهان، تلاش می‌کنیم تجربه‌ای منحصر به فرد از طعم و عطر قهوه را برای شما
          به ارمغان بیاوریم.
        </p>
      </div>
      <div className="flex flex-col mt-16 child:flex child:items-center gap-3 child:text-sm sm:child:text-xl child:justify-evenly">
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img
            src="/images/35973.jpg"
            alt=""
            className="w-[250px] sm:w-[350px]"
          />
          <p className="max-w-[400px]">
            در فروشگاه ما، کیفیت حرف اول را می‌زند. از مزارع قهوه تا فنجان شما،
            تمام مراحل با دقت و حساسیت انجام می‌شود تا اطمینان حاصل کنیم که هر
            جرعه از قهوه ما طعمی دلپذیر و خاطره‌انگیز دارد.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <p className="max-w-[400px]">
            ما معتقدیم که قهوه فقط یک نوشیدنی نیست، بلکه یک تجربه است. به همین
            دلیل، مجموعه‌ای متنوع از انواع قهوه‌های تخصصی، دانه‌های تازه
            برشته‌شده و تجهیزات حرفه‌ای را برای شما فراهم کرده‌ایم تا بتوانید در
            خانه یا محل کار از بهترین طعم قهوه لذت ببرید.
          </p>
          <img
            src="/images/7429176.jpg"
            alt=""
            className="w-[200px] sm:w-[350px]"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img
            src="/images/7427525.jpg"
            alt=""
            className="w-[200px] sm:w-[350px]"
          />
          <p className="max-w-[400px]">
            ما همیشه در تلاشیم تا علاوه بر ارائه محصولات باکیفیت، اطلاعات لازم
            درباره روش‌های دم‌آوری، نگهداری قهوه و انتخاب بهترین ترکیبات را با
            شما به اشتراک بگذاریم.
          </p>
        </div>
      </div>
      <p className="my-2 text-md sm:text-lg">
        از اینکه ما را برای تجربه قهوه‌ای متفاوت انتخاب کرده‌اید، سپاسگزاریم.
      </p>
      <p className="text-brown-medium">
        با عشق و احترام، تیم فروشگاه میم کافه ❤️
      </p>
    </div>
  );
}

export default AboutUs;
