import React from "react";
import { useCart } from '../../context/cart'
import { Button } from '../Button'
import { List } from "../List";
import './styles.scss'

export const Cart = () => {

    return (
        <>
            <div className="cart">
                <div className="header">
                    <h1>Meu carrinho</h1>
                </div>
                <List />
                <div className="total">
                    <p>Total</p>
                    <p>R$</p>
                </div>
                <p className="frete">Parabéns, sua compra tem frete grátis!</p>
                <Button className={"btn-primary"}>Finalizar compra</Button>
            </div>
        </>
    );
}
