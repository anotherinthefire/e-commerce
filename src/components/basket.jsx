import { Fragment, useContext, useState, useEffect } from "react";
import { CartContext } from "../context/cartContext";
import { Link, useNavigate } from "react-router-dom";

const Basket = () => {
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();
  const {
    getItems,
    clearBasket,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
  } = useContext(CartContext);

  useEffect(() => {
    setCartItems(getItems());
  }, [getItems]);

  const renderTotal = () => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return total;
  };

  const renderCart = () => {
    const cartItems = getItems();

    if (cartItems.length > 0) {
      return cartItems.map((p) => {
        return (
          <Fragment key={p.id}>
            <tr className="border-t-2 border-black border-b-2">
              <td>
                <Link to={`/products/${p.id}`}>{p.title}</Link>
              </td>


                <td className="flex items-center gap-1">
                  <button
                    onClick={() => setCartItems(decreaseQuantity({ id: p.id }))}
                    type="button"
                    className="w-10 h-10 leading-10 text-black transition hover:opacity-75"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                    </svg>
                  </button>

                  <input
                    type="number"
                    id="Quantity"
                    value={p.quantity}
                    className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />

                  <button
                    onClick={() => setCartItems(increaseQuantity({ id: p.id }))}
                    type="button"
                    className="w-10 h-10 leading-10 text-black transition hover:opacity-75"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button onClick={() => setCartItems(removeProduct({ id: p.id }))}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                    </svg>
                  </button>
                </td>
              <td><b>₱{p.price}</b></td>
            </tr>
          </Fragment>
        );
      });
    } else {
      return <div>The Basket is empty</div>;
    }
  };

  return (
    <section>
      <h1 className="font-bold">Shopping Basket</h1>
      <div className="flex justify-end">
        <button onClick={() => navigate('/checkout')} className="py-1 px-3 rounded-lg bg-gray-400">checkout</button>
      </div>

      <table className="mx-auto">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {renderCart()}
        </tbody>
        {cartItems.length > 0 && (
          <tfoot>
            <tr>
              <td>
                <button
                  onClick={() => setCartItems(clearBasket())}
                  className="py-1 px-3 rounded-lg bg-gray-400"
                >
                  Clear
                </button>
              </td>
              <td></td>
              <td className="font-bold">Total: ₱{renderTotal()}</td>
            </tr>
          </tfoot>
        )}
      </table>
    </section>
  );

};

export default Basket;
