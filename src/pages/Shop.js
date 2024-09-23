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
      <SearchBar onSearch={setSearchQuery} />
      {searchQuery === '' ? (
        <span className="flex flex-row justify-center">
            <p className="mr-2 text-lg font-semibold">Showing all Items</p>
        </span>
      ) : (
        <span className="flex flex-row justify-center">
          <p className="mr-2">Showing Results for "{searchQuery}"</p>
          <p
            onClick={() => setSearchQuery('')}
            className="text-blue-700 underline hover:font-bold hover:cursor-pointer ml-2"
          >
            Clear Search
          </p>
        </span>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-8 flex-grow">
          {filteredProducts.map((product) => {
            console.log(product);
            return (<ProductCard key={product._id} product={product} />)
            })}
    </div>
    </>
  );
}

export default Shop;
