import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import classes from './App.module.css';
import React from 'react';

function App() {
  return (
    <>
      <header className={classes.header}>
        <Navbar></Navbar>
      </header>
      <main>
        <hr />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="welcome" element={<Welcome></Welcome>}>
            <Route path="new-user" element={<><p>Hello new User</p></>}></Route>
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Outlet />
      </main>
    </>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
