import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import './Dashboard.css';

function DashboardPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://food-web-wgol.onrender.com/api/products');
        if (response.data && response.data.success && Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Process product data for charts and statistics
  const categoryStats = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = { count: 0, totalPrice: 0 };
    }
    acc[product.category].count += 1;
    acc[product.category].totalPrice += product.price;
    return acc;
  }, {});

  const categoryChartData = Object.keys(categoryStats).map(category => ({
    name: category,
    products: categoryStats[category].count,
    revenue: categoryStats[category].totalPrice
  }));

  // Calculate dashboard statistics
  const totalProducts = products.length;
  const totalRevenue = products.reduce((sum, product) => sum + product.price, 0);
  const topCategories = Object.entries(categoryStats)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 3)
    .map(([category]) => category);

  if (loading) {
    return <div className="loading">Loading dashboard data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="dashboard-heading" style={{ margin: "20px" }}>
        Welcome Back, Admin
      </h1>
      
      <div className="dashboard-container">
        {/* Stats Cards Row */}
        <div className="cards-row">
          {/* Total Products Card */}
          <div className="dashboard-card stat-card">
            <h2>Total Products</h2>
            <p className="stat-value">{totalProducts}</p>
          </div>

          {/* Revenue Card */}
          <div className="dashboard-card stat-card">
            <h2>Total Revenue Potential</h2>
            <p className="stat-value">₹{totalRevenue.toLocaleString()}</p>
          </div>

          {/* Categories Card */}
          <div className="dashboard-card stat-card">
            <h2>Top Categories</h2>
            <div className="top-categories">
              {topCategories.map((category, index) => (
                <span key={index} className="category-tag">{category}</span>
              ))}
            </div>
          </div>

          {/* Average Price Card */}
          <div className="dashboard-card stat-card">
            <h2>Average Price</h2>
            <p className="stat-value">
              ₹{totalProducts > 0 ? Math.round(totalRevenue / totalProducts) : 0}
            </p>
          </div>
        </div>

        {/* Bar Chart Section */}
        <div className="chart-section">
          <h2 className="section-title">Products by Category</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={categoryChartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => name === 'revenue' ? [`₹${value}`, 'Revenue'] : [value, name]}
                />
                <Legend />
                <Bar 
                  dataKey="products" 
                  fill="#8884d8" 
                  name="Products" 
                  radius={[4, 4, 0, 0]} 
                />
                <Bar 
                  dataKey="revenue" 
                  fill="#82ca9d" 
                  name="Revenue (₹)" 
                  radius={[4, 4, 0, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default DashboardPage;