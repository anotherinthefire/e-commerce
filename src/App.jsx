import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getCategories } from '../fetcher';
import ProductDetail from './components/productDetail.jsx';
import Basket from './components/basket.jsx';
import Checkout from './components/checkout.jsx';
import Category from './components/Category.jsx';
import Layout from './components/Layout.jsx';
import Home from './components/Home';

function App() {
  const [categories, setCategories] = useState({ 
    errorMessage: '', 
    data: 
    [] });
  // const [products, setProducts] = useState({ errorMessage: '', data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategories()
      setCategories(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout categories={categories}/>}>
            <Route index element={<Home />} />
            <Route path='basket' element={<Basket />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='products/:productId' element={<ProductDetail />} />
            <Route path='categories/:categoryId' element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
