import React, { useEffect } from "react";
import { useCart } from '../../context/cart'
import { api } from '../../services/api'

export const ListAcima = () => {
    const { items, setItems } = useCart();

    useEffect(() => {
        api
            .get("/acima")
            .then((response) => setItems(response.data[0].items))
    }, []);

    return (
        <>
            <div className="listAcima">
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
