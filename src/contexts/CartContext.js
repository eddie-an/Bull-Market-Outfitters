import React, {createContext, useState, useReducer, useEffect} from "react";

export const CartContext = createContext();


const CartContextProvider = (props) => {

  const cartItemReducer = (state, action) => {
    switch (action.type) {
      case "REMOVE_FROM_CART": // Payload parameters: id
        return state.filter(item => item.product._id !== action.id);
      case "ADD_TO_CART": // Payload parameters: product, quantity
        const exists = state.some(item => item.product._id === action.product._id);
        if (exists) {
          const existingItem = state.find(item => item.product._id === action.product._id);
          const updatedQuantity = Number(existingItem.quantity) + Number(action.quantity);
          return state.map(item => item.product._id === action.product._id ? { ...item, quantity: Number(updatedQuantity) } : item);
        } else {
          const newItem = { product: action.product, quantity: action.quantity };
          return([...state, newItem]);
        }
      case "QUANTITY_CHANGE": // Payload parameters: id, newQuantity
        return (state.map(item =>
          item.product._id === action.id
            ? { ...item, quantity: Number(action.newQuantity) }
            : item
        ));
      case "SET_CART": // Payload parameters: products
        return ([...action.products]);
      case "EMPTY_CART":
        return ([]);
      default:
        return state;
    }
  }

  const [itemsInCart, itemsInCartDispatch] = useReducer(cartItemReducer, [], ()=> {
    const storedCartItems = localStorage.getItem("cart");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const [isCartDisplayed, setIsCartDisplayed] = useState(false);

  useEffect(()=> {
    localStorage.setItem("cart", JSON.stringify(itemsInCart));
  }, [itemsInCart]);

  return (
      <CartContext.Provider value={{isCartDisplayed, setIsCartDisplayed, itemsInCart, itemsInCartDispatch}}>
          {props.children}
      </CartContext.Provider>
  );
}

export default CartContextProvider;