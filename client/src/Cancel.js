import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cancel() {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <img src='/assets/sad-face.png' alt="Sad face" className="w-48 h-48 mb-6" />
      <h1 className="text-4xl font-bold text-red-600 mb-4">Payment Cancelled</h1>
      <p className="text-lg text-gray-700 mb-8">
        Oops! It seems like the transaction didn't go through. Don't worry, you can try again!
      </p>
      <button
        onClick={() => navigate("../")}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition duration-300"
      >
        Back to Menu
      </button>
    </div>
  );
}
