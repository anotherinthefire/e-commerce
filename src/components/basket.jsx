const Basket = () => {
  return (
    <section>
      <h1 className="font-bold">Shopping Basket</h1>
      <div className="flex justify-end">
        <button className="py-1 px-3 rounded-lg bg-gray-400">checkout</button>
      </div>
      
      <table className="mx-auto">
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        <tr className="border-t-2 border-black border-b-2">
          <td>itemname</td>
          <td><div className="flex items-center gap-1">
            <button
              type="button"
              className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
            >
              -
            </button>
            <input
              type="number"
              id="Quantity"
              value="1"
              className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
            />

            <button
              type="button"
              className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
            >
              +
            </button>
            <button>
              delete
            </button>
          </div>
          </td>
          <td>pricing</td>
        </tr>
        <td>
          <button className="py-1 px-3 rounded-lg bg-gray-400">Clear</button>
        </td>
        <td>
        </td>
        <td className="font-bold">
          Total: some price
        </td>
      </table>
    </section>
  )
}

export default Basket