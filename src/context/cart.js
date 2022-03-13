import React, { createContext, useState, useContext } from "react";
import { addItemToCart, removeItemFromCart, clearCart } from '../utils/handleCart'

const CartContext = createContext({});

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(0)

    return (
        <CartContext.Provider value={{
            cart,
            addItemToCart,
            removeItemFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useContext must be used within a CartProvider");
    const { cart, setCart } = context;
    return { cart, setCart }
}