import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const [btIsHighlighted, btIsHighlightedSet] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const itemsInCart = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btIsHighlighted ? classes.bump : ''}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    btIsHighlightedSet(true);
    const timer = setTimeout(() => {
      btIsHighlightedSet(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
