import React from "react";
import './styles.scss'

export const CartItem = ({ name, imageUrl, price, sellingPrice }) => {
    return (
        <>
            <div className="cartItem">
                <img src={imageUrl} alt={name} height="110px" width="110px" />
                <div className="product">
                    <h3>{name}</h3>
                    <p>R$ {(price / 100).toFixed(2)}</p>
                    <span>R$ {(sellingPrice / 100).toFixed(2)}</span>
                </div>
            </div>
        </>
    );
}
