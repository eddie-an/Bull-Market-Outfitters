import React, { useState } from 'react';

const ProductPopup = ({ product, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose(); // Optionally close the popup after adding to cart
  };
  const dollarAmount = product.priceInCents / 100
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
        <div className="bg-white rounded-lg shadow-lg flex w-4/5 h-4/5 max-w-4xl max-h-[80vh] relative z-50" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl" onClick={onClose}>
            &times;
            </button>
            <div className="flex-shrink-0 w-2/5 h-full relative bg-gray-100">
                <div className="w-full h-full bg-contain bg-no-repeat bg-center rounded-l-lg" style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}/>
            </div>

            <div className="w-3/5 p-6 flex flex-col justify-between">
                <div className="overflow-y-auto">
                    <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                    <p className="text-gray-700 mb-4 whitespace-pre-line">{product.description}</p>
                </div>
                <div className="flex flex-col items-start">
                    <p className="text-lg font-semibold mb-2">Price: ${dollarAmount.toFixed(2)}</p>
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
                    <button onClick={handleAddToCart} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">
                    Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductPopup;
