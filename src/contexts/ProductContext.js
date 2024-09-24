import React, {createContext, useEffect, useState} from "react";

export const ProductContext = createContext();


const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
      getAllProducts();
    }, [])

  const getAllProducts = async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/product/get-all-products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const jsonRes = await res.json();
      const items = jsonRes.message;
      setProducts(items);
  }

  const getProduct = async (id) => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/product/get-product/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const jsonRes = await res.json();
    const item = jsonRes.message;
    return item;
  }

  return (
      <ProductContext.Provider value={{products, getAllProducts, getProduct}}>
          {props.children}
      </ProductContext.Provider>
  )
}


export default ProductContextProvider;