import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductDetail from './components/productDetail.jsx';
import Basket from './components/basket.jsx';
import Checkout from './components/checkout.jsx';
import Category from './components/Category.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='products/:productId' element={<ProductDetail />}/>
      <Route path='basket' element={<Basket />}/>
      <Route path='checkout' element={<Checkout />}/>
      <Route path='categories/:categoryId' element={<Category />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
