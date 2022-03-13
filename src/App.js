import { Home } from '../src/pages/Home'
import { CartProvider } from './context/cart'

export const App = () => {
  return (
    <>
      <CartProvider>
        <Home />
      </CartProvider>
    </>
  );
}

