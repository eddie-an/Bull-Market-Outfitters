import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import "../index.css";

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [currentProduct, setCurrentProduct] = useState(null);
  const { itemsInCartDispatch } = useContext(CartContext);
  const { getProduct } = useContext(ProductContext);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProduct(productId);
        setCurrentProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct(); // Call the async function
  }, [productId, getProduct]);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);


  if (!currentProduct) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">This page may not exist</p>
      </div>
    ); // Loading state
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-600 text-white pl-4 p-2 sticky sm:top-20 top-14 z-20">
        <h1 className="text-base sm:text-lg md:text-2xl font-bold">Product Details</h1>
        <button 
          className="mt-1 text-blue-200 hover:text-blue-100 text-xs md:text-base"
          onClick={() => navigate('../')}>
          Back to Products
        </button>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row flex-1 p-4">
        {/* Product Image */}
        <div className="md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
          <img 
            src={currentProduct.image} 
            alt={currentProduct.name} 
            className="object-cover h-80 w-80 lg:h-[450px] lg:w-[450px] rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 p-4 flex flex-col justify-between">
          <div className='border-b-[1px] border-gray-300 drop-shadow-md mb-6'>
            <h2 className="mt-8 sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">{currentProduct.name}</h2>
          </div>
          <div className='max-h-80 md:h-80 overflow-x-hidden pr-3' id="product-description">
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg mb-4 whitespace-pre-line">{currentProduct.description}</p>
          </div>

          {/* Quantity, Price, and Add to Cart Section */}
          <div className="flex flex-col mb-4">
            <p className="text-base lg:text-lg font-semibold mb-2">Price: ${(currentProduct.priceInCents / 100).toFixed(2)}</p>
            <div className="flex items-center justify-between mb-4">
              <div>
                <label className="mr-2 text-base lg:text-lg font-medium">Quantity:</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  max={currentProduct.quantityInStock}
                  className="border border-gray-300 rounded-md p-2 w-24 text-center"
                  />
              </div>
              <span className='mr-4 text-sm lg:text-base font-light text-gray-500'>Currently {currentProduct.quantityInStock} items in stock</span>
            </div>
            <button 
              disabled={(currentProduct.quantityInStock > 0) ? false: true}
              onClick={() => { 
                itemsInCartDispatch({type: "ADD_TO_CART", product: currentProduct, quantity}); 
                navigate('../'); 
              }} 
              className={`bg-blue-500 text-white font-semibold py-3 px-6 rounded-md ${(currentProduct.quantityInStock > 0) ? 'hover:bg-blue-600': 'bg-slate-300 hover:cursor-not-allowed'}  transition duration-200`}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
