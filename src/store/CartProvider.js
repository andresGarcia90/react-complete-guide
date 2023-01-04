import React from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItemToCartHandle = (item) => {};
  const removeItemToCartHandle = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandle,
    removeItem: removeItemToCartHandle,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
