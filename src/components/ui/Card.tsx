import React from 'react';

interface CardProps {
  title: string;
  imgSrc: string;
  icons: string[];
}

export const Card = ({ title, imgSrc, icons }: CardProps) => {
  return (
    <div className="relative w-80 h-72 bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center">
      
      {/* Top Image with absolute positioning */}
      <div className="absolute top-0 flex justify-center w-full -mt-12">
        <img
          src={imgSrc}
          alt="Web Development Illustration"
          className="h-48 w-72 object-contain"
        />
      </div>

      {/* Spacer to account for the top image */}
      <div className="flex-grow pt-32"></div>

      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-white text-lg font-semibold">{title}</h2>
      </div>

      {/* Bottom Icons */}
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
    </div>
  );
};
