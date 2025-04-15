'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaCode } from 'react-icons/fa';
import { TextGenerateEffect } from '../ui/TextGenerateEffect';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';
import StarsCanvas from './StarBackground';

const socialLinks = [
  {
    href: 'https://github.com/giri-10/',
    label: 'GitHub',
    icon: <FaGithub />,
  },
  {
    href: 'https://www.linkedin.com/in/giridharan-u/',
    label: 'LinkedIn',
    icon: <FaLinkedinIn />,
  },
  {
    href: 'mailto:giridharan6433@gmail.com',
    label: 'Email',
    icon: <FaEnvelope />,
  },
];

const Hero = () => {
  const [showStars, setShowStars] = useState(true);

  return (
    <section
      id="hero"
      className="flex items-center h-auto md:min-h-[70vh] lg:min-h-[80vh] py-2 px-2 mt-12 text-white"
    >
      <div className="container mx-auto flex flex-wrap items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(1)}
          className="w-full md:w-1/2 flex flex-col md:items-start items-center"
        >
          <div className="flex items-center mb-2">
            <div className="Welcome-box py-2 px-2 border border-[#7042f88b] opacity-[0.9]">
              <FaCode className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <div className="Welcome-text italic md:text-xl text-xs px-2 ml-[-12px] font-semibold">
                U Giridharan - Software Engineer
              </div>
            </div>
          </div>
          <h2 className="md:text-5xl text-xl font-bold leading-tight">
            Always{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              learning
            </span>
            , always{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              building
            </span>
          </h2>
          <h4 className="md:text-xl text-base font-medium text-gray-400 mt-1 mb-[-6px] italic flex ">
            <Image
              src="/india.png"
              alt="India Flag"
              width={24}
              height={24}
              className="mr-2"
            />
            Based in India
          </h4>

          <TextGenerateEffect
            words="I'm a passionate software developer with experience in web development and machine learning. I enjoy building full-stack apps and solving real-world problems through code. I'm currently pursuing a B.E. in Computer Science. Skilled in Java, Spring Boot, React and Python. I'm always looking to learn and improve."
          />
          <div className="flex flex-col md:flex-row items-center mt-2 z-20">
            <button
              className=" md:inline-block sm:px-8 sm:py-2 px-4 py-2 sm:text-sm md:text-base lg:text-lg text-sm rounded-xl transition-colors button-3d-primary"
              onClick={() => setShowStars(!showStars)}
            >
              Disable Background Stars
            </button>
            <div className="flex gap-4 md:gap-6 justify-center md:justify-end items-center mt-6 md:mt-0 md:ml-6">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white text-2xl md:text-4xl hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              ))}
              
              {/* Authentic Lightsaber Resume Button - Horizontal like Luke Skywalker's */}
              <a
                href="/pdf/resume.pdf"
                className="group flex items-center justify-center relative z-10"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => {
                  // Play lightsaber sound when available
                  const audio = new Audio('/lightsaber-on.mp3');
                  audio.volume = 0.4;
                  audio.play().catch(e => console.log('Audio play prevented by browser', e));
                }}
              >
                {/* Container for proper positioning */}
                <div className="relative flex items-center">
                  {/* Lightsaber hilt - simplified and less cluttered */}
                  <div className="h-9 w-[50px] relative flex flex-row items-center group-hover:animate-[vibrate_0.2s_ease-in-out]">
                    {/* Left emitter */}
                    <div className="h-6 w-3 bg-gradient-to-b from-gray-400 to-gray-600 rounded-l-md"></div>
                    
                    {/* Grip section - simplified */}
                    <div className="h-7 w-12 bg-black flex flex-row justify-around items-center relative">
                      {/* Reduced number of vertical silver lines */}
                      {Array(4).fill(0).map((_, i) => (
                        <div key={i} className="h-full w-[2px] bg-gradient-to-b from-gray-400 to-gray-200"></div>
                      ))}
                      
                      {/* Control box with glow effect on hover */}
                      <div className="absolute top-[-6px] left-4 h-2.5 w-4 bg-gradient-to-r from-gray-400 to-gray-300 rounded-sm border border-gray-600 transition-all">
                        <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-100 group-hover:animate-pulse rounded-sm transition-opacity duration-150"></div>
                      </div>
                    </div>
                    
                    {/* Right emitter */}
                    <div className="h-7 w-3.5 bg-gradient-to-b from-gray-500 to-gray-300 rounded-r-md"></div>
                  </div>
                  
                  {/* Energy buildup effect that appears briefly when activated */}
                  <div className="absolute left-[45px] h-[24px] w-0 group-hover:w-[25px] group-hover:animate-[energyBurst_0.3s_ease-out] rounded-full bg-white origin-left opacity-0 group-hover:opacity-100"></div>
                  
                  {/* Lightsaber blade with enhanced animation */}
                  <div className="h-[24px] w-0 group-hover:w-[145px] origin-left bg-green-500 transition-all duration-400 ease-in-out overflow-hidden flex items-center justify-center relative ml-[-2px] rounded-r-full group-hover:animate-[bladeFlicker_2s_ease-in-out_infinite]">
                    {/* Inner glow */}
                    <div className="h-[12px] w-full bg-white opacity-80 absolute"></div>
                    
                    {/* Text appears when blade extends */}
                    <span className="opacity-0 group-hover:opacity-100 text-black font-bold text-xs tracking-wider transition-opacity duration-500 delay-200 z-20 whitespace-nowrap px-3 group-hover:animate-[textGlow_1.5s_ease-in-out_infinite]">
                      <b>RESUME</b>
                    </span>
                    
                    {/* Enhanced outer glow effect */}
                    <div className="absolute inset-0 w-full h-full bg-green-500 blur-[8px] opacity-70 group-hover:animate-[glowPulse_1.5s_ease-in-out_infinite]"></div>
                    
                    {/* Unstable blade edge effect */}
                    <div className="absolute right-0 h-full w-[3px] bg-white opacity-0 group-hover:opacity-70 group-hover:animate-[bladeEdgeFlicker_0.5s_ease-in-out_infinite]"></div>
                  </div>
                </div>
                
                {/* Hover instruction - Star Wars style */}
                {/* <span className="absolute -bottom-6 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-[Orbitron]">
                  May the Force be with you
                </span> */}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromRight(1)}
          className="w-full md:w-1/2 px-4 mt-6 md:mt-2 flex justify-center items-center"
        >
          <div className="relative overflow-hidden rounded-3xl bg-[#ffffff10] backdrop-blur-xl border border-border-custom flex justify-center items-center shadow-sm shadow-gray-800 w-[200px] h-[300px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[370px]">
            <Image
              src="/me.png"
              alt="my Image"
              className="object-cover object-bottom"
              priority
              fill
              quality={80}
              sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              33vw"
            />
          </div>
        </motion.div>
      </div>
      <StarsCanvas show={showStars} />
    </section>
  );
};

export default Hero;
