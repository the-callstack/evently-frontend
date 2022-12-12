import React from 'react';
import Footer from './components/Footer';
import Layout from './components/Layout';
import CookiesModal from './components/CookiesModal';
import LoginWithSplash from './features/auth/LoginWithSplash';
import { Product } from './components/productDisplay/Product';
import { Slider } from './components/Slider';


function App() {
  return (
    <>
    <Slider />
    {/* <Product /> */}
    {/* <Layout/>
    <LoginWithSplash/>
    <CookiesModal/>
     <Footer/> */}
    </>
  );
}

export default App;
