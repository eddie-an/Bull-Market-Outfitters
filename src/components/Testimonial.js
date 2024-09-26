import React from 'react';

export default function Testimonial({ testimonial }) {
  return (
    <div className="bg-gray-100 rounded-lg pl-10 sm:pl-6 p-6 mx-2 sm:mx-4 my-6 sm:my-8 hover:cursor-pointer transition transform hover:scale-105 duration-300">
      <div className="text-gray-800 font-semibold text-base sm:text-xl lg:text-3xl mb-4">
        <p>"{testimonial?.quote}"</p>
      </div>
      <div className="text-gray-400 text-sm sm:text-base">
        <p>- {testimonial?.author}</p>
      </div>
    </div>
  );
}
