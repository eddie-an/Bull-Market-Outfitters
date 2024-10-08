import React, {useState} from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');


  return (
    <div className="flex justify-center mt-4 mb-8">
      <input
        type="text"
        placeholder="Search products..."
        className="p-3 border border-gray-300 rounded-lg w-full md:w-full shadow-md focus:outline-none transition duration-200"
        onChange={(e)=>setSearchInput(e.target.value)}
        value={searchInput}
      />
      <button className="ml-3 p-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
              onClick={()=> {onSearch(searchInput)
                setSearchInput('');
              }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-4a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
