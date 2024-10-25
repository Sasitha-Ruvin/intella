import React from 'react';
import image1 from '../../../Images/12.png';
import image2 from '../../../Images/web2.png';
import image3 from '../../../Images/graphic2.png';
import image4 from '../../../Images/dev2.png';
import './HeroSection.css'

export const HeroSection = () => {
  return (
    <section className="mt-5 relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 p-8 rounded-md">
      {/* Left: Text Section */}
      <div className="text-left spacing-x-4">
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-3">Intella</h1>
        <p className="text-xl md:text-2xl text-white">
          takes your ideas
          & fuels them with <br />
          creativity ⚡ innovation <br />
          bringing your vision to life
        </p>
        <button className="mt-4 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700">
          Let’s Chat
        </button>
      </div>

      {/* Right: Image Stack with Overlapping */}
      <div className="relative w-full h-96 md:w-96 md:h-80 mt-8 md:mt-0 md:block left-10">
        <img
          src={image1}
          alt="Image 1"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full md:w-72 md:h-64 md:left-5 hover:wobble" 
        />
        <img
          src={image2}
          alt="Image 2"
          className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full h-full z-10 md:top-10 md:-left-8 md:w-full md:h-80 hover:wobble" 
        />
        <img
          src={image3}
          alt="Image 3"
          className="absolute top-32 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 md:-left-36 md:w-full md:h-56 hover:wobble"
        />
        <img 
          src={image4} 
          alt="Image 4"
          className="absolute top-32 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 z-20 md:left-20 md:w-full md:h-full hover:wobble"
        />
      </div>
    </section>
  );
};
