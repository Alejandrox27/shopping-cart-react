import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducer/cart";

export const CartContext = createContext()

export function CartProvider ({children}){
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeOneFromCart = product => dispatch({
        type: 'REMOVE_ONE_FROM_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART',
    })

    return (
        <CartContext.Provider value={{
            cart: state, 
            removeOneFromCart,
            removeFromCart, 
            addToCart, 
            clearCart}}>
            {children}
        </CartContext.Provider>
    )
}