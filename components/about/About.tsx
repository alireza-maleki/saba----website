import React from "react";
import classes from "./About.module.css";

const DUMMY_DATA = [
  {
    id: 1,
    name: "نور الدین علی آبادی",
    desc: "معاونت مسافری سازمان راهداری و حمل ونقل کشور",
  },
  {
    id: 2,
    name: "هادی علی آبادی",
    desc: "مدیر عامل شرکت صنعت بار الکترونیک احیا",
  },
  {
    id: 3,
    name: "علی ملکی",
    desc: "برنامه نویس فرانت اند",
  },
];

const About = () => {
  return (
    <div className="relative w-screen min-h-[600px] md:h-[500px] flex items-center justify-center">
      <div className={`w-full h-[800px] md:h-full ${classes["about-img"]}`}>
        <img
          className="w-full h-full object-cover"
          src="https://mobirise.com/extensions/glassm5/corporate/assets/images/background6.jpg"
        />
      </div>
      <div className="absolute py-2 md:py-0 grid grid-cols-1 md:grid-cols-3 items-center px-8 md:px-0 w-[94%] md:w-2/3 top-[10%] md:top-[20%] h-[650px] md:h-[300px] container  border-2 border-white  bg-[#ffffff99] backdrop-blur-[5px] rounded-3xl">
        {DUMMY_DATA.map((item) => (
          <div key={item.id} className="text-[#263d5a] text-center">
            <h1 className="font-bold text-2xl">{item.name}</h1>
            <div className="py-4 space-y-2 text-lg">
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default About;
