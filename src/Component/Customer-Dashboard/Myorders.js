import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import HeaderMenu from '../Menu/HeaderMenu';
import CustomerSidebar from './CustomerSidebar';
import './Customer.css';

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  // This function could be replaced with an actual API call to fetch orders
  useEffect(() => {
    // Mock fetch orders (you can replace this with an actual API call)
    const fetchedOrders = []; // Leave it empty to simulate no orders
    setOrders(fetchedOrders);
  }, []);

  return (
    <>
      <Header />
      <HeaderMenu />
      <div className="my-account-wrapper">
        <CustomerSidebar />
        <div className="my-orders-container">
          <h2 className="orders-title">My Orders</h2>
          <hr className="divider" />

          {/* Orders List Section */}
          <div className="orders-section">
            {orders.length === 0 ? (
              <div className="no-orders-message">
                <p>You have placed no orders yet.</p>
                <button className="start-shopping-button" onClick={() => alert('Redirecting to shop')}>
                  Start Shopping
                </button>
              </div>
            ) : (
              <div>
                <h3>Your Orders</h3>
                <ul className="orders-list">
                  {orders.map((order, index) => (
                    <li key={index} className="order-item">
                      Order #{index + 1} - {order}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
