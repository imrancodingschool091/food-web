import React, { useState, useEffect } from 'react';
import './Orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://food-web-wgol.onrender.com//api/booking');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        // Filter out empty or incomplete orders
        const filteredOrders = data.filter(order => 
          order.name && order.date && order.time
        );
        setOrders(filteredOrders);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="loading">Loading orders...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="orders-container">
      <h1 className="orders-header">Your Reservations</h1>
      
      {orders.length === 0 ? (
        <div className="no-orders">No reservations found</div>
      ) : (
        <div className="table-responsive">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Party Size</th>
                <th>Contact</th>
                <th>Phone</th>
                <th>Special Request</th>
                <th>Booked On</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{new Date(order.date).toLocaleDateString()}</td>
                  <td>{order.time}</td>
                  <td>{order.people}</td>
                  <td>{order.email || 'N/A'}</td>
                  <td>{order.phone || '-'}</td>
                  <td>{order.message || '-'}</td>
                  <td>{new Date(order.createdAt || Date.now()).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Orders;