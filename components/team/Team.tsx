import React from "react";
import classes from "./Team.module.css";

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoInstagram } from "react-icons/bi";


const Team = () => {
  return (
    <div className="w-screen min-h-[750px] py-24 md:py-16 bg-gradient-to-r from-[#b7eafd] to-[#c2d4fc]">
      <div className="container mx-auto">
        <div className="text-black text-center md:text-start">
          <p className="text-xl md:text-2xl font-bold">تیم ما : </p>
          <h2 className="text-lg px-6 md:px-0 py-3">شبکه عظیم صبا کارت که تلفیقی از شبکه نظام بانکی و حمل و نقل کشوری می باشد. در سراسر ایران عزیزمان فعال است.</h2>
        </div>

        {/* flex flex-col items-center justify-center space-y-8 md:space-y-0 md:grid grid-cols-3 grid-rows-1 pt-10 */}
        <div className="flex flex-col items-center justify-center space-y-8 md:space-y-0 md:grid grid-cols-3 grid-rows-1 pt-10 ">

          <div className={`relative w-[400px] h-[400px] cursor-pointer overflow-hidden flex items-center justify-center ${classes['user-img']}`}>
            <img
              className="rounded-3xl w-full h-full object-cover"
              src="/images/team/1.jpg"
            />
            <div className={`absolute bottom-[10%] md:bottom-[-10%] ${classes['media']}`}>
              <div className="mx-auto space-y-2 text-center">
                <p className="text-lg">برنامه نویس</p>
                <p className="font-bold text-xl">علی ملکی</p>
              </div>
              <div className="grid grid-cols-3 grid-rows-1 gap-2 pt-4">
                <FaFacebookF className="bg-white text-black w-8 h-8 p-2 rounded-md" />
                <AiOutlineTwitter className="bg-white text-black w-8 h-8 p-2 rounded-md" />
                <BiLogoInstagram className="bg-white text-black w-8 h-8 p-2 rounded-md" />
              </div>
            </div>
          </div>

          <div className={`relative w-[400px] h-[400px] cursor-pointer overflow-hidden flex items-center justify-center ${classes['user-img']}`}>
            <img
              className="rounded-3xl w-full h-full object-cover"
              src="/images/team/2.jpg"
            />
            <div className={`absolute bottom-[10%] md:bottom-[-10%] ${classes['media']}`}>
              <div className="text-center space-y-2">
                <p className="text-lg">مدیر</p>
                <p className="font-bold text-xl">علی ملکی</p>
              </div>
              <div className="grid grid-cols-3 grid-rows-1 gap-2 pt-4">
                <FaFacebookF className="bg-white text-black w-8 h-8 p-2 rounded-md" />
                <AiOutlineTwitter className="bg-white text-black w-8 h-8 p-2 rounded-md" />
                <BiLogoInstagram className="bg-white text-black w-8 h-8 p-2 rounded-md" />
              </div>
            </div>
          </div>

          <div className={`relative w-[400px] h-[400px] cursor-pointer overflow-hidden flex items-center justify-center ${classes['user-img']}`}>
            <img
              className="rounded-3xl w-full h-full object-cover"
              src="/images/team/3.jpg"
            />
            <div className={`absolute bottom-[10%] md:bottom-[-10%] ${classes['media']}`}>
            <div className="text-center space-y-2">
              <p className="text-lg">توسعه دهنده</p>
              <p className="font-bold text-xl">علی ملکی</p>
            </div>
            <div className="grid grid-cols-3 grid-rows-1 gap-2 pt-4">
              <FaFacebookF className="bg-white text-black w-8 h-8 p-2 rounded-md" />
              <AiOutlineTwitter className="bg-white text-black w-8 h-8 p-2 rounded-md" />
              <BiLogoInstagram className="bg-white text-black w-8 h-8 p-2 rounded-md" />
            </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Team;
