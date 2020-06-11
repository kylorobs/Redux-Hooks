import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ProductsContext from './context/productsProvider';


ReactDOM.render(
  <ProductsContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsContext>,
  document.getElementById('root')
);
