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

    const updateProduct = async (items) => {
    for (const item of items) {
      console.log(item);
      const matchingProduct = products.find((product)=> product._id === item.id);
      console.log(products);
      const newQuantity = matchingProduct.quantityInStock - item.quantity;
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/product/update-product`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            quantityInStock: newQuantity
          }),
        });
        if (!response.ok) {
          throw new Error('Failed to update product');
        }
        console.log(`Updated product with ID: ${item.id}`);
      } catch (error) {
        console.error('Error updating product:', error);
      }
    }
  };

  return (
      <ProductContext.Provider value={{products, getAllProducts, getProduct}}>
          {props.children}
      </ProductContext.Provider>
  )
}


export default ProductContextProvider;