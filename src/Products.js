import React from 'react';
import { products } from './ProductData';
import QuantityCounter from './QuantityCounter';

const Products = () => {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <QuantityCounter/>
        </div>
      ))}
    </div>
  );
};

export default Products;
