import React from 'react';
import image1 from '../../Images/web.png';

export const HeroSection = () => {
  return (
    <section className="mt-5 relative flex items-center justify-between bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 p-8 rounded-md">
      {/* Left: Text Section */}
      <div className="text-left spacing-x-4">
        <h1 className="text-8xl font-bold text-white">Intella</h1>
        <p className="text-lg text-white">
          takes your ideas <br />
          & fuels them with <br />
          creativity ⚡ innovation <br />
          bringing your vision to life
        </p>
        <button className="mt-4 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700">
          Let’s Chat
        </button>
      </div>

      {/* Right: Image Stack with Overlapping */}
      <div className="relative w-80 h-80 ml-4"> {/* Reduced margin-left for closer alignment */}
        <img
          src={image1}
          alt="Image 1"
          className="absolute top-0 left-4 w-28 h-28" 
        />
        <img
          src={image1}
          alt="Image 2"
          className="absolute top-10 left-16 w-56 h-36" 
        />
        <img
          src={image1}
          alt="Image 3"
          className="absolute top-24 left-36 w-20 h-20"
        />
      </div>
    </section>
  );
};
