
import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Cart from "./pages/Cart";
import CategoryShops from "./pages/CategoryShops";
import ShopProducts from "./pages/ShopProducts";
import Footer from "./components/Footer";
import VendorDashboard from "./pages/VendorDashboard";
import AddProduct from "./pages/AddProduct";
import ManageProducts from "./pages/ManageProducts";
import VendorOrders from "./pages/VendorOrders";
import AdminDashboard from "./pages/AdminDashboard";
import AdminShops from "./pages/AdminShops";
import AdminUsers from "./pages/AdminUsers";
import AdminOrders from "./pages/AdminOrders";
function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar cart={cart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        <Route path="/category/:id" element={<CategoryShops />} />

        <Route
          path="/shop/:id"
          element={<ShopProducts cart={cart} setCart={setCart} />}
        />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/vendor/add-product" element={<AddProduct />} />
        <Route path="/vendor/manage-products" element={<ManageProducts />} />
        <Route path="/vendor/orders" element={<VendorOrders />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/shops" element={<AdminShops />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;