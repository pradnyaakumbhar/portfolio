import React from 'react';
import PkAnimation from './PkAnimation';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="bg-transparent p-4 text-white flex">
      <div className="w-1/2 mt-24 ml-10">
        <h1 className="text-6xl font-bold p-2">
          Hi, I'm <br /> Pradnya Kumbhar
        </h1>
        <h2 className="text-3xl font-bold text-white p-1 mb-2 pl-1">
          Full Stack Developer | Tech Enthusiast
        </h2>

        <p className="px-4 py-2 bg-gradient-to-r from-blue-900 to-cyan-500 w-max text-lg text-white font-semibold rounded-lg mt-4">
          About me
        </p>
      </div>
      <div className="w-1/2">
        <PkAnimation />
      </div>
    </div>
  );
};

export default Hero;
