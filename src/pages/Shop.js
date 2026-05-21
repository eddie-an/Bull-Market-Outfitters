import React, { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { ProductContext } from "../contexts/ProductContext";

const CATEGORIES = ["", "Apparel", "Accessories", "Miscellaneous", "Tech gadgets"];

function Shop() {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProducts = products?.filter((product) =>
    product.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsMenuOpen(false);
  };

  const categoryLabel = selectedCategory === "" ? "All categories" : selectedCategory;

  return (
    <div className="min-h-screen">
      <section className="border-b border-stone-200 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 px-4 py-14 text-center text-cream sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">Catalog</p>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Shop</h1>
        <p className="mx-auto mt-3 max-w-lg text-sm text-brand-100 sm:text-base">
          Explore apparel, accessories, and more — built for those who dress the part.
        </p>
      </section>

      <div className="sticky top-16 z-10 border-b border-stone-200 bg-cream/95 backdrop-blur-md sm:top-20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-stone-600">
            {filteredProducts?.length ?? 0} items
            {selectedCategory && (
              <span className="text-ink">
                {" "}
                in <span className="font-semibold">{selectedCategory}</span>
              </span>
            )}
          </p>

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-medium sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {categoryLabel}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className="hidden flex-wrap gap-2 sm:flex">
            {CATEGORIES.map((cat) => (
              <button
                key={cat || "all"}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "bg-brand-800 text-cream shadow-md"
                    : "bg-white text-stone-600 ring-1 ring-stone-200 hover:bg-brand-50 hover:text-brand-800"
                }`}
              >
                {cat === "" ? "All" : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-cream p-8 sm:hidden">
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full p-2 text-2xl text-stone-500"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat || "all"}
              type="button"
              onClick={() => handleCategorySelect(cat)}
              className={`text-xl font-display font-medium ${
                selectedCategory === cat ? "text-brand-800" : "text-stone-500"
              }`}
            >
              {cat === "" ? "All categories" : cat}
            </button>
          ))}
        </div>
      )}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {products?.length ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <LoadingSpinner />
        )}

        {products?.length > 0 && filteredProducts?.length === 0 && (
          <div className="rounded-2xl bg-parchment/60 py-16 text-center">
            <p className="text-stone-600">No products in this category.</p>
            <button
              type="button"
              onClick={() => setSelectedCategory("")}
              className="btn-secondary mt-4"
            >
              View all
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Shop;
