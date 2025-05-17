import React from "react";

const programs = [
  {
    title: "1:1 Personal Training",
    desc: "Custom workouts, weekly check-ins, and direct coaching tailored to your goals.",
  },
  {
    title: "Group Bootcamps",
    desc: "High-energy sessions focused on strength, conditioning, and fun accountability.",
  },
  {
    title: "Online Coaching",
    desc: "Flexible virtual programs with video instruction, progress tracking, and support.",
  },
  {
    title: "Nutrition Guidance",
    desc: "Sustainable meal plans, macros coaching, and daily accountability check-ins.",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="bg-aqua/10 py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-midnight mb-3">
          Coaching Programs
        </h2>
        <p className="text-midnight text-base max-w-xl mx-auto">
          Choose a path that fits your goals — and let’s get to work.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {programs.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md border border-midnight/10"
          >
            <h3 className="text-lg font-semibold text-midnight mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-midnight/80">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
