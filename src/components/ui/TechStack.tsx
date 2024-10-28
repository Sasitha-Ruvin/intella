import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Technologies } from '../../data';

export const TechStack = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div ref={sectionRef} className="flex flex-col items-center py-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Our Technology Stack</h1>
      <div className="flex flex-col md:flex-row space-x-4 gap-5">
        {Technologies.map((tech, index) => (
          <motion.img
            key={index}
            src={tech.logo}
            alt={tech.name}
            className="w-20 h-20 rounded-lg cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.25,transition:{duration:0.2} }}
          />
        ))}
      </div>
    </div>
  );
};
