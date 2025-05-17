import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Programs from "./sections/Programs";



const App = () => {
  return (
    <main className="font-sans">
      <Hero />
      <About />
      <Programs />
    </main>
  );
};

export default App;
