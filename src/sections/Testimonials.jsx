import React from "react";

const testimonials = [
  {
    quote:
      "Working with Coach Tracey changed everything. I feel stronger, more confident, and I finally have a routine that sticks.",
    name: "Jessica M.",
  },
  {
    quote:
      "The online coaching was super flexible and personalized. I dropped 12 lbs and gained so much strength!",
    name: "Marcus T.",
  },
  {
    quote:
      "I love the energy in bootcamps! It’s not just a workout — it’s a community. Highly recommend FitHub.",
    name: "Riley S.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-light py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-midnight mb-3">
          Client Success Stories
        </h2>
        <p className="text-midnight text-base max-w-xl mx-auto">
          Real transformations from real people — just like you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-sm border border-midnight/10"
          >
            <p className="text-sm text-midnight/90 italic mb-4">"{t.quote}"</p>
            <h4 className="text-sm font-semibold text-midnight">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
