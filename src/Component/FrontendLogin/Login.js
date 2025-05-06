

// import React, { useState } from "react";



// import url from "../../env.js"




// const FrontendLogin = ({ onLoginSuccess }) => {
//   const [emailOrMobile, setEmailOrMobile] = useState("");
//   const [otp, setOtp] = useState("");
//   const [verificationMessage, setVerificationMessage] = useState("");
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [emailOrMobileError, setEmailOrMobileError] = useState("");
//   const [otpError, setOtpError] = useState("");
//   const [sentOtp, setSentOtp] = useState(""); // Store the OTP from backend response

//   const handleSendOtp = async (event) => {
//     event.preventDefault();
//     setEmailOrMobileError(""); // Reset error

//     if (!emailOrMobile) {
//       setEmailOrMobileError("Email or Mobile number is required");
//       return;
//     }

//     try {
//       const response = await fetch(`${url.nodeapipath}/front-login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ mobilenumber: emailOrMobile }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setSentOtp(result.otp); // Store OTP for display
//         setVerificationMessage(`Your verification code has been sent to ${emailOrMobile}`);
//         setIsOtpSent(true);
//       } else {
//         setVerificationMessage(result.message);
//       }
//     } catch (error) {
//       console.error(error);
//       setVerificationMessage("Something went wrong. Please try again.");
//     }
//   };

//   const handleVerifyOtp = async (event) => {
//     event.preventDefault();
//     setOtpError(""); // Reset error

//     if (!otp) {
//       setOtpError("OTP is required");
//       return;
//     }

//     try {
//       const response = await fetch(`${url.nodeapipath}/front-login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           mobilenumber: emailOrMobile,
//           otp: otp,
//         }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setVerificationMessage("OTP verified successfully. You are logged in.");
//         onLoginSuccess(emailOrMobile);
//       } else {
//         setVerificationMessage(result.message);
//       }
//     } catch (error) {
//       console.error(error);
//       setVerificationMessage("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="offcanvas offcanvas-end rightboxCanvas" tabIndex="-1" id="loginBox" aria-labelledby="loginBoxLabel">
//       <div className="offcanvas-header">
//         <h5 id="offcanvasRightLabel">Login</h5>
//         <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//       </div>
//       <div className="offcanvas-body">
//         <form>
//           <div className="row row-gap-4 mb-4">
//             <div className="col-md-12">
//               <label>Email ID / Mobile No.</label>
//               <input
//                 type="text"
//                 value={emailOrMobile}
//                 onChange={(e) => setEmailOrMobile(e.target.value)}
//               />
//               {emailOrMobileError && <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>{emailOrMobileError}</p>}
//             </div>
//             <div className="col-md-12">
//               <button type="button" className="btn2" onClick={handleSendOtp}>
//                 Send OTP to Login
//               </button>
//             </div>
//           </div>

//           {isOtpSent && (
//             <div className="row row-gap-1 mb-4">
//               <div className="col-md-12">
//                 <p>{verificationMessage}</p>
//                 <p>Your OTP: <strong>{sentOtp}</strong></p> {/* Display OTP here */}
//                 <input
//                   type="text"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   placeholder="Enter OTP"
//                 />
//                 {otpError && <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>{otpError}</p>}
//               </div>
//               <div className="col-md-12 d-flex align-items-center justify-content-between mt-3">
//                 <button type="button" className="btn2" onClick={handleVerifyOtp}>
//                   Verify OTP
//                 </button>
//                 <a href="#" className="resend" onClick={handleSendOtp}>
//                   Re-send OTP
//                 </a>
//               </div>
//             </div>
//           )}

//           <div className="row row-gap-4">
//             <div className="registerBox">
//               <div className="icon">
//                 <img src="/assets/images/icons/svg/user2.svg" alt="" />
//               </div>
//               <h4>No account yet?</h4>
//               <a href="/Loginpage">CREATE AN ACCOUNT</a>
//             </div>
//           </div>

//           <p>{verificationMessage}</p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FrontendLogin;








import React, { useState } from "react";



import url from "../../env.js"




const FrontendLogin = ({ onLoginSuccess }) => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationMessage, setVerificationMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [emailOrMobileError, setEmailOrMobileError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [sentOtp, setSentOtp] = useState(""); // Store the OTP from backend response

  const handleSendOtp = async (event) => {
    event.preventDefault();
    setEmailOrMobileError(""); // Reset error

    if (!emailOrMobile) {
      setEmailOrMobileError("Email or Mobile number is required");
      return;
    }

    try {
      const response = await fetch(`${url.nodeapipath}/front-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobilenumber: emailOrMobile }),
      });

      const result = await response.json();

      if (response.ok) {
        setSentOtp(result.otp); // Store OTP for display
        setVerificationMessage(`Your verification code has been sent to ${emailOrMobile}`);
        setIsOtpSent(true);
      } else {
        setVerificationMessage(result.message);
      }
    } catch (error) {
      console.error(error);
      setVerificationMessage("Something went wrong. Please try again.");
    }
  };

  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    setOtpError(""); // Reset error

    if (!otp) {
      setOtpError("OTP is required");
      return;
    }

    try {
      const response = await fetch(`${url.nodeapipath}/front-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobilenumber: emailOrMobile,
          otp: otp,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setVerificationMessage("OTP verified successfully. You are logged in.");
        localStorage.setItem('loggedInUser', emailOrMobile); // ✅ ADDED this line
        onLoginSuccess(emailOrMobile);
      } else {
        setVerificationMessage(result.message);
      }
    } catch (error) {
      console.error(error);
      setVerificationMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="offcanvas offcanvas-end rightboxCanvas" tabIndex="-1" id="loginBox" aria-labelledby="loginBoxLabel">
      <div className="offcanvas-header">
        <h5 id="offcanvasRightLabel">Login</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <form>
          <div className="row row-gap-4 mb-4">
            <div className="col-md-12">
              <label>Email ID / Mobile No.</label>
              <input
                type="text"
                value={emailOrMobile}
                onChange={(e) => setEmailOrMobile(e.target.value)}
              />
              {emailOrMobileError && <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>{emailOrMobileError}</p>}
            </div>
            <div className="col-md-12">
              <button type="button" className="btn2" onClick={handleSendOtp}>
                Send OTP to Login
              </button>
            </div>
          </div>

          {isOtpSent && (
            <div className="row row-gap-1 mb-4">
              <div className="col-md-12">
                <p>{verificationMessage}</p>
                <p>Your OTP: <strong>{sentOtp}</strong></p> {/* Display OTP here */}
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                />
                {otpError && <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>{otpError}</p>}
              </div>
              <div className="col-md-12 d-flex align-items-center justify-content-between mt-3">
                <button type="button" className="btn2" onClick={handleVerifyOtp}>
                  Verify OTP
                </button>
                <a href="#" className="resend" onClick={handleSendOtp}>
                  Re-send OTP
                </a>
              </div>
            </div>
          )}

          <div className="row row-gap-4">
            <div className="registerBox">
              <div className="icon">
                <img src="/assets/images/icons/svg/user2.svg" alt="" />
              </div>
              <h4>No account yet?</h4>
              <a href="/Loginpage">CREATE AN ACCOUNT</a>
            </div>
          </div>

          <p>{verificationMessage}</p>
        </form>
      </div>
    </div>
  );
};

export default FrontendLogin;