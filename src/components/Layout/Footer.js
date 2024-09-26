import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white p-4 text-center">
      <p className="text-xs md:text-sm">&copy; 2024 ShopEase Company. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <Link to="/contact-us" className="hover:text-zinc-400 text-sm md:text-base">Contact Us</Link>
        <Link to="/privacy-policy" className="hover:text-zinc-400 text-sm md:text-base">Privacy Policy</Link>
        <Link to="/terms-of-service" className="hover:text-zinc-400 text-sm md:text-base">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
