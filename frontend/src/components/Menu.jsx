// Menu.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loder';
import './Menu.css';
import { addToCart } from '../features/product/productSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Menu() {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setMenu(response.data.data);
      setFilteredMenu(response.data.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredMenu(menu);
    } else {
      const filtered = menu.filter((product) => product.category === category);
      setFilteredMenu(filtered);
    }
  };

  const handleAddToCart = (product) => {
    const authUser = localStorage.getItem("email");

    if (!authUser) {
      toast.error("Please log in to add items to your cart.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/login");
      return;
    }

    dispatch(addToCart(product));

    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="menu-wrapper">
      <h1 className="menu-title text-danger fs-3">Our Menu</h1>

      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="category-filter">
            {['All', 'Breakfast', 'Lunch', 'Dinner'].map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={selectedCategory === cat ? 'active' : ''}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {filteredMenu.map((product, index) => (
              <div key={index} className="menu-card">
                <img
                  src={product.image || 'https://via.placeholder.com/250'}
                  alt={product.name}
                  className="menu-image"
                />
                <div className="menu-content">
                  <h3>{product.name}</h3>
                  <p className="menu-desc">{product.description}</p>
                  <p className="menu-price">Price: ₹{product.price}</p>
                  <span className="menu-category">{product.category}</span>
                  <button className="buttons" onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Menu;
