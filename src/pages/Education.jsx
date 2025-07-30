import React from 'react';

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Marri Laxman Reddy Engineering College",
    duration: "2023 - 2027",
    description: "Focused on software development, data structures, and web technologies. Participated in hackathons and tech fests.",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "MJPTBCWR Junior College",
    duration: "2021 - 2023",
    description: "Specialized in Mathematics, Physics, and Chemistry. Scored above 90% and developed an early interest in coding.",
  },
];

const Education = () => {
  return (
    <section id="education" className="relative min-h-screen bg-transparent text-white py-16 px-4 z-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Education</h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="min-h-[180px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md p-8 hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-1">{edu.degree}</h3>
            <p className="text-lg text-gray-200 font-medium">{edu.institution}</p>
            <p className="text-sm text-gray-400 mb-4">{edu.duration}</p>
            <p className="text-base text-gray-100">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
