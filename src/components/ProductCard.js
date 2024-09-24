import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const dollarAmount = (parseInt(product?.priceInCents) / 100).toFixed(2);
  const isOutOfStock = product?.quantityInStock === 0;

  return (
    <div 
      className={`relative w-full cursor-pointer transition-transform transform hover:scale-105 ${
        isOutOfStock ? 'opacity-65 filter grayscale-[50%]': ''} shadow-lg rounded-lg overflow-hidden`} 
      onClick={() => navigate(`/${product._id}`)} // Prevent navigation if out of stock
    >
      <img src={product?.image} alt={product?.altDescription} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <div className="text-white font-bold text-xs sm:text-sm lg:text-base">
          <span>{product?.name}</span>
        </div>
        <div className="text-white text-xs sm:text-sm lg:text-base">
          <span>${dollarAmount}</span>
        </div>
      </div>
      
      {/* Out of Stock Badge */}
      {isOutOfStock && (
        <div className="absolute top-2 left-2 bg-red-600 text-white font-bold text-xs px-2 py-1 rounded">
          Out of Stock
        </div>
      )}
    </div>
  );
}
