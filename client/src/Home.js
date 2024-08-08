import Item from "./component/Item";
import Cart from "./Cart";
import React, {useState} from 'react';


function Home() {
  
  const [items, setItems] = useState([]);
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);

    return(
    <div className="App w-screen">
      <div className="sticky top-0 w-screen h-16 bg-gradient-to-r from-blue-200 to-sky-100 flex flex-row justify-between">
        <h1 className="text-3xl font-medium pl-8 align-middle pt-3">
          ShopEase
        </h1>
        <svg onClick={()=> setIsCartDisplayed(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 hover:cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </div>
      {isCartDisplayed ? <Cart isDisplayed={isCartDisplayed} setIsCartDisplayed={setIsCartDisplayed}/>: <></>}
      <span>
        <h4 className="mt-8 text-center text-xl font-medium mb-8">New Items</h4>
      </span>
      <div className="grid grid-cols-4 ml-8 mr-8 gap-4">
        <Item id="1" imageLink="/images/WideDresser.webp" altDescription="dresser" name="Wide Dresser" priceInCents="20550"/>
        <Item id="2" imageLink="/images/WideDresser.webp" altDescription="dresser" name="Wide Dresser" priceInCents="20550"/>
        <Item id="3" imageLink="/images/WideDresser.webp" altDescription="dresser" name="Wide Dresser" priceInCents="20550"/>
        <Item id="4" imageLink="/images/WideDresser.webp" altDescription="dresser" name="Wide Dresser" priceInCents="20550"/>
        <Item id="5" imageLink="/images/WideDresser.webp" altDescription="dresser" name="Wide Dresser" priceInCents="20550"/>
        <Item id="6" imageLink="/images/WideDresser.webp" altDescription="dresser" name="Wide Dresser" priceInCents="20550"/>
      </div>

    </div>
    );
}

export default Home;