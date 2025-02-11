import React from 'react';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Home from './Components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <NavBar />
          <Home />
        </>
      ),
    },{
      path: '/about',
      element: (
        <>
          <NavBar />
          <About />
        </>
      ),
    }
    
  ]);

  return <RouterProvider router={router} />;
};

export default App;
