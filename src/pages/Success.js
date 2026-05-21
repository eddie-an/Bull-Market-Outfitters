import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const POLL_INTERVAL_MS = 2000;
const MAX_POLL_ATTEMPTS = 15;

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
    if (!sessionId) {
      setError('Missing checkout session.');
      setFulfillmentStatus('error');
      return;
    }

    let cancelled = false;

    const fetchCheckoutSession = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/stripe/checkout/session/${sessionId}`
      );
      if (!response.ok) throw new Error('Failed to fetch checkout session');
      return response.json();
    };

    const applySessionData = (data) => {
      setSession(data.session);
      setItems(data.items);
      setFulfillmentStatus(data.fulfillment?.status ?? 'pending');
    };

    const run = async () => {
      try {
        let data = await fetchCheckoutSession();
        if (cancelled) return;

        applySessionData(data);

        if (data.session?.payment_status === 'paid') {
          itemsInCartDispatch({ type: 'EMPTY_CART' });
        }

        let attempts = 0;
        while (
          !cancelled &&
          data.session?.payment_status === 'paid' &&
          data.fulfillment?.status !== 'complete' &&
          attempts < MAX_POLL_ATTEMPTS
        ) {
          await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
          data = await fetchCheckoutSession();
          if (cancelled) return;
          applySessionData(data);
          attempts++;
        }

        if (!cancelled && data.fulfillment?.status === 'complete') {
          await getAllProducts();
        }
      } catch (err) {
        console.error('Error loading checkout session:', err);
        if (!cancelled) {
          setError('Unable to load your order. Please contact support if you were charged.');
          setFulfillmentStatus('error');
        }
      }
    };

    run();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  const isPaid = session?.payment_status === 'paid';
  const shippingTotal = session?.shipping_cost?.amount_total ?? 0;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-brand-50 to-cream px-4 py-12 text-center sm:px-6">
      <div className="w-full max-w-lg rounded-2xl border border-brand-100 bg-white p-8 shadow-card sm:p-10">
        <img
          src="/assets/success-image.png"
          alt="Success"
          className="mx-auto mb-6 h-28 w-28 rounded-full ring-4 ring-brand-100 sm:h-36 sm:w-36"
        />
        <h1 className="font-display text-3xl font-bold text-brand-800 sm:text-4xl">
          Payment successful
        </h1>
        <p className="mt-3 text-stone-600">
          Thank you for your purchase. Your transaction is complete.
        </p>

        {fulfillmentStatus === "loading" && (
          <p className="mt-4 text-sm text-stone-500">Confirming your order…</p>
        )}

        {fulfillmentStatus === "pending" && isPaid && (
          <p className="mt-4 rounded-lg bg-brass/10 px-4 py-3 text-sm text-brand-800">
            Payment received — order confirmation is processing. You will receive a receipt
            email shortly.
          </p>
        )}

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

        {items && isPaid ? (
          <div className="mt-8 rounded-xl bg-parchment/40 p-5 text-left">
            <h2 className="font-display text-lg font-semibold text-ink">Order summary</h2>
            <ul className="mt-4 space-y-3">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between text-sm">
                  <span className="text-stone-600">{item.name}</span>
                  <span className="font-medium text-ink">
                    {item.quantity} × ${(item.priceInCents / 100).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-1 border-t border-stone-200 pt-4 text-sm">
              <p className="flex justify-between">
                <span className="text-stone-600">Subtotal</span>
                <span>${(session.amount_subtotal / 100).toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-stone-600">Shipping</span>
                <span>${(shippingTotal / 100).toFixed(2)}</span>
              </p>
              <p className="flex justify-between font-semibold text-ink">
                <span>Total</span>
                <span>${(session.amount_total / 100).toFixed(2)}</span>
              </p>
              {session.customer_details?.email && (
                <p className="pt-2 text-xs text-stone-500">
                  Receipt sent to {session.customer_details.email}
                </p>
              )}
            </div>
          </div>
        ) : (
          !error &&
          fulfillmentStatus !== "loading" && (
            <p className="mt-6 text-stone-500">No items purchased.</p>
          )
        )}

        <button type="button" onClick={() => navigate("/")} className="btn-primary mt-8">
          Back to home
        </button>
      </div>
    </div>
  );
}
