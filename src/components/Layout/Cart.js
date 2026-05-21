import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";

export default function Cart() {
  const { isCartDisplayed, setIsCartDisplayed, itemsInCart, itemsInCartDispatch } =
    useContext(CartContext);
  const { products } = useContext(ProductContext);

  const subtotal = itemsInCart.reduce(
    (sum, item) => sum + (item.product.priceInCents / 100) * item.quantity,
    0
  );

  const checkoutMethod = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/stripe/create-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: itemsInCart.map((item) => ({
          id: item.product._id,
          quantity: item.quantity,
        })),
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch(console.error);
  };

  const handleCheckout = () => {
    let isValidQuantity = true;
    itemsInCart.forEach((itemInCart) => {
      const matchingProduct = products.find(
        (p) => p._id === itemInCart.product._id
      );
      if (matchingProduct && matchingProduct.quantityInStock < itemInCart.quantity) {
        isValidQuantity = false;
      }
    });

    if (!isValidQuantity) {
      window.alert("Quantity cannot exceed available stock.");
      return;
    }
    checkoutMethod();
  };

  if (!isCartDisplayed) return null;

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-50 bg-brand-950/40 backdrop-blur-sm"
        onClick={() => setIsCartDisplayed(false)}
        aria-label="Close cart"
      />
      <aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl">
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-5">
          <h2 className="font-display text-xl font-semibold text-ink">Your cart</h2>
          <button
            type="button"
            onClick={() => setIsCartDisplayed(false)}
            className="rounded-full p-2 text-stone-500 transition hover:bg-stone-100 hover:text-ink"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden p-6">
          {itemsInCart?.length > 0 ? (
            <ul className="flex-1 space-y-4 overflow-y-auto pr-1">
              {itemsInCart.map((item) => (
                <li
                  key={item.product._id}
                  className="flex gap-4 rounded-xl border border-stone-200/80 bg-white p-4 shadow-sm"
                >
                  <div
                    className="h-20 w-20 shrink-0 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.product.image})` }}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-ink">{item.product.name}</p>
                    <p className="text-sm text-stone-500">
                      ${(item.product.priceInCents / 100).toFixed(2)} each
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <label className="text-xs font-medium text-stone-600">Qty</label>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          itemsInCartDispatch({
                            type: "QUANTITY_CHANGE",
                            id: item.product._id,
                            newQuantity: e.target.value,
                          })
                        }
                        min="1"
                        max={item.product.quantityInStock}
                        className="input-field w-16 py-1 text-center text-sm"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        itemsInCartDispatch({
                          type: "REMOVE_FROM_CART",
                          id: item.product._id,
                        })
                      }
                      className="mt-2 text-xs font-medium text-red-600 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="shrink-0 font-semibold text-ink">
                    ${((item.product.priceInCents / 100) * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <p className="text-stone-600">Your cart is empty.</p>
              <Link
                to="/shop"
                onClick={() => setIsCartDisplayed(false)}
                className="btn-primary mt-4"
              >
                Start shopping
              </Link>
            </div>
          )}

          {itemsInCart.length > 0 && (
            <div className="mt-6 border-t border-stone-200 pt-6">
              <div className="mb-4 flex justify-between text-sm">
                <span className="text-stone-600">Subtotal</span>
                <span className="font-semibold text-ink">${subtotal.toFixed(2)}</span>
              </div>
              <p className="mb-4 text-xs text-stone-500">
                Shipping calculated at checkout
              </p>
              <button type="button" onClick={handleCheckout} className="btn-primary w-full">
                Checkout
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
