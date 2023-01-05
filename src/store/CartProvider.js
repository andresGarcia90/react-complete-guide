import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    let updatedItems = [...state.items];
    const indexOfExistingItem = state.items.findIndex(item => item.id === action.item.id);
    if (indexOfExistingItem > -1) {
      updatedItems[indexOfExistingItem].amount += action.item.amount;
    } else{
      updatedItems = updatedItems.concat(action.item);
    }

    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: updateTotalAmount };
  }

  if (action.type === 'REMOVE') {
    console.log("dispatch remove");
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const addItemToCartHandle = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemToCartHandle = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
