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
          <p className="text-xl md:text-2xl">OUR TEAM</p>
          <h2 className="font-bold text-2xl md:text-4xl py-3">Lorem ipsum dolor sit</h2>
          <h2 className="font-bold text-2xl md:text-4xl">amet, consectetur eget.</h2>
        </div>

        <div className="flex flex-col items-center justify-center space-y-8 md:space-y-0 md:grid grid-cols-3 grid-rows-1 pt-10">

          <div className={`relative w-[400px] h-[400px] cursor-pointer overflow-hidden flex items-center justify-center ${classes['user-img']}`}>
            <img
              className="rounded-3xl w-full h-full object-cover"
              src="https://mobirise.com/extensions/glassm5/corporate/assets/images/team2.jpg"
            />
            <div className={`absolute bottom-[10%] md:bottom-[-10%] ${classes['media']}`}>
              <div className=" mx-auto text-center">
                <p className="text-lg">Designer</p>
                <p className="font-bold text-xl">Ali Maleki</p>
              </div>
              <div className="pt-4 flex space-x-3">
                <FaFacebookF className="bg-white text-black w-8 h-8 p-2 rounded-md" />
                <AiOutlineTwitter className="bg-white text-black w-8 h-8 p-2 rounded-md" />
                <BiLogoInstagram className="bg-white text-black w-8 h-8 p-2 rounded-md" />
              </div>
            </div>
          </div>

          <div className={`relative w-[400px] h-[400px] cursor-pointer overflow-hidden flex items-center justify-center ${classes['user-img']}`}>
            <img
              className="rounded-3xl w-full h-full object-cover"
              src="https://mobirise.com/extensions/glassm5/corporate/assets/images/team1.jpg"
            />
            <div className={`absolute bottom-[10%] md:bottom-[-10%] ${classes['media']}`}>
              <div className="text-center">
                <p className="text-lg">Manager</p>
                <p className="font-bold text-xl">Ali Maleki</p>
              </div>
              <div className="pt-4 flex space-x-3">
                <FaFacebookF className="bg-white text-black w-8 h-8 p-2 rounded-md" />
                <AiOutlineTwitter className="bg-white text-black w-8 h-8 p-2 rounded-md" />
                <BiLogoInstagram className="bg-white text-black w-8 h-8 p-2 rounded-md" />
              </div>
            </div>
          </div>

          <div className={`relative w-[400px] h-[400px] cursor-pointer overflow-hidden flex items-center justify-center ${classes['user-img']}`}>
            <img
              className="rounded-3xl w-full h-full object-cover"
              src="https://mobirise.com/extensions/glassm5/corporate/assets/images/team3.jpg"
            />
            <div className={`absolute bottom-[10%] md:bottom-[-10%] ${classes['media']}`}>
            <div className="text-center">
              <p className="text-lg">Developer</p>
              <p className="font-bold text-xl">Ali Maleki</p>
            </div>
            <div className="pt-4 flex space-x-3">
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
