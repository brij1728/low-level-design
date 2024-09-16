import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger and close buttons
import React, { useState } from 'react';

import { LANGKeyType } from '../../types/langType';
import { Link } from 'react-router-dom';

interface IProps {
  lang: LANGKeyType;
  handleLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Header: React.FC<IProps> = ({ lang, handleLanguageChange }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-gray-700 text-blue-500 py-4">
      <div className="flex justify-between items-center px-4 sm:px-8">
        {/* Brand and Hamburger Icon */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleNav}
            className="sm:hidden text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Only show brand when nav is not open in mobile view */}
          {!isNavOpen && (
            <div className="text-2xl font-bold text-blue-400 sm:block">
              Low Level Design
            </div>
          )}
        </div>

        {/* Centered Navigation Links */}
        <nav className="hidden sm:flex sm:flex-grow justify-center space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/language" className="text-white hover:text-gray-300">Language</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
          <Link to="/accordion" className="text-white hover:text-gray-300">Accordion</Link>
          <Link to="/comments" className="text-white hover:text-gray-300">Comments</Link>
          <Link to="/image-slider" className="text-white hover:text-gray-300">Image Slider</Link>
          <Link to="/pagination" className="text-white hover:text-gray-300">Pagination</Link>
          <Link to="/live-chat" className="text-white hover:text-gray-300">Live Chat</Link>
        </nav>

        {/* Language Selector (Dropdown aligned to the right) */}
        <div className="hidden sm:block">
          <select
            value={lang}
            onChange={handleLanguageChange}
            className="bg-gray-800 text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="sp">Spanish</option>
            <option value="ru">Russian</option>
          </select>
        </div>
      </div>

      {/* Mobile Navigation (When Hamburger is clicked) */}
      <nav className={`${isNavOpen ? 'block' : 'hidden'} sm:hidden mt-4`}>
        <ul className="flex flex-col space-y-4 text-center">
          <li>
            <Link to="/" className="block py-2 text-white">Home</Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 text-white">About</Link>
          </li>
          <li>
            <Link to="/language" className="block py-2 text-white">Language</Link>
          </li>
          <li>
            <Link to="/login" className="block py-2 text-white">Login</Link>
          </li>
          <li>
            <Link to="/accordion" className="block py-2 text-white">Accordion</Link>
          </li>
          <li>
            <Link to="/comments" className="block py-2 text-white">Comments</Link>
          </li>
          <li>
            <Link to="/image-slider" className="block py-2 text-white">Image Slider</Link>
          </li>
          <li>
            <Link to="/pagination" className="block py-2 text-white">Pagination</Link>
          </li>
          <li>
            <Link to="/live-chat" className="block py-2 text-white">Live Chat</Link>
          </li>

          {/* Language Selector in mobile view */}
          <li>
            <div className="mt-4">
              <select
                value={lang}
                onChange={handleLanguageChange}
                className="bg-gray-800 text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="sp">Spanish</option>
                <option value="ru">Russian</option>
              </select>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
