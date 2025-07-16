import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="text-center text-white py-4 mt-5"
      style={{
        background: 'linear-gradient(to right, #434343, #000000)',
      }}
    >
      <p className="mb-0">
        © {new Date().getFullYear()} Satyajit Roy| Made by React with ❤️ | Follow me on
        {' '}
        <a
          href="https://github.com/satya-dr"
          className="text-info mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/satyajit"
          className="text-info mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
         href="https://instagram.com/satyajitan21.official"
          className="text-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
