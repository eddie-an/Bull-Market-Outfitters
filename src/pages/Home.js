import React, { useState, useContext, useEffect, useRef } from 'react';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/HeroSection';
import PromotionBanner from '../components/PromotionBanner';
import SearchBar from '../components/SearchBar';
import { ProductContext } from "../contexts/ProductContext";

function Home() {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const heroSectionRef = useRef(null);

  // Function to filter products based on selected category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Scroll event handler
  const handleScroll = () => {
    if (heroSectionRef.current) {
      const heroSectionBottom = heroSectionRef.current.getBoundingClientRect().bottom;
      setIsSticky(heroSectionBottom <= 80);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div ref={heroSectionRef}>
        <HeroSection />
      </div>

      {/* Sticky Promotion Banner and Search Bar */}
      <div className={`mb-24 z-20 ${isSticky ? 'sticky sm:top-20 top-14 w-full' : 'relative'}`}>
        <PromotionBanner />
      </div>
      <SearchBar onSearch={setSearchQuery} />
      {searchQuery === '' ? <></> : 
        <span className='flex flex-row justify-center'>
          <p className='mr-2'>Showing Results for "{searchQuery}"</p><p onClick={() => setSearchQuery('')}
            className='text-blue-700 underline hover:font-bold hover:cursor-pointer ml-2'>Clear Search</p> 
        </span>
        } 
      <h4 className="mt-8 text-center text-xl md:text-2xl font-semibold mb-4 text-gray-800">New Items</h4>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-8 flex-grow">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  );
}

export default Home;
