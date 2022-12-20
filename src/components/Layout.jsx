import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectUserState } from '../features/auth/authSlice';
import CategoriesCarousel from './CategoriesCarousel';
import Header from './header/Header';
import { Hero } from './hero/Hero';
import { PackageAg } from './packageAg/PackageAg';
import { SelectProduct } from './productDisplay/SelectProduct';
import { Provider } from './provider/Provider';
import TestCarousel from './TestCarousel';

export default function Layout() {
  const { isLoggedIn } = useSelector(selectUserState);

  return (
    <>
    {/* <Header/> */}
    {/* <TestCarousel/> */}
    <Hero/>
    <PackageAg />
    <SelectProduct />
    <CategoriesCarousel  />

    {/* <Provider /> */}
    <Outlet/>
    </>
  )
}
