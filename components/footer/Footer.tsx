import React from "react";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="w-screen h-[600px] bg-[#131729] py-16" id="footer">
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row text-center md:text-start space-y-8 md:space-y-0 items-center justify-around">
          <div>
            <p className="text-[#b0b0b1] pb-2 text-lg">تماس با ما</p>
            <h1
              className="text-[#5e71db] font-bold text-2xl md:text-3xl"
              style={{direction: "ltr"}}
            >
              ۰۲۱ - ۲۲۷۷۸۳۰۰
            </h1>
          </div>

          <div>
            <p className="text-[#b0b0b1] text-lg">ما را ملاقات کنید</p>
            <p className="py-2 text-lg">پاسداران بین نیستان نهم و دهم</p>
            <p className="text-lg">info@sababar.com</p>
          </div>

          <div className="grid grid-cols-3 grid-rows-1 gap-2">
            <FaFacebookF className="bg-[#5e71db] p-2 w-10 h-10 rounded-full cursor-pointer" />
            <BiLogoTwitter className="bg-[#5e71db] p-2 w-10 h-10 rounded-full cursor-pointer" />
            <FaInstagram className="bg-[#5e71db] p-2 w-10 h-10 rounded-full cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around md:pt-32 md:px-36">
          <div className="text-center md:text-start mt-24 md:mt-0 py-10 md:py-0">
            <h3 className="font-bold text-xl pb-4">درباره ما</h3>
            <p className="w-[100%] md:w-[70%] text-sm leading-7">
              کلیه محصولات شرکت صبا به صورت ۲۴ ساعته توسط شرکت صنعت بار
              الکترونیک پشتیبانی می‌شوند. جهت درخواست پشتیبانی از طریق ایمیل یا
              شماره تماس شرکت اقدام نمایید.
            </p>
          </div>

          {/* flex flex-col md:flex-row text-center md:text-start space-y-10 md:space-y-0 md:space-x-24 pt-10 md:pt-0 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 grid-rows-1 w-full">
            <div className="flex flex-col text-center md:text-start items-center md:items-start">
              <p className="font-bold text-xl pb-3">شرکت</p>
              <ul
                className={`flex flex-col items-center text-[13px] font-thin space-y-2 ${classes["list-item"]}`}
              >
                <li>درباره ما</li>
                <li>مشاغل</li>
                <li>ارتباط</li>
                <li>وبلاگ</li>
              </ul>
            </div>

            <div className="flex flex-col text-center md:text-start items-center md:items-start">
              <p className="font-bold text-xl pb-3">سایر راه ها</p>
              <ul
                className={`flex flex-col items-center text-[13px] font-thin space-y-2 ${classes["list-item"]}`}
              >
                <li>قابلیت</li>
                <li>تیم</li>
                <li>قیمت ها</li>
                <li>اطلاعات</li>
              </ul>
            </div>

            <div className="flex flex-col text-center md:text-start items-center md:items-start">
              <p className="font-bold text-xl pb-3">حمایت</p>
              <ul
                className={`flex flex-col items-center text-[13px] font-thin space-y-2 ${classes["list-item"]}`}
              >
                <li>ارتباطات</li>
                <li>تیم ما</li>
                <li>سرویس ها</li>
                <li>راهنما</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
