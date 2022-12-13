import React from 'react';
import Footer from './components/Footer';
import Layout from './components/Layout';
import CookiesModal from './components/CookiesModal';
import LoginWithSplash from './features/auth/LoginWithSplash';
import DetailsCard from './components/DetailsCard';



function App() {
  return (
    <>
      <Layout/>
      <LoginWithSplash/>
      <DetailsCard className ="pt-96" />
      {/* <div className='App'>
       <h1 className='font-mono text-5xl'>Hello World!</h1>
    </div> */}
      <CookiesModal/>
      <Footer/>
    </>
  );
}

export default App;
