import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewQuote from './pages/NewQuote';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AllQuotes />,
    },
    {
      path: '/new-quote',
      element: <NewQuote />,
    },
    {
      path: '/quotes/:quoteId',
      element: <QuoteDetail />,
    },
    {
      path: '*',
      element: <AllQuotes />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
