import React from 'react';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
  console.log("entro aca");
  return (
    <>
      <MainNavigation>
        <main className={classes.main}>{props.children}</main>
      </MainNavigation>
    </>
  );
}

export default Layout;
