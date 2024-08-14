import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="w-full flex justify-center mt-4 mb-8">
      <input
        type="text"
        placeholder="Search products..."
        className="p-2 border border-gray-300 rounded-lg w-2/3"
        onChange={handleSearchChange}
      />
        <button className="ml-3 text-gray-400 hover:text-gray-500 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-4a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" />
        </svg>
        </button>
    </div>
  );
};

export default SearchBar;
