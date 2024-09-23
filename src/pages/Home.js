import React, { useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/HeroSection';
import PromotionBanner from '../components/PromotionBanner';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import { ProductContext } from "../contexts/ProductContext";

function Home() {
  const {products} = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');


  // Function to filter products based on selected category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <HeroSection />
      <PromotionBanner />
      <SearchBar onSearch={setSearchQuery} />
      <span id="shop-now">
        <h4 className="mt-8 text-center text-xl font-medium mb-8">New Items</h4>
      </span>
      <div className="flex">
        <Sidebar setSelectedCategory={setSelectedCategory} />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-x-2 gap-y-6 ml-32 mr-32">
          {filteredProducts.map((product) => {
            return (
              <ProductCard key={product._id} product={product}/>
            )
          })}
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </>
  );
}

export default Home;
