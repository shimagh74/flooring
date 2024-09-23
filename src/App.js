// src/App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Repair from "./pages/Repair";
import Install from "./pages/Install";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetails from "./components/ProductDetails";
import PriceBeatGuarantee from "./components/PriceBeatGuarantee";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
    <ScrollToTop />
  </>
);

// Define routes
const router = createBrowserRouter([
  { path: "/", element: <Layout><Home /></Layout> },
  { path: "Products", element: <Layout><Products /></Layout> },
  { path: "Products/:id", element: <Layout><ProductDetails /></Layout> },
  { path: "Repair", element: <Layout><Repair /></Layout> },
  { path: "Install", element: <Layout><Install /></Layout> },
  { path: "About", element: <Layout><About /></Layout> },
  { path: "Contact", element: <Layout><Contact /></Layout> },
  { path: "PriceBeatGuarantee", element: <Layout><PriceBeatGuarantee /></Layout> },
  { path: "PrivacyPolicy", element: <Layout><PrivacyPolicy /></Layout> },
  { path: "TermsConditions", element: <Layout><TermsConditions /></Layout> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
