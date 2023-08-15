import React from "react";
import Image from 'next/image'

import { AiOutlineMinus } from 'react-icons/ai';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../swiper-button/Button";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const DUMMY_SWIPER_SLIDER = [
  {
    id: 1,
    src: "/images/moshtariha/1.png",
    app: "اپلیکیشن صبا بار",
  },
  {
    id: 2,
    src: "/images/moshtariha/2.png",
    app: "اتوماسیون",
  },
  {
    id: 3,
    src: "/images/moshtariha/3.png",
    app: "اتصال به درگاه بانکی",
  },
  {
    id: 4,
    src: "/images/moshtariha/4.jpg",
    app: "اتصال به درگاه بانکی",
  },
  {
    id: 5,
    src: "/images/moshtariha/5.png",
    app: "اتصال به درگاه بانکی",
  },
  {
    id: 6,
    src: "/images/moshtariha/6.png",
    app: "اتصال به درگاه بانکی",
  },
  {
    id: 7,
    src: "/images/moshtariha/7.png",
    app: "اتصال به درگاه بانکی",
  },
  {
    id: 8,
    src: "/images/moshtariha/8.png",
    app: "اتصال به درگاه بانکی",
  },
];

const Clients = () => {

  return (
    <div className="relative w-screen min-h-[550px] md:h-[550px]">
      <div className="w-full h-[1000px] md:h-full">
        <img
          className="w-full h-full backdrop-blur-3xl object-cover"
          src="/images/client-pic/1.jpg"
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
            modules={[Autoplay, Pagination, Navigation]} 
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
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


        </div>
      </div>
    </div>
  );
};

export default Clients;
