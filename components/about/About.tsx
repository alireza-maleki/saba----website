import React from "react";
import classes from "./About.module.css";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Idaho",
    desc: "Boise 2336 Young Road",
    email: "office@yoursite.com",
    phone: "(123)456 789 012",
  },
  {
    id: 2,
    name: "Missouri",
    desc: "Liberty 3924 Traders Alley",
    email: "office@yoursite.com",
    phone: "(123)456 789 012",
  },
  {
    id: 3,
    name: "Illinois",
    desc: "Chicago 2655 Farland Street",
    email: "office@yoursite.com",
    phone: "(123)456 789 012",
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
      <div className="absolute flex flex-col md:flex-row items-center justify-around w-[94%] md:w-2/3 top-[10%] md:top-[20%] h-[600px] md:h-[300px] container flex items-center border-2 border-white justify-between  bg-[#ffffff99] backdrop-blur-[5px] rounded-3xl">
        {DUMMY_DATA.map((item) => (
          <div className="text-[#263d5a] text-center">
            <h1 className="font-bold text-2xl">{item.name}</h1>
            <div className="py-3 text-lg">
              <p>{item.desc}</p>
              <p>{item.email}</p>
            </div>
            <p className="font-bold text-2xl">{item.phone}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default About;
