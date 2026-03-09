
import { useEffect, useState } from "react";
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
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem("lbc_user");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  useEffect(() => {
    if (!user) {
      setCart([]);
      return;
    }

    localStorage.setItem("lbc_user", JSON.stringify(user));

    const savedCart = localStorage.getItem(`lbc_cart_${user.email}`);
    setCart(savedCart ? JSON.parse(savedCart) : []);
  }, [user]);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem(`lbc_cart_${user.email}`, JSON.stringify(cart));
  }, [cart, user]);

  const login = ({ email, password }) => {
    // Demo user credentials
    if (email === "demo@localbiz.com" && password === "demo123") {
      const demoUser = { name: "Demo User", email, role: "customer" };
      setUser(demoUser);
      return { success: true };
    }

    const users = JSON.parse(localStorage.getItem("lbc_users") || "[]");
    const existing = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!existing) return { success: false, message: "Invalid credentials" };

    setUser({ name: existing.name, email: existing.email, role: existing.role });
    return { success: true };
  };

  const register = ({ name, email, password, role }) => {
    const users = JSON.parse(localStorage.getItem("lbc_users") || "[]");
    const exists = users.some((u) => u.email === email);
    if (exists) return { success: false, message: "Email already registered" };

    users.push({ name, email, password, role });
    localStorage.setItem("lbc_users", JSON.stringify(users));

    setUser({ name, email, role });
    return { success: true };
  };

  const logout = () => setUser(null);

  return (
    <Router>
      <Navbar cart={cart} user={user} onLogout={logout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/register" element={<Register onRegister={register} />} />

        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} user={user} />} />

        <Route path="/category/:id" element={<CategoryShops />} />

        <Route
          path="/shop/:id"
          element={<ShopProducts cart={cart} setCart={setCart} user={user} />}
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