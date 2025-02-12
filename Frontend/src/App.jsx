import React from 'react';
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/Contact';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Home />
        </>
      ),
    },{
      path: '/about',
      element: (
        <>
          <About />
        </>
      ),
    },{
      path: '/services',
      element: (
        <>
          <Services/>
        </>
      ),
    },{
      path: '/contact',
      element: (
        <>
          <Contact />
        </>
      ),
    }
    
  ]);

  return <RouterProvider router={router} />;
};

export default App;
