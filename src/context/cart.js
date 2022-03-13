import React, { createContext, useState, useContext, useEffect } from "react";
import { api } from "../services/api";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        api
            .get("/acima")
            .then((response) => {
                setItems(response.data)
            })
    }, []);

    const addItem = (title, image, price) => {
        const itemObject = { title, image, price };
        setItems([...items, itemObject]);
    }
    const removeItem = (itemIndex) => {
        const filteredItems = items.filter(
            (item) => items.indexOf(item) !== itemIndex
        );
        setItems(filteredItems);
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem }}>
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