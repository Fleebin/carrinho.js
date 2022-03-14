import { CartProvider } from './context/cart'
import { Routes } from './router';
import './styles.scss'

export const App = () => {
  return (
    <>
      <CartProvider>
        <Routes />
      </CartProvider>
    </>
  );
}

