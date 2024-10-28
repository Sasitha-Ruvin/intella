import React from 'react';
import { easeIn, easeInOut, motion } from 'framer-motion';
import image1 from '../../../Images/12.png';
import image2 from '../../../Images/web2.png';
import image3 from '../../../Images/graphic2.png';
import image4 from '../../../Images/dev2.png';
import './HeroSection.css';

export const HeroSection = () => {
  // Define each letter of "Intella" in an array
  const title = "Intella".split("");

  return (
    <section className="mt-5 relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 p-8 rounded-md">
      {/* Left: Text Section */}
      <div className="text-left spacing-x-4">
        <h1 className="flex text-5xl md:text-8xl font-bold text-white mb-3">
          {title.map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 1 }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <motion.p
        className="text-xl md:text-2xl text-white"
        initial={{opacity:0, x:-50}}
        animate={{opacity:1,x:0}}
        transition={{duration:1,delay:0.8,ease:easeInOut}}
        >
          takes your ideas & fuels them with <br />
          creativity and innovation <br />
          bringing your vision to life
        </motion.p>
        <button className="mt-4 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700">
          Let’s Chat
        </button>
      </div>

      {/* Right: Image Stack with Overlapping */}
      <div className="relative w-full h-96 md:w-96 md:h-80 mt-8 md:mt-0 md:block left-5">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: easeInOut }}
          src={image1}
          alt="Image 1"
          className="absolute top-0 left-1/4 transform -translate-x-1/2 w-full h-full md:w-72 md:h-64 md:left-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" 
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: easeInOut }}
          src={image2}
          alt="Image 2"
          className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full h-full z-10 md:top-10 md:-left-8 md:w-full md:h-80 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" 
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: easeInOut }}
          src={image3}
          alt="Image 3"
          className="absolute top-32 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 md:-left-36 md:w-full md:h-56 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
        />
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: easeInOut }}
          src={image4} 
          alt="Image 4"
          className="absolute top-32 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 z-20 md:left-20 md:w-full md:h-full transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
        />
      </div>
    </section>
  );
};
