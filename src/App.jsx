import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Programs from "./sections/Programs";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
