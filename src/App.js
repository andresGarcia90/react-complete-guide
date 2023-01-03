import React from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {

  return (
    <>
      <Header></Header>
      <div>
        <Meals></Meals>
      </div>
    </>
  );
}

export default App;
