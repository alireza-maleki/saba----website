import React from "react";
import classes from "./Video.module.css";

import { CgShapeTriangle } from "react-icons/cg";

const Video = () => {
  return (
    <div className={`relative w-screen h-[400px] md:h-[700px] flex items-center justify-center ${classes['container-img']}`}>
      <div className="absolute w-full h-full bg-[#000] top-0 left-0"></div>
      <div className="relative w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://mobirise.com/extensions/glassm5/corporate/assets/images/background6.jpg"
        />
      </div>

      <div className="absolute container mx-auto text-center flex flex-col items-center justify-center">
        <div className={`z-50 flex items-center justify-center cursor-pointer rotate-90 text-indigo-600 w-24 h-24 bg-white rounded-full ${classes['play-video']}`}>
        <CgShapeTriangle className="text-3xl mb-2" />
        </div>
        <h1 className="font-bold text-4xl md:text-5xl pt-10 z-50">Watch Video</h1>
      </div>
    </div>
  );
};

export default Video;
