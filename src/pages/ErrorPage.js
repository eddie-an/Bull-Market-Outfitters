import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-700 mb-8">
        Oops! The page you are looking for doesn't exist.
      </p>
      <Link to="/" className="theme-background text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;