import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './Navbar.css';

function Navbar() {
  const cartItems = useSelector((state) => state.product.products);
  const cartCount = cartItems.length;

  const navigate = useNavigate();

  const auth = localStorage.getItem("email"); // Corrected 'gmail' to 'email'

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    alert("logout sucesfully")
    navigate("/login"); // Redirect user to login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white mx-4 fs-2 fw-bold">
          Delicious<span className="text-danger">Bites</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/menu">Menu</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/special">Special</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/event">Event</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>

          <div className="d-flex align-items-center">
            <Link to="/cart" className="nav-link position-relative me-3">
              <FaShoppingCart className="fs-5" />
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Link>

            {auth ? (
              <button
                type="button"
                className="btn btn-outline-danger me-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button type="button" className="btn btn-outline-light me-2">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
