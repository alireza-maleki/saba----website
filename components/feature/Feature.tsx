import React from "react";

const Category = () => {
  return (
    <div className="w-screen min-h-[800px] px-4 py-16 bg-gradient-to-r from-[#b7eafd] to-[#c2d4fc]">
        <div className="mx-auto container w-full md:w-2/3 text-center md:text-start text-black py-12">
            <p className="text-2xl pb-4">OUR FEATURES</p>
            <h1 className="font-bold text-2xl md:text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing. Ut eu</h1>
            <h1 className="font-bold text-2xl md:text-3xl">risus eget sapien.</h1>
        </div>
        
      <div className="container border-2 border-white drop-shadow-2xl backdrop-blur-3xl rounded-3xl w-full md:w-2/3 mx-auto bg-[#ffffff99] drop-shadow-2xl backdrop-blur-3xl">


        <div className=" flex flex-col md:flex-row items-center justify-around md:space-x-12 text-black py-8">
          <div className="flex flex-col space-y-4 p-4 text-center">
            <span className="font-bold text-4xl md:text-6xl text-[#263d5a]">232</span>
            <p className="text-xl text-[#263d5a]">Happy Clients</p>
          </div>

          <div className="flex flex-col space-y-4 p-4 text-center">
            <span className="font-bold text-4xl md:text-6xl text-[#263d5a]">93</span>
            <p className="text-xl text-[#263d5a]">Completed Projects</p>
          </div>

          <div className="flex flex-col space-y-4 p-4 text-center">
            <span className="font-bold text-4xl md:text-6xl text-[#263d5a]">76</span>
            <p className="text-xl text-[#263d5a]">Successful Brands</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around md:space-x-12 text-black py-8">
          <div className="flex flex-col space-y-4 p-4 text-center">
            <span className="font-bold text-4xl md:text-6xl text-[#263d5a]">84</span>
            <p className="text-xl text-[#263d5a]">Projects in Progress</p>
          </div>

          <div className="flex flex-col space-y-4 p-4 text-center">
            <span className="font-bold text-4xl md:text-6xl text-[#263d5a]">56</span>
            <p className="text-xl text-[#263d5a]">Professional Staff</p>
          </div>

          <div className="flex flex-col space-y-4 p-4 text-center">
            <span className="font-bold text-4xl md:text-6xl text-[#263d5a]">47</span>
            <p className="text-xl text-[#263d5a]">Successful Brands</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Category;
