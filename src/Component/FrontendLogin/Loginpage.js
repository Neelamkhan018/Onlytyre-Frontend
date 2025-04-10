

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import url from "../../env.js"



const Loginpage = () => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null); 
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const sendOtp = async () => {
    if (!emailOrMobile) {
      setError("Please enter your email or mobile number.");
      return;
    }

    setError(""); 

    try {
      // Send request to backend to generate and send OTP
      const response = await axios.post(`${url.nodeapipath}/loginpage`, { emailOrMobile });

      // Store the OTP received from the server
      const otp = response.data.otp;
      setGeneratedOtp(otp); // Store the OTP
      setIsOtpSent(true); 
    } catch (err) {
      console.error("Error sending OTP:", err);
      setError("Failed to send OTP. Try again.");
    }
  };


  const verifyOtp = () => {
    if (otp === generatedOtp?.toString()) {
      navigate("/front-register", { state: { emailOrMobile } }); // Pass email/phone as state
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };
  

  const resendOtp = () => {
    // Simply call sendOtp again when user requests to resend OTP
    setGeneratedOtp(null); // Reset OTP
    setOtp(""); // Clear OTP field
    sendOtp(); // Send OTP again
  };

  return (
    <>
      <section className="titleBanner">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column align-items-center">
              <h1>Login/Register</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="loginWrapper | padding-block-500">
        <div className="container">
          <div className="loginBox">
            <form onSubmit={(e) => e.preventDefault()}>
              {!isOtpSent && (
                <div className="row row-gap-4 mb-4">
                  <div className="col-md-12">
                    <label>Email ID / Mobile No.</label>
                    <input
                      type="text"
                      value={emailOrMobile}
                      onChange={(e) => setEmailOrMobile(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <button type="button" className="btn2" onClick={sendOtp}>
                      Send OTP to Login
                    </button>
                  </div>
                </div>
              )}

              {isOtpSent && (
                <div className="row row-gap-1 mb-4">
                  <div className="col-md-12">
                    <p>Your verification code: <strong>{generatedOtp}</strong></p>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12 d-flex align-items-center justify-content-between mt-3">
                    <button type="button" className="btn2" onClick={verifyOtp}>
                      Verify OTP
                    </button>
                    <a href="#" className="resend" onClick={resendOtp}>
                      Re-send OTP
                    </a>
                  </div>
                </div>
              )}

              {error && <p className="error">{error}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loginpage;
