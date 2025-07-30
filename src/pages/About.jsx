import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import Me from '../assets/cap.jpg'; // ✅ Correct image import

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full text-white flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]"
    >
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        About Me
      </motion.h2>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Animated Image Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-900 rounded-xl shadow-xl p-6 flex flex-col items-center self-center transform transition-transform duration-300"
        >
          <motion.img
            src={Me} // ✅ Use the imported image
            alt="Prakash Profile"
            className="w-72 h-72 object-cover border-4 border-blue-500 shadow-lg rounded-lg mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <p className="text-center text-lg text-gray-300 mb-4">
            I'm Prakash, a frontend web developer passionate about building beautiful and interactive user interfaces.
          </p>

          {/* Animated Social Icons */}
          <motion.div
            className="flex gap-6 text-2xl mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/prakash-nomula-360466366"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-[#0077B5] hover:text-white transition duration-300"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/invites/contact/?igsh=clb30alvqpcd&utm_content=fus26ze"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-pink-500 hover:text-white transition duration-300"
            >
              <FaInstagram />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Animated Text Section */}
        <motion.div
          className="self-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <p className="text-lg mb-4">
            Hello! I'm <span className="font-semibold text-blue-400">Prakash</span>, a passionate and dedicated web developer with a strong foundation in frontend technologies. I enjoy creating responsive, user-friendly websites using tools like React, Tailwind CSS, and JavaScript.
            <br /><br />
            Though I’m at the beginning of my professional journey, I’ve spent time building personal projects and sharpening my skills through hands-on practice. I love turning creative ideas into functional and interactive web experiences.
            <br /><br />
            I’m constantly learning and exploring new technologies to stay updated with the latest trends in web development. I’m eager to contribute, collaborate, and grow as a developer by working on real-world projects and solving meaningful challenges.
            <br /><br />
            I am currently pursuing a Bachelor of Technology in Computer Science at Marri Laxman Reddy Engineering College, where I am honing my skills in software development and web technologies.
          </p>

          <ul className="mb-4 space-y-2 text-gray-300">
            <li><strong>🎓 Education:</strong> B.Tech in Computer Science</li>
            <li><strong>🌍 Location:</strong> India</li>
          </ul>

          {/* Resume Button */}
          <motion.a
            href="/prakashresume2.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
