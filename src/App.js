import { Home } from '../src/pages/Home'
import { CartProvider } from './context/cart'
import './styles.scss'

export const App = () => {
  return (
    <>
      <CartProvider>
        <Home />
      </CartProvider>
    </>
  );
}

