import React from 'react';
import {easeInOut, motion} from 'framer-motion'

export const HeroText = () => {
  return (
    <div className="flex items-center justify-center text-center mt-5 mb-8 md:mt-6 md:mb-5 w-full" id='about'>
      <motion.h1 
      initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0}}
      transition={{duration:2, ease:easeInOut}}
      className="text-xs md:text-2xl font-medium max-w-4xl md:leading-loose ">
        If you're looking for an agency that excels in web development, app development,<br/> and graphic design, delivering seamless digital solutions and standout visuals, then you've come to the right place!
      </motion.h1>
    </div>
  );
};
