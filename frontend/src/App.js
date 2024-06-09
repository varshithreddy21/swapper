import React from 'react';
import ProductList from './components/ProductList';
import Taskbar from './components/Taskbar';
import AddProduct from './components/AddProduct';
import './components/App.css';

function App() {
  return (
    <div className="app-container">
      <Taskbar />
      <h1>Product Swap</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
}

export default App;