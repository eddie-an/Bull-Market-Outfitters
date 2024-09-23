import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function Header() {
  const { setIsCartDisplayed } = useContext(CartContext);

  return (
    <div className="sticky top-0 w-full max-w-full sm:max-h-20 max-h-14 z-30 border-b border-gray-200 h-20 bg-gray-100 drop-shadow-md flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <Link to="/" className="hover:cursor-pointer">
          <img src="/assets/logo.png" alt="logo" className="md:w-8 md:h-8 sm:w-6 sm:h-6 h-4 w-4 mr-2" />
        </Link>
        <Link to="/" className="hover:cursor-pointer">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 tracking-tight">
            ShopEase
          </h1>
        </Link>
      </div>
      <div className="flex flex-row">
        <Link to="/" className="hover:cursor-pointer m-1 sm:m-4 md:m-10">
          <h1 className="text-xs sm:text-lg md:text-xl font-normal text-gray-600 tracking-tight hover:text-gray-400">
            Home
          </h1>
        </Link>
        <Link to="/shop" className="hover:cursor-pointer m-1 sm:m-4 md:m-10">
          <h1 className="text-xs sm:text-lg md:text-xl font-normal text-gray-600 tracking-tight hover:text-gray-400">
            Shop
          </h1>
        </Link>
        <Link to="/about" className="hover:cursor-pointer m-1 sm:m-4 md:m-10">
          <h1 className="text-xs sm:text-lg md:text-xl font-normal text-gray-600 tracking-tight hover:text-gray-400">
            About
          </h1>
        </Link>
      </div>
      <div className="ml-2 sm:ml-10 md:ml-16">
        <svg
          onClick={() => setIsCartDisplayed((prev) => !prev)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="sm:w-8 sm:h-8 h-4 w-4 text-gray-700 hover:text-gray-900 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
