

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import HeaderMenu from "../Menu/HeaderMenu";

// const Myaccount = () => {
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   useEffect(() => {
//     // Fetch the logged-in user's email from localStorage
//     const storedUser = localStorage.getItem("loggedInUser");
//     if (storedUser) {
//       setLoggedInUser(storedUser);
//     }
//   }, []);

//   return (
//     <>
//       <HeaderMenu />
//       <section className="titleBanner">
//         <div className="container">
//           <div className="row">
//             <div className="d-flex flex-column align-items-center">
//               <h1>My Account</h1>
//               <ul>
//                 <li>
//                   <Link to="/">HOME</Link>
//                 </li>
//                 <li>My Account</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="account | padding-block-500">
//         <div className="container">
//           <div className="row row-gap-5">
//             <div className="col-md-3">
//               <h3 className="ff-primary fs-22 fw-semibold border-bottom pb-2">MY ACCOUNT</h3>
//               <ul className="leftMenu">
//                 <li className="active">
//                   <a href="my-account">Dashboard</a>
//                 </li>
//                 <li>
//                   <a href="my-account-orders">Orders</a>
//                 </li>
//                 <li>
//                   <a href="my-account-downloads">Downloads</a>
//                 </li>
//                 <li>
//                   <a href="address-Book">Addresses</a>
//                 </li>
//                 <li>
//                   <a href="my-account-details">Account details</a>
//                 </li>
//                 <li>
//                   <a href="my-account-wishlist">Wishlist</a>
//                 </li>
//                 <li>
//                   <a href="">Logout</a>
//                 </li>
//               </ul>
//             </div>

//             <div className="col-md-9">
//               <p>
//                 Hello <strong>{loggedInUser || "Guest"}</strong> (not{" "}
//                 <strong>{loggedInUser || "Guest"}</strong>?{" "}
//                 <a href="/">Log out</a>)
//                 <br />
//                 From your account dashboard you can view your recent orders,
//                 manage your shipping and billing addresses, and edit your
//                 password and account details.
//               </p>
//               <div className="row row-gap-4 mt-4">
//                 <div className="col-6 col-md-4">
//                   <a href="my-account-orders" className="dashboardLink">
//                     <img src="assets/images/icons/svg/orders.svg" alt="" />
//                     <span>ORDERS</span>
//                   </a>
//                 </div>
//                 <div className="col-6 col-md-4">
//                   <a href="my-account-downloads" className="dashboardLink">
//                     <img src="assets/images/icons/svg/downloads.svg" alt="" />
//                     <span>DOWNLOADS</span>
//                   </a>
//                 </div>
//                 <div className="col-6 col-md-4">
//                   <a href="address-book" className="dashboardLink">
//                     <img src="assets/images/icons/svg/address.svg" alt="" />
//                     <span>ADDRESSES</span>
//                   </a>
//                 </div>
//                 <div className="col-6 col-md-4">
//                   <a href="my-account-details" className="dashboardLink">
//                     <img src="assets/images/icons/svg/account-2.svg" alt="" />
//                     <span>ACCOUNT DETAILS</span>
//                   </a>
//                 </div>
//                 <div className="col-6 col-md-4">
//                   <a href="my-account-wishlist" className="dashboardLink">
//                     <img src="assets/images/icons/svg/wishlist-2.svg" alt="" />
//                     <span>WISHLIST</span>
//                   </a>
//                 </div>
//                 <div className="col-6 col-md-4">
//                   <a href="" className="dashboardLink">
//                     <img src="assets/images/icons/svg/logout.svg" alt="" />
//                     <span>LOGOUT</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Myaccount;








// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import HeaderMenu from "../Menu/HeaderMenu";

// const Myaccount = () => {
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   useEffect(() => {
//     // Fetch the logged-in user's email from localStorage
//     const storedUser = localStorage.getItem("loggedInUser");
//     if (storedUser) {
//       setLoggedInUser(storedUser);
//     }
//   }, []);



//   const handleLogout = () => {
//     setLoggedInUser (null);
//     localStorage.removeItem('loggedInUser ');
//   };

//   return (
//     <>
//       <HeaderMenu />
//       <section className="titleBanner">
//         <div className="container">
//           <div className="row">
//             <div className="d-flex flex-column align-items-center">
//               <h1>My Account</h1>
//               <ul>
//                 <li>
//                   <Link to="/">HOME</Link>
//                 </li>
//                 <li>My Account</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="account | padding-block-500">
//         <div className="container">
//           <div className="row row-gap-5">
//             <div className="col-md-3">
//               <h3 className="ff-primary fs-22 fw-semibold border-bottom pb-2">MY ACCOUNT</h3>
//               <ul className="leftMenu">
//                 <li className="active">
//                   <a href="my-account">Dashboard</a>
//                 </li>
//                 <li>
//                   <a href="my-account-orders">Orders</a>
//                 </li>
//                 <li>
//                   <a href="my-account-downloads">Downloads</a>
//                 </li>
//                 <li>
//                   <a href="address-Book">Addresses</a>
//                 </li>
//                 <li>
//                   <a href="my-account-details">Account details</a>
//                 </li>
//                 <li>
//                   <a href="my-account-wishlist">Wishlist</a>
//                 </li>
//                 <li>
//                   <a href=""  onClick={handleLogout}>Logout</a>
//                 </li>
//               </ul>
//             </div>

//             <div className="col-md-9">
              // <p>
              //   Hello <strong>{loggedInUser || "Guest"}</strong> (not{" "}
              //   <strong>{loggedInUser || "Guest"}</strong>?{" "}
              //   <a href="/">Log out</a>)
              //   <br />
              //   From your account dashboard you can view your recent orders,
              //   manage your shipping and billing addresses, and edit your
              //   password and account details.
              // </p>
//               <div className="row row-gap-4 mt-4">
//                 <div className="col-6 col-md-4">
//                   <a href="my-account-orders" className="dashboardLink">
//                     <img src="assets/images/icons/svg/orders.svg" alt="" />
//                     <span>ORDERS</span>
//                   </a>
//                 </div>
//                 <div className="col-6 col-md-4">
//                   <a href="my-account-downloads" className="dashboardLink">
//                     <img src="assets/images/icons/svg/downloads.svg" alt="" />
//                     <span>DOWNLOADS</span>
//                   </a>
//                 </div>
//                 <div className="col-6 col-md-4">
//                   <a href="address-book" className="dashboardLink">
//                     <img src="assets/images/icons/svg/address.svg" alt="" />
//                     <span>ADDRESSES</span>
//                   </a>
//                 </div>
//                 <div className="col-6 col-md-4">
//                   <a href="my-account-details" className="dashboardLink">
//                     <img src="assets/images/icons/svg/account-2.svg" alt="" />
//                     <span>ACCOUNT DETAILS</span>
//                   </a>
//                 </div>
//                 <div className="col-6 col-md-4">
//                   <a href="my-account-wishlist" className="dashboardLink">
//                     <img src="assets/images/icons/svg/wishlist-2.svg" alt="" />
//                     <span>WISHLIST</span>
//                   </a>
//                 </div>
//                 <div className="col-6 col-md-4">
//                   <a href="" onClick={handleLogout} className="dashboardLink">
//                     <img src="assets/images/icons/svg/logout.svg" alt="" />
//                     <span>LOGOUT</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Myaccount;





import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "../Menu/HeaderMenu";

const Myaccount = () => {
  const [loggedInUser , setLoggedInUser ] = useState(null);

  useEffect(() => {
    // Fetch the logged-in user's email from localStorage
    const storedUser  = localStorage.getItem("loggedInUser ");
    if (storedUser ) {
      setLoggedInUser (storedUser );
    }
  }, []);

  const handleLogout = () => {
    setLoggedInUser (null);
    localStorage.removeItem('loggedInUser '); // Removed extra space
  };

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
                  <a href="" onClick={handleLogout}>Logout</a>
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
                    <img src="assets/images/icons/svg/orders.svg" alt="Orders" />
                    <span>ORDERS</span>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="my-account-downloads" className="dashboardLink">
                    <img src="assets/images/icons/svg/downloads.svg" alt="Downloads" />
                    <span>DOWNLOADS</span>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="address-book" className="dashboardLink">
                    <img src="assets/images/icons/svg/address.svg" alt="Addresses" />
                    <span>ADDRESSES</span>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="my-account-details" className="dashboardLink">
                    <img src="assets/images/icons/svg/account-2.svg" alt="Account Details" />
                    <span>ACCOUNT DETAILS</span>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="my-account-wishlist" className="dashboardLink">
                    <img src="assets/images/icons/svg/wishlist-2.svg" alt="Wishlist" />
                    <span>WISHLIST</span>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="" onClick={handleLogout} className="dashboardLink">
                    <img src="assets/images/icons/svg/logout.svg" alt="Logout" />
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