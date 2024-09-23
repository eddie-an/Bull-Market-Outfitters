import React, {createContext, useState} from "react";

export const CartContext = createContext();


const CartContextProvider = (props) => {
    const [isCartDisplayed, setIsCartDisplayed] = useState(false);
    const [itemsInCart, setItemsInCart] = useState([]);

    const handleQuantityChangeInCart = (id, newQuantity) => {
        setItemsInCart(itemsInCart.map(item =>
          item.product._id === id
            ? { ...item, quantity: Number(newQuantity) }
            : item
        ));
      }
  
    const handleRemoveFromCart = (id) => {
        setItemsInCart(prevItems => prevItems.filter(item => item.product._id !== id));
    }
    
    const handleAddToCart = (product, quantity) => {
        const exists = itemsInCart.some(item => item.product._id === product._id);
        if (exists) {
          const existingItem = itemsInCart.find(item => item.product._id === product._id);
          const updatedQuantity = Number(existingItem.quantity) + Number(quantity);
    
          setItemsInCart(itemsInCart.map(item =>
            item.product._id === product._id
              ? { ...item, quantity: Number(updatedQuantity) }
              : item
          ));
        } else {
          const newItem = { product: product, quantity: quantity };
          setItemsInCart([...itemsInCart, newItem]);
        }
      };

    return (
        <CartContext.Provider value={{isCartDisplayed, setIsCartDisplayed, itemsInCart, handleRemoveFromCart, handleAddToCart, handleQuantityChangeInCart}}>
            {props.children}
        </CartContext.Provider>
    );


}

export default CartContextProvider;