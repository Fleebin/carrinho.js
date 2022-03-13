import React from "react";
import { useCart } from '../../context/cart'

export const List = () => {
    const { items } = useCart();

    return (
        <>
            <div className="list">
                {items.map((item) => {
                    <div>
                        <h1>{item.items}</h1>
                    </div>
                })}
            </div>
        </>
    );
}
