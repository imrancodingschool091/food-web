import React, { useEffect, useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './List.css';

function List() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://food-web-wgol.onrender.com//api/products");
      setProducts(response.data.data || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch products");
      setLoading(false);
      toast.error("Failed to fetch products", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://food-web-wgol.onrender.com//api/products/${id}`);
      setProducts(products.filter(product => product._id !== id));
      toast.success("Product deleted successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete product", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleEdit = (product) => {
    toast.info(`Editing product: ${product.name}`, {
      position: "top-right",
      autoClose: 2000,
    });
    console.log("Editing product:", product);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading products...</p>
    </div>
  );
  
  if (error) return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <p>{error}</p>
      <button onClick={fetchData} className="retry-btn">Retry</button>
    </div>
  );
  
  if (products.length === 0) return (
    <div className="empty-container">
      <div className="empty-icon">📦</div>
      <p>No products available</p>
      <button onClick={fetchData} className="refresh-btn">Refresh</button>
    </div>
  );

  return (
    <div className="products-container">
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <h1 className="page-title">Product List</h1>
      
      {/* Desktop Table View */}
      <div className="desktop-view">
        <table className="products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="table-row">
                <td>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="table-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/100?text=No+Image';
                    }}
                  />
                </td>
                <td>{product.name}</td>
                <td className="table-description">{product.description}</td>
                <td>₹{product.price}</td>
                <td>
                  <span className={`category-tag ${product.category.toLowerCase()}`}>
                    {product.category}
                  </span>
                </td>
                <td className="table-actions">
                  <button 
                    className="edit-btn"
                    onClick={() => handleEdit(product)}
                  >
                    <i className="fas fa-edit"></i> Edit
                  </button>
                  <button 
                    className="delete-btn"
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to delete ${product.name}?`)) {
                        handleDelete(product._id);
                      }
                    }}
                  >
                    <i className="fas fa-trash-alt"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="mobile-view">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <div className="card-image-container">
              <img 
                src={product.image} 
                alt={product.name} 
                className="card-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                }}
              />
            </div>
            <div className="card-details">
              <h3>{product.name}</h3>
              <p className="card-description">{product.description}</p>
              <div className="card-meta">
                <span className="price">₹{product.price}</span>
                <span className={`category-tag ${product.category.toLowerCase()}`}>
                  {product.category}
                </span>
              </div>
              <div className="card-actions">
                <button 
                  className="edit-btn"
                  onClick={() => handleEdit(product)}
                >
                  <i className="fas fa-edit"></i> Edit
                </button>
                <button 
                  className="delete-btn"
                  onClick={() => {
                    if (window.confirm(`Are you sure you want to delete ${product.name}?`)) {
                      handleDelete(product._id);
                    }
                  }}
                >
                  <i className="fas fa-trash-alt"></i> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;