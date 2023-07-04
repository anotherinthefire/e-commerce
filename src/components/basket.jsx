import { Fragment, useContext, useState, useEffect } from "react"
import { CartContext } from "../context/cartContext"
import { Link, useNavigate } from "react-router-dom"

const Basket = () => {
  const [cartItems, setCartItems] = useState([])

  const navigate = useNavigate()
  const {
    getItems,
    clearBasket,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
  } = useContext(CartContext)

  useEffect(() => {
    setCartItems(getItems())
  }, [getItems])

  const renderTotal = () => {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    const shippingFee = 250
    const total = subtotal + shippingFee
    return {
      subtotal,
      shippingFee,
      total
    }
  }

  const renderCart = () => {
    const cartItems = getItems()

    if (cartItems.length > 0) {
      return cartItems.map((p) => {
        return (
          <Fragment key={p.id}>
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              {/* <img src={`/assets/${p.image}`} className="w-full rounded-lg sm:w-40" /> */}
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <Link to={`/products/${p.id}`}><h2 className="text-lg font-bold text-gray-900">{p.title}</h2></Link>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span onClick={() => setCartItems(decreaseQuantity({ id: p.id }))} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-gray-500 hover:text-gray-50"> - </span>
                    <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={p.quantity} />
                    <span onClick={() => setCartItems(increaseQuantity({ id: p.id }))} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-gray-500 hover:text-gray-50"> + </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">{p.price}</p>
                    <svg onClick={() => setCartItems(removeProduct({ id: p.id }))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )
      })
    } else {
      return <div>The Basket is empty</div>
    }
  }

  return (
    <section>
      <div className="h-fit w-fit  pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {renderCart()}
            {cartItems.length > 0 && (
              <button
                onClick={() => setCartItems(clearBasket())}
                className="px-4 py-2 text-indigo-600 bg-indigo-50 rounded-lg duration-150 hover:bg-indigo-100 active:bg-indigo-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sub total */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">₱{renderTotal().subtotal}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">₱{renderTotal().shippingFee}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div>
                <p className="mb-1 text-lg font-bold text-right">₱{renderTotal().total}</p>
                <p className="text-sm text-gray-700">subtotal + shipping</p>
              </div>
            </div>
            <button onClick={() => navigate('/checkout')} className="mt-6 w-full rounded-md bg-gray-800 py-1.5 font-medium text-blue-50 hover:bg-gray-900">Check out</button>

          </div>
        </div>
      </div>
    </section>
  )

}

export default Basket
