import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Success from './Success';
import Home from './Home';
import Cancel from "./Cancel";


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
    </Routes>
  </Router>
  );
}

export default App;
