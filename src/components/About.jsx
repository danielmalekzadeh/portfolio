import React from "react";

// import assets
import { threeB, tech } from "../assets";

const About = () => {
  return (
    <div className="mt-8 py-8 px-4 flex flex-col items-center md:flex-row md:px-0">
      <div className="order-2 py-6 md:py-0">
        <div className="flex items-center space-x-3">
          <img src={threeB} alt="3b icon" width={36} />
          <p className="font-bold text-3xl font-itim">About Me</p>
        </div>
        <div className="px-4 mt-5 rounded-2xl">
          <p className="leading-7">
            My name is Daniel, I am 19 years old and I have been working in the
            field of web design and development for 2 years and I am also
            interested in blockchain technology and I have started my activity
            in this field, I am interested in learning new things and I think
            that we humans have special abilities that We can use it to create a
            new world.
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center md:justify-start">
        <img src={tech} alt="tech image" width={256} />
      </div>
    </div>
  );
};

export default About;
