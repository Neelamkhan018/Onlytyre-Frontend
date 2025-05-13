



import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


import url from "../../env.js"



const Register = () => {
  const location = useLocation();
  const initialEmailOrPhone = location.state?.emailOrMobile || ""; // Verified in Login

  // Determine if the initial input is an email or phone number
  const isEmailVerified = /^[^\d]+$/.test(initialEmailOrPhone); // If it contains letters, it's an email
  const isPhoneVerified = /^\d+$/.test(initialEmailOrPhone); // If it's all numbers, it's a phone

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phone: isPhoneVerified ? initialEmailOrPhone : "", // Pre-fill phone if verified
    email: isEmailVerified ? initialEmailOrPhone : "", // Pre-fill email if verified
    otp: "",
    streetAddress: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [error, setError] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);

  // Decide which field to verify
  const otpFor = isEmailVerified ? "phone" : "email"; // Verify phone if email was verified in login, and vice versa.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to send OTP
  const sendOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP
    setGeneratedOtp(otp);
    setOtpSent(true);
    setError("");

    // if (otpFor === "email") {
    //   alert(`OTP sent to Email: ${otp}`);
    // } else {
    //   alert(`OTP sent to Mobile: ${otp}`);
    // }
  };

  // Function to verify OTP
  const verifyOtp = () => {
    if (formData.otp === String(generatedOtp)) {
      setOtpVerified(true);
      alert(`${otpFor === "phone" ? "Mobile" : "Email"} verified successfully!`);
    } else {
      setError("Incorrect OTP. Please try again.");
    }
  };

  // Function to register user
  const registerUser = async () => {
    if (!otpVerified) {
      alert("Please verify OTP before registering.");
      return;
    }

    const { firstName, lastName, companyName, phone, email, streetAddress, city, state, pincode } = formData;

    try {
      const response = await fetch(`${url.nodeapipath}/front-register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: firstName,
          lastname: lastName,
          companyname: companyName,
          mobilenumber: phone,
          email,
          address: streetAddress,
          city,
          state,
          pincode,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Registration successful!");
      } else {
        setError(result.message || "Something went wrong");
      }
    } catch (error) {
      setError("An error occurred while registering. Please try again.");
    }
  };

  return (
    <>
      <section className="titleBanner">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column align-items-center">
              <h1>Register</h1>
              <ul>
                <li><Link to="/">Register</Link></li>
                <li>Details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="loginWrapper | padding-block-500">
        <div className="container">
          <div className="registerBox">
            <form>
              <div className="row row-gap-4 mt-4">
                <div className="col-md-6">
                  <label>First Name *</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label>Last Name *</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label>Company Name (optional)</label>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
                </div>

                {/* Pre-filled, non-editable Email or Phone */}
                {isEmailVerified ? (
                  <div className="col-md-6">
                    <label>Email *</label>
                    <input type="text" name="email" value={formData.email} disabled />
                  </div>
                ) : (
                  <div className="col-md-6">
                    <label>Phone *</label>
                    <input type="text" name="phone" value={formData.phone} disabled />
                  </div>
                )}

                {/* OTP Verification for the opposite field */}
                <div className="col-md-6">
                  <label>{otpFor === "phone" ? "Phone Number *" : "Email *"}</label>
                  <input type="text" name={otpFor} value={formData[otpFor]} onChange={handleChange} />
                  <button type="button" className="btn2 mt-2" onClick={sendOtp}>
                    Send OTP to {otpFor === "phone" ? "Mobile" : "Email"}
                  </button>
                </div>

                {/* OTP Input Field */}
                {otpSent && (
                  <div className="col-md-8">
                    <p>Your verification code: <strong>{generatedOtp}</strong></p>
                    <input type="text" name="otp" value={formData.otp} onChange={handleChange} placeholder="Enter OTP" />
                    <div className="otp-modal-actions col-md-12 d-flex gap-5 mt-3">
                      <button type="button" className="btn2" onClick={verifyOtp}>Verify OTP</button>
                      <a className="resend" onClick={sendOtp}>Re-send OTP</a>
                    </div>
                  </div>
                )}

                {/* Address Fields */}
                <div className="col-md-12 mt-4">
                  <h5 className="border-bottom">Location Details</h5>
                </div>
                <div className="col-md-12">
                  <label>Street Address *</label>
                  <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} />
                  <input
                      type="text"
                      className="mt-3"
                      name="streetAddress2"
                      onChange={handleChange}
                    />
                </div>
                <div className="col-md-12">
                  <label>City *</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} />
                </div>
                <div className="col-md-12">
                  <label>State *</label>
                  <input type="text" name="state" value={formData.state} onChange={handleChange} />
                </div>
                <div className="col-md-12">
                  <label>Pincode *</label>
                  <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
                </div>

                {/* Register Button */}
                <div className="col-md-12 d-flex justify-content-center">
                  <button type="button" className="btn2" onClick={registerUser}>
                    Register
                  </button>
                </div>

                {error && <div className="col-md-12 text-danger">{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
