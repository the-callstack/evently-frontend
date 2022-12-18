import React from "react";
import Footer from "./components/footer/Footer";
import Layout from "./components/Layout";
// import CookiesModal from './components/CookiesModal';
import LoginWithSplash from "./features/auth/LoginWithSplash";
import { RentalProduct } from "./components/productDisplay/RentalProduct";
import DetailsCard from "./components/DetailsCard";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./features/auth/Signup";
import ContactUs from "./components/ContactUs";
// import Aggregator from "./components/aggregator/Aggregator";
import { Cart } from "./components/cart/Cart";
import { Profile } from "./components/profile/Profile";
import AboutUs from "./components/AboutUs";
import { SaleProduct } from "./components/productDisplay/SaleProduct";
import { NewLayout } from "./components/newLayout/NewLayout";
import ItemsTable from "./components/provider/ItemsTable";
import StoreItemCard from "./components/provider/storeItemCard";


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<NewLayout />}>
          <Route path="/auth">
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<LoginWithSplash />} />
          </Route>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<DetailsCard />} />
          <Route path="/storeitems/:name" element={<ItemsTable />} />
          <Route path="/" element={<Layout />}>
            <Route path="/productrent" element={<RentalProduct />} />
            <Route path="/productsale" element={<SaleProduct />} />
          </Route>
        </Route>
        <Route path="/storeitemDetails" element={<StoreItemCard />} />
      </Routes>
      {/* <CookiesModal/> */}

      {/* <Aggregator /> */}

      <Footer />
    </>
  );
}

export default App;
