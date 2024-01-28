import './Cart.css'

import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./icons";
import { useCart } from '../hooks/useCart';

function CartItem ({thumbnail, price, title, quantity, addToCart, removeOneFromCart}){
    return (
        <li>
            <img src={thumbnail} alt={title} />
            
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
                <button onClick={removeOneFromCart}>-</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckboxId = useId();
    const {cart, clearCart, addToCart, removeOneFromCart} = useCart()

    return (
        <>
        <label className="cart-button" htmlFor={cartCheckboxId}>
            <CartIcon />
        </label>
        <input id={cartCheckboxId} type="checkbox" hidden  />

        <aside className="cart">
            <ul>
                {cart.map(product => (
                    <CartItem 
                    key={product.id} {...product} 
                    addToCart={() => addToCart(product)}
                    removeOneFromCart={() => removeOneFromCart(product)} />
                ))}
            </ul>

            <button onClick={clearCart}>
                <ClearCartIcon />
            </button>
        </aside>
        </>
    )
}