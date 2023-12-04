import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/ourstore';
import Blogs from './pages/Blogs';
import Compareproduct from './pages/Compareproduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Sinup from './pages/Sinup';
import ResetPassword from './pages/ResetPassword';
import SingelBlog from './pages/SingelBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import Termandcondition from './pages/Termandcondition';
import ShipingPolicy from './pages/ShipingPolicy';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='store' element={<Store />} />
            <Route path='product/:id' element={<SingleProduct />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='blog/:id' element={<SingelBlog />} />
            <Route path='compareproduct' element={<Compareproduct />} />
            <Route path='Wishlist' element={<Wishlist />} />
            <Route path='login' element={<Login />} />
            <Route path='ForgotPassword' element={<ForgotPassword />} />
            <Route path='sinup' element={<Sinup />} />
            <Route path='ResetPassword' element={<ResetPassword />} />
            <Route path='PrivacyPolicy' element={<PrivacyPolicy />} />
            <Route path='RefundPolicy' element={<RefundPolicy />} />
            <Route path='Termandcondition' element={<Termandcondition />} />
            <Route path='ShipingPolicy' element={<ShipingPolicy />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
