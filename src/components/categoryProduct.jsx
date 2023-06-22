/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const CategoryProduct = ({title, image, specs, features, price, stock }) => {
    return (
      <article>
        <div className="mt-10 mb-2 font-bold text-2xl">
          {title}
        </div>
        <div className="grid grid-cols-3 space-x-11">
        <figure>
          <div className="">
            <img src={`./public/assets/${image}`} alt={title} />
          </div>
        </figure>
  
        <aside>
          <div className="">
            <h3>Dimensions</h3>
            <label>{specs.dimentsion}</label>
          </div>
  
          {
            specs.capcity && 
          
          <div className="">
            <h3>Dimensions</h3>
            <label>{specs.capacity}</label>
          </div>
          }
  
          <div className="">
            <h3>Features</h3>
            <ul className="list-disc">
              {features?.map((f) => {
                return <li>{f}</li>
              })}
            </ul>
          </div>
        </aside>
  
        <aside className="">
          <div className="font-bold text-2xl">
            &pound;{price}
          </div>
  
          <div className="px-2 py-4 bg-gray-300 rounded-lg font-bold">
            <label>Stock level: {stock}</label><br />
            <label>FREE Delivery</label>
          </div>
  
          <div className="mt-5 space-y-3">
            <button className="px-2 py-1 bg-gray-300 rounded-xl border-1 border-gray-500">View Product</button><br />
            <button className="px-2 py-1 bg-gray-300 rounded-xl border-1 border-gray-500">Add to Basket</button>
          </div>
        </aside>
        </div>
      </article>
    )
  }
  
  export default CategoryProduct