import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }


  return (
    <div className="grid grid-rows-4 gap-4">
      {products.map(product => (
        <div key={product.id} className="card bg-white shadow-md rounded-lg p-4 border border-gray-200 mb-5">
          {product.image && (
            <img
              src={`http://localhost:4001/${product.image}`}
              alt={product.name}
              className="w-full h-96 object-cover mb-4"
            />
          )}
          <h3 className="font-bold text-lg mb-2">{product.name}</h3>
          <p className="product-description text-gray-700 mb-2">{product.description}</p>
          <p className="text-sm text-gray-600 mb-3">Owned by: {product.owner}</p>
          <div  class="flex justify-between">
          <Link to= {{
        pathname: '/swap',
        state: { data: product.id }
      }} 
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  mb-4">
          Swap Request</Link>
          <Link to= {{
        pathname: '/swaplist',
        state: { data: product.id }
      } }
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  mb-4">
          Swap List
          </Link>
        </div>
        </div>

      ))}
    </div>
  );
}

export default ProductList;
