import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../Images/footerlogo.png';

interface LoadingScreenProps {
  onFinish: () => void;
}

export const LoadingScreen = ({ onFinish }: LoadingScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  const text = "Intella Creations";


  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <img src={logo} alt="Logo" className="w-48 h-56 mb-4 animate-pulse" />

      <motion.div
        className="text-lg mt-2 flex space-x-1"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        {text.split("").map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
