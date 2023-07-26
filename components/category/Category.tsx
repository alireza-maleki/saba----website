import React from "react";

import {
  MdOutlineBrandingWatermark,
  MdNoPhotography,
  MdManageAccounts,
  MdSettingsSuggest,
} from "react-icons/md";
import { SiAdobeindesign } from "react-icons/si";
import { HiUsers } from "react-icons/hi";

const Category = () => {
  return (
    <div className="w-screen min-h-[750px] py-32 md:py-12 bg-gradient-to-r from-[#b7eafd] to-[#c2d4fc]">
      <div className="container px-4 md:px-0 mx-auto">
        <div className="text-black">
          <h1 className="text-center md:text-start font-bold text-2xl md:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing. Ut eu
          </h1>
          <h1 className="text-center md:text-start text-2xl md:text-4xl font-bold py-4">risus eget sapien.</h1>
        </div>

        <div className="bg-[#ffffff99] drop-shadow-2xl border-2 border-white backdrop-blur-3xl py-6 rounded-3xl mt-10 flex flex-wrap  flex-row md:flex-col">
          
          <div className="flex flex-col md:flex-row items-center justify-center text-black md:space-x-10 py-8">
            <div className="flex flex-col items-center justify-center md:items-start space-y-4 p-4">
              <p>
                <MdOutlineBrandingWatermark className="text-4xl" />
              </p>
              <span className="font-bold text-lg">Branding</span>
              <p className="text-center md:text-start">
                Lorem ipsum dolor sapien amet, consectetur adipiscing elit.{" "}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center md:items-start space-y-4 p-4">
              <p>
                <MdNoPhotography className="text-4xl" />
              </p>
              <span className="font-bold text-lg">Photography</span>
              <p className="text-center md:text-start">
                Lorem ipsum dolor sapien amet, consectetur adipiscing elit.{" "}
              </p>
            </div>

            <div className="flex flex-col  items-center justify-center md:items-start space-y-4 p-4">
              <p>
                <SiAdobeindesign className="text-4xl" />
              </p>
              <span className="font-bold text-lg">Design</span>
              <p className="text-center md:text-start">
                Lorem ipsum dolor sapien amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center text-black md:space-x-10 py-8">
            <div className="flex flex-col items-center justify-center md:items-start space-y-4 p-4">
              <p>
                <MdManageAccounts className="text-4xl" />
              </p>
              <span className="font-bold text-lg">Managment</span>
              <p className="text-center md:text-start">
                Lorem ipsum dolor sapien amet, consectetur adipiscing elit.{" "}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center md:items-start space-y-4 p-4">
              <p>
                <MdSettingsSuggest className="text-4xl" />
              </p>
              <span className="font-bold text-lg">Processes</span>
              <p className="text-center md:text-start">
                Lorem ipsum dolor sapien amet, consectetur adipiscing elit.{" "}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center md:items-start space-y-4 p-4">
              <p>
                <HiUsers className="text-4xl" />
              </p >
              <span className="font-bold text-lg">Staff</span>
              <p className="text-center md:text-start">
                Lorem ipsum dolor sapien amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Category;
