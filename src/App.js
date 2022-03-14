import { CartProvider, useCart } from './context/cart'
import { Routes } from './router';
import { Button } from './components/Button'
import './styles.scss'

export const App = () => {

  return (
    <>
      <CartProvider>
        <div className="cart">
          <div className="header">
            <h1>Meu carrinho</h1>
          </div>
          <Routes />
          <Button className={"btn-primary"}>Finalizar compra</Button>
        </div>
      </CartProvider>
    </>
  );
}

