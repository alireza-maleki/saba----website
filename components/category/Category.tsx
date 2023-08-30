import React from "react";

import {
  MdOutlineBrandingWatermark,
  MdNoPhotography,
  MdManageAccounts,
  MdSettingsSuggest,
} from "react-icons/md";
import { SiAdobeindesign } from "react-icons/si";
import { HiUsers } from "react-icons/hi";

const Category = () => {
  return (
    <div className="w-screen min-h-[750px] py-32 md:py-12 bg-gradient-to-r from-[#b7eafd] to-[#c2d4fc]">
      <div className="container px-4 lg:px-0 mx-auto">
        <div className="text-black pt-10 w-full lg:w-2/3">
          <h1 className="text-center px-4 md:px-6 leading-8 md:leading-10 md:text-start text-sm md:text-md lg:text-lg">
            تلفیق زیر ساخت های عظیم بانکی با سیستم سازمان پایانه کل کشور و ارائه
            خدمتی نوین در عرصه حمل و نقل، اصلی ترین دلیل تولد استارتاپ صبا بار
            بوده است. ما آمده ایم تا با تسهیل فرایند تسویه حساب، بار عظیمی را از
            روی دوش کارفرمایان صاحب بار برداریم و همزمان با ارائه این خدمت، با
            تسویه به موقع و بی واسطه، موجبات رضایت رانندگان عزیز را نیز فراهم
            کنیم.
          </h1>
        </div>

        <div className="bg-[#ffffff99] lg:py-14 md:px-10 drop-shadow-2xl border-2 border-white backdrop-blur-3xl rounded-3xl mt-10 flex flex-wrap  flex-row lg:flex-col">

          {/* flex flex-col md:flex-row items-center justify-center text-black md:space-x-10 py-8 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-4 text-black">
            <div className="flex flex-col items-center justify-center lg:items-start space-y-4 p-4">
              <p>
                <MdOutlineBrandingWatermark className="text-4xl" />
              </p>
              <span className="font-bold text-xl">برنامه ریزی پرداخت</span>
              <p className="text-center text-base lg:text-start">
                سامانه صبابار به شما کمک می کند تا پرداخت بارنامه های خود را
                مدیریت کنید.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center lg:items-start space-y-4 p-4">
              <p>
                <MdNoPhotography className="text-4xl" />
              </p>
              <span className="font-bold text-xl">مشاهده بارنامه ها</span>
              <p className="text-center text-base lg:text-start">
                وضعیت بار و اعلان‌های مهم را حتی در صورت عدم دسترسی به اینترنت
                از طریق سرویس پیامکی دریافت کنید.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center lg:items-start space-y-4 p-4">
              <p>
                <SiAdobeindesign className="text-4xl" />
              </p>
              <span className="font-bold text-xl">دریافت گزارشات</span>
              <p className="text-center text-base lg:text-start">
                همیشه قابلیت مشاهده تمام بارنامه های در مسیر و به مقصد رسیده
                وجود دارد.
              </p>
            </div>
          </div>

          {/* flex flex-col md:flex-row items-center justify-center text-black md:space-x-10 py-8 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-4 text-black">

            <div className="flex flex-col items-center justify-center lg:items-start space-y-4 p-4">
              <p>
                <MdManageAccounts className="text-4xl" />
              </p>
              <span className="font-bold text-xl">مدیریت بارگیری و تخلیه</span>
              <p className="text-center text-base lg:text-start">
                با صبابار از زمان صدور یک بارنامه تا زمان تخلیه بارنامه ها،
                فرایند ها را رصد کنید.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center lg:items-start space-y-4 p-4">
              <p>
                <MdSettingsSuggest className="text-4xl" />
              </p>
              <span className="font-bold text-xl">ثبت آسان و رایگان بار</span>
              <p className="text-center text-base lg:text-start">
                وضعیت بار و اعلان‌های مهم را حتی در صورت عدم دسترسی به اینترنت
                از طریق سرویس پیامکی دریافت کنید.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center lg:items-start space-y-4 p-4">
              <p>
                <HiUsers className="text-4xl" />
              </p>
              <span className="font-bold text-xl">سالن اعلان بار مجازی</span>
              <p className="text-center text-base lg:text-start">
                با سالن اعلام بار مجازی صبابار، دیگر نیازی به حضور در پایانه های
                باربری ندارید.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Category;
