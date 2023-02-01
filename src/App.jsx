import React from "react";

// import our component
import { Navbar, Hero, About, Skills } from "./components";

// import assets
import { e1, e2, e3, e4 } from "./assets";

const App = () => {
  return (
    <div className="App">
      <img
        src={e1}
        alt="e 1"
        width={90}
        className="absolute top-[420px] hidden lg:block"
      />
      <img
        src={e2}
        alt="e 2"
        width={90}
        className="absolute right-0 hidden lg:block"
      />
      <img
        src={e3}
        alt="e 2"
        width={90}
        className="absolute right-0 2xl:-bottom-[80%] xl:-bottom-[130%] lg:-bottom-[140%] hidden lg:block"
      />
      <div className="container m-auto md:px-4">
        <Navbar />
        <Hero />
        <About />
        <Skills />
      </div>
    </div>
  );
};

export default App;
