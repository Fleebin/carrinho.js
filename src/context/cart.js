import React, { createContext, useState, useContext } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([]);

    return (
        <CartContext.Provider value={{ items, setItems }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useContext must be used within a CartProvider");
    const { items, setItems } = context;
    return { items, setItems }
}