



// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";


// import url from "../../env.js"



// const Register = () => {
//   const location = useLocation();
//   const initialEmailOrPhone = location.state?.emailOrMobile || ""; // Verified in Login

//   // Determine if the initial input is an email or phone number
//   const isEmailVerified = /^[^\d]+$/.test(initialEmailOrPhone); // If it contains letters, it's an email
//   const isPhoneVerified = /^\d+$/.test(initialEmailOrPhone); // If it's all numbers, it's a phone

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     companyName: "",
//     phone: isPhoneVerified ? initialEmailOrPhone : "", // Pre-fill phone if verified
//     email: isEmailVerified ? initialEmailOrPhone : "", // Pre-fill email if verified
//     otp: "",
//     streetAddress: "",
//     city: "",
//     state: "",
//     pincode: "",
//   });

//   const [otpSent, setOtpSent] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [error, setError] = useState("");
//   const [generatedOtp, setGeneratedOtp] = useState(null);

//   // Decide which field to verify
//   const otpFor = isEmailVerified ? "phone" : "email"; // Verify phone if email was verified in login, and vice versa.

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Function to send OTP
//   const sendOtp = () => {
//     const otp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP
//     setGeneratedOtp(otp);
//     setOtpSent(true);
//     setError("");

//     // if (otpFor === "email") {
//     //   alert(`OTP sent to Email: ${otp}`);
//     // } else {
//     //   alert(`OTP sent to Mobile: ${otp}`);
//     // }
//   };

//   // Function to verify OTP
//   const verifyOtp = () => {
//     if (formData.otp === String(generatedOtp)) {
//       setOtpVerified(true);
//       alert(`${otpFor === "phone" ? "Mobile" : "Email"} verified successfully!`);
//     } else {
//       setError("Incorrect OTP. Please try again.");
//     }
//   };

//   // Function to register user
//   const registerUser = async () => {
//     if (!otpVerified) {
//       alert("Please verify OTP before registering.");
//       return;
//     }

//     const { firstName, lastName, companyName, phone, email, streetAddress, city, state, pincode } = formData;

//     try {
//       const response = await fetch(`${url.nodeapipath}/front-register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: firstName,
//           lastname: lastName,
//           companyname: companyName,
//           mobilenumber: phone,
//           email,
//           address: streetAddress,
//           city,
//           state,
//           pincode,
//         }),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         alert("Registration successful!");
//       } else {
//         setError(result.message || "Something went wrong");
//       }
//     } catch (error) {
//       setError("An error occurred while registering. Please try again.");
//     }
//   };

//   return (
//     <>
//       <section className="titleBanner">
//         <div className="container">
//           <div className="row">
//             <div className="d-flex flex-column align-items-center">
//               <h1>Register</h1>
//               <ul>
//                 <li><Link to="/">Register</Link></li>
//                 <li>Details</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="loginWrapper | padding-block-500">
//         <div className="container">
//           <div className="registerBox">
//             <form>
//               <div className="row row-gap-4 mt-4">
//                 <div className="col-md-6">
//                   <label>First Name *</label>
//                   <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-6">
//                   <label>Last Name *</label>
//                   <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-6">
//                   <label>Company Name (optional)</label>
//                   <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
//                 </div>

//                 {/* Pre-filled, non-editable Email or Phone */}
//                 {isEmailVerified ? (
//                   <div className="col-md-6">
//                     <label>Email *</label>
//                     <input type="text" name="email" value={formData.email} disabled />
//                   </div>
//                 ) : (
//                   <div className="col-md-6">
//                     <label>Phone *</label>
//                     <input type="text" name="phone" value={formData.phone} disabled />
//                   </div>
//                 )}

//                 {/* OTP Verification for the opposite field */}
//                 <div className="col-md-6">
//                   <label>{otpFor === "phone" ? "Phone Number *" : "Email *"}</label>
//                   <input type="text" name={otpFor} value={formData[otpFor]} onChange={handleChange} />
//                   <button type="button" className="btn2 mt-2" onClick={sendOtp}>
//                     Send OTP to {otpFor === "phone" ? "Mobile" : "Email"}
//                   </button>
//                 </div>

//                 {/* OTP Input Field */}
//                 {otpSent && (
//                   <div className="col-md-8">
//                     <p>Your verification code: <strong>{generatedOtp}</strong></p>
//                     <input type="text" name="otp" value={formData.otp} onChange={handleChange} placeholder="Enter OTP" />
//                     <div className="otp-modal-actions col-md-12 d-flex gap-5 mt-3">
//                       <button type="button" className="btn2" onClick={verifyOtp}>Verify OTP</button>
//                       <a className="resend" onClick={sendOtp}>Re-send OTP</a>
//                     </div>
//                   </div>
//                 )}

