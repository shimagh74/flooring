import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Repair from './pages/Repair';
import Install from './pages/Install';
import Supply from './pages/Supply';
import About from './pages/About';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "Repair",
    element: (
      <>
        <Header />
        <Repair />
        <Footer />
      </>
    ),
  },
  {
    path: "Supply",
    element: (
      <>
        <Header />
        <Supply />
        <Footer />
      </>
    ),
  },
  {
    path: "Install",
    element: (
      <>
        <Header />
        <Install />
        <Footer />
      </>
    ),
  },
  {
    path: "About",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "Contact",
    element: (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
