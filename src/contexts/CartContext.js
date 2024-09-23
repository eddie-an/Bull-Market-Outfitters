import React, {createContext, useState, useReducer} from "react";

export const CartContext = createContext();


const CartContextProvider = (props) => {

  const cartItemReducer = (state, action) => {
    switch (action.type) {
      case "REMOVE_FROM_CART":
        return state.filter(item => item.product._id !== action.id);
      case "ADD_TO_CART":
        const exists = state.some(item => item.product._id === action.product._id);
        if (exists) {
          const existingItem = state.find(item => item.product._id === action.product._id);
          const updatedQuantity = Number(existingItem.quantity) + Number(action.quantity);
          return state.map(item => item.product._id === action.product._id ? { ...item, quantity: Number(updatedQuantity) } : item);
        } else {
          const newItem = { product: action.product, quantity: action.quantity };
          return([...state, newItem]);
        }
      case "QUANTITY_CHANGE":
        return (state.map(item =>
          item.product._id === action.id
            ? { ...item, quantity: Number(action.newQuantity) }
            : item
        ));
      default:
        return state;
    }
  }

  const [itemsInCart, itemsInCartDispatch] = useReducer(cartItemReducer, []);
    const [isCartDisplayed, setIsCartDisplayed] = useState(false);
    // const [itemsInCart, setItemsInCart] = useState([]);

    // const handleQuantityChangeInCart = (id, newQuantity) => {
    //     setItemsInCart(itemsInCart.map(item =>
    //       item.product._id === id
    //         ? { ...item, quantity: Number(newQuantity) }
    //         : item
    //     ));
    //   }
  
    // const handleRemoveFromCart = (id) => {
    //     setItemsInCart(prevItems => prevItems.filter(item => item.product._id !== id));
    // }
    
    // const handleAddToCart = (product, quantity) => {
    //     const exists = itemsInCart.some(item => item.product._id === product._id);
    //     if (exists) {
    //       const existingItem = itemsInCart.find(item => item.product._id === product._id);
    //       const updatedQuantity = Number(existingItem.quantity) + Number(quantity);
    
    //       setItemsInCart(itemsInCart.map(item =>
    //         item.product._id === product._id
    //           ? { ...item, quantity: Number(updatedQuantity) }
    //           : item
    //       ));
    //     } else {
    //       const newItem = { product: product, quantity: quantity };
    //       setItemsInCart([...itemsInCart, newItem]);
    //     }
    //   };

    return (
        <CartContext.Provider value={{isCartDisplayed, setIsCartDisplayed, itemsInCart, itemsInCartDispatch}}>
            {props.children}
        </CartContext.Provider>
    );


}

export default CartContextProvider;