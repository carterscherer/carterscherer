import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import Home from './components/Home/Home';
import Navigation from './components/Navigation'; // Import your Navigation component
import Portfolio from './components/Portfolio/Portfolio';
import Inquire from './components/Inquire/Inquire';
import About from './components/About/About';

import Footer from './components/Footer';

function App() {
  // Define your routes configuration
  const routesArray = [
    {
      path: "*",
      element: <Home />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/Portfolio",
      element: <Portfolio />,
    },
    {
      path: "/Inquire",
      element: <Inquire />,
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
      <Footer />
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
