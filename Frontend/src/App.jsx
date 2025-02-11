import React from 'react';
import NavBar from './Components/NavBar';
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
    },{
      path: '/services',
      element: (
        <>
          <NavBar />
          <Services/>
        </>
      ),
    },{
      path: '/contact',
      element: (
        <>
          <NavBar />
          <Contact />
        </>
      ),
    }
    
  ]);

  return <RouterProvider router={router} />;
};

export default App;
