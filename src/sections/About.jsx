import React from "react";
import coachImg from "../assets/coach-profile.jpg"; // Add image to assets

const About = () => {
  return (
    <section id="about" className="bg-light py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={coachImg}
            alt="Coach Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-midnight mb-4">
            Meet Your Coach
          </h2>
          <p className="text-midnight text-base leading-relaxed mb-4">
            I'm a certified fitness coach with over 10 years of experience helping
            people transform their lives through strength, nutrition, and mindset.
            My approach is holistic, sustainable, and tailored to your goals.
          </p>
          <p className="text-midnight text-base leading-relaxed">
            Whether you're new to fitness or ready to level up, I'm here to guide you
            with structure, support, and serious results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
