import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import image1 from "../assets/image1.jpg";

// Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const paragraphs = [
    <>
      Hello! I'm{" "}
      <span className="text-blue-400 font-semibold">Prakash</span>, a
      passionate and dedicated frontend developer who enjoys creating meaningful
      and impactful work. With a strong sense of curiosity and a drive to keep
      learning, I aim to bring creativity and purpose into everything I do.
    </>,
    <>
      Over the years, I've worked on a variety of projects that have allowed me
      to grow personally and professionally. I believe in the power of good
      design, thoughtful collaboration, and clear communication.
    </>,
    <>
      When I'm not working, you can usually find me exploring the outdoors,
      always looking for inspiration and new ideas. I'm always open to new
      opportunities, collaborations, or even just a good conversation.
    </>,
    <>
      My mission is to keep learning and stay up-to-date with the latest tech
      trends while creating meaningful digital experiences.
    </>,
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full text-white px-8 pt-[100px] pb-16 relative z-10"
    >
      {/* Section Heading */}
      <motion.h2
        variants={fadeUp}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-12"
      >
        About Me
      </motion.h2>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-4">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-8 flex flex-col items-center w-full md:w-1/2 max-w-lg transition-transform"
        >
          <motion.img
            src={image1}
            alt="Prakash"
            className="w-full h-auto max-h-[500px] object-cover rounded-3xl shadow-md mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.h3
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl font-semibold mb-2 text-center"
          >
            Prakash
          </motion.h3>
          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-gray-300 text-center"
          >
            Software Engineer
          </motion.p>
          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-gray-400 text-center mb-6"
          >
            📍 Hyderabad, India
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center gap-8 text-3xl"
          >
            <a
              href="https://www.linkedin.com/in/prakash-nomula-360466366"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077B5] hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/invites/contact/?igsh=clb30alvqpcd&utm_content=fus26ze"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-white transition-colors"
            >
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full md:w-1/2 max-w-3xl bg-white/10 backdrop-blur-md rounded-3xl p-6"
        >
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg text-gray-200 leading-relaxed mb-4"
            >
              {text}
            </motion.p>
          ))}

          {/* Resume Button */}
          <motion.div
            variants={fadeUp}
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8"
          >
            <a
              href="/prakashresume2.pdf"
              download
              className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
