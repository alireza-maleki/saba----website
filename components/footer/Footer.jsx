import React from "react";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="w-screen min-h-[600px] bg-[#131729] py-16" id="footer">
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row text-center md:text-start space-y-8 md:space-y-0 items-center justify-around">
          <div>
            <p className="text-[#b0b0b1] pb-2 text-lg">تماس با ما</p>
            <h3
              className="text-[#5e71db] font-bold text-2xl md:text-3xl"
              style={{ direction: "ltr" }}
            >
              ۰۲۱ - ۲۲۷۷۸۳۰۰
            </h3>
          </div>

          <div>
            <p className="text-[#b0b0b1] text-lg">ما را ملاقات کنید</p>
            <p className="py-2 text-lg text-white">پاسداران بین نیستان نهم و دهم</p>
            <p className="text-lg text-white">info@sababar.com</p>
          </div>

          <div className="grid grid-cols-3 grid-rows-1 gap-2">
            <MdEmail
              onClick={() => (window.location.href = "mailto:info@sababar.com")}
              className="bg-[#5e71db] p-2 w-10 h-10 rounded-full cursor-pointer text-white"
            />

            <Link href="https://www.linkedin.com/company/sababar/mycompany/verification/">
              <AiFillLinkedin className="bg-[#5e71db] p-2 w-10 h-10 rounded-full cursor-pointer text-white" />
            </Link>

            <Link href="https://instagram.com/sababarr?igshid=MmU2YjMzNjRlOQ==">
              <FaInstagram className="bg-[#5e71db] p-2 w-10 h-10 rounded-full cursor-pointer text-white" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around md:pt-32 md:px-36 text-white">
          <div className="text-center md:text-start mt-24 md:mt-0 py-10 md:py-0 text-white">
            <h3 className="font-bold text-xl pb-4">درباره ما</h3>
            <p className="w-[100%] md:w-[70%] text-sm leading-7">
              کلیه محصولات شرکت صبا به صورت ۲۴ ساعته توسط شرکت صنعت بار
              الکترونیک پشتیبانی می‌شوند. جهت درخواست پشتیبانی از طریق ایمیل یا
              شماره تماس شرکت اقدام نمایید.
            </p>
          </div>

          <div className="w-full md:w-1/4 self-end flex flex-col md:flex-row items-center">
            <a
              className="cursor-pointer"
              target="_blank"
              href="https://trustseal.enamad.ir/?id=169806&amp;Code=dpNW6vCj2bNdI4s15LBK"
            >
              <img
                src="https://Trustseal.eNamad.ir/logo.aspx?id=169806&amp;Code=dpNW6vCj2bNdI4s15LBK"
                alt=""
                id="dpNW6vCj2bNdI4s15LBK"
              />
            </a>

            <img
              className="cursor-pointer"
              onClick='window.open("https://logo.samandehi.ir/Verify.aspx?id=171565&p=rfthjyoerfthdshwgvkadshw", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")'
              alt="logo-samandehi"
              src="https://logo.samandehi.ir/logo.aspx?id=171565&p=nbpdyndtnbpdujynwlbqujyn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
