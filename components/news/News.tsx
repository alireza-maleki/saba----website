import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const DUMMY_DATA = [
  { id: 1, date: "10 Jul", title: "Lorem ipsum dolor sit amet" },
  { id: 2, date: "12 Jul", title: "Cras elementum nunc sed rutrum " },
  { id: 3, date: "14 Jul", title: "Vivamus faucibus condimentum" },
];

const News = () => {
  console.log(DUMMY_DATA.map((item) => item));
  return (
    <div className="w-screen px-4 min-h-[700px] py-24 bg-gradient-to-r from-[#b7eafd] to-[#c2d4fc]">
      <div className="w-full md:w-2/3 mx-auto p-12 bg-white rounded-[40px] border-2 border-white drop-shadow-2xl">
        <div className="text-center">
          <p className="text-[#576d85] pb-4 text-2xl">NEWS CENTER</p>
          <h1 className="text-[#576d85] font-bold text-3xl md:text-5xl">Our Latest News</h1>
        </div>

        <div className="mt-12">
          {DUMMY_DATA.map((item) => (
            <div className="w-full py-6 flex flex-col md:flex-row text-center md:text-start items-center justify-between border-b border-salte-500">
              <p className="font-bold text-2xl text-[#576d85]">{item.date}</p>
              <p className="text-[#576d85] font-bold text-2xl md:text-4xl">{item.title}</p>
              <button className="text-md text-[#576d85] hover:border-b border-slate-500 transition duration-1000 ease-in flex items-center space-x-1">
                <span>Full Article</span> <IoIosArrowForward />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
