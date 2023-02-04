import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

// import assets
import { icons, threeB } from "../assets";

import "swiper/css";
import "swiper/css/free-mode";

const Skills = () => {
  const [cwidth, setCwidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setCwidth(window.innerWidth);
  });
  return (
    <div id="skills" className="py-8 px-4 md:px-0">
      <div className="flex items-center justify-center space-x-3">
        <img src={threeB} alt="3b icon" width={36} />
        <p className="font-bold text-4xl font-itim">Skills</p>
      </div>
      <p className="mt-4 opacity-75 text-center">
        I love learning and always looking for new things
      </p>
      <div className="py-3 flex gap-2 overflow-x-auto bg-white">
        <Swiper
          slidesPerView={cwidth > 768 ? "12" : "5"}
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          style={{ paddingTop: "16px", paddingBottom: "16px" }}
        >
          {icons.map((icon, idx) => (
            <SwiperSlide
              key={idx}
              style={{ width: "8%", height: "auto" }}
              className="shadow rounded-3xl hover:bg-gray-100 cursor-pointer h-auto w-[8%] z-50"
            >
              <img src={icon} alt="icon" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
