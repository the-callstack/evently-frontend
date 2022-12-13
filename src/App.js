import React from 'react';
import Footer from './components/footer/Footer';
import Layout from './components/Layout';
// import CookiesModal from './components/CookiesModal';
import LoginWithSplash from './features/auth/LoginWithSplash';
import { Product } from './components/productDisplay/Product';
import DetailsCard from './components/DetailsCard';
import { Route, Routes } from 'react-router-dom';
import { Signup } from './features/auth/Signup';




function App() {
  return (
    <>
      <Layout/>
      <Routes>
      <Route path='/auth' element={<LoginWithSplash/>} />
      <Route path='/auth/signup' element={<Signup />} />
      <Route path='/products' element={<Product />} />
      <Route path='/productdetails' element={ <DetailsCard className ="pt-96" />} />
      </Routes>
      {/* <CookiesModal/> */}
      <Footer/>
    </>
  );
}

export default App;
