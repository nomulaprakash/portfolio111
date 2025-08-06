import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

// Navbar entrance animation
const navVariant = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      type: "spring",
      stiffness: 80,
    },
  },
};

// Mobile menu animation (slide and fade)
const menuVariant = {
  hidden: { opacity: 0, scale: 0.95, y: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      variants={navVariant}
      initial="hidden"
      animate="visible"
      className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#1f1c2c] via-[#928dab] to-[#1f1c2c] bg-opacity-80 backdrop-blur-xl shadow-lg"
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-4">
        <a
          href="#home"
          className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 text-transparent bg-clip-text"
        >
          PrakashNomula
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.id}`}
                className="hover:text-blue-400 transition-all duration-300 relative after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer text-white"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden flex flex-col items-center gap-6 text-lg bg-[#111827] bg-opacity-95 text-white px-6 py-8 backdrop-blur-lg shadow-xl"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={`#${link.id}`}
                onClick={closeMenu}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="hover:text-blue-400 transition duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
