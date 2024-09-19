

const checkoutMethod = (itemsInCart) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/stripe/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: itemsInCart.map(item => ({id: item.product._id, quantity: item.quantity}))
      })
    }).then(res => {
      if (res.ok) return res.json()
    }).then(({url}) => {
      window.location = url;
    }).catch(error=> {
      console.error(error);
    })
}

export default function Cart({isCartDisplayed, itemsInCart, setIsCartDisplayed, setItemsInCart}) {
    
    const handleQuantityChange = (id, newQuantity) => {
      setItemsInCart(itemsInCart.map(item =>
        item.product._id === id
          ? { ...item, quantity: Number(newQuantity) }
          : item
      ));
    }

    const handleRemove = (id) => {
      setItemsInCart(prevItems => prevItems.filter(item => item.product._id !== id));
    }

    console.log(itemsInCart);
    return (
        <div
        className={`fixed top-0 right-0 w-96 h-full bg-white shadow-lg overflow-y-auto z-50`}>
            <div className="p-4 h-full">
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                    {itemsInCart?.length > 0 ? (
                      <>
                      <div className="overflow-y-auto h-5/6">
                      {itemsInCart.map(item => (
                        <div key={item.product._id} className="mb-2 flex flex-row justify-between items-start relative">
                          <div className="h-14 w-14 bg-cover bg-center" style={{ backgroundImage: `url(${item.product.image})` }} alt={item.product.altDescription}></div>
                          
                          <div className="flex-1 ml-4">
                            <div className="font-bold text-sm">
                              {item.product.name}
                            </div>
                            <div className="text-gray-600 text-xs">
                              ${(item.product.priceInCents / 100).toFixed(2)}
                            </div>
                            <div className="flex justify-start items-center mb-4 mt-2">
                              <label className="mr-2 text-xs font-medium">Quantity:</label>
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.product._id, e.target.value)}
                                min="1"
                                className="border border-gray-300 rounded-md p-2 h-6 w-full text-center"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col">
                            <div className="font-bold text-sm">
                              ${((item.product.priceInCents / 100) * item.quantity).toFixed(2)}
                            </div>
                            <div>
                              <svg className="size-6 absolute right-2 bottom-4 hover:cursor-pointer" 
                                  onClick={()=> handleRemove(item.product._id)}
                                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                              </svg>
                            </div>
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