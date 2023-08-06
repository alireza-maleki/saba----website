import React from "react";
import classes from "./Contact.module.css";


const Contact = () => {
  return (
    <div className="relative  w-screen min-h-[700px] flex items-center justify-center" id="contact">
      <div className="w-full h-[1500px] md:h-[900px] bg-fixed">
        <img
          className="w-full h-full object-cover"
          src="https://mobirise.com/extensions/glassm5/corporate/assets/images/mbr.jpg"
        />
      </div>
      <div className="absolute top-[10%] min-h-[600px] space-y-8 md:space-y-0 container flex flex-col md:flex-row items-center justify-between rounded-3xl">

        <div className="min-h-[450px] text-center md:text-start flex flex-col md:self-start justify-between">
            <div className=" text-center md:text-start text-white">
                <p>تماس با ما</p>
                <h1 className="font-bold text-3xl pt-4 w-full md:w-1/2" style={{direction: "ltr"}}>۰۲۱ - ۲۲۷۷۸۲۰۰</h1>
            </div>


            <div className="text-white text-lg">
                <p className="font-bold">آدرس :</p>
                <p>تهران - خیابان پاسداران - بین نیستان نهم و دهم - پلاک ۳۰۴ -</p>
            </div>

            {/* <div className="text-white text-lg">
                <p className="font-bold">آدرس 2:</p>
                <p>قیطریه</p>
            </div> */}

            <div className="text-white text-lg">
                <p className="font-bold">کد پستی : </p>
                <p className="text-2xl">۱۹۴۶۸۵۳۶۱۴</p>
            </div>

            <div>
                <p><span className="font-bold">ایمیل</span> : info@sababar.com</p>
            </div>
        </div>

        <div className="py-14 md:py-24 border-2 border-white w-[94%] md:w-1/2 min-h-[500px] bg-[#ffffff99] backdrop-blur-[5px] rounded-3xl">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-around mx-auto w-[90%]">
                <input className="px-3 py-3 rounded-xl w-[100%] md:w-[48%] border-none outline-none text-black bg-[#f1f1f1] backdrop-blur-[10px]" type="text" placeholder="نام"/>
                <input className="px-3 py-3 rounded-xl w-[100%] md:w-[48%] border-none outline-none text-black bg-[#f1f1f1] backdrop-blur-[10px]" type="email" placeholder="ایمیل"/>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-around mx-auto w-[90%] py-4 md:py-8">
                <input className="px-3 py-3 rounded-xl w-[100%] md:w-[48%] border-none outline-none text-black bg-[#f1f1f1] backdrop-blur-[10px]" type="text" placeholder="موضوع"/>
                <input className="px-3 py-3 rounded-xl w-[100%] md:w-[48%] border-none outline-none text-black bg-[#f1f1f1] backdrop-blur-[10px]" type="number" placeholder="تلفن"/>
            </div>

            <div className="flex pt-8 md:pt-0 items-center justify-center w-full h-full">
                <textarea className="w-[88%] min-h-[200px] p-4 rounded-xl border-none outline-none text-black bg-[#f1f1f1] backdrop-blur-[10px]" placeholder="پیام" />
            </div>

            <div className="flex items-center justify-center w-full pt-6">
                <button className="w-[88%] px-2 py-4 bg-[#263d5a] rounded-3xl hover:-translate-y-1 transition duration-300 ease-in">ارسال</button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
