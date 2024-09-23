import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const dollarAmount = (parseInt(product?.priceInCents) / 100).toFixed(2);

  return (
    <div className="relative w-full cursor-pointer transition-transform transform hover:scale-105 shadow-lg rounded-lg overflow-hidden" onClick={() => navigate(`/${product._id}`)}>
      <img src={product?.image} alt={product?.altDescription} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <div className="text-white font-bold text-lg">
          <span>{product?.name}</span>
        </div>
        <div className="text-white">
          <span>${dollarAmount}</span>
        </div>
      </div>
    </div>
  );
}
