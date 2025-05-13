import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import url from "../../env.js";

const AccountDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    mobilenumber: "",
    streetAddress: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");





 const [loggedInUser, setLoggedInUser] = useState("");
  



useEffect(() => {
  const storedUser = localStorage.getItem('loggedInUser');
  if (storedUser) {
    setLoggedInUser(storedUser);
  }
}, []);




   const handleLogout = () => {
    setLoggedInUser (null);
    localStorage.removeItem('loggedInUser');  // ✅ CORRECTED key
  };












  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userId"); // Get ID from localStorage
        if (!userId) {
          setError("User ID not found. Please login again.");
          return;
        }

        const response = await fetch(`${url.nodeapipath}/user-details/${userId}`); // Updated endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();
        setFormData({
          id: userData._id, // Set the user ID for updates
          firstName: userData.name || "",
          lastName: userData.lastname || "",
          companyName: userData.companyname || "",
          email: userData.email || "",
          mobilenumber: userData.mobilenumber || "",
          streetAddress: userData.address || "",
          city: userData.city || "",
          state: userData.state || "",
          pincode: userData.pincode || "",
        });
      } catch (error) {
        console.error(error);
        setError("Failed to load user data. Please try again.");
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission

    const userId = localStorage.getItem("userId");  // Get the logged-in user's ID from localStorage

    if (!userId) {
      setError("User is not logged in.");
      return;
    }

    try {
      const response = await fetch(`${url.nodeapipath}/update-user`, { // Backend API URL
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: userId, // Use the user ID from localStorage
          name: formData.firstName,
          lastname: formData.lastName,
          companyname: formData.companyName,
          mobilenumber: formData.mobilenumber,
          email: formData.email,
          address: formData.streetAddress,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(result.message);
        setError(""); // Clear any previous error messages
      } else {
        setError(result.message || "Something went wrong. Please try again.");
        setSuccess(""); // Clear any previous success messages
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while updating. Please try again.");
      setSuccess(""); // Clear any previous success messages
    }
  };

  return (
    <>
      <section className="titleBanner">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column align-items-center">
              <h1>My Account</h1>
              <ul>
                <li><Link to="/">HOME</Link></li>
                <li>My Account</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="account | padding-block-500">
        <div className="container">
          <div className="row row-gap-5">
           <div className="col-md-3">
                    <h3 className="ff-primary fs-22 fw-semibold border-bottom pb-2">MY ACCOUNT</h3>
                    <ul className="leftMenu">
                        <li><a href="/my-account">Dashboard</a></li>
                        <li><a href="/my-orders">Orders</a></li>
                        <li><a href="my-account-downloads">Downloads</a></li>
                        <li><a href="/address-Book">Addresses</a></li>
                        <li className="active"><a href="/Acc-details">Account details</a></li>
                        <li><a href="/Wishlist">Wishlist</a></li>
                        <li><a href="" onClick={handleLogout}>Logout</a></li>
                    </ul>
                </div>

            <div className="col-md-9">
              <form onSubmit={handleSubmit}>
                <div className="row row-gap-3 mt-4">
                  <div className="col-md-6">
                    <label htmlFor="firstName">First Name <span className="required">*</span></label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="companyName">Company Name (optional)</label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="mobilenumber">Phone <span className="required">*</span></label>
                    <input type="text" name="mobilenumber" value={formData.mobilenumber} onChange={handleChange} required />
                  </div>
                  <div className="col-md-12">
                    <h5 className="border-bottom">Location Details</h5>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="streetAddress">Street Address <span className="required">*</span></label>
                    <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="city">City <span className="required">*</span></label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="state">State <span className="required">*</span></label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} required />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="pincode">Pincode <span className="required">*</span></label>
                    <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="btn1"><span>SAVE CHANGES</span></button>
                  </div>
                </div>
              </form>
              {error && <div className="text-danger mt-3">{error}</div>}
              {success && <div className="text-success mt-3">{success}</div>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountDetails;
