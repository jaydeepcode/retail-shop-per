import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SearchSupplierLookup from './components/SearchSupplierLookup/SearchSupplierLookup';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route path="/search-water-supplier" element={<SearchSupplierLookup/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

