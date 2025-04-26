import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

function DashboardPage() {
  // Sample data for the bar chart
  const salesData = [
    { name: 'Jan', orders: 2000, revenue: 2400 },
    { name: 'Feb', orders: 3000, revenue: 1398 },
    { name: 'Mar', orders: 5000, revenue: 9800 },
    { name: 'Apr', orders: 2780, revenue: 3908 },
    { name: 'May', orders: 1890, revenue: 4800 },
    { name: 'Jun', orders: 2390, revenue: 3800 },
  ];

  return (
    <div>
       <h1 className="dashboard-heading" style={{ margin: "20px" }}>
        Welcome Back, Admin
      </h1>
    <div className="dashboard-container">
        
    {/* //   Welcome Card
    //   <div className="dashboard-card welcome-card">
        <h1 className="dashboard-title">Welcome Back, Admin</h1>
    //     <p className="dashboard-subtitle">Here's your store overview</p>
    //   </div> */}

      {/* Stats Cards Row */}
      <div className="cards-row">
        {/* Total Orders Card */}
        <div className="dashboard-card stat-card">
          <h2>Total Orders</h2>
          <p className="stat-value">1,245</p>
        </div>

        {/* Revenue Card */}
        <div className="dashboard-card stat-card">
          <h2>Total Revenue</h2>
          <p className="stat-value">$24,560</p>
        </div>

        {/* Customers Card */}
        <div className="dashboard-card stat-card">
          <h2>New Customers</h2>
          <p className="stat-value">324</p>
        </div>

        {/* Products Card */}
        <div className="dashboard-card stat-card">
          <h2>Top Products</h2>
          <p className="stat-value">56</p>
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="chart-section">
        <h2 className="section-title">Monthly Sales Overview</h2>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={salesData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="orders" fill="#8884d8" name="Orders" radius={[4, 4, 0, 0]} />
              <Bar dataKey="revenue" fill="#82ca9d" name="Revenue ($)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    </div>
  );
}

export default DashboardPage;