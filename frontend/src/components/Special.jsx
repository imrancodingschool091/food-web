// src/components/Special.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/product/productSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Special.css';

function Special() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Static data for specials
  const specials = [
    {
      _id: 1,
      name: "Truffle Pasta",
      description: "Handmade pasta with black truffle cream sauce and wild mushrooms",
      price: 18.99,
      originalPrice: 24.99,
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=80",
      category: "Dinner"
    },
    {
      _id: 2,
      name: "Lobster Thermidor",
      description: "Fresh lobster baked with creamy cheese sauce and herbs",
      price: 32.50,
      originalPrice: 39.99,
      image: "https://www.wholesomeyum.com/wp-content/uploads/2023/09/wholesomeyum-Lobster-Thermidor-18.jpg",
      category: "Dinner"
    },
    {
      _id: 3,
      name: "Chocolate Soufflé",
      description: "Warm chocolate soufflé with vanilla bean ice cream",
      price: 12.99,
      originalPrice: 15.99,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80",
      category: "Dessert"
    },
    {
      _id: 4,
      name: "Wagyu Steak",
      description: "Premium Japanese A5 wagyu with truffle mashed potatoes",
      price: 59.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=500&q=80",
      category: "Dinner"
    }
  ];

  const handleAddToCart = (item) => {
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

    const product = {
      _id: item._id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description,
      category: item.category
    };

    dispatch(addToCart(product));

    toast.success(`${item.name} added to cart!`, {
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
    <div className="special-wrapper">
      <h1 className="special-title text-danger fs-3">Today's Specials</h1>

      <div className="special-grid">
        {specials.map((item) => (
          <div key={item._id} className="special-card">
            <img
              src={item.image || 'https://via.placeholder.com/250'}
              alt={item.name}
              className="special-image"
            />
            <div className="special-content">
              <h3>{item.name}</h3>
              <p className="special-desc">{item.description}</p>
              <div className="price-container">
                <span className="special-price">${item.price.toFixed(2)}</span>
                {item.originalPrice && (
                  <span className="original-price">${item.originalPrice.toFixed(2)}</span>
                )}
              </div>
              <span className="special-category">{item.category}</span>
              <button
                className="buttons"
                onClick={() => handleAddToCart(item)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Special;
