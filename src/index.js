import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductContextProvider from './contexts/ProductContext';
import CartContextProvider from './contexts/CartContext';
import OrderContextProvider from './contexts/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OrderContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductContextProvider>
      </OrderContextProvider>
  </React.StrictMode>
);
