import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center text-white bg-transparent px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Prakash</h1>
      <p className="text-2xl mb-8">Software Engineer</p>

      {/* Social Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/prakash-nomula-360466366"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-md transition"
        >
          <FaLinkedin className="text-xl" />
          LinkedIn
        </a>
        <a
          href="https://github.com/nomulaprakash"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 px-5 py-2.5 rounded-md transition"
        >
          <FaGithub className="text-xl" />
          GitHub
        </a>
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 px-5 py-2.5 rounded-md transition"
        >
          <FaInstagram className="text-xl" />
          Instagram
        </a>
      </div>

      {/* Scroll Down Arrow */}
      <div className="mt-10 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Home;
