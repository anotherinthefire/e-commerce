/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import './App.css'
import { getCategories, getProducts } from '../fetcher';
import Category from './components/Category';
import CategoryProduct from './components/categoryProduct';

function App() {
  const [categories, setCategories] = useState({errorMessage: '', data:  []});
  const [products, setProducts] = useState({errorMessage: '', data:  []});

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getCategories()
    setCategories(data)
    }
    fetchData()
  }, [])

  // React.useEffect(() => {
  //   const data = fetcher ("/categories")
  //   setCategories(data)
  // }, [])
 
  const handleCategoryClick = id => {
    const fetchData = async () => {
      const data = await getProducts(id)
    setProducts(data)
      }
      fetchData()
  }

  const renderCategories = () => {

    return categories.data.map(c =>
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={() => handleCategoryClick(c.id)} />
    )

    //     can also use this || alterative
    //     const categories = []
    //     for(let i = 0; i < results.length; i++){
    //       categories.push(<Category key={results[i].id} id={results[i].id} title={results[i].title} />)
    //     }
    //  return categories
  }

  const renderProducts = () => {

    return products.data.map(p =>
      <CategoryProduct {...p}>{p.title}</CategoryProduct>
    )
  }

  return (
    <>
      <header className='p-8 text-center text-4xl text-white grid bg-gray-500'>My Store</header>
      <section className='flex'>
        <nav className='p-5 flex-0.1 bg-slate-200 pr-40'>
          { categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
          {
            categories.data && renderCategories()
          }
        </nav>
        <article className='p-3'>
          <h1>Products</h1>
          { products.errorMessage && <div>Error: {products.errorMessage}</div>}
          {
            products.data && renderProducts()
          }
        </article>
      </section>

      <footer className='p-2 text-center text-white bg-gray-500'>
        footer
      </footer>
    </>
  )

}

export default App
