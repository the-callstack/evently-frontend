import React from 'react';
import Footer from './components/Footer';
import Layout from './components/Layout';
import CookiesModal from './components/CookiesModal';
import LoginWithSplash from './features/auth/LoginWithSplash';
import { Product } from './components/productDisplay/Product';
import DetailsCard from './components/DetailsCard';




function App() {
  return (
    <>
      <Product />
      <Layout/>
      <LoginWithSplash/>
      <DetailsCard className ="pt-96" />
      <CookiesModal/>
      <Footer/>
    </>
  );
}

export default App;
