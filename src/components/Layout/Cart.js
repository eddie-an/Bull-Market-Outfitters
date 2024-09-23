import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const checkoutMethod = (itemsInCart) => {
  fetch(`${process.env.REACT_APP_SERVER_URL}/stripe/create-checkout-session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      items: itemsInCart.map(item => ({ id: item.product._id, quantity: item.quantity }))
    })
  }).then(res => {
    if (res.ok) return res.json();
  }).then(({ url }) => {
    window.location = url;
  }).catch(error => {
    console.error(error);
  });
}

export default function Cart() {
  const { isCartDisplayed, setIsCartDisplayed, itemsInCart, itemsInCartDispatch } = useContext(CartContext);

  return (
    <div className={`fixed top-0 right-0 w-full md:w-96 h-full bg-white shadow-lg overflow-y-auto z-50 transition-transform duration-300 ease-in-out ${isCartDisplayed ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-6 h-full flex flex-col">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>
        
        {itemsInCart?.length > 0 ? (
          <div className="flex-grow overflow-y-auto">
            {itemsInCart.map(item => (
              <div key={item.product._id} className="flex items-center justify-between mb-4 p-4 border-b border-gray-200">
                {/* Product Image */}
                <div className="h-16 w-16 bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${item.product.image})` }}></div>

                {/* Product Details */}
                <div className="flex-1 ml-4">
                  <div className="font-semibold text-base">{item.product.name}</div>
                  <div className="text-gray-500 text-sm mb-1">${(item.product.priceInCents / 100).toFixed(2)}</div>
                  <div className="flex items-center">
                    <label className="mr-2 text-xs font-medium">Quantity:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => itemsInCartDispatch({type: "QUANTITY_CHANGE", id: item.product._id, newQuantity: e.target.value})}
                      min="1"
                      className="border border-gray-300 rounded-md p-1 w-16 text-center outline-none focus:outline-none"
                    />
                  </div>
                </div>

                {/* Remove Item Button */}
                <div className="flex flex-col items-end">
                  <div className="font-bold text-base">
                    ${(item.product.priceInCents / 100 * item.quantity).toFixed(2)}
                  </div>
                  <button onClick={() => itemsInCartDispatch({type: "REMOVE_FROM_CART", id: item.product._id})} className="text-red-500 hover:text-red-600 mt-1">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}

        {/* Checkout Button */}
        {itemsInCart.length > 0 && (
          <div className="mt-6">
            <button
              onClick={() => checkoutMethod(itemsInCart)}
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Checkout
            </button>
          </div>
        )}
      </div>

      {/* Close Button */}
      <button onClick={() => setIsCartDisplayed(false)} className="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-gray-800">
        &times;
      </button>
    </div>
  );
}
