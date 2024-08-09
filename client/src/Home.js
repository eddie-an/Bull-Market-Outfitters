import React, {useState} from 'react';
import GridItem from "./component/GridItem";
import Cart from "./Cart";
import Header from "./component/Header";
import Products from "./Products";
import ProductPopup from "./component/ProductPopup";

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);
  const [itemsInCart, setItemsInCart] = useState([]);


  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product, quantity) => {
    const exists = itemsInCart.some(item => item.product.id === product.id);
    if (exists) {
      const existingItem = itemsInCart.find(item => item.product.id === product.id);
      const updatedQuantity = Number(existingItem.quantity) + Number(quantity);

      setItemsInCart(itemsInCart.map(item =>
        item.product.id === product.id
          ? (
            { ...item, quantity: Number(updatedQuantity) })
          : item
      ));
    }
    else {
      const newItem = {product: product, quantity: quantity};
      setItemsInCart([...itemsInCart, newItem]);
    }
    console.log(`Adding ${quantity} of ${product.name} to cart.`);
    console.log(itemsInCart);
  };

  return(
  <div className="App w-full">
    <Header setIsCartDisplayed={setIsCartDisplayed}/>
    {isCartDisplayed ? <Cart isDisplayed={isCartDisplayed} itemsInCart={itemsInCart} setIsCartDisplayed={setIsCartDisplayed} setItemsInCart={setItemsInCart}/>: <></>}
    {selectedProduct && (
      <ProductPopup
        product={selectedProduct}
        onClose={handleClosePopup}
        onAddToCart={handleAddToCart}
      />
    )}
    <span>
      <h4 className="mt-8 text-center text-xl font-medium mb-8">New Items</h4>
    </span>
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-x-2 gap-y-6 ml-32 mr-32">
      {Products.map((product)=> (
        <GridItem key={product.id} product={product} onClick={handleProductClick}/>
      ))}

    </div>

  </div>
  );
}

export default Home;