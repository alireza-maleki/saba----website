import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Category = () => {
  const [counterOn, setCounterOn] = useState(false);

  // onExit={() => setCounterOn(false)}
  return (
    <>
      <ScrollTrigger onEnter={() => setCounterOn(true)}>
        <div className="w-screen min-h-[600px] px-4 py-16 bg-gradient-to-r from-[#b7eafd] to-[#c2d4fc]">
          <div className="mx-auto container md:px-4 w-full md:w-2/3 text-center md:text-start text-black py-12">
            <p className="text-2xl pb-4 font-bold">ویژگی های ما : </p>
            <h1 className="text-lg px-6 md:px-0">
              شبکه عظیم صبا کارت که تلفیقی از شبکه نظام بانکی و حمل و نقل کشوری
              می باشد. در سراسر ایران عزیزمان فعال است.
            </h1>
          </div>

          <div className="container py-10 border-2 border-white drop-shadow-2xl backdrop-blur-3xl rounded-3xl w-full md:w-2/3 mx-auto bg-[#ffffff99] drop-shadow-2xl backdrop-blur-3xl">

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-1 gap-8 py-4">
              <div className="flex flex-col space-y-4 p-4 text-center">
                <span className="font-bold text-4xl md:text-5xl text-[#263d5a]">
                  {counterOn && (
                    <CountUp start={0} end={21095} duration={2} delay={0} />
                  )}
                </span>
                <p className="text-xl text-[#263d5a]">صبا کارت ها</p>
              </div>

              <div className="flex flex-col space-y-4 p-4 text-center">
                <span className="font-bold text-4xl md:text-5xl text-[#263d5a]">
                  {counterOn && (
                    <CountUp start={0} end={31} duration={2} delay={0} />
                  )}
                </span>
                <p className="text-xl text-[#263d5a]">دسترسی های بانکی</p>
              </div>

              <div className="flex flex-col space-y-4 p-4 text-center">
                <span className="font-bold text-4xl md:text-5xl text-[#263d5a]">
                  {counterOn && (
                    <CountUp start={0} end={19789} duration={2} delay={0} />
                  )}
                </span>
                <p className="text-xl text-[#263d5a]">رانندگان فعال</p>
              </div>

              <div className="flex flex-col space-y-4 p-4 text-center">
                <span className="font-bold text-4xl md:text-5xl text-[#263d5a]">
                  {counterOn && (
                    <CountUp start={0} end={48} duration={2} delay={0} />
                  )}
                </span>
                <p className="text-xl text-[#263d5a]">شرکت های باربری</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Category;
