import React, { useRef } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { team } from '../../data';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-300 p-8" id="team" ref={ref}>
      <h2 className="text-3xl font-bold mb-8">Meet The Team!</h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-1 gap-x-8 gap-y-16 max-w-4xl md:gap-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}  // Start animation when in view
      >
        {team.map((member, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col items-center p-6 rounded-md shadow-lg bg-white/30 backdrop-blur-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4 md:w-40 md:h-40"
            />
            <h3 className="text-lg font-semibold text-center mb-2">{member.name}</h3>
            <div className="flex space-x-4">
              <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-gray-600 hover:text-blue-600" />
              </a>
              <a href={member.githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-gray-600 hover:text-black" />
              </a>
              <a href={member.instaUrl} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-gray-600 hover:text-red-300" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
