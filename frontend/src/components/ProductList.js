import React from 'react';

function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div className="grid grid-rows-3 gap-4">
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
          <p className="product-description text-gray-700 mb-4">{product.description}</p>
          <p className="text-sm text-gray-600">Owned by: {product.owner}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
