import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p className="text-sm">&copy; 2024 ShopEase Company. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <Link to="/contact-us" className="hover:text-blue-500">Contact Us</Link>
        <Link to="/privacy-policy" className="hover:text-blue-500">Privacy Policy</Link>
        <Link to="/terms-of-service" className="hover:text-blue-500">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
