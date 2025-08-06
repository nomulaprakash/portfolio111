import React from 'react';
import { motion } from 'framer-motion';
import organ from '../assets/organ.jpg';
import portfoliosf from '../assets/portfoliosf.jpg';
import cap from '../assets/cap.jpg';

const projects = [
  {
    title: "Organ Donation Prediction",
    image: organ,
    description: "A machine learning-based predictive model using classification algorithms to predict organ donation outcomes.",
    demoLink: "https://youtu.be/V9oXkucoJUE?si=GTJoWT0g9oJ3bGFi",
    codeLink: "https://github.com/nomulaprakash",
  },
  {
    title: "Personal Portfolio",
    image: portfoliosf,
    description: "A personal portfolio built with React, Tailwind CSS, and animations.",
    demoLink: "https://your-portfolio-link.com",
    codeLink: "https://github.com/nomulaprakash",
  },
  {
    title: "Graduation Project",
    image: cap,
    description: "Academic project showcasing skills learned during university studies.",
    demoLink: "https://your-graduation-project.com",
    codeLink: "https://github.com/nomulaprakash",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-transparent text-violet-500 py-20 px-4 z-10"
    >
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition h-[500px] flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
