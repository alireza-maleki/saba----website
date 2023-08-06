import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

import classes from "./GoToTop.module.css";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // window.scrollBy(0, -50); // تغییر مقدار 50 را برای کمتر یا بیشتر کردن سرعت اسکرول تنظیم کنید
    // requestAnimationFrame(scrollToTop);
  };

  const listenToScroll = () => {
    let heightToHidden = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className={`z-50 p-4 w-18 h-18 rounded-full bg-[#ffffff99] fixed right-6 bottom-6 shadow-2xl ${classes["icon-top"]}`}
          onClick={scrollToTop}
        >
          <AiOutlineArrowUp
            className={`text-xl text-slate-800`}
          />
        </button>
      )}
    </>
  );
};

export default GoToTop;
