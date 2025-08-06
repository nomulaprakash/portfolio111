import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub,
} from 'react-icons/fa';
import { SiTailwindcss, SiPython } from 'react-icons/si';

// Skills array
const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-300" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
  { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
];

// Certificates array
const certificates = [
  {
    title: 'Data science Certification',
    img: '/cisco.jpg',
    link: 'https://drive.google.com/file/d/13T4QjwG6EEBHKtxmZPuNAtyb7Vvedpcw/view?usp=sharing',
  },
  {
    title: 'Python Certification',
    img: '/python.jpg',
    link: 'https://drive.google.com/file/d/1OXWyqE-yUUbOLXCkxPo-SQnKE-UewjN2/view?usp=sharing',
  },
  {
    title: 'Java Certification',
    img: '/java.jpg',
    link: 'https://drive.google.com/file/d/1tgdIsFxU3KISQaNeZLaX6bDcaAob843d/view?usp=sharing',
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-transparent text-purple-400 py-16 px-4"
    >
      {/* Skills Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">My Skills</h2>

      {/* Skills Grid */}
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-md hover:shadow-2xl transition"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Certificates Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">My Certificates</h2>

      {/* Certificates Grid */}
      <div className="w-full flex flex-wrap justify-center gap-12">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[360px] bg-white/10 border border-white/20 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <p className="text-xl font-semibold text-white">{cert.title}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
