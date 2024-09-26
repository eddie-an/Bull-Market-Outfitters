import React, { useContext, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { ProductContext } from "../contexts/ProductContext";

function Shop() {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProducts = products.filter(product =>
    product.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle for mobile layout

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the dropdown menu
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsMenuOpen(false); // Close the menu when a category is selected
  };


  return (
    <>
      {/* Responsive Category Menu */}
      <div className="pt-5 px-4 sm:px-8 flex justify-start items-center text-center pb-3 border-b-[1px] shadow-sm border-gray-100 mb-8">

        <p className='sm:hidden mr-4'>Select category: </p>
        {/* Toggle button for small screens */}
        <button 
          className="sm:hidden text-base px-3 font-medium bg-gray-200 hover:bg-gray-300 p-1 rounded-md flex"
          onClick={handleMenuToggle}
        >
          <p>
            {selectedCategory === '' ? 'All Categories' : selectedCategory}
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        {/* Fullscreen dropdown for small screens */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-8 space-y-6 sm:hidden">
            <button 
              className="absolute top-4 right-4 text-gray-700 text-xl" 
              onClick={handleMenuToggle}
            >
              ✕
            </button>
            <p 
              className={`text-2xl font-medium hover:cursor-pointer ${selectedCategory === '' ? "text-black" : "text-gray-500"}`}
              onClick={() => handleCategorySelect('')}
            >
              All Categories
            </p>
            <p 
              className={`text-2xl font-medium hover:cursor-pointer ${selectedCategory === 'Apparel' ? "text-black" : "text-gray-500"}`} 
              onClick={() => handleCategorySelect('Apparel')}
            >
              Apparel
            </p>
            <p 
              className={`text-2xl font-medium hover:cursor-pointer ${selectedCategory === 'Accessories' ? "text-black" : "text-gray-500"}`} 
              onClick={() => handleCategorySelect('Accessories')}
            >
              Accessories
            </p>
            <p 
              className={`text-2xl font-medium hover:cursor-pointer ${selectedCategory === 'Miscellaneous' ? "text-black" : "text-gray-500"}`} 
              onClick={() => handleCategorySelect('Miscellaneous')}
            >
              Miscellaneous
            </p>
            <p 
              className={`text-2xl font-medium hover:cursor-pointer ${selectedCategory === 'Tech gadgets' ? "text-black" : "text-gray-500"}`} 
              onClick={() => handleCategorySelect('Tech gadgets')}
            >
              Tech gadgets
            </p>
          </div>
        )}

        {/* Horizontal menu for larger screens */}
        <div className="hidden sm:flex flex-row">
          <p 
            className={`hover:cursor-pointer text-sm hover:text-gray-800 ml-2 mr-2 ${selectedCategory === '' ? "text-gray-800 font-medium" : "text-gray-600"}`} 
            onClick={() => setSelectedCategory('')}
          >
            All Categories
          </p>
          <p 
            className={`hover:cursor-pointer text-sm hover:text-gray-800 ml-2 mr-2 ${selectedCategory === 'Apparel' ? "text-gray-800 font-medium" : "text-gray-600"}`} 
            onClick={() => setSelectedCategory('Apparel')}
          >
            Apparel
          </p>
          <p 
            className={`hover:cursor-pointer text-sm hover:text-gray-800 ml-2 mr-2 ${selectedCategory === 'Accessories' ? "text-gray-800 font-medium" : "text-gray-600"}`} 
            onClick={() => setSelectedCategory('Accessories')}
          >
            Accessories
          </p>
          <p 
            className={`hover:cursor-pointer text-sm hover:text-gray-800 ml-2 mr-2 ${selectedCategory === 'Miscellaneous' ? "text-gray-800 font-medium" : "text-gray-600"}`} 
            onClick={() => setSelectedCategory('Miscellaneous')}
            >
            Miscellaneous
          </p>
          <p 
            className={`hover:cursor-pointer text-sm hover:text-gray-800 text-gray-600 ml-2 mr-2 ${selectedCategory === 'Tech gadgets' ? "text-gray-800 font-medium" : ""}`} 
            onClick={() => setSelectedCategory('Tech gadgets')}
          >
            Tech gadgets
          </p>
        </div>
      </div>

      <span className="flex flex-row justify-center mb-4">
        {selectedCategory === '' ? (
          <p className="text-base mr-2 sm:text-lg font-semibold">Showing all Items</p>
        ) : (
          <>
            <p className="sm:mr-2 text-sm sm:text-lg">{selectedCategory}</p>
          </>
        )}
      </span>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-8 flex-grow">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      
    </>
  );
}

export default Shop;
