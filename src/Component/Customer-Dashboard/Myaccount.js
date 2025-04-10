


// import React, { useState, useEffect } from 'react';
// import Header from '../Header/Header';
// import HeaderMenu from '../Menu/HeaderMenu';
// import CustomerSidebar from './CustomerSidebar';
// import './Customer.css';

// export default function Myaccount() {
//   const [userData, setUserData] = useState({
//     name: localStorage.getItem('userName') || '', 
//     email: localStorage.getItem('userEmail') || '', 
//     defaultBillingAddress: '',
//   });

//   const [addressBook, setAddressBook] = useState([]); // New state to store addresses
//   const [isEditingInfo, setIsEditingInfo] = useState(false);
//   const [isEditingAddress, setIsEditingAddress] = useState(false);

//   // Fetch customer addresses from the API
//   useEffect(() => {
//     const fetchAddressBook = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/get-address?email=${userData.email}`);
//         const result = await response.json();
//         console.log('API Result:', result); // Log the API response to check the structure
//         if (response.ok) {
//           setAddressBook(result.customerAddresses || []); // Ensure it's an array
//         } else {
//           console.error('Failed to fetch address book:', result.message);
//         }
//       } catch (error) {
//         console.error('Error fetching address book:', error);
//       }
//     };

//     if (userData.email) {
//       fetchAddressBook();
//     }
//   }, [userData.email]); // Re-run the effect when email changes

//   const handleInfoChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prev) => ({ ...prev, [name]: value }));
//   };

//   useEffect(() => {
//     console.log('User data from localStorage:', {
//       name: localStorage.getItem('userName'),
//       email: localStorage.getItem('userEmail'),
//     });
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('userName', userData.name);
//     localStorage.setItem('userEmail', userData.email);
//   }, [userData.name, userData.email]);

//   return (
//     <>
//       <Header />
//       <HeaderMenu />
//       <div className="my-account-wrapper">
//         <CustomerSidebar />
//         <div className="my-account-container">
//           <h2 className="account-title">Account Information</h2>
//           <hr className="divider" />

//           {/* Contact Information Section */}
//           <div className="contact-info">
//             <h3>Contact Information</h3>
//             {!isEditingInfo ? (
//               <>
//                 <p>Name: {userData.name}</p>
//                 <p>Email: {userData.email}</p>
//                 <button
//                   className="edit-button"
//                   onClick={() => setIsEditingInfo(true)}
//                 >
//                   Edit
//                 </button>
//               </>
//             ) : (
//               <div>
//                 <label>
//                   Name:
//                   <input
//                     type="text"
//                     name="name"
//                     value={userData.name}
//                     onChange={handleInfoChange}
//                   />
//                 </label>
//                 <br />
//                 <label>
//                   Email:
//                   <input
//                     type="email"
//                     name="email"
//                     value={userData.email}
//                     onChange={handleInfoChange}
//                   />
//                 </label>
//                 <br />
//                 <button
//                   className="edit-button"
//                   onClick={() => setIsEditingInfo(false)}
//                 >
//                   Save
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Address Book Section */}
//           <div className="address-book">
//             <h3>Address Book</h3>
//             <p>Manage Address</p>
//             <hr className="divider" />
//             <h6>Default Billing Address</h6>
//             {!isEditingAddress ? (
//               <>
//                 <p>
//                   {userData.defaultBillingAddress ||
//                     'No default billing address'}
//                 </p>
//                 <button
//                   className="edit-button"
//                   onClick={() => setIsEditingAddress(true)}
//                 >
//                   Edit Address
//                 </button>
//               </>
//             ) : (
//               <div>
//                 <label>
//                   Billing Address:
//                   <textarea
//                     name="defaultBillingAddress"
//                     value={userData.defaultBillingAddress}
//                     onChange={handleInfoChange}
//                   />
//                 </label>
//                 <br />
//                 <button
//                   className="edit-button"
//                   onClick={() => setIsEditingAddress(false)}
//                 >
//                   Save Address
//                 </button>
//               </div>
//             )}
//             <div className="address-list">
//               <h4>Address List:</h4>
//               {addressBook.length > 0 ? (
//                 <ul>
//                   {addressBook.map((address, index) => (
//                     <li key={index}>
//                       <p>{address.firstName} {address.lastName}</p>
//                       <p>{address.phoneNumber}</p>
//                       <p>{address.city}, {address.state}, {address.zip}</p>
//                       <p>{address.country}</p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>No addresses found.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



// import Sidefilter from "@/componets/Sidefilter";
// import Link from "next/link";


// import React from "react";
// import { Link } from 'react-router-dom';
// import HeaderMenu from "../Menu/HeaderMenu";



// const Myaccount = () => {

