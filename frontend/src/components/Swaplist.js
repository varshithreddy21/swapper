
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


function SwapList() {
  const location = useLocation();
  const product_id = location.state?.data;
  const [swaps,setSwaps]=useState([])
  
   
  useEffect(() => {
      axios.get(`http://localhost:4001/api/swaps/${product_id}`)
      .then(response => { 
        setSwaps(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch swaps:', error);
      });
          
    }, []);
 

  return (
    
    <div className="grid grid-rows-4 gap-4">
      {swaps.map(swap => (
        <div key={swap.id} className="card bg-white shadow-md rounded-lg p-4 border border-gray-200 mb-5">
          {swap.image && (
            <img
              src={`http://localhost:4001/${swap.image}`}
              alt={swap.name}
              className="w-full h-96 object-cover mb-4"
            />
          )}
          <h3 className="font-bold text-lg mb-2">{swap.name}</h3>
          <p className="swap-description text-gray-700 mb-2">{swap.description}</p>
          <p className="text-sm text-gray-600 mb-3">Owned by: {swap.owner}</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            Accept</button>
        
        </div>

      ))}
    </div>
  );
}

export default SwapList;
