import React from "react";
import Image from "next/image";

import Link from "next/link";

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
    href: "https://wagon-asa.com/"
  },
  {
    id: 2,
    src: "/images/moshtariha/2.png",
    href: "https://refah.ir/"
  },
  {
    id: 3,
    src: "/images/moshtariha/3.png",
    href: "https://ehyarail.com/"
  },
  {
    id: 4,
    src: "/images/moshtariha/4.jpg",
    href: "http://ptec-ir.com/"
  },
  {
    id: 5,
    src: "/images/moshtariha/5.png",
    href: "https://infosaba.com/"
  },
  {
    id: 6,
    src: "/images/moshtariha/6.png",
    href: "http://vagonyadak.ccom.ir/"
  },
  {
    id: 7,
    src: "/images/moshtariha/7.png",
    href: "http://www.ehyaa.com/"
  },
  {
    id: 8,
    src: "/images/moshtariha/9.png",
    href: "https://mapnammt.com/"
  },
];

const Clients = () => {

  return (
    <div className="relative w-screen min-h-[550px] md:h-[550px]">
      <div className="w-full h-[550px] md:h-full">
        <Image
          width={700}
          height={700}
          alt={"client"}
          className="w-full h-full backdrop-blur-3xl object-cover"
          src="/images/client-pic/client.jpg"
        />
      </div>

      <div className="absolute top-[0%] w-full h-full flex flex-col items-center justify-center backdrop-blur-[2px]">
        <div className="text-black text-center pb-10">
          <p className="text-2xl font-bold pb-4">مشتری های ما</p>
          <h2 className="text-lg md:text-xl ">
            ما دوست داریم با مشتری های خود کار کنیم
          </h2>
        </div>

        <div className="grid grid-cols-1 grid-rows-1 mx-auto px-2 w-full md:w-[90%] lg:w-[70%]">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]} 
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            spaceBetween={0}
            // slidesPerView={3}
            loop={true}
            speed={600}
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
              1024: {
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
                <Link href={item.href} className="flex items-center justify-center bg-[#ffffff99] backdrop-blur-[2px] rounded-3xl p-4 border-2 borer-white w-48 h-32 lg:w-58 xl:w-72 2xl:w-[90%] lg:h-44">
                  <Image loading="lazy" className="w-26 md:w-32" src={item.src} width={100} height={50} alt={"slider"}/>
                </Link>
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
