import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const cartShowHandle = () => {setCartIsShow(true)};
  const cartHideHandle = () => setCartIsShow(false);
  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={cartHideHandle}/>}
      <Header onShowCart={cartShowHandle}></Header>
      <div>/
        <Meals></Meals>
      </div>
    </CartProvider>
  );
}

export default App;
