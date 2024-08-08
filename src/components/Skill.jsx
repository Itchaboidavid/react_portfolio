import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import php from "../assets/php.png";

const Skill = () => {
  return (
    <>
      <div className="md:px-10 bg-black text-gray-400 md:h-[300px] max-w-[1200px] mx-auto grid grid-cols-3 gap-y-4 place-items-center lg:flex lg:justify-between lg:items-center md:mt-10">
        <div className="flex flex-col items-center sm:my-0 w-[40px] md:w-[100px]">
          <img src={html} alt="html icon" />
          <p className="mt-2">HTML5</p>
        </div>
        <div className="flex flex-col items-center sm:my-0 w-[40px] md:w-[100px]">
          <img src={css} alt="css icon" />
          <p className="mt-2">CSS3</p>
        </div>
        <div className="flex flex-col items-center sm:my-0 w-[40px] md:w-[100px]">
          <img src={javascript} alt="js icon" />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center sm:my-0 w-[40px] md:w-[100px]">
          <img src={tailwind} alt="tailwind icon" />
          <p className="mt-2">Tailwind</p>
        </div>
        <div className="flex flex-col items-center sm:my-0 w-[40px] md:w-[100px]">
          <img src={react} alt="react icon" />
          <p className="mt-2">React</p>
        </div>
        <div className="flex flex-col items-center sm:my-0 w-[70px] md:w-[150px] md:h-[90px]">
          <img src={php} alt="php icon"/>
          <p className="mt-2">PHP</p>
        </div>
      </div>
    </>
  );
};

export default Skill;
