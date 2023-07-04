import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Checkout = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    shippingAddress1: '',
  })
  const navigate = useNavigate()

  const errors = {
    name: form.name.length === 0,
    email: form.email.length === 0,
    shippingAddress1: form.shippingAddress1.length === 0
  }
  const disabled = Object.keys(errors).some((x) => errors[x])

  const handleChange = (ev) => {
    const { name, value } = ev.target

    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const handleSubmit = ev => {
    if (disabled) {
      ev.preventDefault()
      return
    }
    navigate('/orderconfirmation')
  }


  return (
    <div className="">
      <h1 className="font-bold">Shopping Checkout</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <table>
          <thead className="font-bold">
            Your Details
          </thead>
          <tbody>
            <tr className="border-t-2 border-black">
              <td className="text-right pt-2">Name <span className="text-red-600">*</span></td>
              <td className="pt-2 w-96">
                <input
                  onChange={handleChange}
                  placeholder="Enter name"
                  name="name"
                  type="text"
                  className="error border border-black text-black text-sm rounded-sm block w-full">
                </input>
              </td>
              <td className="text-right pt-2">Email</td>
              <td className="pt-2 w-96"><input onChange={handleChange} placeholder="Enter email" name="email" type="email" className="border border-black text-black text-sm rounded-sm block w-full"></input></td>
            </tr>

            <br />
            <tr className="border-t-2 border-black font-bold">Address Details</tr>
            <tr>
              <td>Copy to shipping</td>
              <td><input type="checkbox"></input></td>
            </tr>

            <tr>
              <td className="text-right">Billing Address</td>
              <td><input name="billingAddress1" type="text" className="border border-black text-black text-sm rounded-sm block w-full"></input></td>
              <td className="text-right">Shipping Address</td>
              <td><input
                onChange={handleChange}
                name="shippingAddress1"
                type="text"
                className="border border-black text-black text-sm rounded-sm block w-full"></input></td>
            </tr>

            <tr>
              <td></td>
              <td><input name="billingAddress2" type="text" className="border border-black text-black text-sm rounded-sm block w-full"></input></td>
              <td></td>
              <td><input name="shippingAddress2" type="text" className="border border-black text-black text-sm rounded-sm block w-full"></input></td>
            </tr>

            <tr>
              <td></td>
              <td><input name="billingAddress3" type="text" className="border border-black text-black text-sm rounded-sm block w-full"></input></td>
              <td></td>
              <td><input name="shippingAddress3" type="text" className="border border-black text-black text-sm rounded-sm block w-full"></input></td>
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
                <button type="submit" className="bg-gray-500 text-center rounded-lg py-1 px-4 text-white" disabled={disabled} >Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Checkout