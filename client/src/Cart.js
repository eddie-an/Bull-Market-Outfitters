const checkoutMethod = () => {
    console.log(process.env.REACT_APP_SERVER_URL);
    fetch(`${process.env.REACT_APP_SERVER_URL}/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: [
          {id: 1, quantity: 3},
          {id: 2, quantity: 1}
        ]
      })
    }).then(res => {
      if (res.ok) return res.json()
    }).then(({url}) => {
      window.location = url;
    }).catch(error=> {
      console.error(error);
    })
}

export default function Cart({isDisplayed, items, setIsCartDisplayed}) {

    return (
        <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
            isDisplayed ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-1000 ease-in-out z-50`}>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                {/* Cart Items */}
                <div>
                    {items?.length > 0 ? (
                        items.map(item => (
                            <div key={item.id} className="mb-2">
                                {item.name} - ${item.priceInCents / 100}
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </div>
            </div>
            <button onClick={()=> checkoutMethod()}
            className="button">Checkout</button>
            <button onClick={()=>setIsCartDisplayed(false)} className="fixed top-3 right-3">X</button>
        </div>
    );
}