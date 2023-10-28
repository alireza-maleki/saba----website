import React, { useState } from "react";
import classes from "./ThreePic.module.css";
import Image from "next/image";
import frontImg from "../../public/images/cart/front.jpg";
import backImg from "../../public/images/cart/back.jpg";

const ThreePic = () => {
  const [isFlipped, setFlipped] = useState(true);

  return (
    <div className="w-[100%] h-[300px]">
      <div
        className={`${classes.cube} ${
          isFlipped ? classes["active-animatoin"] : ""
        }`}
      >
        <div className={`${classes.face} ${classes.front}`}>
          <Image width={300} height={300} src={frontImg} alt="front" />
        </div>

        <div className={classes.spacer}></div>

        <div className={`${classes.face} ${classes.back}`}>
          <Image width={300} height={300} src={backImg} alt="Back" />
        </div>
      </div>
    </div>
  );
};

export default ThreePic;
