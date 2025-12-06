import React, { useContext, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { ProductContext } from "../contexts/ProductContext";

function Shop() {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProducts = products?.filter(product =>
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
      
      {
        products?.length ? 
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-8 flex-grow">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
        </div> :
        <div className="flex flex-col justify-center min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <span className="text-gray-700 text-base font-semibold pb-5">Loading Products...</span>
              <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24">
              <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
              </path>
            </svg>
          </div> 
      }
      
    </>
  );
}

export default Shop;