//                 {/* Address Fields */}
//                 <div className="col-md-12 mt-4">
//                   <h5 className="border-bottom">Location Details</h5>
//                 </div>
//                 <div className="col-md-12">
//                   <label>Street Address *</label>
//                   <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} />
//                   <input
//                       type="text"
//                       className="mt-3"
//                       name="streetAddress2"
//                       onChange={handleChange}
//                     />
//                 </div>
//                 <div className="col-md-12">
//                   <label>City *</label>
//                   <input type="text" name="city" value={formData.city} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-12">
//                   <label>State *</label>
//                   <input type="text" name="state" value={formData.state} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-12">
//                   <label>Pincode *</label>
//                   <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
//                 </div>

//                 {/* Register Button */}
//                 <div className="col-md-12 d-flex justify-content-center">
//                   <button type="button" className="btn2" onClick={registerUser}>
//                     Register
//                   </button>
//                 </div>

//                 {error && <div className="col-md-12 text-danger">{error}</div>}
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Register;







// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";


// import url from "../../env.js"

// const Register = () => {

//   const location = useLocation(); // Get state passed from Loginpage
//   const initialEmailOrPhone = location.state?.emailOrMobile || "";

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     companyName: "",
//     // phone: "",
//     // email: "",
//     phone: /^\d+$/.test(initialEmailOrPhone) ? initialEmailOrPhone : "", // If it's a number, assign to phone
//     email: /^[^\d]+$/.test(initialEmailOrPhone) ? initialEmailOrPhone : "", // If not a number, assign to email
//     otp: "",
//     streetAddress: "",
//     city: "",
//     state: "",
//     pincode: "",
//   });
//   const [otpSent, setOtpSent] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [error, setError] = useState("");
//   const [showOtpModal, setShowOtpModal] = useState(false);
//   const [generatedOtp, setGeneratedOtp] = useState(null);

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({
//   //     ...formData,
//   //     [name]: value,
//   //   });
//   // };


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Function to send OTP
//   const sendOtp = () => {
//     const otp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP
//     setGeneratedOtp(otp);
//     setOtpSent(true);
//     setShowOtpModal(true);
//   };

//   // Function to verify OTP
//   const verifyOtp = () => {
//     if (formData.otp === String(generatedOtp)) {
//       setOtpVerified(true);
//       setShowOtpModal(false);
//       alert("OTP verified successfully!");
//     } else {
//       setError("Incorrect OTP. Please try again.");
//     }
//   };

//   // Function to register user (API call)
//   const registerUser = async () => {
//     const { firstName, lastName, companyName, phone, email, otp, streetAddress, city, state, pincode } = formData;

//     try {
//       const response = await fetch(`${url.nodeapipath}/front-register`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: firstName,
//           lastname: lastName,
//           companyname: companyName,
//           mobilenumber: phone,
//           email,
//           otp,
//           address: streetAddress,
//           city,
//           state,
//           pincode,
//         }),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         alert("Registration successful!");
//       } else {
//         setError(result.message || "Something went wrong");
//       }
//     } catch (error) {
//       setError("An error occurred while registering. Please try again.");
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <section className="titleBanner">
//         <div className="container">
//           <div className="row">
//             <div className="d-flex flex-column align-items-center">
//               <h1>Register</h1>
//               <ul>
//                 <li>
//                   <Link href="/">Register</Link>
//                 </li>
//                 <li>Details</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="loginWrapper | padding-block-500">
//         <div className="container">
//           <div className="registerBox">
//             <form>
//               <div className="row row-gap-4 mt-4">
//                 {/* Form Fields */}
//                 <div className="col-md-6">
//                   <div>
//                     <label htmlFor="firstName">
//                       First name <span className="required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div>
//                     <label htmlFor="lastName">
//                       Last name <span className="required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div>
//                     <label htmlFor="companyName">Company name (optional)</label>
//                     <input
//                       type="text"
//                       name="companyName"
//                       value={formData.companyName}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div>
//                     <label htmlFor="phone">
//                       Phone <span className="required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div>
//                     <label htmlFor="email">
//                       Email address <span className="required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Send OTP */}
//                 <div className="col-md-6">
//                   <label htmlFor="otp"></label>
//                   <a href="#" className="btn2" onClick={sendOtp}>
//                     Send OTP to Verify
//                   </a>
//                 </div>

//                 {/* OTP Verification - Only show after OTP is sent */}
//                 {otpSent && (
//                   <div className="col-md-8">
//                     <p>Your verification code: <strong>{generatedOtp}</strong></p> 
//                     <input
//                       type="text"
//                       name="otp"
//                       value={formData.otp}
//                       onChange={handleChange}
//                       placeholder="Enter OTP here"
//                     />
//                     <div className="otp-modal-actions col-md-12 d-flex gap-5 mt-3">
//                       <a href="#" className="btn2" onClick={verifyOtp}>
//                         Verify OTP
//                       </a>
//                       <a href="#" className="resend" onClick={sendOtp}>
//                         Re-send OTP
//                       </a>
//                     </div>

//                   </div>
//                 )}


           

//                 {/* Location Details */}
//                 <div className="col-md-12 mt-4">
//                   <h5 className="border-bottom">Location Details</h5>
//                 </div>
//                 <div className="col-md-12">
//                   <div>
//                     <label htmlFor="streetAddress">
//                       Street address <span className="required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="streetAddress"
//                       value={formData.address}
//                       onChange={handleChange}
//                     />
//                     <input
//                       type="text"
//                       className="mt-3"
//                       name="streetAddress2"
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-12">
//                   <div>
//                     <label htmlFor="city">
//                       Town / City <span className="required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="city"
//                       value={formData.city}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-12">
//                   <div>
//                     <label htmlFor="state">
//                       State <span className="required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="state"
//                       value={formData.state}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-12">
//                   <div>
//                     <label htmlFor="pincode">
//                       PIN Code <span className="required">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="pincode"
//                       value={formData.pincode}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-md-12 d-flex justify-content-center">
//                   <a href="#" className="btn2" onClick={registerUser}>
//                     Register
//                   </a>
//                 </div>

//                 {/* Error Messages */}
//                 {error && <div className="col-md-12">{error}</div>}
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Register;










import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import url from "../../env.js"; // Import API URL from environment

const Register = () => {
  const location = useLocation(); // Get state passed from Loginpage
  const initialEmailOrPhone = location.state?.emailOrMobile || "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phone: /^\d+$/.test(initialEmailOrPhone) ? initialEmailOrPhone : "", // If it's a number, assign to phone
    email: /^[^\d]+$/.test(initialEmailOrPhone) ? initialEmailOrPhone : "", // If not a number, assign to email
    otp: "",
    streetAddress: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [error, setError] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to send OTP to the email
  const sendOtp = async () => {
    const { email } = formData;
    try {
      const response = await fetch(`${url.nodeapipath}/send-otp-register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (response.ok) {
        setOtpSent(true);
        setShowOtpModal(true);
        alert("OTP sent to your email!");
      } else {
        setError(result.message || "Something went wrong");
      }
    } catch (error) {
      setError("An error occurred while sending OTP.");
      console.error(error);
    }
  };

  // Function to verify OTP
  const verifyOtp = async () => {
    const { email, otp } = formData;
    try {
      const response = await fetch(`${url.nodeapipath}/verify-otp-register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const result = await response.json();
      if (response.ok) {
        setOtpVerified(true);
        setShowOtpModal(false);
        alert("OTP verified successfully!");
      } else {
        setError(result.message || "Incorrect OTP.");
      }
    } catch (error) {
      setError("An error occurred while verifying OTP.");
      console.error(error);
    }
  };

  // Function to register user
  const registerUser = async () => {
    const { firstName, lastName, companyName, phone, email, streetAddress, city, state, pincode } = formData;

    try {
      const response = await fetch(`${url.nodeapipath}/front-register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      console.error(error);
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
                <li>
                  <Link href="/">Register</Link>
                </li>
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
                {/* Form Fields */}
                <div className="col-md-6">
                  <label htmlFor="firstName">First name <span className="required">*</span></label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName">Last name <span className="required">*</span></label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="companyName">Company name (optional)</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone">Phone <span className="required">*</span></label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email">Email address <span className="required">*</span></label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Send OTP Button */}
                <div className="col-md-6">
                  <a href="#" className="btn2" onClick={sendOtp}>Send OTP to Verify</a>
                </div>

                {/* OTP Verification */}
                {otpSent && !otpVerified && (
                  <div className="col-md-8">
                    <input
                      type="text"
                      name="otp"
                      value={formData.otp}
                      onChange={handleChange}
                      placeholder="Enter OTP here"
                    />
                    <div className="otp-modal-actions col-md-12 d-flex gap-5 mt-3">
                      <a href="#" className="btn2" onClick={verifyOtp}>Verify OTP</a>
                      <a href="#" className="resend" onClick={sendOtp}>Re-send OTP</a>
                    </div>
                  </div>
                )}

                {/* Location Details */}
                <div className="col-md-12 mt-4">
                  <h5 className="border-bottom">Location Details</h5>
                </div>
                <div className="col-md-12">
                  <label htmlFor="streetAddress">Street address <span className="required">*</span></label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="city">Town / City <span className="required">*</span></label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="state">State <span className="required">*</span></label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="pincode">PIN Code <span className="required">*</span></label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                </div>

                {/* Register Button */}
                <div className="col-md-12 d-flex justify-content-center">
                  <a href="#" className="btn2" onClick={registerUser}>Register</a>
                </div>

                {/* Error Messages */}
                {error && <div className="col-md-12">{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
