import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/404';
import MainLayout from './components/layouts/MainLayout';
import ServicesPage from './pages/services';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <AboutPage paddingtop="pt-14"/>
      },
      {
        path: "/services",
        element: <ServicesPage paddingtop="pt-14"/>,
      },
      {
        path: "/contact",
        element: <ContactPage paddingtop="pt-14"/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);
