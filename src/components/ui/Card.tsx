import React, {useState, useRef} from 'react';
import {motion, useInView} from 'framer-motion'

interface CardProps {
  title: string;
  imgSrc: string;
  icons: string[];
  description:string;
}

export const Card = ({ title, imgSrc, icons, description }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });
  return (
    <motion.div 
    ref={cardRef}
    initial={{opacity:0, x:-20}}
    animate={ isInView? {opacity:1, x:0}:{}}
    transition={{duration:2,}}
    className="relative w-80 h-72 bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center cursor-pointer" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      
      {/* Top Image with absolute positioning */}
      <div 
      className={`absolute top-0 flex justify-center w-full ${isHovered ? "-mt-24" : "-mt-12"} transition-all duration-500`}>
      <img
          src={imgSrc}
          alt="Illustration"
          className={`h-48 w-72 object-contain transition-transform duration-300 ${isHovered ? "scale-75" : "scale-100"}`}
        />
      </div>

      {/* Spacer to account for the top image */}
      <div className="flex-grow pt-32"></div>

      {/* Title */}
      {!isHovered && (
        <div className="text-center mb-10">
          <h2 className="text-white text-lg font-semibold">{title}</h2>
        </div>
      )}

      {/* Bottom Icons */}
      {!isHovered &&(
        <div className="flex justify-center space-x-4 mb-6">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`icon-${index}`}
            className="h-8 w-8 object-contain"
          />
        ))}
      </div>
      )}
      

      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-75 text-white flex items-center justify-center p-4 rounded-2xl">
          <p className="text-center text-md font-normal">{description}</p>
        </div>
      )}
      
    </motion.div>
  );
};
