import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [currentProduct, setCurrentProduct] = useState(null);
  const { itemsInCartDispatch } = useContext(CartContext);
  const { getProduct } = useContext(ProductContext);
  const isOutOfStock = currentProduct?.quantityInStock === 0;

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = () => {
    if (quantity > currentProduct.quantityInStock) {
      window.alert("Quantity cannot exceed items in stock.");
    } else {
      itemsInCartDispatch({ type: "ADD_TO_CART", product: currentProduct, quantity });
      navigate("/shop");
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProduct(productId);
        setCurrentProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [productId, getProduct]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!currentProduct) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20">
        <LoadingSpinner label="Loading product…" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="border-b border-stone-200 bg-white/80 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 transition hover:text-brand-900"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to shop
        </Link>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-12">
        <div className="overflow-hidden rounded-2xl bg-white shadow-card">
          <img
            src={currentProduct.image}
            alt={currentProduct.name}
            className={`aspect-square w-full object-cover ${isOutOfStock ? "grayscale" : ""}`}
          />
        </div>

        <div className="flex flex-col">
          {currentProduct.category && (
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              {currentProduct.category}
            </p>
          )}
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            {currentProduct.name}
          </h1>
          <p className="mt-3 text-2xl font-semibold text-brand-800">
            ${(currentProduct.priceInCents / 100).toFixed(2)}
          </p>

          <div
            id="product-description"
            className="mt-6 max-h-64 overflow-y-auto rounded-xl bg-parchment/50 p-4 text-sm leading-relaxed text-stone-700 sm:text-base"
          >
            <p className="whitespace-pre-line">{currentProduct.description}</p>
          </div>

          <div className="mt-8 space-y-4 border-t border-stone-200 pt-8">
            {isOutOfStock ? (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                Sorry, this item is currently out of stock.
              </p>
            ) : (
              <p className="text-sm text-stone-600">
                <span className="font-medium text-ink">{currentProduct.quantityInStock}</span> in
                stock
              </p>
            )}

            {!isOutOfStock && (
              <div className="flex flex-wrap items-center gap-4">
                <label className="text-sm font-medium text-ink">Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  max={currentProduct.quantityInStock}
                  className="input-field w-24"
                />
              </div>
            )}

            <button
              type="button"
              disabled={isOutOfStock}
              onClick={handleAddToCart}
              className="btn-primary w-full sm:w-auto"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
