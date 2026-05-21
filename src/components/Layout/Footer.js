import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-brand-950 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg font-semibold text-cream">
              Bull Market Outfitters
            </p>
            <p className="mt-1 text-sm text-stone-400">
              Gear up for the bull run — in style.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/contact-us" className="transition hover:text-brass">
              Contact
            </Link>
            <Link to="/privacy-policy" className="transition hover:text-brass">
              Privacy
            </Link>
            <Link to="/terms-of-service" className="transition hover:text-brass">
              Terms
            </Link>
            <Link to="/shop" className="transition hover:text-brass">
              Shop
            </Link>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-stone-500">
          &copy; {new Date().getFullYear()} Bull Market Outfitters. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
