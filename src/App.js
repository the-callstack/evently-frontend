import React from "react";
import Footer from "./components/footer/Footer";
import Layout from "./components/Layout";
// import CookiesModal from './components/CookiesModal';
import LoginWithSplash from "./features/auth/LoginWithSplash";
import { Product } from "./components/productDisplay/Product";
import DetailsCard from "./components/DetailsCard";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./features/auth/Signup";
import Aggregator from './components/aggregator/Aggregator';
import { Cart } from "./components/cart/Cart";
import { Profile } from "./components/profile/Profile";


function App() {
  return (
    <>
    {/* <Profile />
    <LoginWithSplash /> */}
      <Layout />
      <Routes>
        <Route path="/auth">
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<LoginWithSplash />} />
        </Route>
        <Route path="/products" element={<Product />}>
          <Route path=":id" element={<DetailsCard className="pt-96" />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      {/* <CookiesModal/> */}
      <Aggregator />
      <Footer />
    
    </>
  );
}

export default App;
