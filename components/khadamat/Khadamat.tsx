import React from "react";
import Image from "next/image";

const Khadamat = () => {
  return (
    <div className="relative w-screen min-h-[700px] flex items-center justify-center mt-0">
      <div className="bg-white w-full h-[1900px] md:h-[2300px] lg:h-[750px] bg-fixed">
        <Image
          width={800}
          height={800}
          alt={"khadamat"}
          className="w-full h-full object-cover"
          src="/images/khadamat/ai.png"
        />
      </div>

      <div className="absolute top-[10%] min-h-[600px] container w-[94%] lg:w-full flex flex-col lg:flex-row items-center border-2 border-white justify-between bg-[#ffffff99] backdrop-blur-[1px] border-2 border-[#f1f1f1] shadow-xl rounded-3xl">
        <div className="w-full lg:w-1/4 p-8 lg:self-start h-full">
          <Image
            width={200}
            height={200}
            alt={"khadamat"}
            className="rounded-xl w-full h-full object-cover"
            src="/images/khadamat/khadamat.jpeg"
          />
        </div>

        <div className="w-full md:w-3/4 flex flex-col text-black md:p-8 self-start">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h3 className="w-full md:w-2/4 px-4 md:px-0 pb-12 md:pb-0 text-center md:text-start font-bold text-2xl md:text-4xl">
              سامانه صبا بار
            </h3>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 gap-8 py-20 space-y-5 md:space-y-0">
            <div className="text-center md:text-start px-4 md:p-0">
              <p className="text-xl font-bold pb-4">
                1. ثبت آسان و رایگان بار
              </p>
              <p className="text-base">
                بدون نیاز به پرداخت کمیسیون، بارهای خود را در کمتر از ۱ دقیقه
                ثبت کنید.
              </p>
            </div>

            <div className="text-center md:text-start px-4 md:p-0">
              <p className="text-xl font-bold pb-4">2. سالن اعلام بار مجازی</p>
              <p className="text-base">
                با سالن اعلام بار مجازی صبابار، دیگر نیازی به حضور در پایانه های
                باربری ندارید.
              </p>
            </div>

            <div className="text-center md:text-start px-4 md:p-0">
              <p className="text-xl font-bold pb-4">
                3. شفافیت مالی ، قیمت مناسب با توافق طرفین
              </p>
              <p className="text-base">
                امکان توافق هزینه‌ای، در ضمن شفافیت کمیسیون طرفین برای تمامی
                کاربران وجود دارد.
              </p>
            </div>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-rows-1 gap-8 pb-12 space-y-5 md:space-y-0"> 
            <div className="text-center md:text-start px-4 md:p-0">
              <p className="text-xl font-bold pb-4">
                4. امکان پیگیری لحظه ای سفارش
              </p>
              <p className="text-base">
                در صبا بار وضعیت لحظه‌ای بار شما در سیستم ثبت می‌شود.
              </p>
            </div>

            <div className="text-center md:text-start px-4 md:p-0">
              <p className="text-xl font-bold pb-4">5. نمایش هوشمند سفارشات</p>
              <p className="text-base">
                سفارشات حمل را متناسب با ناوگان و مبدأ خود مشاهده و انتخاب کنید.
              </p>
            </div>

            <div className="text-center md:text-start px-4 md:p-0">
              <p className="text-xl font-bold pb-4">6. سرویس پیامکی آفلاین</p>
              <p className="text-base">
                وضعیت بار و اعلان‌های مهم را حتی در صورت عدم دسترسی به اینترنت
                از طریق سرویس پیامکی دریافت کنید.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Khadamat;
