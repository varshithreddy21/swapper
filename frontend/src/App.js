import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Taskbar from './components/Taskbar';
import AddProduct from './components/AddProduct';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4001/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch products:', error);
      });
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Taskbar />
        <div className="max-w-7xl mx-auto px-4">
          <Routes>
            <Route path="/add-product" element={<AddProduct products={products} setProducts={setProducts} />} />
            <Route path="/home" element={<ProductList products={products} />} />
            <Route path="/" element={<ProductList products={products} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
