
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


import url from "../../env.js"



const Shippingaddress = () => {


  const userId = localStorage.getItem("userId"); // Mod



  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    townOrCity: "",
    state: "",
    pincode: "",
    userId: userId || "", // Include the userId in the form data
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url.nodeapipath}/Shipping`, formData);
      setSuccessMessage(response.data.message);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred");
      setSuccessMessage("");
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
                <li>
                  <Link to="/">HOME</Link>
                </li>
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
              <h3 className="ff-primary fs-22 fw-semibold border-bottom pb-2">
                MY ACCOUNT
              </h3>
              <ul className="leftMenu">
                <li>
                  <Link to="/my-account">Dashboard</Link>
                </li>
                <li>
                  <Link to="/my-orders">Orders</Link>
                </li>
                <li>
                  <Link to="my-account-downloads">Downloads</Link>
                </li>
                <li className="active">
                  <Link to="/address-Book">Addresses</Link>
                </li>
                <li>
                  <Link to="/my-account-details">Account details</Link>
                </li>
                <li>
                  <Link to="/Wishlist">Wishlist</Link>
                </li>
                <li>
                  <Link to="">Logout</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-9">
              <div className="registerBox">
                <form onSubmit={handleSubmit}>
                  <div className="row row-gap-4 mt-4">
                    <div className="col-md-6">
                      <div>
                        <label>
                          First name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <label>
                          Last name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div>
                        <label>
                          Street address <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="streetAddress"
                          value={formData.streetAddress}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div>
                        <label>
                          Town / City <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="townOrCity"
                          value={formData.townOrCity}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div>
                        <label>
                          State <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div>
                        <label>
                          PIN Code <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center">
                      <button type="submit" className="btn2">
                        Save
                      </button>
                    </div>
                    {successMessage && (
                      <p className="text-success">{successMessage}</p>
                    )}
                    {errorMessage && (
                      <p className="text-danger">{errorMessage}</p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shippingaddress;
