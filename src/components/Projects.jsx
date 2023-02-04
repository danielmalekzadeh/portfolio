import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import { threeB, arrowRightUp } from "../assets";
import { projectsData } from "../data";

import "swiper/css";
import "swiper/css/free-mode";

const Projects = () => {
  const [cwidth, setCwidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setCwidth(window.innerWidth);
  });
  return (
    <div id="projects">
      <div className="flex items-center justify-center space-x-3">
        <img src={threeB} alt="3b icon" width={36} />
        <p className="font-bold text-4xl font-itim">Projects</p>
      </div>
      <p className="mt-4 opacity-75 text-center px-4 md:px-0">
        You can see several of my projects that I completed during my studies
      </p>
      <div className="py-4">
        <Swiper
          slidesPerView={
            cwidth >= 768 && cwidth <= 1024 ? "2" : cwidth < 768 ? "1" : "3"
          }
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          style={{ padding: "8px" }}
        >
          {projectsData.map((project, idx) => (
            <SwiperSlide
              key={idx}
              className="border rounded-lg p-5 flex flex-col justify-between font-bold w-full h-[520px] bg-white"
            >
              <div className="w-full mx-auto flex justify-center flex-col">
                <img
                  src={project.image}
                  alt="project-image"
                  className="rounded-lg object-contain"
                />
                <h2 className="font-bold text-2xl mt-5">{project.name}</h2>
                <p className="font-medium py-3">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.techs.map((tech, tidx) => (
                    <div
                      key={tidx}
                      className="border rounded-full p-1 text-xs px-5 cursor-pointer select-none hover:bg-gray-100"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={project.ref}
                  target="_blank"
                  className="inline-flex gap-2 items-center justify-between border py-2 px-4 rounded-full hover:bg-gray-200"
                >
                  <img
                    src={arrowRightUp}
                    alt="arrow"
                    className="h-[22px] w-[22px]"
                  />
                  <b className="text-base font-bold">View Code</b>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
