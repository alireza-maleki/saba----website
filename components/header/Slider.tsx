import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButton from "../swiper-button/SwiperButton";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const DUMMY_SWIPER_SLIDER = [
  {
    id: 1,
    title:
      "اپلیکیشن صبابار سامانه اینترنتی اعلام بار و حمل بار است. اپلیکیشن اعلام بار که به صورت نسخه سوپر اپلیکیشن موبایل است و امکان ثبت درخواست حمل بار توسط کاربران و باربری ها و پذیرش آن توسط رانندگان است. به عبارت دیگر صبابار پل ارتباطی رانندگان و شرکتهای حمل ونقل در بستر اینترنت است.",
    src: "/images/slider/app.jpeg",
    app: "اپلیکیشن صبا بار",
    isValid: true,
  },
  {
    id: 2,
    title:
      "پرداخت الکترونیکی بارنامه های جاده ای، ریلی، هوایی و دریایی و پرداخت الکترونیکی حقوق، دستمزد و ... شرکت های درخواست کننده حمل بار از طریق پورتال سامانه صبا بار و کنترل و مدیریت بارهای حمل شده و هزینه آن از طریق مدیریت بارنامه ها و سامانه پرداخت صباپی.",
    src: "/images/slider/barname.jpg",
    app: "سیستم مدیریت عملیات بار",
    isValid: false,
  },
  {
    id: 3,
    title:
      "نرم افزار راهکار سازمانی صبا (ERP) جهت مدیریت فرآیندهای درون سازمانی به صورت خاص برای شرکت¬های لجستیکی طراح شده است اما برای سازمان¬های دیگر هم قابلیت پیاده سازی را دارد. از ویژگیهای خاص این محصول تعریف روابط سازمانی به صورت شرکت¬های  هلدینگی است.",
    src: "/images/slider/erp.png",
    app: "سامانه نرم افزار راهکار سازمانی صبا",
    isValid: false,
  },
];

// === Download Sababar App ===
const handleDownload = () => {
  const apkUrl = "/public/application/sababar.apk"; // مسیر فایل APK در پوشه public
  const link = document.createElement("a");
  link.href = apkUrl;
  link.download = "sababar.apk"; // نام فایل دانلودی
  link.click();
};

const Slider = () => {
  return (
    <div
      className="relative w-screen h-screen bg-gray-300 overflow-hidden"
      id="/"
    >
      <div className="z-50 md:z-0 w-full h-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          // navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          speed={1000}
          className={`w-full h-full`}
          breakpoints={{
            0: {
              speed: 300, // سرعت اسلایدر برای موبایل با عرض صفحه 768px و بیشتر
            },
            576: {
              speed: 1000,
          },
          }}
        >
          {DUMMY_SWIPER_SLIDER.map((item) => (
            <SwiperSlide className="w-full h-full" key={item.id}>
              <Image
                className="w-full h-full object-cover"
                src={item.src}
                alt="slider"
                width={800}
                height={500}
                // loading="lazy"
              />

              <div className="md:block w-full h-full flex items-center justify-center overflow-hidden bg-red-200">
                <div className=" z-0 backdrop-blur-[1px] absolute text-red-500 top-[20%] md:left-[5%] lg:left-[18%] lg:top-[24%] bg-[#ffffff99] py-16 p-10 rounded-3xl w-[400px] md:w-[700px] lg:w-[800px] h-[500px] border-2 border-white ">
                  <div className="absolute z-10 w-50 h-50 md:w-100 md:h-100 p-16 md:p-20 lg:p-28 rounded-full bg-[#ffffff99] -top-10 -right-6 md:-top-20 lg:-top-16 md:-right-[6%] lg:-right-[22%] backdrop-blur-[1px] border-2 border-white"></div>

                  <div className="text-center md:text-start flex flex-col justify-between w-full h-full">
                    <div className="md:max-w-full">
                      <h1 className="text-[#4a6586] text-[30px] md:text-[40px] lg:text-[50px] font-black md:pr-2">
                        {item.app}
                      </h1>
                    </div>

                    <div className="max-w-[600px] text-sm">
                      <p className="text-black font-thin text-sm md:text-[16px] leading-8 md:leading-10">
                        {item.title}
                      </p>
                    </div>

                    <div>
                      {item.isValid ? (
                        <div className="flex items-center gap-4">
                          <button
                            onClick={handleDownload}
                            className="border border-indigo-300 border-2xl px-10 py-2 rounded-full text-white text-sm md:text-lg bg-gradient-to-r from-indigo-900 to-indigo-300 hover:-translate-y-1 transition duration-300 ease-in"
                          >
                            نسخه اندروید
                          </button>
                          <Link
                            href="https://app.sababar.com/login"
                            className="border border-indigo-300 border-2xl px-10 py-2 rounded-full text-white text-sm md:text-lg bg-gradient-to-r from-indigo-900 to-indigo-300 hover:-translate-y-1 transition duration-300 ease-in"
                          >
                            نسخه تحت وب
                          </Link>
                        </div>
                      ) : (
                        <Link
                          href={
                            item.app === "سیستم مدیریت عملیات بار"
                              ? "https://transport.sababar.com"
                              : "https://erp.sababar.net:9443/Account/Login"
                          }
                          className="border border-indigo-300 border-2xl px-10 py-2 rounded-full text-white text-md bg-gradient-to-r from-indigo-900 to-indigo-300 hover:-translate-y-1 transition duration-300 ease-in"
                        >
                          رفتن به سایت
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="absolute w-100 h-100 p-10 md:p-14 rounded-full bg-[#ffffff99] -bottom-12 md:-bottom-16 -left-6 lg:-left-16 backdrop-blur-[1px] border-2 border-white"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <SwiperButton />
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
