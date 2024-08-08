import React from "react";
import aboutImg from "../assets/profile_barong.jpg";

const About = () => {
  return (
    <>
      <div className="text-white max-w-[1200px] mx-auto my-10" id="about">
        <div className="md:grid md:grid-cols-2 md:py-14">
          <div className="mt-4 md:mt-0 text-left flex">
            <div className="my-auto mx-6">
              <h2 className="text-4xl font-bold mb-4 primary-color">
                About me
              </h2>
              <p className="text-base lg:text-lg">
                BSIT graduate from City College of Tagaytay with strong skills
                in software development, particularly in creating web-based
                systems. Excellent problem-solver with a passion for continuous
                learning and teamwork. Seeking an entry-level software
                engineering position to apply technical expertise and contribute
                to innovative IT projects.
              </p>
            </div>
          </div>

          <img
            src={aboutImg}
            alt="about image"
            className="mx-auto rounded-xl py-8 md:py-0"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default About;
