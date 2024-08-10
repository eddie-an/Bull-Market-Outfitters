// HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/landingpagevideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white text-center p-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-xl md:text-2xl mb-8">Discover our exclusive collection of products</p>
        <a className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300" href="#shop-now">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
