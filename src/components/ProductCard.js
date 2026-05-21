import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const dollarAmount = (parseInt(product?.priceInCents, 10) / 100).toFixed(2);
  const isOutOfStock = product?.quantityInStock === 0;

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/product/${product._id}`)}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/product/${product._id}`)}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
        isOutOfStock ? "opacity-75" : ""
      }`}
    >
      <div className="aspect-[4/5] overflow-hidden bg-parchment">
        <img
          src={product?.image}
          alt={product?.altDescription || product?.name}
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
            isOutOfStock ? "grayscale" : ""
          }`}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/90 via-brand-950/50 to-transparent p-4 pt-16">
        <h3 className="font-display text-base font-semibold text-cream sm:text-lg">
          {product?.name}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-brass">${dollarAmount}</p>
      </div>

      {isOutOfStock && (
        <span className="absolute left-3 top-3 rounded-full bg-red-600/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Sold out
        </span>
      )}
    </article>
  );
}
