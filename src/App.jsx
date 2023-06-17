/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import './App.css'
import Category from './components/Category';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCategories(data)
      })
  }, [])

  const handleCategoryClick = id => {
    fetch("http://localhost:3000/products?catId=" + id)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProducts(data)
      })
  }

  const renderCategories = () => {

    return categories.map(c =>
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

    return products.map(p =>
      <div>{p.title}</div>
    )
  }

  return (
    <>
      <header className='p-8 text-center text-4xl text-white grid bg-gray-500'>My Store</header>
      <section className='flex'>
        <nav className='p-5 flex-0.1 bg-slate-200 pr-40'>
          {
            categories && renderCategories()
          }
        </nav>
        <article className='p-3'>
          <h1>Products</h1>
          {
            products && renderProducts()
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
