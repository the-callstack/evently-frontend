import React from "react";
import Footer from "./components/footer/Footer";
import Layout from "./components/Layout";
// import CookiesModal from './components/CookiesModal';
import LoginWithSplash from "./features/auth/LoginWithSplash";
import { Product } from "./components/productDisplay/Product";
import DetailsCard from "./components/DetailsCard";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./features/auth/Signup";
import ContactUs from "./components/ContactUs";
import Aggregator from './components/aggregator/Aggregator';
import { Cart } from "./components/cart/Cart";
import { Profile } from "./components/profile/Profile";
import StoresTable from "./components/provider/StoresTable";
import ItemsTable from "./components/provider/ItemsTable";
import TestCarousel from "./components/TestCarousel";




function App() {
  return (
    <>
      {/* <Profile />
    <LoginWithSplash /> */}
      {/* <StoresTable /> */}
      {/* <ItemsTable /> */}
      {/* <TestCarousel/> */}
      <Layout />
      
      <Routes>
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/auth">
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<LoginWithSplash />} />
        </Route>
        <Route path="/products/:id" element={<DetailsCard />} />
        <Route path="/products" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/storeitems/:name" element={<ItemsTable />} />
      </Routes>
      {/* <CookiesModal/> */}
      {/* <ContactUs /> */}
      {/* <Aggregator /> */}
      <Footer />

    </>
  );
}

export default App;
