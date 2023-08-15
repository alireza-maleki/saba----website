import { useEffect, useState } from "react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButton from "../swiper-button/SwiperButton";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const DUMMY_SWIPER_SLIDER = [
  {
    id: 1,
    src: "/images/slider/1.jpg",
    app: "اپلیکیشن صبا بار",
  },
  {
    id: 2,
    src: "/images/slider/2.jpg",
    app: "اتوماسیون",
  },
  {
    id: 3,
    src: "/images/slider/3.jpg",
    app: "اتصال به درگاه بانکی",
  },
];



const Slider = () => {  
  
  return (
    <div className="relative w-screen h-screen  bg-gray-300 overflow-hidden" id="/">
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
          speed={3500}
          className={`w-full h-full`}
        >
          {DUMMY_SWIPER_SLIDER.map((item) => (
            <SwiperSlide className="w-full h-full" key={item.id}>
              <img
                className="w-full h-full object-cover"
                src={item.src}
                alt="slider"
                width={500}
                height={500}
              />

              <div className="md:block w-full h-full flex items-center justify-center overflow-hidden">
                <div className="z-0 backdrop-blur-[1px] absolute text-red-500 top-[20%] md:left-[20%] bg-[#ffffff99] py-16 p-10 rounded-3xl w-[400px] md:w-[800px] h-[500px] border-2 border-white ">
                  <div className="absolute z-10 w-50 h-50 md:w-100 md:h-100 p-16 md:p-28 rounded-full bg-[#ffffff99] -top-8 -right-6 md:-top-16 md:-right-[18%] backdrop-blur-[1px] border-2 border-white"></div>

                  <div className="text-center md:text-start flex flex-col justify-between w-full h-full">
                    <div className="md:max-w-full">
                      <h1 className="text-[#4a6586] text-[30px] md:text-[60px] font-black">
                        {item.app}
                      </h1>
                    </div>

                    <div className="max-w-[600px] text-sm">
                      <p className="text-black font-thin text-sm md:text-[16px] leading-8 md:leading-10">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                        برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد.
                      </p>
                    </div>

                    <div>
                      <button className="border border-indigo-300 border-2xl px-10 py-2 rounded-full text-white text-md bg-gradient-to-r from-indigo-900 to-indigo-300 hover:-translate-y-1 transition duration-300 ease-in">
                        {item.app === "اتصال به درگاه بانکی"
                          ? "اتصال به درگاه"
                          : "دانلود"}
                      </button>
                    </div>
                  </div>

                  <div className="absolute w-100 h-100 p-14 rounded-full bg-[#ffffff99] -bottom-8 -left-16 backdrop-blur-[1px] border-2 border-white"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <SwiperButton />
        </Swiper>
      </div>

      {/* <div className="md:block w-full h-full flex items-center justify-center">
        <div className="z-40 backdrop-blur-[1px] absolute text-red-500 top-[20%] md:left-[20%] bg-[#ffffff99] py-16 p-10 rounded-3xl w-[400px] md:w-[800px] h-[500px] border-2 border-white ">
          <div className="absolute md:w-100 md:h-100 p-28 rounded-full bg-[#ffffff99] -top-16 -right-40 backdrop-blur-[1px] border-2 border-white"></div>

          <div className="text-center md:text-start flex flex-col justify-between w-full h-full">
            <div className="md:max-w-full">
              <h1 className="text-[#4a6586] text-[30px] md:text-[60px] font-black">
                صبا بار تسویه هوشمند
              </h1>
            </div>

            <div className="max-w-[600px] text-sm">
              <p className="text-black font-thin text-sm md:text-[15px] leading-8 md:leading-10">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
            </div>

            <div>
              <button className="border border-indigo-300 border-2xl px-10 py-2 rounded-full text-white text-md bg-gradient-to-r from-indigo-900 to-indigo-300 hover:-translate-y-1 transition duration-300 ease-in">
                شروع
              </button>
            </div>
          </div>

          <div className="absolute w-100 h-100 p-14 rounded-full bg-[#ffffff99] -bottom-8 -left-16 -z-50 backdrop-blur-[1px] border-2 border-white"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Slider;
