import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../public/45600062dc234c1ded06d70075122b49.png';

const HeroSection = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      {/* Background div to remain behind everything */}
      <div 
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center z-[-1]" 
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Foreground content (Clickable) */}
      <div className="relative flex flex-col items-center justify-center text-white w-full h-full">
        <div className="bg-black/30 p-4 w-full h-full flex items-center justify-center">
          <div className="bg-black/15 md:p-8 rounded-lg w-full">
            <h1 className="text-4xl md:text-6xl">Rebuilding Markets</h1>
            <div className="flex  items-center mt-2">
              <hr className="w-1/4 border-t-2 border-white mb-2" />
              <h1 className="text-xl md:text-4xl">Transforming Communities</h1>
            </div>
            <Link to="/contact">
              <button className="text-lg font-semibold text-white bg-orange-700 rounded-full py-1 px-4 mt-4">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
