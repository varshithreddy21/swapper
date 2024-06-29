
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Swap() {
    
    const location = useLocation();
    const product_id = location.state?.data;
    const [swapname, setName] = useState('');
    const [description, setDescription] = useState('');
    const [owner,setOwner] = useState('');
    const [image,setImage] = useState(null); // State for image file

    const handleImageUpload = (e) => {
        setImage(e.target.files[0]); // Set the image file to state
    };
   
  
    const handleSubmit= async (event) => {
        event.preventDefault();

        try {
        const formData = new FormData();
        formData.append('name', swapname);
        formData.append('description', description);
        formData.append('owner', owner);
        if (product_id){
        formData.append('product_id',product_id);
        }
        if (image) {
            formData.append('image', image);
        }
        
        const response = await axios.post('http://localhost:4001/api/swaps', formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        });

        alert('Requested Successfully');
        setName('');
        setDescription('');
        setOwner('');
        setImage(null);
        } catch (error) {
        alert('Failed to send request:', error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md grid grid-cols-5 gap-2">
          <div className="mb-4 col-span-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Swap Productname:
            </label>
            <input
              type="text"
              value={swapname}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload Image:
            </label>
            <input
              type="file"
              onChange={handleImageUpload}
              className=""
              id="imageUpload"
            />
          </div>
          <div className="mb-4 col-span-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 col-span-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">Owner:</label>
            <input
              type="text"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-full">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Send Swap Request
            </button>
          </div>
        </form>
      );
    }
    
export default Swap;
    