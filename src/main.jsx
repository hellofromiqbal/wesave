import React from 'react';

import './index.css';
import MainLayout from './components/layouts/MainLayout';
import ErrorPage from './pages/error';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import ContactPage from './pages/contact';

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ServiceFieldPage from './pages/services/serviceFieldPage';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
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
        path: "/services/:serviceField",
        element: <ServiceFieldPage/>,
      },
      {
        path: "/contact",
        element: <ContactPage paddingtop="pt-14"/>
      },
      {
        path:"/*",
        element: <ErrorPage/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);
