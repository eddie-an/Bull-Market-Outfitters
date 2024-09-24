import React, { useContext, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { ProductContext } from "../contexts/ProductContext";

function Shop() {
  const { products } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center">
        <section className="">
          <h4 className="text-xl font-semibold mb-4">Filter By:</h4>
          <div className="flex space-x-4">
            <select className="p-2 border rounded">
              <option value="">All Categories</option>
              <option value="clothing">Clothing</option>
              <option value="accessories">Accessories</option>
              <option value="equipment">Equipment</option>
            </select>
            <select className="p-2 border rounded">
              <option value="">Sort by Price</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </section>
        <SearchBar onSearch={setSearchQuery} />
      </div>
      <span className="flex flex-row justify-center mb-4">
        {searchQuery === '' ? (
          <p className="text-base mr-2 sm:text-lg font-semibold">Showing all Items</p>
        ) : (
          <>
            <p className="sm:mr-2 text-sm sm:text-lg">Showing Results for "{searchQuery}"</p>
            <p
              onClick={() => setSearchQuery('')}
              className="text-blue-700 text-sm sm:text-lg underline hover:font-bold hover:cursor-pointer ml-2"
            >
              Clear Search
            </p>
          </>
        )}
      </span>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-8 flex-grow">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* Filter Section */}
      
    </>
  );
}

export default Shop;
