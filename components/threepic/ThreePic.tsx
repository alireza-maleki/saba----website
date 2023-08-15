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
      className={`${classes.cube} ${isFlipped ? classes['active-animatoin'] : ''}`}
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
          <img src="/images/cart/front.JPG" alt="front" />
        </div>

        <div className={classes.spacer}></div>

        <div className={`${classes.face} ${classes.back}`}>
          <img src="/images/cart/back.JPG" alt="Back" />
        </div>
      </div>
    </div>
  );
};

export default ThreePic;
