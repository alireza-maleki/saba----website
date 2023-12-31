import React, { useState, useEffect } from "react";
import Image from "next/image";
import "animate.css/animate.min.css";
import { Link } from "react-scroll";
import WebLogBtn from "./beblog-btn/WebLogBtn";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // === close hamburger mune to on scroll  ===
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        setIsOpen(false);
      };
    }
  }, []);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`z-50 fixed top-0 right-0 w-screen h-[100px] bg-[#ffffff99] opacity-100 flex items-center justify-between px-4 lg:px-12 ${
        classes["header"]
      } ${isOpen ? classes["bg-white"] : ""} `}
    >
      {/* === Hamburger Menu === */}
      <div
        className={`${classes["hamburger-menu"]} md:hidden`}
        onClick={handleMenuToggle}
      >
        <div
          className={`${classes.hamburger} ${
            isOpen ? classes["is-active"] : ""
          }`}
        >
          <div className={classes.line}></div>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </div>
      </div>

      {/* === Header for large view (website) === */}
      <div className="hidden md:block md:w-3/4 lg:w-2/4">
        <ul className="w-full flex items-center justify-between md:text-md lg:text-xl text-[#263d5a]">
          <li className="cursor-pointer hover:text-black">
            <WebLogBtn
              to="/"
              href="/"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
            >
              صفحه اصلی
            </WebLogBtn>
          </li>

          <li className="cursor-pointer hover:text-black">
            <Link
              to="/"
              href="/"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
            >
              محصولات
            </Link>
          </li>

          {/* <li className="cursor-pointer hover:text-black">
            <WebLogBtn href="http://blog.sababar.com">وبلاگ</WebLogBtn>
          </li> */}

          <li className="cursor-pointer hover:text-black">
            <Link
              to="contact"
              href="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
            >
              تماس با ما
            </Link>
          </li>

          <li className="cursor-pointer hover:text-black">
            <Link
              to="footer"
              href="footer"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
            >
              درباره ما
            </Link>
          </li>

          <li className="cursor-pointer">
            <WebLogBtn
              className="text-base px-4 py-2 rounded-lg bg-[#334f6c] hover:bg-[#335f6c] text-white"
              href="/freight-quote"
            >
              استعلام کرایه حمل
            </WebLogBtn>
          </li>
        </ul>
      </div>

      <WebLogBtn href="/" className="w-[120px] md:w-[200px] cursor-pointer">
        <Image
          className="object-cover w-full h-full"
          src="/images/logo/saba.png"
          width={200}
          height={80}
          alt="logo"
          loading="lazy"
        />
      </WebLogBtn>

      {/* === Header for Moblie view === */}
      <div
        className={`z-50 text-center bg-[#ffffff99] left-0 h-[250px] w-screen block md:hidden ${
          classes["navbar"]
        } ${classes.menu} ${isOpen ? classes.open : ""} ${
          isOpen ? classes["bg-white"] : ""
        } `}
      >
        <ul
          className={`w-full h-full text-center space-y-4 pt-4 text-lg text-[#000]`}
        >
          <li className="cursor-pointer hover:text-black">
            <WebLogBtn
              to="/"
              href="/"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
              onClick={() => {
                handleMenuToggle();
              }}
            >
              صفحه اصلی
            </WebLogBtn>
          </li>

          <li className="cursor-pointer hover:text-black">
            <Link
              to="/"
              href="/"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
              onClick={() => {
                handleMenuToggle();
              }}
            >
              محصولات
            </Link>
          </li>

          <li className="cursor-pointer hover:text-black">
            <Link
              to="contact"
              href="contact"
              spy={true}
              smooth={true}
              offset={100}
              duration={2000}
              onClick={() => {
                handleMenuToggle();
              }}
            >
              تماس با ما
            </Link>
          </li>

          <li className="cursor-pointer hover:text-black">
            <Link
              to="footer"
              href="footer"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
              onClick={() => {
                handleMenuToggle();
              }}
            >
              درباره ما
            </Link>
          </li>

          <li className="cursor-pointer hover:text-black">
            <WebLogBtn
              onOpenMenuHandler={handleMenuToggle}
              href="/freight-quote"
            >
              استعلام کرایه
            </WebLogBtn>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNavigation;
