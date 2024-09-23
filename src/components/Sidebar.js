import React from 'react';

const Sidebar = ({ setSelectedCategory }) => {
  const categories = ['All', 'Electronics', 'Clothing', 'Accessories'];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === 'All' ? null : category);
  };

  return (
    <div className="w-1/5 p-4">
      <h4 className="text-xl font-bold mb-4">Categories</h4>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className="cursor-pointer hover:text-blue-500 mb-2"
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
