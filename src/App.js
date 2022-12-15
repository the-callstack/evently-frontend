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

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/auth">
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<LoginWithSplash />} />
        </Route>
        <Route path="/products" element={<Product />}>
          <Route path=":id" element={<DetailsCard className="pt-96" />} />
        </Route>
      </Routes>
      {/* <CookiesModal/> */}
      {/* <ContactUs /> */}
      <Footer />
    </>
  );
}

export default App;
