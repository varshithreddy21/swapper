import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [owner, setOwner] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4001/api/products', { name, description, owner })
      .then(response => {
        alert('Product added!');
        setName('');
        setDescription('');
        setOwner('');
      })
      .catch(error => {
        alert('Failed to add product:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Owner:</label>
        <input type="text" value={owner} onChange={e => setOwner(e.target.value)} />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;