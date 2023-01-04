import React from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {

  return (
    <>
      <Cart></Cart>
      <Header></Header>
      <div>
        <Meals></Meals>
      </div>
    </>
  );
}

export default App;
