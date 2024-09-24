import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {CartContext} from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { OrderContext } from '../contexts/OrderContext';

export default function Success() {
  const navigate = useNavigate();
  const {itemsInCartDispatch} = useContext(CartContext);
  const {products, getAllProducts} = useContext(ProductContext);
  const {getOrder, addOrder} = useContext(OrderContext);
  const [session, setSession] = useState(null);
  const [items, setItems] = useState(null);
  const params = new URLSearchParams(window.location.search); // Change this to useParams. Might need to update react router
  const sessionId = params.get('session_id');


  const sendEmail = async (session, items) => {
    try {
      console.log(session, items);
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/sendgrid/receipt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          recipient: session.customer_details.email,
          session: session,
          items: items
        })
      });

      if (!res.ok) throw new Error('Failed to send email');
      const jsonRes = await res.json();
      console.log(jsonRes.message);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };


  // IMPLEMENT THIS FUNCTION LATER
  // TODO
  const updateProduct = async (items) => {
    const allProducts = await getAllProducts();
    console.log(allProducts);
    for (const item of items) {
      console.log(item);
      const matchingProduct = allProducts.find((product)=> product._id === item.id);
      const newQuantity = matchingProduct.quantityInStock - item.quantity;
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/product/update-product/${item.id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            quantityInStock: newQuantity
          }),
        });
        if (!response.ok) {
          throw new Error('Failed to update product');
        }
        console.log(`Updated product with ID: ${item.id}`);
      } catch (error) {
        console.error('Error updating product:', error);
      }
    }
  };

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/stripe/checkout/session/${sessionId}`);
        if (!response.ok) throw new Error('Failed to fetch session');
        const data = await response.json();
        setSession(data.session);
        setItems(data.items);

        const order = await getOrder(data.session.id); // Get order details to check if stock has been updated
        console.log(order);
        if (!order || order.message.length < 1) { // If order doesn't exist, add it
          await addOrder(data.session, data.items, true);
          await updateProduct(data.items); // TODO
          await sendEmail(data.session, data.items); // Call sendEmail after fetching session data
        }
        if (order && order.isStockUpdated===false) {
        }
        itemsInCartDispatch({type: "EMPTY_CART"}); // Empty the cart
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };

    fetchSession();
  }, [sessionId, itemsInCartDispatch]);

  useEffect(() => {
    if (products.length === 0) {
      // Fetch products if not already populated
      getAllProducts();
    }
  }, [products, getAllProducts]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-center p-4 sm:p-6">
      <img src="/assets/success-image.png" alt="Success" className="w-36 h-36 sm:w-48 sm:h-48 mb-6 rounded-full shadow-lg" />
      <h1 className="text-4xl sm:text-5xl font-bold text-green-700 mb-4">Payment Successful!</h1>
      <p className="text-base sm:text-lg text-gray-800 mb-6">
        Thank you for your purchase! Your transaction has been completed successfully.
      </p>
      {items && session?.payment_status === "paid" ? (
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
            <span className="text-xs sm:text-sm font-bold">Shipping cost: ${(session.shipping_cost.amount_total / 100).toFixed(2)}</span>
            <br />
            <span className="text-base sm:text-lg font-semibold">Total: ${(session.amount_total / 100).toFixed(2)}</span>
            <br /><br />
            <span className="text-xs sm:text-sm font-light">You will be sent an email with the receipt to {session.customer_details.email}</span>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">No items purchased.</p>
      )}
      <button
        onClick={() => navigate("../")}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded transition duration-300 mt-4 shadow"
      >
        Back to Menu
      </button>
    </div>
  );
}
