import React from "react";
import classes from "./About.module.css";

const DUMMY_DATA = [
  {
    id: 1,
    name: "نور الدین علی آبادی",
    desc: "معاونت مسافری سازمان راهداری و حمل ونقل کشور",
    src: "/images/modiran/1.png",
  },
  {
    id: 2,
    name: "هادی علی آبادی",
    desc: "مدیر عامل شرکت صنعت بار الکترونیک احیا",
    src: "/images/modiran/2.jpg",
  },
  {
    id: 3,
    name: "مسعود قاسمی",
    desc: "عضو هیئت مدیره",
    src: "/images/modiran/3.png",
  },
];

const About = () => {
  return (
    <div className="relative w-screen min-h-[600px] md:h-[500px] flex items-center justify-center">
      <div className={`w-full h-[900px] md:h-full ${classes["about-img"]}`}>
        <img
          className="w-full h-full object-cover"
          src="/images/slider/1.jpg"
        />
      </div>
      <div className="absolute gap-6 md:gap-0 grid grid-cols-1 md:grid-cols-3 items-center py-2 md:py-0 px-8 md:px-0 w-[94%] md:w-2/3 top-[10%] md:top-[20%] h-[700px] md:h-[300px] container  border-2 border-white  bg-[#ffffff99] backdrop-blur-[5px] rounded-3xl">
        {DUMMY_DATA.map((item) => (
          <div key={item.id} className="text-[#263d5a] text-center flex flex-col items-center">
            <img
              className="w-[70px] md:w-[100px] h-[70px] md:h-[100px] rounded-full border-none mb-8"
              src={item.src}
              alt={item.name}
            />
            <h1 className="font-bold text-xl">{item.name}</h1>
            <div className="py-4 space-y-2 text-md">
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
