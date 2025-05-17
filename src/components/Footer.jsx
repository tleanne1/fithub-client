import React from "react";

const Footer = () => {
  return (
    <footer className="bg-midnight text-light text-center py-6 px-4 text-sm">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} FitHub Coaching. Built by Tracey Buentello.
      </p>
      <div className="space-x-4">
        <a
          href="https://tleanne.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-lime transition"
        >
          Portfolio
        </a>
        <a
          href="https://github.com/tleanne1/fithub-client"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-lime transition"
        >
          GitHub
        </a>
        <a
          href="mailto:coach@fithubtraining.com"
          className="hover:text-lime transition"
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
