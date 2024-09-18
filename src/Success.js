import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-center p-6">
      <img src="/assets/success-image.png" alt="Success" className="w-48 h-48 mb-6" /> {/* Image size */}
      <h1 className="text-4xl font-bold text-green-700 mb-4">Payment Successful!</h1>
      <p className="text-lg text-gray-800 mb-8">
        Thank you for your purchase! Your transaction has been completed successfully.
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
