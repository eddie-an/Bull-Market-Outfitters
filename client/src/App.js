import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Success from './Success';
import Home from './Home';
import Cancel from "./Cancel";
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import ContactUs from './ContactUs';


function App() {
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);
  const [itemsInCart, setItemsInCart] = useState([]);
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home isCartDisplayed={isCartDisplayed} 
                                    setIsCartDisplayed={setIsCartDisplayed} 
                                    itemsInCart={itemsInCart} 
                                    setItemsInCart={setItemsInCart}/>}/>
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy
                                            isCartDisplayed={isCartDisplayed} 
                                            setIsCartDisplayed={setIsCartDisplayed} 
                                            itemsInCart={itemsInCart} 
                                            setItemsInCart={setItemsInCart}/>} />
      <Route path="/terms-of-service" element={<TermsOfService
                                            isCartDisplayed={isCartDisplayed} 
                                            setIsCartDisplayed={setIsCartDisplayed} 
                                            itemsInCart={itemsInCart} 
                                            setItemsInCart={setItemsInCart}/>} />
      <Route path="/contact-us" element={<ContactUs
                                              isCartDisplayed={isCartDisplayed} 
                                              setIsCartDisplayed={setIsCartDisplayed} 
                                              itemsInCart={itemsInCart} 
                                              setItemsInCart={setItemsInCart}/>} />
    </Routes>
  </Router>
  );
}

export default App;
