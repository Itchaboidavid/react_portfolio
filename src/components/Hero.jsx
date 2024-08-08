import React from "react";
import heroImg from "../assets/toga.jpg";
import { TypeAnimation } from "react-type-animation";
import CV from "../../public/CV_CENTENO.pdf";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      {/* HERO IMAGE */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black mb-4">
        <div className="my-auto mx-auto col-span-1 w-[250px] sm:w-[235px] md:w-[250px] lg:w-[350px] h-auto ps-5">
          <img src={heroImg} alt="hero image" className="rounded-lg" />
        </div>

        <div className="col-span-2 px-5 flex flex-col justify-center">
          {/* HERO DESCRIPTION */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className="primary-color">I'm a</span> <br />
            <TypeAnimation
              sequence={["Frontend Dev", 1000, "Web designer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white sm:text-lg my-5 lg:text-xl">
            My name is David Centeno and I have 1 year experience in web
            development
          </p>
          <div className="my-5">
            <a
              href={CV}
              className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
              download
            >
              Download CV
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 w-full rounded-xl  border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
