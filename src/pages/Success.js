import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

export default function Success() {
  const navigate = useNavigate();
  const { itemsInCartDispatch } = useContext(CartContext);
  const { getAllProducts } = useContext(ProductContext);
  const [session, setSession] = useState(null);
  const [items, setItems] = useState(null);
  const [fulfillmentStatus, setFulfillmentStatus] = useState('loading');
  const [error, setError] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get('session_id');

  useEffect(() => {
    const run = async () => {
      if (!sessionId) {
        setError('Missing checkout session.');
        setFulfillmentStatus('error');
        return;
      }

      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/stripe/checkout/session/${sessionId}`
        );
        if (!response.ok) throw new Error('Failed to fetch checkout session');

        const data = await response.json();
        setSession(data.session);
        setItems(data.items);
        setFulfillmentStatus(data.fulfillment?.status ?? 'pending');

        if (data.fulfillment?.status === 'complete') {
          await getAllProducts();
        }
      } catch (err) {
        console.error('Error loading checkout session:', err);
        setError('Unable to load your order. Please contact support if you were charged.');
        setFulfillmentStatus('error');
      } finally {
        itemsInCartDispatch({ type: 'EMPTY_CART' });
      }
    };

    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  const isPaid = session?.payment_status === 'paid';
  const shippingTotal = session?.shipping_cost?.amount_total ?? 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-center p-4 sm:p-6">
      <img src="/assets/success-image.png" alt="Success" className="w-36 h-36 sm:w-48 sm:h-48 mb-6 rounded-full shadow-lg" />
      <h1 className="text-4xl sm:text-5xl font-bold text-green-700 mb-4">Payment Successful!</h1>
      <p className="text-base sm:text-lg text-gray-800 mb-6">
        Thank you for your purchase! Your transaction has been completed successfully.
      </p>

      {fulfillmentStatus === 'loading' && (
        <p className="text-gray-600 mb-6">Confirming your order...</p>
      )}

      {fulfillmentStatus === 'pending' && isPaid && (
        <p className="text-gray-600 mb-6">
          Your payment was received. Order confirmation is still processing — you will receive a receipt email shortly.
        </p>
      )}

      {error && (
        <p className="text-red-600 mb-6">{error}</p>
      )}

      {items && isPaid ? (
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">Items Purchased:</h2>
          <ul className="space-y-2">
            {items.map(item => (
              <li key={item.id} className="flex justify-between items-center p-2 hover:bg-gray-50 transition duration-300 rounded">
                <span className="text-gray-600 text-sm sm:text-base">{item.name}</span>
                <span className="font-semibold text-sm sm:text-base">{item.quantity} x ${(item.priceInCents / 100).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-4">
            <span className="text-base sm:text-lg font-semibold">Subtotal: ${(session.amount_subtotal / 100).toFixed(2)}</span>
            <br />
            <span className="text-xs sm:text-sm font-bold">Shipping cost: ${(shippingTotal / 100).toFixed(2)}</span>
            <br />
            <span className="text-base sm:text-lg font-semibold">Total: ${(session.amount_total / 100).toFixed(2)}</span>
            <br /><br />
            {session.customer_details?.email && (
              <span className="text-xs sm:text-sm font-light">
                A receipt will be sent to {session.customer_details.email}
              </span>
            )}
          </div>
        </div>
      ) : (
        !error && fulfillmentStatus !== 'loading' && (
          <p className="text-gray-500 mb-6">No items purchased.</p>
        )
      )}
      <button
        onClick={() => navigate('../')}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded transition duration-300 mt-4 shadow"
      >
        Back to Menu
      </button>
    </div>
  );
}
