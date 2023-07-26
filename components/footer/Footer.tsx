import React from "react";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="w-screen h-[600px] bg-[#131729] py-16">
      <div className="container mx-auto p-8">

        <div className="flex flex-col md:flex-row text-center md:text-start space-y-8 md:space-y-0 items-center justify-around">
          <div>
            <p className="text-[#b0b0b1] pb-2 text-lg">CALL US</p>
            <h1 className="text-[#5e71db] font-bold text-2xl md:text-3xl">(123)456 789 012</h1>
          </div>

          <div>
            <p className="text-[#b0b0b1] text-lg">VISIT US</p>
            <p className="py-2 text-lg">Liberty 3924 Traders Alley</p>
            <p className="text-lg">office@yoursite.com</p>
          </div>

          <div className="flex items-center space-x-2">
            <FaFacebookF className="bg-[#5e71db] p-2 w-10 h-10 rounded-full cursor-pointer"/>
            <BiLogoTwitter className="bg-[#5e71db] p-2 w-10 h-10 rounded-full cursor-pointer"/>
            <FaInstagram className="bg-[#5e71db] p-2 w-10 h-10 rounded-full cursor-pointer"/>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-around md:pt-32 md:px-36'>
            
            <div className="text-center md:text-start mt-24 md:mt-0 py-10 md:py-0">
                <h3 className="font-bold text-xl pb-4">About Us</h3>
                <p className="w-[100%] md:w-[40%] text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices risus eget nunc ullamcorper, ut consectetur eros mattis. Convallis fringilla arcu consequat condimentum lectus.</p>
            </div>


            <div className="flex flex-col md:flex-row text-center md:text-start space-y-10 md:space-y-0 md:space-x-24 pt-10 md:pt-0">

                <div className="flex flex-col items-center">
                    <p className="font-bold text-xl pb-3">Company</p>
                    <ul className={`flex flex-col text-md space-y-2 ${classes['list-item']}`}>
                        <li>About</li>
                        <li>Jobs</li>
                        <li>Contacts</li>
                        <li>Blog</li>
                    </ul>
                </div>


                <div className="flex flex-col items-center">
                <p className="font-bold text-xl pb-3">Themes</p>
                    <ul className={`flex flex-col text-md space-y-2 ${classes['list-item']}`}>
                        <li>Features</li>
                        <li>Team</li>
                        <li>Pricing</li>
                        <li>Info</li>
                    </ul>
                </div>


                <div className="flex flex-col">
                <p className="font-bold text-xl pb-3">Support</p>
                    <ul className={`flex flex-col text-md space-y-2 ${classes['list-item']}`}>
                        <li>Contacts</li>
                        <li>Testimonials</li>
                        <li>Terms of Service</li>
                        <li>Help</li>
                    </ul>
                </div>

            </div>

        </div>

      </div>
    </div>
  );
};

export default Footer;
