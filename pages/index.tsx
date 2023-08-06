import React, { Fragment, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

import Home from "../components/home/Home";

const index = () => {

  

  useEffect(() => {
    // window.addEventListener('scroll', function() {
    //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    //   if(scrollTop >= 150) {
    //     setTop((prevState) => !prevState);
    //     console.log(top);
    //     console.log('into if')
    //   } else {
    //     setTop(false);
    //     console.log(top);
    //   }
    //   console.log(scrollTop); // مقدار اسکرول از بالا به‌روز رسانی می‌شود
    // });
  }, []);



  return (
    <Fragment>
      <Home />
    </Fragment>
  );
};

export default index;
