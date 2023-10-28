{
  /* <iframe 
          src='https://my.spline.design/untitled-5cc9adcbbe27dbd0e734f37e0787fe3d/'
          className='rounded-xl'
          width='100%'
          height='70%'
        >
</iframe> */
}

{
  /* <iframe src='https://my.spline.design/untitled-b092547d369025d594b5e0060e05417e/'
        width='100%'
         height='80%'
         >

         </iframe> */
}

{
  /* <iframe src='https://my.spline.design/untitled-b092547d369025d594b5e0060e05417e/' 
       width='100%' 
       height='80%'
       >
       </iframe> */
}

// <iframe src='https://my.spline.design/untitled-27ef5b25f88e8eb0d9066733817b510e/'
//     width='100%'
//     height='80%'
// >
// </iframe>

{
  /* <iframe src='https://my.spline.design/untitled-27ef5b25f88e8eb0d9066733817b510e/'
 width='100%'
  height='80%'
  >
  </iframe> */
}

// <iframe src='https://my.spline.design/untitled-27ef5b25f88e8eb0d9066733817b510e/'
// width='100%'
//  height='80%'
//  >
//  </iframe>

import React, { useState } from "react";
import classes from "./ThreePic.module.css";
import Image from "next/image";
import frontImg from "../../public/images/cart/front.jpg";
import backImg from "../../public/images/cart/back.jpg";

const ThreePic = () => {
  const [isFlipped, setFlipped] = useState(true);
  // const [isRotating, setRotating] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [startY, setStartY] = useState(0);
  // const [currentRotation, setCurrentRotation] = useState({ x: 0, y: 0 });

  // const handleMouseDown = (e: any) => {
  //   e.preventDefault();
  //   setStartX(e.clientX);
  //   setStartY(e.clientY);
  //   setRotating(true);
  // };

  // const handleMouseMove = (e: any) => {
  //   if (!isRotating) return;
  //   const deltaX = e.clientX - startX;
  //   const deltaY = e.clientY - startY;
  //   setCurrentRotation((prevRotation) => ({
  //     x: prevRotation.x + deltaY,
  //     y: prevRotation.y - deltaX,
  //   }));
  //   setStartX(e.clientX);
  //   setStartY(e.clientY);
  // };

  // const handleMouseUp = () => {
  //   setRotating(false);
  // };

  return (
    <div className="w-[100%] h-[300px]">
      <div
        className={`${classes.cube} ${
          isFlipped ? classes["active-animatoin"] : ""
        }`}
        // onMouseEnter={() => setFlipped(false)}
        // onMouseLeave={() => setFlipped(true)}
        // style={{
        //   transform: `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg)`,
        // }}
        // onMouseDown={handleMouseDown}
        // onMouseMove={handleMouseMove}
        // onMouseUp={handleMouseUp}
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
