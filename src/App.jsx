import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/product',
    element: <Product />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/app',
    element: <AppLayout />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
