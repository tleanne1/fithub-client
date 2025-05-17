import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-aqua/10 text-midnight py-20 px-6 md:px-20 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-base md:text-lg mb-6">
          Whether your goal is fat loss, strength, or confidence — I’m here to help.
        </p>
        <p className="text-sm font-medium mb-2">
          📍 Based in Dallas, TX — Training online & in person
        </p>
        <p className="text-sm font-medium mb-2">
          ✉️ coach@fithubtraining.com
        </p>
        <a
          href="mailto:coach@fithubtraining.com"
          className="inline-block mt-6 px-6 py-3 bg-midnight text-light rounded-full hover:bg-aqua transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
