import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Success from './pages/Success';
import Home from './pages/Home';
import Cancel from "./pages/Cancel";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';
import Layout from './Layout';
import ProductPage from './pages/ProductPage';
import Shop from "./pages/Shop";
import About from "./pages/About";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/terms-of-service" element={<TermsOfService/>} />
            <Route path="/contact-us" element={<ContactUs />}/>
            <Route path="/:productId" element={<ProductPage/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/about" element={<About/>}></Route>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
