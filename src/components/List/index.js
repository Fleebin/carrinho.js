import React, { useEffect } from "react";
import { useCart } from '../../context/cart'
import { api } from '../../services/api'

export const List = () => {
    const { items, setItems } = useCart();

    useEffect(() => {
        api
            .get("/acima")
            .then((response) => setItems(response.data[0].items))
    }, []);

    return (
        <>
            <div className="list">
                {items.map((item) => {
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <h1>{item.price}</h1>
                        <h1>{item.imageUrl}</h1>
                    </div>
                })}
            </div>
        </>
    );
}
