/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

import { CartReducer } from "./cartReducer";

export const CartContext = createContext()

const initialState = { cartItems: [] }

const CartContextpProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addProduct = payload => {
        dispatch({ type: 'ADD', payload })
    }

    const removeProduct = payload => {
        dispatch({ type: 'REMOVE', payload })
    }

    const increaseQuantity = payload => {
        dispatch({ type: 'INCQTY', payload })
    }

    const decreasQuantity = payload => {
        dispatch({ type: 'DECQTY', payload })
    }
    const clearBasket = () => {
        dispatch({ type: 'CLEAR', payload: undefined });
    }

    const getItems = () => {
        return state.cartItems
    }

    const contextValues = {
        addProduct,
        removeProduct,
        increaseQuantity,
        decreasQuantity,
        clearBasket,
        getItems,
        ...state
    }

    return (
        <CartContext.Provider value={contextValues} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextpProvider