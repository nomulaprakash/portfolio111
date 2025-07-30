import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Organ Donation Prediction",
    image: "/organ.jpg",
    description: "A machine learning-based predictive model using classification algorithms to predict organ donation outcomes.",
    demoLink: "https://youtu.be/V9oXkucoJUE?si=GTJoWT0g9oJ3bGFi",
    codeLink: "https://github.com/nomulaprakash",
  },
  {
    title: "Personal Portfolio",
    image: "/portfoliosf.jpg",
    description: "A personal portfolio built with React, Tailwind CSS, and animations.",
    demoLink: "https://your-portfolio-link.com",
    codeLink: "https://github.com/nomulaprakash",
  },
  {
    title: "Todo List",
    image: "/project3.png",
    description: "Simple Todo list app with local storage and dark mode support.",
    demoLink: "https://your-todo-app.com",
    codeLink: "https://github.com/yourusername/todo-app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-transparent text-white py-16 px-4 z-10"
    >
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
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
