import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import { Hero } from './hero/Hero';
import { Provider } from './provider/Provider';
import TestCarousel from './TestCarousel';

export default function Layout() {
  return (
    <>
    <Header/>
    <TestCarousel/>
    <Hero/>
    <Provider />
    <Outlet/>
    </>
  )
}
