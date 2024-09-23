import React from 'react';

const Sidebar = ({ setSelectedCategory }) => {
  const categories = ['All', 'Electronics', 'Clothing', 'Accessories'];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === 'All' ? null : category);
  };

  return (
    <div className="w-full md:w-1/4 bg-gray-100 p-4 shadow-md rounded-lg mb-4 md:mb-0">
      <h4 className="text-xl font-bold mb-4">Categories</h4>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className="cursor-pointer hover:text-blue-500 mb-2 p-2 rounded-lg transition duration-200 hover:bg-blue-100"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
