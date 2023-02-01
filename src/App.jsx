import React from "react";

// import our component
import { Navbar, Hero, About } from "./components";

// import assets
import { e1, e2 } from "./assets";

const App = () => {
  return (
    <div className="App">
      <img
        src={e1}
        alt="e 1"
        width={90}
        className="absolute top-[420px] hidden md:block"
      />
      <img
        src={e2}
        alt="e 2"
        width={90}
        className="absolute right-0 hidden md:block"
      />
      <div className="container m-auto">
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default App;
