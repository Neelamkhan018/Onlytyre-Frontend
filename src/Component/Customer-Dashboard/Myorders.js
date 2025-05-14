





// import React from "react";
// import { Link } from "react-router-dom";

// const Myorders = () => {


//   return (
//     <>
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
            // <div className="row row-gap-5">
            //     <div className="col-md-3">
            //         <h3 className="ff-primary fs-22 fw-semibold border-bottom pb-2">MY ACCOUNT</h3>
            //         <ul className="leftMenu">
            //             <li><a href="/my-account">Dashboard</a></li>
            //             <li className="active"><a href="/my-orders">Orders</a></li>
            //             <li><a href="my-account-downloads">Downloads</a></li>
            //             <li><a href="/address-Book">Addresses</a></li>
            //             <li><a href="/Acc-details">Account details</a></li>
            //             <li><a href="/Wishlist">Wishlist</a></li>
            //             <li><a href="">Logout</a></li>
            //         </ul>
            //     </div>
                
//                 <div className="col-md-9">
//                 <h3 className="ff-primary fs-22">ORDERS</h3>
//                   <div className="orders | table-responsive mt-3">
//                                 <table className="table">
//                                     <thead className="table-light">
//                                         <tr>
//                                             <th>Order</th>
//                                             <th>Date</th>
//                                             <th>Product Name</th>
//                                             <th>Status</th>
//                                             <th>Total</th>
//                                             <th>Actions</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td>#1357</td>
//                                             <td>March 45, 2020</td>
//                                             <td>MRF 145/70 R12 MILAZE X3 69T TUBE-TYPE TYRE</td>
//                                             <td>Processing</td>
//                                             <td>₹125.00</td>
//                                             <td><a href="/accountorderview" className="btn-small d-block"><strong>View</strong></a></td>
//                                         </tr>
//                                         <tr>
//                                             <td>#2468</td>
//                                             <td>June 29, 2020</td>
//                                             <td>CEAT 145/70 R12 MILAZE X3 69T TUBELESS TYRE</td>
//                                             <td>Completed</td>
//                                             <td>₹364.00</td>
//                                             <td><a href="my-account-orders-view" className="btn-small d-block"><strong>View</strong></a></td>
//                                         </tr>
//                                         <tr>
//                                             <td>#2366</td>
//                                             <td>August 02, 2020</td>
//                                             <td>CEAT 155/80 R13 MILAZE X5 79T TUBELESS TYRE</td>
//                                             <td>Completed</td>
//                                             <td>₹280.00</td>
//                                             <td><a href="my-account-orders-view" className="btn-small d-block"><strong>View</strong></a></td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                 </div>
//             </div>
            
//         </div>
//     </section>
//     </>
//   );
// };

// export default Myorders;













import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import url from "../../env.js";


const Myorders = () => {
  const [orders, setOrders] = useState([]);

  const [loggedInUser, setLoggedInUser] = useState("");
  

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.warn("No user ID found in localStorage.");
      return;
    }


  const fetchOrders = async () => {
  try {
    const res = await fetch(`${url.nodeapipath}/orders/customer/${userId}`);
    const data = await res.json();
    
    // Sort orders by date in descending order (newest first)
    const sortedOrders = data.sort((a, b) => new Date(b.date) - new Date(a.date));

    setOrders(sortedOrders);
  } catch (err) {
    console.error("Failed to fetch orders:", err);
  }
};

   fetchOrders();
  }, []);






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



  return (
    <>

  <section className="titleBanner">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column align-items-center">
              <h1>My Account</h1>
              <ul>
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>My Orders</li>
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
                       <li className="active"><a href="/my-orders">Orders</a></li>
                      {/* <li><a href="my-account-downloads">Downloads</a></li> */}
                        <li><a href="/address-Book">Addresses</a></li>
                      <li><a href="/Acc-details">Account details</a></li>
                       <li><a href="/Wishlist">Wishlist</a></li>
                       <li><a href="" onClick={handleLogout}>Logout</a></li>
                   </ul>       
              
               </div>

            <div className="col-md-9">
              <h3 className="ff-primary fs-22">ORDERS</h3>
              <div className="orders | table-responsive mt-3">
                <table className="table">
                  <thead className="table-light">
                    <tr>
                      <th>Order</th>
                      <th>Date</th>
                      <th>Product Name</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.length === 0 ? (
                      <tr><td colSpan="6">No orders found.</td></tr>
                    ) : (
                      orders.map((order, index) => (
                        <tr key={order._id}>
                          <td>#{order.orderId}</td>
                          <td>{new Date(order.date).toLocaleDateString()}</td>
                          <td>{order.items[0]?.title || "N/A"}</td>
                          <td>{order.status}</td>
                          <td>₹{order.totalAmount}</td>
                          <td>
                            <Link to={`/accountorderview/${order._id}`} className="btn-small d-block">
                              <strong>View</strong>
                            </Link>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Myorders;
