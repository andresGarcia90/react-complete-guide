import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const cartShowHandle = () => {setCartIsShow(true)};
  const cartHideHandle = () => setCartIsShow(false);
  return (
    <>
      {cartIsShow && <Cart onClose={cartHideHandle}/>}
      <Header onShowCart={cartShowHandle}></Header>
      <div>/
        <Meals></Meals>
      </div>
    </>
  );
}

export default App;
