import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background on all pages */}
      <BackgroundAnimation />

      {/* Main content area */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar at top */}
        <Navbar />

        {/* Page content in the middle, grows to fill available space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer at bottom */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
