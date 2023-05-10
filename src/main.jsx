import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import './index.css';
import Home from './Componends/Home/Home';
import AddCoffe from './Componends/AddCoffe/AddCoffe';
import UpdatedCoffee from './Componends/UpdadedCoffe/UpdatedCoffee';
import CoffeeDetails from './Componends/coffee_details/CoffeeDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffees')
      },
      {
        path: '/addCoffe',
        element: <AddCoffe></AddCoffe>
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdatedCoffee></UpdatedCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
      },
      {
        path: '/CoffeeDetails/:id',
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
