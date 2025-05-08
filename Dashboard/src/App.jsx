import React from 'react';
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import DashboardPage from './pages/DashboardPage';
import Header from './Dashboard/Header';
import Sidebar from './Dashboard/Sidebar';
import Orders from './pages/Orders';
import AddProducts from './pages/AddProducts';
import List from './pages/List';
import Login from './pages/Login';
import Users from './pages/Users';
import Contact from './pages/Contact';

// Admin Layout Component
const AdminLayout = () => (
  <>
    <Header />
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet /> {/* This renders the nested routes */}
      </main>
    </div>
  </>
);

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const email = localStorage.getItem("email");
  const admins = ['jasskaur@gmail.com', 'imrancodingschool@gmail.com'];
  const isAdmin = admins.includes(email);

  return isAdmin ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<Login />} />
      
      {/* Protected admin routes */}
      <Route path="/" element={
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      }>
        <Route index element={<DashboardPage />} />
        <Route path="orders" element={<Orders />} />
        <Route path="add-products" element={<AddProducts />} />
        <Route path="list" element={<List />} />
        <Route path="users" element={<Users />} />
        <Route path="contacts" element={<Contact />} />
       
      </Route>

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;