import React, { useState, useRef } from "react";
import classes from "./Video.module.css";

import { CgShapeTriangle } from "react-icons/cg";

const Video = () => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying((prevState) => !prevState);
  };

  const handleVideoClick = () => {
    togglePlay();
  };


  // "../videos/saba.mp4"
  const videoPath = "/videos/saba.mp4";

  return (
    <div
      className={`relative w-screen h-[400px] md:h-[700px] flex items-center justify-center ${classes["container-img"]}`}
    >
      <div className="absolute w-full h-full bg-[#000] top-0 left-0"></div>
      <div className="z-40 relative w-full h-full">

        <video
          onClick={handleVideoClick}
          muted
          loop
          ref={videoRef}
          className="z-50 w-full h-full object-cover"
          alt="company-video"
        >
          <source src={videoPath} type="video/mp4" alt="company-video" />
        </video>
      </div>

      {!isPlaying && (
        <div className=" absolute container mx-auto text-center flex flex-col items-center justify-center">
          <div
            onClick={togglePlay}
            className={`z-50 flex items-center justify-center cursor-pointer rotate-90 text-indigo-600 w-24 h-24 bg-white rounded-full ${classes["play-video"]}`}
          >
            <CgShapeTriangle className="text-3xl mb-2" />
          </div>
          <h3 className="text-white font-bold text-lg md:text-2xl pt-10 z-50">
            برای تماشا کلیک کنید
          </h3>
        </div>
      )}
    </div>
  );
};

export default Video;
