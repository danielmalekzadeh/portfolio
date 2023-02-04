import React from "react";

// import assets
import { threeB, tech } from "../assets";

const About = () => {
  return (
    <div id="about-me" className="mt-8 py-8">
      <div className="flex items-center justify-center space-x-3">
        <img src={threeB} alt="3b icon" width={36} />
        <p className="font-bold text-4xl font-itim">About Me</p>
      </div>
      <p className="mt-4 opacity-75 text-center">
        A very short story about myself to get to know more
      </p>
      <div className="flex flex-col space-y-10 items-center justify-center md:flex-row">
        <div className="w-full flex items-center justify-center py-7 md:py-0">
          <img src={tech} alt="tech image" width={280} />
        </div>
        <div className="px-4 mt-4 rounded-2xl w-full">
          <p className="text-xl leading-8 max-w-3xl">
            My name is Daniel, I am 19 years old and I have been working in the
            field of web design and development for 2 years and I am also
            interested in blockchain technology and I have started my activity
            in this field, I am interested in learning new things and I think
            that we humans have special abilities that We can use it to create a
            new world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
