
export default function GridItem({product, onClick}) {
    const dollarAmount = parseInt(product?.priceInCents) / 100;
    
    return (
    <div className="w-full relative aspect-h-1 hover:cursor-pointer" onClick={() => onClick(product)}>
        <img src={product?.imageLink} alt={product?.altDescription} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent hover:from-zinc-800 hover:to-white opacity-75"></div>
        <div className="absolute bottom-0 left-0 p-2">
            <div className="text-white font-bold">
            <span>{product?.name}</span>
            </div>
            <div className="text-white">
            <span>${dollarAmount.toFixed(2)}</span>
            </div>
        </div>
    </div>
    );
}