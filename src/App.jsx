import React, { useState } from 'react'
import './App.css'

function App() {
const [results, setResults] = useState([]);

React.useEffect(() => {
  fetch("http://localhost:3001/categories")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setResults(data)
  })
}, [])

return(
  <>
  <header className='p-8 text-center text-4xl text-white grid bg-gray-500'>My Store</header>
  <section className='flex'>
    <nav className='p-5 flex-0.5 bg-slate-200'>
    {
      results.map(d=>(
        <div key={d.id}>{d.title}</div>
      ))
    } 
    </nav>
    <article className='bg'>
      main area
    </article>
  </section>

<footer className='p-2 text-center text-white bg-gray-500'>
  footer
</footer>
  </>
)

}

export default App
