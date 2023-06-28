/* eslint-disable react/prop-types */
import { Outlet, Link } from "react-router-dom"

const Layout = ({categories}) => {
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
          <Outlet />
        </article>
      </section>

      <footer className='p-2 text-center text-white bg-gray-500'>
        <Link to="/">Home</Link> | <Link to="/basket">Basket</Link>
      </footer>
    </>
  )
}

export default Layout