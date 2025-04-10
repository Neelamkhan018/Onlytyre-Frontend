import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import HeaderMenu from '../Menu/HeaderMenu';
import CustomerSidebar from './CustomerSidebar';
import './Customer.css';

export default function MyVehicle() {
  const [vehicles, setVehicles] = useState([]);

  // This function could be replaced with an actual API call to fetch vehicles
  useEffect(() => {
    // Mock fetch vehicles (you can replace this with an actual API call)
    const fetchedVehicles = []; // Leave it empty to simulate no vehicles
    setVehicles(fetchedVehicles);
  }, []);

  return (
    <>
      <Header />
      <HeaderMenu />
      <div className="my-account-wrapper">
        <CustomerSidebar />
        <div className="my-vehicle-container">
          <h2 className="vehicle-title">My Vehicles</h2>
          <hr className="divider" />

          {/* Vehicles Section */}
          <div className="vehicles-section">
            {vehicles.length === 0 ? (
              <div className="no-vehicles-message">
                <p>You have no vehicles added yet.</p>
                <button className="add-vehicle-button" onClick={() => alert('Redirecting to add vehicle')}>
                  Add a Vehicle
                </button>
              </div>
            ) : (
              <div>
                <h3>Your Vehicles</h3>
                <ul className="vehicles-list">
                  {vehicles.map((vehicle, index) => (
                    <li key={index} className="vehicle-item">
                      Vehicle #{index + 1} - {vehicle}
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
