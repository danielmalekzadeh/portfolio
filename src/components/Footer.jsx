import React from "react";

// import assets
import { github, twitter } from "../assets";

const Footer = () => {
  return (
    <div className="py-6 flex flex-col justify-between items-center md:flex-row">
      <b className="text-center mb-4 md:text-left md:mb-0">
        COPYRIGHT © 2023 DANIEL MALEKZADEH - ALL RIGHTS RESERVED.
      </b>
      <div className="flex gap-2">
        <a href="https://github.com/danielmalekzadeh">
          <img src={github} alt="github" width={48} />
        </a>
        <a href="https://github.com/danielmalekzadeh">
          <img src={twitter} alt="github" width={48} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
