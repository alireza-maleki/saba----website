import React from "react";
import classes from "./Button.module.css";

import { useSwiper } from "swiper/react";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const SwiperButton = () => {
  const swiper = useSwiper();

  return (
    <div>
      <RiArrowLeftSLine
        onClick={() => swiper.slideNext()}
        className={classes["arrow-next"]}
      />

      <RiArrowRightSLine
        onClick={() => swiper.slidePrev()}
        className={classes["arrow-prev"]}
      />
    </div>
  );
};

export default SwiperButton;
