import React from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <BackgroundAnimation />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen scroll-smooth">
        {/* Sticky Navbar */}
        <Navbar />

        {/* Sections (replace Routes with stacked components) */}
        <main className="flex-grow">
          <section id="home" className="min-h-screen pt-[80px]">
            <Home />
          </section>

          <section id="about" className="min-h-screen pt-[80px]">
            <About />
          </section>

          <section id="projects" className="min-h-screen pt-[80px]">
            <Projects />
          </section>

          <section id="education" className="min-h-screen pt-[80px]">
            <Education />
          </section>

          <section id="skills" className="min-h-screen pt-[80px]">
            <Skills />
          </section>

          <section id="contact" className="min-h-screen pt-[80px]">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
