import React from 'react';
import "./Header.css";
// import "./Sidebar.jsx"

function Header() {
  const handleLogout = () => {
   localStorage.removeItem("email")
   
    alert("You have been logged out!");
    setTimeout(() => {
      window.location.reload()
      
    }, 1000);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo">
          <h1 className="logo-text" style={{fontFamily:"sans-serif"}}>Foodie</h1>
        </div>
        <button 
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;