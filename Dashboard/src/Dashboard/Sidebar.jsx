import React from 'react';
import { Link } from 'react-router-dom';
import { 
    FiLayout, 
    FiShoppingBag, 
    FiList, 
    FiShoppingCart,
    FiArrowLeft,
    FiUser,
} from 'react-icons/fi';
import { MdContactPhone } from 'react-icons/md';  // Fixed import
import "./Sidebar.css";

function Sidebar() {
  const handleLogout=()=>{
    alert("redirecting to login")
    localStorage.removeItem("email")
    setTimeout(() => {
      window.location.reload()
      
    }, 1000);

  }
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">
          <FiLayout className="sidebar-icon" />
          <span>Dashboard</span>
        </Link>
        <Link to="/list" className="sidebar-link">
          <FiShoppingBag className="sidebar-icon" />
          <span>Products</span>
        </Link>
        <Link to="/add-products" className="sidebar-link">
          <FiList className="sidebar-icon" />
          <span>Add  Products</span>
        </Link>
        <Link to="/orders" className="sidebar-link">
          <FiShoppingCart className="sidebar-icon" />
          <span>Orders</span>
        </Link>

        <Link to="/users" className="sidebar-link">
          <FiUser className="sidebar-icon" />
          <span>Users</span>
        </Link>
        <Link to="/contacts" className="sidebar-link">
          <MdContactPhone className="sidebar-icon" />
          <span>contacts</span>
        </Link>
      

        <a href="" className="sidebar-link">
          <FiArrowLeft className="sidebar-icon" />
          <span onClick={handleLogout}>Go Back</span>
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;