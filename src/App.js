import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import Portal from './components/Portal';
import Navigation from './components/Navigation'; // Import your Navigation component
import Portfolio from './components/Portfolio';
import Apply from './components/Apply';
import About from './components/About';


function App() {
  // Define your routes configuration
  const routesArray = [
    {
      path: "*",
      element: <Portal />,
    },
    {
      path: "/Home",
      element: <Portal />,
    },
    {
      path: "/Portfolio",
      element: <Portfolio />,
    },
    {
      path: "/Apply",
      element: <Apply />,
    },
    {
      path: "/About",
      element: <About />,
    }
  ];

  // Use the useRoutes hook to set up routing
  let routesElement = useRoutes(routesArray);

  return (
    <div>
      {/* Navigation bar stays on top */}
      <Navigation />
      
      {/* Render the route components */}
      <div>{routesElement}</div>
    </div>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
