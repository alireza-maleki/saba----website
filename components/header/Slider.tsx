import classes from "./Slider.module.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Autoplay]);

const DUMMY_SWIPER_SLIDER = [
  {
    id: 1,
    src: "https://mobirise.com/extensions/glassm5/corporate/assets/images/mbr-5.jpg",
  },
  {
    id: 2,
    src: "https://mobirise.com/extensions/glassm5/corporate/assets/images/background6.jpg",
  },
  {
    id: 3,
    src: "https://mobirise.com/extensions/glassm5/corporate/assets/images/mbr.jpg",
  },
];

const Slider = () => {
  return (
    <div className="relative w-screen h-screen  bg-gray-300 overflow-hidden">

      
      <div className="w-full h-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000 }}
        className={`w-full h-full ${classes.swiper} `}
      >
       {DUMMY_SWIPER_SLIDER.map((item) => (
          <SwiperSlide className="w-full h-full" key={item.id}>
            <img className="w-full h-full object-cover" src={item.src}/>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

      <div className="md:block w-full h-full flex items-center justify-center">
      <div className="z-40 backdrop-blur-[1px] absolute text-red-500 top-[20%] md:left-[20%] bg-[#ffffff99] py-16 p-10 rounded-3xl w-[400px] md:w-[800px] h-[500px] border-2 border-white ">
        <div className="absolute md:w-100 md:h-100 p-28 rounded-full bg-[#ffffff99] -top-16 -right-40 backdrop-blur-[1px] border-2 border-white"></div>

        <div className="text-center md:text-start flex flex-col justify-between w-full h-full">
          <div className="md:max-w-[100px]">
            <h1 className="text-[#4a6586] text-[40px] md:text-[60px] font-bold">
              Corporate Governance
            </h1>
          </div>

          <div className="max-w-[600px] text-lg">
            <p className="text-black text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ultrices risus eget nunc ullamcorper, ut consectetur eros mattis.
              Praesent lobortis in est sit amet pretium.
            </p>
          </div>

          <div>
            <button className="border border-indigo-300 border-2xl px-6 py-2 rounded-full text-white font-bold text-lg bg-gradient-to-r from-indigo-900 to-indigo-300 hover:-translate-y-1 transition duration-300 ease-in">
              Get Started
            </button>
          </div>
        </div>

        <div className="absolute w-100 h-100 p-14 rounded-full bg-[#ffffff99] -bottom-8 -left-16 -z-50 backdrop-blur-[1px] border-2 border-white"></div>
      </div>
      </div>

    </div>
  );
};

export default Slider;
