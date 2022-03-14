import React, { useEffect } from "react";
import { useCart } from '../../context/cart'
import { api } from '../../services/api'

export const ListAbaixo = () => {
    const { items, setItems } = useCart();

    useEffect(() => {
        api
            .get("/abaixo")
            .then((response) => setItems(response.data[0].items))
    }, []);

    return (
        <>
            <div className="listAbaixo">
                {items.map((item) => {
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <h1>{item.imageUrl}</h1>
                    </div>
                })}
            </div>
        </>
    );
}
