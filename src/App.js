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
import Aggregator from "./components/aggregator/Aggregator";
import { Cart } from "./components/cart/Cart";
import { Profile } from "./components/profile/Profile";
import AboutUs from "./components/AboutUs";
import { SaleProduct } from "./components/productDisplay/SaleProduct";
import { NewLayout } from "./components/newLayout/NewLayout";
import ItemsTable from "./components/provider/ItemsTable";
import StoreItemCard from "./components/provider/storeItemCard";
import { Admin } from "./components/admin/Admin";
import CategoriesCarousel from "./components/CategoriesCarousel";
import CategoriesProduct from "./components/CategoriesProduct";
import EventsCarousel from "./components/EventsCarousel";
import EventProduct from "./components/EventProduct";
import { AddCategoryForm } from "./components/admin/AddCategoryForm";
import { CategoriesTable } from "./components/admin/CategoriesTable";
import { EventsTable } from "./components/admin/EventsTable";
import { AddEventForm } from "./components/admin/AddEventForm";
import { Provider } from "./components/provider/Provider";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth">
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<LoginWithSplash />} />
        </Route>
        <Route path="/" element={<NewLayout />}>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/administrator" element={<Admin />} >
            <Route path='cat' element={<div className="border-4 rounded-lg mb-8 p-4 w-[80%] flex-col flex items-center"  ><CategoriesTable /><AddCategoryForm /></div>} />
            <Route path='event' element={<div className="border-4 rounded-lg mb-8 p-4 w-[80%] flex-col flex items-center" ><EventsTable /><AddEventForm /></div>} />
          </Route>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<DetailsCard />} />
          <Route path="/provider" element={<Provider />} />

          <Route path="/CatProducts/:id" element={<CategoriesProduct />} />
          <Route path="/ُEventProducts" element={<EventsCarousel />} >
            <Route path=":id" element={<EventProduct />} />
          </Route >
          <Route path="/storeitems/:name" element={<ItemsTable />} />
          <Route path="/productrent" element={<RentalProduct />} />
          <Route path="/productsale" element={<SaleProduct />} />
          <Route path="/" element={<Layout />}>
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
