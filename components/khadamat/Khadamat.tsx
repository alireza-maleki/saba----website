import React from "react";

const Khadamat = () => {
  return (
    <div className="relative w-screen min-h-[700px] flex items-center justify-center">

      <div className="w-full h-[1900px] md:h-[900px] bg-fixed">
        <img
        className="w-full h-full object-cover"
          src="https://mobirise.com/extensions/glassm5/corporate/assets/images/mbr-5.jpg "
        />
      </div>
      
      <div className="absolute top-[10%] min-h-[600px] container w-[94%] md:w-full flex flex-col md:flex-row items-center border-2 border-white justify-between bg-[#ffffff99] backdrop-blur-[2px] rounded-3xl">
        
        <div className="w-full md:w-1/4 p-8 md:self-start h-full">
          <img
            className="rounded-xl w-full h-full object-cover"
            src="https://mobirise.com/extensions/glassm5/corporate/assets/images/mbr.jpeg"
          />
        </div>

        <div className="w-full md:w-3/4 flex flex-col text-black md:p-8 self-start">

          <div className="flex flex-col md:flex-row items-center justify-between">
            <h3 className="w-full md:w-2/4 px-4 md:px-0 pb-12 md:pb-0 text-center md:text-start font-bold text-2xl md:text-4xl">
              Aliquam ut quam sed sapien suscipit vitae.
            </h3>
            <button className="border border-indigo-300 border-2xl px-14 md:px-6 py-4 rounded-full text-white font-bold text-lg bg-gradient-to-r from-indigo-900 to-indigo-300 hover:-translate-y-1 transition duration-300 ease-in">
              Get Started
            </button>
          </div>

          <div className="flex flex-col pb-8 md:pb-0 pt-12 md:pt-0 md:flex-row items-center justify-center space-y-8 md:space-y-0 mx-auto md:my-12 md:space-x-6">
            <div className="text-center md:text-start">
              <p className="text-xl font-bold pb-4">01. Research</p>
              <p className="text-lg">
                Lorem ipsum dolor sapien amet, consectetur adipiscing elit.{" "}
              </p>
            </div>

            <div className="text-center md:text-start">
              <p className="text-xl font-bold pb-4">02. Processes</p>
              <p className="text-lg">
                Lorem ipsum dolor sapien amet, consectetur adipiscing elit.{" "}
              </p>
            </div>

            <div className="text-center md:text-start">
              <p className="text-xl font-bold pb-4">03. Managment</p>
              <p className="text-lg">
                Lorem ipsum dolor sapien amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col pb-12 md:pb-0 md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-6">
            <div className="text-center md:text-start">
              <p className="text-xl font-bold pb-4">04. Staff</p>
              <p className="text-lg">
                Lorem ipsum dolor sapien amet, consectetur adipiscing elit.{" "}
              </p>
            </div>

            <div className="text-center md:text-start">
              <p className="text-xl font-bold pb-4">05. Branding</p>
              <p className="text-lg">
                Lorem ipsum dolor sapien amet, consectetur adipiscing elit.{" "}
              </p>
            </div>

            <div className="text-center md:text-start">
              <p className="text-xl font-bold pb-4">06. Analyze</p>
              <p className="text-lg">
                Lorem ipsum dolor sapien amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Khadamat;
