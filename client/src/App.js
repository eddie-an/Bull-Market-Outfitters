import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Success from './Success';
import Checkout from './Checkout';
import Cancel from "./Cancel";


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Checkout />}/>
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
    </Routes>
  </Router>
  );
}

export default App;
