import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const DUMMY_DATA = [
  { id: 1, date: "8 مهر", title: "بدون نیاز به پرداخت کمیسیون، بارهای خود را در کمتر از ۱ دقیقه ثبت کنید." },
  { id: 2, date: "11 آذر", title: "امکان توافق هزینه‌ای، در ضمن شفافیت کمیسیون طرفین برای تمامی کاربران وجود دارد." },
  { id: 3, date: "29 اسفند", title: "سفارشات حمل را متناسب با ناوگان و مبدأ خود مشاهده و انتخاب کنید." },
];

const News = () => {
  console.log(DUMMY_DATA.map((item) => item));
  return (
    <div className="w-screen px-4 min-h-[700px] py-24 bg-gradient-to-r from-[#b7eafd] to-[#c2d4fc]">
      <div className="w-full md:w-2/3 mx-auto p-12 bg-white rounded-[40px] border-2 border-white drop-shadow-2xl">
        <div className="text-center md:text-start">
          <p className="text-[#576d85] pb-4 font-bold text-2xl">کارهای که انجام داده ایم </p>
          {/* <h1 className="text-[#576d85] font-bold text-3xl md:text-5xl">Our Latest News</h1> */}
        </div>

        <div className="mt-12">
          {DUMMY_DATA.map((item) => (
            <div key={item.id} className="w-full py-6 flex flex-col md:flex-row text-center md:text-start items-center justify-between border-b border-salte-500">
              <p className="font-bold text-2xl text-[#576d85]">{item.date}</p>
              <div className="flex flex-col md:flex-row items-center justify-between w-5/6">
              <p className="text-[#576d85] text-sm md:text-md py-4 md:py-0 leading-7 md:leading-0">{item.title}</p>
              <button className="text-md text-[#576d85] hover:border-b border-slate-500 transition duration-1000 ease-in flex items-center space-x-1">
                <span className="pe-2">نمایش کامل</span> <MdKeyboardArrowLeft />
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
