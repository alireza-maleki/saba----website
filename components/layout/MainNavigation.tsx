import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const MainNavigation = () => {
  const [hamberMenu, setHamberMenu] = useState(false);

  const openCloseMenu = () => {
    setHamberMenu((prevState) => !prevState);
  };


  return (
    <div className=" z-50 fixed top-0 left-0 w-screen h-[100px] bg-[#ffffff99] opacity-100 flex items-center justify-between px-4 md:px-12">
      <div>
        <h1 className="font-bold text-[28px] text-[#263d5a] hover:text-black cursor-pointer">
          GlassM5
        </h1>
      </div>

      <div className="md:hidden" onClick={openCloseMenu}>
        {hamberMenu ? (
          <IoMdClose className="text-black text-2xl" />
        ) : (
          <GiHamburgerMenu className="text-black text-2xl" />
        )}
      </div>

      {/* === Header for large view (website) === */}
      <div className="hidden md:block w-1/4">
        <ul className="w-full flex items-center justify-between text-xl font-bold text-[#263d5a]">
          <li className="cursor-pointer hover:text-black">Home</li>
          <li className="cursor-pointer hover:text-black">About us</li>
          <li className="cursor-pointer hover:text-black">Services</li>
          <li className="cursor-pointer hover:text-black">Contacts</li>
        </ul>
      </div>

      <div className="hidden md:block">
        <button className="px-6 py-2 rounded-full text-white font-bold text-lg bg-gradient-to-r from-indigo-900 to-indigo-300 hover:-translate-y-1 transition duration-300 ease-in">
          Get Started
        </button>
      </div>

      {/* === Header for Moblie view === */}
      {hamberMenu ? (
        <div className="z-50 absolute border-t-2 border-slate-300 border-slate-300 text-center left-0 top-[100%] h-[250px] w-screen bg-[#ffffff99] block md:hidden ">
          <ul className="w-full flex-col items-center justify-between text-xl font-bold text-[#263d5a]">
            <li className="pt-4 cursor-pointer hover:text-black">Home</li>
            <li className="py-4 cursor-pointer hover:text-black">About us</li>
            <li className="cursor-pointer hover:text-black">Services</li>
            <li className="py-4 cursor-pointer hover:text-black">Contacts</li>
          </ul>
          <button className="px-6 py-2 rounded-full text-white font-bold text-lg bg-gradient-to-r from-indigo-900 to-indigo-300 hover:-translate-y-1 transition duration-300 ease-in">
            Get Started
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default MainNavigation;
