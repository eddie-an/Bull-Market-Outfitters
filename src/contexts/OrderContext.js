import React, {createContext} from "react";

export const OrderContext = createContext();

const OrderContextProvider = (props) => {

const getOrder = async (order_id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/order/get-order/${order_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        return null;
      }
      const order = await response.json();
      return order;
    } catch (error) {
      console.error('Error getting order:', error);
      return null;
    }
  }

  const addOrder = async (session, items, isStockUpdated) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/order/add-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_id: session.id,
          session: session,
          items: items,
          isStockUpdated: isStockUpdated
        })
      });

      if (!res.ok) throw new Error('Failed to add an order to the database');
      const jsonRes = await res.json();
      console.log(jsonRes.message);
    } catch (error) {
      console.error('Error adding order:', error);
    }
  }
    return (
        <OrderContext.Provider value={{getOrder, addOrder}}>
            {props.children}
        </OrderContext.Provider>
    ) 
}

export default OrderContextProvider;