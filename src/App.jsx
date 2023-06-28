import { useState, useEffect } from 'react'
import './App.css'
import { getCategories, getProducts } from '../fetcher';
import CategoryProduct from './components/categoryProduct';
import { Link } from 'react-router-dom';

function App() {
  const [categories, setCategories] = useState({errorMessage: '', data:  []});
  const [products, setProducts] = useState({errorMessage: '', data:  []});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategories()
    setCategories(data)
    }
    fetchData()
  }, [])
 
  const handleCategoryClick = id => {
    const fetchData = async () => {
      const data = await getProducts(id)
    setProducts(data)
      }
      fetchData()
  }

  const renderCategories = () => {

    return categories.data.map(c =>
      <li key={c.id}><Link to={`/categories/${c.id}`}>{c.title}</Link></li>
    )
  }

  return (
    <>
      <header className='p-8 text-center text-4xl text-white grid bg-gray-500'>My Store</header>
      <section className='flex'>
        <nav className='p-5 flex-0.1 bg-slate-200 pr-40'>
          { categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
          
          <ul>
          {
            categories.data && renderCategories()
          }
          </ul>
        </nav>
        <article className='p-3'>
          <h1>Products</h1>

        </article>
      </section>

      <footer className='p-2 text-center text-white bg-gray-500'>
        footer
      </footer>
    </>
  )

}

export default App
