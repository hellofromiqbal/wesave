import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import MainLayout from './components/layouts/MainLayout';
import ErrorPage from './pages/404';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import ContactPage from './pages/contact';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
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
