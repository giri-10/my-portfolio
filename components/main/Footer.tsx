'use client';

import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="w-full py-12 backdrop-blur-sm border-t border-[#645AFF] z-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center">
            <div className="text-white text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="text-3xl font-semibold mb-2 Welcome-text">
                U Giridharan
              </h2>
              <p className="text-gray-400 italic">Software Engineer</p>
              <p className="text-gray-400 text-sm mt-4">
                © {currentYear} All rights reserved.
              </p>
            </div>
            <address className="flex justify-center space-x-8 pb-4">
              <a
                href="https://github.com/giri-10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-4xl hover:scale-110 transition-transform mirror"
                aria-label="me on GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/u-giridharan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-4xl hover:scale-110 transition-transform mirror"
                aria-label="me on Linkedin"
              >
                <FaLinkedinIn />
              </a>
              <a
                 href="mailto:giridharan6433@gmail.com"
                className="text-white text-4xl hover:scale-110 transition-transform mirror"
                aria-label="me on Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
            </address>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
