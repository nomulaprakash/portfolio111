import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Education', path: '/education' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const location = useLocation(); // 🧠 To highlight active link

  return (
    <header className="bg-gray-900 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="w-full flex justify-between items-center px-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-purple-400">
            PrakashNomula
          </Link>
        </h1>
        <nav className="flex space-x-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-purple-400 ${
                location.pathname === link.path ? 'text-purple-400 font-semibold' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
