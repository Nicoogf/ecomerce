import React from 'react';
import './index.css';
import ReactDOM  from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayoutMain from './component/Layouts/LayoutMain';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import { CartProvider } from './context/CartProvider';

{/*
  const router =  createBrowserRouter ([
    {
      path: "/" ,
      element: <LayoutMain />,
      children: [
        { index : true , element : <Home /> } ,
        { path : "/cart" , element : <Cart /> }
      ]
    }
  ])
*/}


const router = createBrowserRouter([
  {
    path : "/" ,
    element : <LayoutMain />,
    children : [
      {index: true , element : <Home />},
      {path : "/cart" , element : <Cart />}
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    {/* <App /> */}
    { /*  <RouterProvider router= {router}/> */ } 
    <CartProvider>
       <RouterProvider router={ router } />
    </CartProvider>
    
  
    
    
  </React.StrictMode>,
)
