import React from "react";

const Contact = () => {
  return (
    <div className="bg-black text-white rounded-2xl px-10 py-10 h-[250px] flex flex-col items-center justify-between md:flex-row md:py-0 md:h-[200px]">
      <p className="text-xl font-medium">
        If you have an idea that I can help develop, I would be happy to talk
        more.
      </p>
      <a
        href="mailto:daniel.malekzadeh@hotmail.com"
        className="border px-7 py-3 rounded-full hover:bg-white hover:text-black transition-all"
      >
        Contact me
      </a>
    </div>
  );
};

export default Contact;
