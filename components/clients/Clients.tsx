import React from "react";

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
          <p className="text-2xl pb-4">OUR CLIENTS</p>
          <h2 className="font-bold text-2xl md:text-3xl ">We love to work with our clients</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
          <div className="flex items-center justify-center bg-[#ffffff99] backdrop-blur-[2px] rounded-3xl p-4 border-2 borer-white w-96 h-44">
            <img className="w-32" src="https://mobirise.com/extensions/glassm5/corporate/assets/images/1.png"/>
          </div>
          <div className="flex items-center justify-center bg-[#ffffff99] backdrop-blur-[2px] rounded-3xl p-4 border-2 borer-white w-96 h-44">
            <img className="w-32" src="https://mobirise.com/extensions/glassm5/corporate/assets/images/2.png"/>
          </div>
          <div className="flex items-center justify-center bg-[#ffffff99] backdrop-blur-[2px] rounded-3xl p-4 border-2 borer-white w-96 h-44">
            <img className="w-32" src="https://mobirise.com/extensions/glassm5/corporate/assets/images/3.png"/>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Clients;
