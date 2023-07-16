import React from 'react';
import Header from '../elements/Header';
import Footer from '../elements/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  )
};

export default MainLayout;