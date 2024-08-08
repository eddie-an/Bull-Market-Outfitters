
export default function Item({imageLink, altDescription, name, priceInCents}) {
    const dollarAmount = parseInt(priceInCents) / 100;
    return (
        <div className="">
            <img src={imageLink} alt={altDescription}></img>
            <div>
                <div>
                    <span>{name}</span>
                </div>
                <div>
                    <span>${dollarAmount.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}