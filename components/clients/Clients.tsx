import React from "react";
import Image from 'next/image'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../swiper-button/Button";
import { AiOutlineMinus } from 'react-icons/ai';

const DUMMY_SWIPER_SLIDER = [
  {
    id: 1,
    src: "https://wagon-asa.com/wp-content/uploads/2022/06/wagon-asa-logo.png",
    app: "اپلیکیشن صبا بار",
  },
  {
    id: 2,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Refah.svg/1200px-Refah.svg.png",
    app: "اتوماسیون",
  },
  {
    id: 3,
    src: "https://ehyarail.com/wp-content/uploads/2022/07/LOGO.png",
    app: "اتصال به درگاه بانکی",
  },
  {
    id: 4,
    src: "https://media.sedayebourse.ir/d/2021/08/31/3/1002520.jpg",
    app: "اتصال به درگاه بانکی",
  },
  {
    id: 5,
    src: "https://alomaterial.ir/images/shop/upload/neyriz-cement-logo.png",
    app: "اتصال به درگاه بانکی",
  },
  {
    id: 6,
    src: "https://cdn.ccom.ir/uploads/logo/1653315018-logo-01G3RM27TC1QMWYTB6QK4N1RGQ.png",
    app: "اتصال به درگاه بانکی",
  },
  {
    id: 7,
    src: "https://ehyairon.com/wp-content/uploads/2022/02/ehya-logo-black.png",
    app: "اتصال به درگاه بانکی",
  },
  {
    id: 8,
    src: "https://ehyarail.com/wp-content/uploads/2022/07/Ehya-Rail_Iranian-Gold-Logo-1-300x143.png",
    app: "اتصال به درگاه بانکی",
  },
];

const Clients = () => {

  return (
    <div className="relative w-screen min-h-[550px] md:h-[550px]">
      <div className="w-full h-[1000px] md:h-full">
        <img
          className="w-full h-full backdrop-blur-3xl object-cover"
          src="https://mobirise.com/extensions/glassm5/corporate/assets/images/mbr-2.jpg"
        />
      </div>

      <div className="absolute top-[0%] w-full h-full flex flex-col items-center justify-center backdrop-blur-[2px]">
        <div className="text-black text-center pb-10">
          <p className="text-2xl font-bold pb-4">مشتری های ما</p>
          <h2 className="text-lg md:text-xl ">
            ما دوست داریم با مشتری های خود کار کنیم
          </h2>
        </div>

        <div className="grid grid-cols-1 grid-rows-1 mx-auto px-2 w-full md:w-2/3">
          <Swiper
            autoplay={{ delay: 1000 }}
            spaceBetween={0}
            slidesPerView={3}
            loop={true}
            speed={1000}
            className={`w-full h-full`}
          

          breakpoints={{
              0: {
                  slidesPerView: 2,
              },
              576: {
                  slidesPerView: 2,
              },
              768: {
                  slidesPerView: 3,
              },
              992: {
                  slidesPerView: 3,
              },
              1200: {
                  slidesPerView: 3,
              },
              1400: {
                  slidesPerView: 3,
              },
          }}



          >
            {DUMMY_SWIPER_SLIDER.map((item) => (
              <SwiperSlide className="w-full h-full cursor-pointer" key={item.id}>
                <div className="flex items-center justify-center bg-[#ffffff99] backdrop-blur-[2px] rounded-3xl p-4 border-2 borer-white w-48 h-32 md:w-96 md:h-44">
                  <img className="w-26 md:w-32" src={item.src} width={100} height={50} alt="slide"/>
                </div>
              </SwiperSlide>
            ))}

            <Button />
          </Swiper>


          {/* 
          <div className="flex items-center justify-center bg-[#ffffff99] backdrop-blur-[2px] rounded-3xl p-4 border-2 borer-white w-96 h-44">
            <img className="w-32" src="https://mobirise.com/extensions/glassm5/corporate/assets/images/1.png"/>
          </div>
          <div className="flex items-center justify-center bg-[#ffffff99] backdrop-blur-[2px] rounded-3xl p-4 border-2 borer-white w-96 h-44">
            <img className="w-32" src="https://mobirise.com/extensions/glassm5/corporate/assets/images/2.png"/>
          </div>
          <div className="flex items-center justify-center bg-[#ffffff99] backdrop-blur-[2px] rounded-3xl p-4 border-2 borer-white w-96 h-44">
            <img className="w-32" src="https://mobirise.com/extensions/glassm5/corporate/assets/images/3.png"/>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Clients;
