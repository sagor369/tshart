import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './component/Layout/Main';
import Home from './component/Home/Home';
import Orders from './component/Orders/Orders';
import About from './component/About/About';
import Granpa from './component/Granpa/Granpa';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tshort.json')
      },
      {
        path: 'orders',
        element: <Orders></Orders>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'granpa',
        element: <Granpa></Granpa>
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
