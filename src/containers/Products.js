import React from 'react';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import { useStore } from '../hooks-store/store';

const Products = () => {

  const productList = useStore()[0];
  console.log("Store products")
  console.log(productList)

  return (
    <ul className="products-list">
      {productList.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
