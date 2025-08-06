import React from 'react';

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Marri Laxman Reddy Engineering College",
    duration: "2023 - 2027",
    description:
      "Focused on software development, data structures, and web technologies. Participated in hackathons, tech fests, and collaborative coding projects. Currently learning advanced frontend frameworks and working on personal web apps.",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "MJPTBCWR Junior College",
    duration: "2021 - 2023",
    description:
      "Specialized in Mathematics, Physics, and Chemistry. Scored above 90% and cultivated an early interest in programming, logical thinking, and competitive exams.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen bg-transparent text-violet-500 py-20 px-6 z-10"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">Education</h2>

      <div className="max-w-5xl mx-auto space-y-12">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="min-h-[250px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-3">
              {edu.degree}
            </h3>
            <p className="text-xl text-gray-200 font-medium mb-1">{edu.institution}</p>
            <p className="text-md text-gray-400 mb-4">{edu.duration}</p>
            <p className="text-lg text-gray-100 leading-relaxed">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
