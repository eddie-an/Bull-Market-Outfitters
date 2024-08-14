import React, { useState } from 'react';
import GridItem from './component/GridItem';
import Cart from './component/Cart';
import Header from './component/Header';
import Products from './Products';
import ProductPopup from './component/ProductPopup';
import HeroSection from './component/HeroSection';
import PromotionBanner from './component/PromotionBanner';
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
import SearchBar from './component/SearchBar'; // Import SearchBar

function Home({isCartDisplayed, setIsCartDisplayed, itemsInCart, setItemsInCart}) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product, quantity) => {
    const exists = itemsInCart.some(item => item.product.id === product.id);
    if (exists) {
      const existingItem = itemsInCart.find(item => item.product.id === product.id);
      const updatedQuantity = Number(existingItem.quantity) + Number(quantity);

      setItemsInCart(itemsInCart.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: Number(updatedQuantity) }
          : item
      ));
    } else {
      const newItem = { product: product, quantity: quantity };
      setItemsInCart([...itemsInCart, newItem]);
    }
    console.log(`Adding ${quantity} of ${product.name} to cart.`);
    console.log(itemsInCart);
  };

  // Function to filter products based on selected category and search query
  const filteredProducts = Products.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="App w-full">
      <Header setIsCartDisplayed={setIsCartDisplayed} />
      <HeroSection />
      <PromotionBanner />
      <SearchBar onSearch={setSearchQuery} /> {/* Add SearchBar */}
      {isCartDisplayed && (
        <Cart
          isDisplayed={isCartDisplayed}
          itemsInCart={itemsInCart}
          setIsCartDisplayed={setIsCartDisplayed}
          setItemsInCart={setItemsInCart}
        />
      )}
      {selectedProduct && (
        <ProductPopup
          product={selectedProduct}
          onClose={handleClosePopup}
          onAddToCart={handleAddToCart}
        />
      )}
      <span id="shop-now">
        <h4 className="mt-8 text-center text-xl font-medium mb-8">New Items</h4>
      </span>
      <div className="flex">
        <Sidebar setSelectedCategory={setSelectedCategory} />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-x-2 gap-y-6 ml-32 mr-32">
          {filteredProducts.map((product) => (
            <GridItem
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
