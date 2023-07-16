import React from 'react';
import Header from '../elements/Header';
import Footer from '../elements/Footer';
import { Outlet } from 'react-router-dom';
import BannerSec from '../../sections/BannerSec';
import useScrollToTop from '../../customHooks/useScrollToTop';

const MainLayout = () => {
  useScrollToTop();
  return (
    <>
      <Header/>
        <Outlet/>
        <BannerSec/>
      <Footer/>
    </>
  )
};

export default MainLayout;