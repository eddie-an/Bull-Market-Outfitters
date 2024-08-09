const checkoutMethod = (itemsInCart) => {
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

export default function Cart({isDisplayed, itemsInCart, setIsCartDisplayed, setItemsInCart}) {
    
    const handleQuantityChange = (id, newQuantity) => {
      setItemsInCart(itemsInCart.map(item =>
        item.product.id === id
          ? { ...item, quantity: Number(newQuantity) }
          : item
      ));
    }

    return (
        <div
        className={`fixed top-0 right-0 w-96 h-full bg-white shadow-lg overflow-y-auto transform ${
            isDisplayed ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-1000 ease-in-out z-50`}>
            <div className="p-4 h-full">
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                    {itemsInCart?.length > 0 ? (
                      <>
                      <div className="overflow-y-auto h-5/6">
                        {itemsInCart.map(item => (
                            <div key={item.product.id} className="mb-2 flex flex-row h-14 justify-between">
                              <img src={item.product.imageLink} alt={item.product.altDescription} className="h-full"/>
                              <div>
                                <div className="">
                                  {item.product.name}
                                </div>
                                <div>
                                  ${item.product.priceInCents / 100}
                                </div>
                                <div className="flex items-center mb-4">
                                  <label className="mr-2 text-lg font-medium">Quantity:</label>
                                    <input
                                      type="number"
                                      value={item.quantity}
                                      onChange={(e) => handleQuantityChange(item.product.id, e.target.value)}
                                      min="1"
                                      className="border border-gray-300 rounded-md p-2 w-24 text-center"
                                    />
                                </div>
                              </div>
                              <div>
                                ${(item.product.priceInCents / 100) * item.quantity}
                              </div>
                            </div>
                        ))}
                      </div>     
                      <div className="h-1/6 text-center">
                        <button onClick={()=> checkoutMethod(itemsInCart)} className="button">Checkout</button>
                      </div>
                      </>
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
            </div>

            <button onClick={()=>setIsCartDisplayed(false)} className="fixed top-3 right-3">X</button>
        </div>
    );
}