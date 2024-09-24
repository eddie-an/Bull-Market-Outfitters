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
      return items;
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

  /**
   * 
   * @param {String} itemId   Unique item id
   * @param {Object} update   JSON object of key value pairs of parameter to update
   */
  const updateProduct = async (itemId, update) => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/product/update-product/${itemId}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(update),
        });
        if (!response.ok) {
          throw new Error('Failed to update product');
        }
      } catch (error) {
        console.error('Error updating product:', error);
      }
    
  };

  return (
      <ProductContext.Provider value={{products, getAllProducts, getProduct, updateProduct}}>
          {props.children}
      </ProductContext.Provider>
  )
}


export default ProductContextProvider;