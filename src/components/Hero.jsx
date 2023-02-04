import React from "react";

// import assets
import { myPicture } from "../assets";

const Hero = () => {
  return (
    <div
      id="home"
      className="md:h-[550px] flex flex-col md:flex-row justify-between"
    >
      <div className="hero--left_content w-full h-full flex flex-col justify-center py-9 order-2 md:py-0 md:order-1">
        <div className="content space-y-3 text-center md:text-left">
          <p>
            Hi, I’am <b>Daniel</b> 👋
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            Full Stack Developer
          </h1>
          <p className="mb-4">
            I'm Daniel and I'm a full stack developer. <br></br>I have a passion
            for building and designing user-friendly software. <br></br>I can
            help you build your next dream project.
          </p>
        </div>
        <div className="mt-6 text-center md:text-left">
          <a
            href="mailto:daniel.malekzadeh@hotmail.com"
            className="py-2 px-5  bg-black text-white rounded-3xl shadow-c-shadow hover:drop-shadow-lg"
          >
            Contact me
          </a>
        </div>
      </div>
      <div className="hero--right_content w-full flex items-center justify-center order-1 px-4 md:mb-0 md:order-2">
        <img src={myPicture} alt="my picture" width={420} />
      </div>
    </div>
  );
};

export default Hero;
