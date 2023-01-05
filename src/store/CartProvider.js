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
    const removeId = action.id;
    let updatedItems = [...state.items];
    const indexOfExistingItem = state.items.findIndex(item => item.id === removeId); 
    
    let updateTotalAmount = state.totalAmount;
    if (indexOfExistingItem > -1) {
      let actualItem =  updatedItems[indexOfExistingItem];
      actualItem.amount = actualItem.amount - 1;
      updatedItems[indexOfExistingItem] = actualItem; 
      updateTotalAmount = updateTotalAmount - actualItem.price;
      if (updatedItems[indexOfExistingItem].amount === 0) {
        updatedItems.splice(indexOfExistingItem, 1);
      }
    }

    return { items: updatedItems, totalAmount: updateTotalAmount };
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
