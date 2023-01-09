import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import NewQuote from './pages/NewQuote';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import Comments from './components/comments/Comments';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/quotes" replace />,
    },
    {
      path: '/quotes',
      element: <AllQuotes />,
    },
    {
      path: '/new-quote',
      element: <NewQuote />,
    },
    {
      path: '/quotes/:quoteId',
      element: <QuoteDetail />,
      children: [
        {
          path: 'comments',
          element: <Comments />
        }
      ]
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