//   return (
//     <>
//     <HeaderMenu/>
//       <section className="titleBanner">
//         <div className="container">
//           <div className="row">
//             <div className="d-flex flex-column align-items-center">
//               <h1>My Account</h1>
//               <ul>
//                 <li>
//                   <Link href="/">HOME</Link>
//                 </li>
//                 <li>My Account</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="account | padding-block-500">
//         <div className="container">
//             <div className="row row-gap-5">
//                 <div className="col-md-3">
//                     <h3 className="ff-primary fs-22 fw-semibold border-bottom pb-2">MY ACCOUNT</h3>
//                     <ul className="leftMenu">
//                         <li className="active"><a href="my-account">Dashboard</a></li>
//                         <li><a href="my-account-orders">Orders</a></li>
//                         <li><a href="my-account-downloads">Downloads</a></li>
//                         <li><a href="my-account-address">Addresses</a></li>
//                         <li><a href="my-account-details">Account details</a></li>
//                         <li><a href="my-account-wishlist">Wishlist</a></li>
//                         <li><a href="">Logout</a></li>
//                     </ul>
//                 </div>
                
//                 <div className="col-md-9">
//                     <p>Hello <strong>nitin.warang </strong> (not <strong>nitin.warang </strong>? <a href="/">Log out</a>)<br></br>
//                       From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
//                         <div className="row row-gap-4 mt-4">
//                             <div className="col-6 col-md-4">
//                                 <a href="my-account-orders" className="dashboardLink">
//                                     <img src="assets/images/icons/svg/orders.svg" alt="" />
//                                     <span>ORDERS</span>
//                                 </a>
//                             </div>
//                             <div className="col-6 col-md-4">
//                                 <a href="my-account-downloads" className="dashboardLink">
//                                     <img src="assets/images/icons/svg/downloads.svg" alt="" />
//                                     <span>DOWNLOADS</span>
//                                 </a>
//                             </div>
//                             <div className="col-6 col-md-4">
//                                 <a href="my-account-address" className="dashboardLink">
//                                     <img src="assets/images/icons/svg/address.svg" alt="" />
//                                     <span>ADDRESSES</span>
//                                 </a>
//                             </div>
//                             <div className="col-6 col-md-4">
//                                 <a href="my-account-details" className="dashboardLink">
//                                     <img src="assets/images/icons/svg/account-2.svg" alt="" />
//                                     <span>ACCOUNT DETAILS</span>
//                                 </a>
//                             </div>
//                             <div className="col-6 col-md-4">
//                                 <a href="my-account-wishlist" className="dashboardLink">
//                                     <img src="assets/images/icons/svg/wishlist-2.svg" alt="" />
//                                     <span>WISHLIST</span>
//                                 </a>
//                             </div>
//                             <div className="col-6 col-md-4">
//                                 <a href="" className="dashboardLink">
//                                     <img src="assets/images/icons/svg/logout.svg" alt="" />
//                                     <span>LOGOUT</span>
//                                 </a>
//                             </div>
//                         </div>
//                 </div>
//             </div>
            
//         </div>
//     </section>
//     </>
//   );
// };

// export default Myaccount;




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "../Menu/HeaderMenu";

const Myaccount = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Fetch the logged-in user's email from localStorage
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  return (
    <>
      <HeaderMenu />
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
              <h3 className="ff-primary fs-22 fw-semibold border-bottom pb-2">MY ACCOUNT</h3>
              <ul className="leftMenu">
                <li className="active">
                  <a href="my-account">Dashboard</a>
                </li>
                <li>
                  <a href="my-account-orders">Orders</a>
                </li>
                <li>
                  <a href="my-account-downloads">Downloads</a>
                </li>
                <li>
                  <a href="address-Book">Addresses</a>
                </li>
                <li>
                  <a href="my-account-details">Account details</a>
                </li>
                <li>
                  <a href="my-account-wishlist">Wishlist</a>
                </li>
                <li>
                  <a href="">Logout</a>
                </li>
              </ul>
            </div>

            <div className="col-md-9">
              <p>
                Hello <strong>{loggedInUser || "Guest"}</strong> (not{" "}
                <strong>{loggedInUser || "Guest"}</strong>?{" "}
                <a href="/">Log out</a>)
                <br />
                From your account dashboard you can view your recent orders,
                manage your shipping and billing addresses, and edit your
                password and account details.
              </p>
              <div className="row row-gap-4 mt-4">
                <div className="col-6 col-md-4">
                  <a href="my-account-orders" className="dashboardLink">
                    <img src="assets/images/icons/svg/orders.svg" alt="" />
                    <span>ORDERS</span>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="my-account-downloads" className="dashboardLink">
                    <img src="assets/images/icons/svg/downloads.svg" alt="" />
                    <span>DOWNLOADS</span>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="my-account-address" className="dashboardLink">
                    <img src="assets/images/icons/svg/address.svg" alt="" />
                    <span>ADDRESSES</span>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="my-account-details" className="dashboardLink">
                    <img src="assets/images/icons/svg/account-2.svg" alt="" />
                    <span>ACCOUNT DETAILS</span>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="my-account-wishlist" className="dashboardLink">
                    <img src="assets/images/icons/svg/wishlist-2.svg" alt="" />
                    <span>WISHLIST</span>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="" className="dashboardLink">
                    <img src="assets/images/icons/svg/logout.svg" alt="" />
                    <span>LOGOUT</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Myaccount;
