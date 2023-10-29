import React, { useState } from "react";
import classes from "./Team.module.css";
import Image from "next/image";

import { AiOutlineClose } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../swiper-button/Button";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Team = () => {
  const DUMMY_CLIENTS_DATA = [
    { id: 1, imgSrc: "/images/eftekhar/1.jpg" },
    { id: 2, imgSrc: "/images/eftekhar/2.jpg" },
    { id: 3, imgSrc: "/images/eftekhar/3.jpg" },
    { id: 4, imgSrc: "/images/eftekhar/4.jpg" },
  ];

  const [showImage, setShowImage] = useState("");
  const [backdrop, setBackDrop] = useState(false);

  const showImageHandler = (src: any) => {
    setShowImage(src);
    setBackDrop(true);
  };

  const closeBackdropHandler = () => {
    setBackDrop(false);
  };

  return (
    <div className="w-screen mx-auto min-h-[500px] py-24 lg:py-16 bg-gradient-to-r from-[#b7eafd] to-[#c2d4fc]">
      <div
        onClick={closeBackdropHandler}
        className={`cursor-pointer z-50 flex items-center justify-center fixed top-0 right-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] ${
          backdrop ? "flex" : "hidden"
        }`}
      >
        {showImage && (
          <>
            <Image
              className="transition duration-700 ease-in-out w-[90%] md:w-[25%] h-[60%] rounded"
              src={`${showImage ? showImage : ""}`}
              alt="show-image"
              width={800}
              height={800}
              loading="lazy"
            />
            <AiOutlineClose
              onClick={closeBackdropHandler}
              className="transition hover:scale-75 duration-500 ease-in-out fixed top-[4%] right-[5%] font-black cursor-pointer w-[30px] h-[30px] text-[#000] bg-white rounded shadow"
            />
          </>
        )}
      </div>

      <div className="container mx-auto">
        <div className="text-black text-center lg:text-start w-screen">
          <p className="text-xl lg:text-2xl font-bold"> افتخارات ما : </p>
          <h2 className="text-lg px-6 md:px-0 py-3">
            شبکه عظیم صبا کارت که تلفیقی از شبکه نظام بانکی و حمل و نقل کشوری می
            باشد. در سراسر ایران عزیزمان فعال است.
          </h2>
        </div>
      </div>

      {DUMMY_CLIENTS_DATA.length <= 4 ? (
        <div className="container mx-auto w-full flex flex-col items-center justify-center space-y-8 lg:space-y-0 md:grid md:grid-cols-2 md:space-y-0 md:gap-4 lg:grid-cols-4 grid-rows-1 pt-10 ">
          {DUMMY_CLIENTS_DATA.map((item: any) => (
            <div
              key={item.id}
              className={`bg-[#ffffff99] rounded-xl border-2 border-white p-4 md:p-4 relative w-[300px] lg:w-[250px] 2xl:w-[300px] h-[300px] lg:h-[250px] 2xl:h-[300px] cursor-pointer overflow-hidden flex items-center justify-center ${classes["user-img"]}`}
            >
              <Image
                width={500}
                height={500}
                alt="item"
                onClick={() => showImageHandler(item.imgSrc)}
                className="rounded w-full h-full"
                src={item.imgSrc}
                loading="lazy"
              />

              <div className={`absolute ${classes[""]}`}>
                <div className="mx-auto space-y-2 text-center">
                  <p className="text-xl font-bold text-white">تیم توسعه</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8 relative w-screen min-h-[350px]">
          <div className="absolute top-[0%] w-full h-full flex flex-col items-center justify-center backdrop-blur-[2px]">
            <div className="grid grid-cols-1 grid-rows-1 mx-auto px-2 h-[60%] md:h-[80%] lg:h-[100%] w-full md:w-[90%] lg:w-[60%]">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                spaceBetween={0}
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
                {DUMMY_CLIENTS_DATA.map((item: any) => (
                  <SwiperSlide
                    className="w-full h-full cursor-pointer"
                    key={item.id}
                  >
                    <div
                      className={`bg-[#ffffff99] rounded-xl border-2 border-white p-4 md:p-4 relative w-[150px]  lg:w-[200px] 2xl:w-[300px] h-[150px] lg:h-[250px] 2xl:h-[300px] cursor-pointer overflow-hidden flex items-center justify-center ${classes["user-img"]}`}
                    >
                      <Image
                        loading="lazy"
                        onClick={() => showImageHandler(item.imgSrc)}
                        className="rounded w-full h-full"
                        src={item.imgSrc}
                        width={500}
                        height={500}
                        alt={"slider"}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
