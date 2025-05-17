import React from "react";
import heroImg from "../assets/hero-fitness.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-midnight/70 z-0 backdrop-blur-sm" />
      <div className="relative z-10 text-center text-light max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
          FitHub Coaching
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Empowering your fitness journey with expert coaching and real results.
        </p>
        <a
          href="#programs"
          className="inline-block bg-lime text-midnight px-6 py-3 rounded-full font-semibold hover:bg-aqua transition"
        >
          Explore Programs
        </a>
      </div>
    </section>
  );
};

export default Hero;
