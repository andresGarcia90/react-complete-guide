import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products';
import Welcome from './components/Welcome';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/welcome",
      element: <Welcome/>,
    },
    {
      path: "/products",
      element: <Products/>,
    },
  ]);



  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
