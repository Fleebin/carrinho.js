import React, { useEffect } from "react";
import { useCart } from '../../context/cart'
import { api } from '../../services/api'
import { CartItem } from "../CartItem";

export const ListAcima = () => {
    const { items, setItems } = useCart();
    const totalPrice = items.reduce((acc, current) => acc + current.price, 0);
    useEffect(() => {
        api
            .get("/acima")
            .then((response) => setItems(response.data[0].items))
    }, []);

    return (
        <>
            <div className="listAcima">
                {items.map((item) => {
                    return (
                        <CartItem key={item.id} name={item.name} price={item.price} sellingPrice={item.sellingPrice} imageUrl={item.imageUrl} />
                    )
                })}
                <div className="total">
                    <p>Total</p>
                    <p>R$ {(totalPrice / 100).toFixed(2)}</p>
                </div>
                {totalPrice > 1000 && (
                    <p className="frete">Parabéns, sua compra tem frete grátis!</p>
                )}
            </div>
        </>
    );
}
