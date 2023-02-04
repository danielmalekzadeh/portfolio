import React from "react";

// import our component
import { Navbar, Hero, About, Skills, Projects } from "./components";

// import assets
import { e1, e2, e3, e4 } from "./assets";

const App = () => {
  return (
    <div className="App">
      <img
        src={e1}
        alt="e 1"
        width={90}
        className="absolute top-[420px] hidden xl:block z-[-1]"
      />
      <img
        src={e2}
        alt="e 2"
        width={90}
        className="absolute right-0 hidden xl:block z-[-1]"
      />
      <img
        src={e3}
        alt="e 2"
        width={90}
        className="absolute right-0 2xl:-bottom-[80%] xl:-bottom-[127%] hidden xl:block z-[-1]"
      />
      <img
        src={e4}
        alt="e 2"
        width={90}
        className="absolute left-0 2xl:-bottom-[160%] xl:-bottom-[230%] hidden xl:block z-[-1]"
      />
      <div className="container m-auto px-3  md:px-4 2xl:px-0">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default App;
