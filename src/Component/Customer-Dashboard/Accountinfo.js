import React, { useState } from 'react';
import Header from '../Header/Header';
import HeaderMenu from '../Menu/HeaderMenu';
import CustomerSidebar from './CustomerSidebar';
import './Accountinfo.css';

import url from "../../env.js"



export default function AccountInformation() {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    MobileNumber: '',
    email: '',
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Make the API request to create account information
    try {
      const response = await fetch(`${url.nodeapipath}/Accinfo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful response (e.g., show a success message or clear the form)
        alert('Account information created successfully');
      } else {
        // Handle error response
        alert(data.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server error');
    }
  };

  return (
    <>
      <Header />
      <HeaderMenu />
      <div className="main-container">
        <div className="customer-sidebar">
          <CustomerSidebar />
        </div>

        {/* Account Information Content */}
        <div className="account-info-container">
          {/* Left Section */}
          <div className="account-info-left">
            <h3>Account Information</h3>
            <hr />
            <form className="form-section" onSubmit={handleSubmit}>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </label>
              <label className="checkbox-section">
                <input type="checkbox" name="changeEmail" />
                Change Email
              </label>
              <label className="checkbox-section">
                <input type="checkbox" name="changeMobile" />
                Change Mobile Number
              </label>
              <button type="submit" className="save-button">
                Save
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="account-info-right">
            <h3>Email & Mobile Number</h3>
            <hr />
            <form className="form-section">
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Mobile Number:
                <input
                  type="text"
                  name="MobileNumber"
                  placeholder="Enter mobile number"
                  value={formData.MobileNumber}
                  onChange={handleInputChange}
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}



