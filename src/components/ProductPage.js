import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

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
        <p className="text-xl">Loading...</p>
      </div>
    ); // Loading state
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-4 sticky top-20 z-20">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <button 
          className="mt-2 text-blue-200 hover:text-blue-100"
          onClick={() => navigate('../')}>
          Back to Products
        </button>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row flex-1 p-8">
        {/* Product Image */}
        <div className="md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
          <img 
            src={currentProduct.image} 
            alt={currentProduct.name} 
            className="object-cover h-[500px] w-[500px] rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4">{currentProduct.name}</h2>
            <p className="text-gray-700 text-lg mb-4 whitespace-pre-line">{currentProduct.description}</p>
            <p className="text-lg font-semibold mb-2">Price: ${(currentProduct.priceInCents / 100).toFixed(2)}</p>
          </div>

          {/* Quantity and Add to Cart Section */}
          <div className="flex flex-col mb-4">
            <div className="flex items-center mb-4">
              <label className="mr-2 text-lg font-medium">Quantity:</label>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="border border-gray-300 rounded-md p-2 w-24 text-center"
              />
            </div>
            <button 
              onClick={() => { 
                itemsInCartDispatch({type: "ADD_TO_CART", product: currentProduct, quantity}); 
                navigate('../'); 
              }} 
              className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
