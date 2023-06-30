import { useNavigate } from "react-router-dom"

const Checkout = () => {
  const navigate = useNavigate()
  const confirmOrder = () => {
    navigate('/orderconfirmation')
  }
  return (
    <div className="">
      <h1 className="font-bold">Shopping Checkout</h1>
      <br />
      <table>
        <thead className="font-bold">
          Your Details
        </thead>
        <tbody>
          <tr className="border-t-2 border-black">
            <td className="text-right pt-2">Name</td>
            <td className="pt-2 w-96"><input name="firstname" type="text" className="border border-black text-black text-sm rounded-sm block w-full"></input></td>
            <td className="text-right pt-2">Email</td>
            <td className="pt-2 w-96"><input name="email" type="email" className="border border-black text-black text-sm rounded-sm block w-full"></input></td>
          </tr>

          <br />
          <tr className="border-t-2 border-black font-bold">Address Details</tr>
          <tr>
            <td>Copy to shipping</td>
            <td><input type="checkbox"></input></td>
          </tr>

          <tr>
            <td className="text-right">Billing Address</td>
            <td><input name="bill1" type="text" className="border border-black text-black text-sm rounded-sm block w-full"></input></td>
            <td className="text-right">Shipping Address</td>
            <td><input name="ship1" type="text" className="border border-black text-black text-sm rounded-sm block w-full"></input></td>
          </tr>

          <tr>
            <td></td>
            <td><input name="bill1" type="text" className="border border-black text-black text-sm rounded-sm block w-full"></input></td>
            <td></td>
            <td><input name="ship1" type="text" className="border border-black text-black text-sm rounded-sm block w-full"></input></td>
          </tr>

          <tr>
            <td></td>
            <td><input name="bill1" type="text" className="border border-black text-black text-sm rounded-sm block w-full"></input></td>
            <td></td>
            <td><input name="ship1" type="text" className="border border-black text-black text-sm rounded-sm block w-full"></input></td>
          </tr>

          <tr>
            <td>
              <button
                onClick={() => navigate("/basket")}
                className="bg-gray-500 text-center rounded-lg py-1 px-4 text-white">Cancel</button>
            </td>
            <td></td>
            <td></td>
            <td>
              <button
                onClick={confirmOrder}
                className="bg-gray-500 text-center rounded-lg py-1 px-4 text-white">Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Checkout