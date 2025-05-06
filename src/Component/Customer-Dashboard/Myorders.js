





import React from "react";
import { Link } from "react-router-dom";

const Myorders = () => {


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
                        <li className="active"><a href="/my-orders">Orders</a></li>
                        <li><a href="my-account-downloads">Downloads</a></li>
                        <li><a href="/address-Book">Addresses</a></li>
                        <li><a href="/Acc-details">Account details</a></li>
                        <li><a href="/Wishlist">Wishlist</a></li>
                        <li><a href="">Logout</a></li>
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
                                        <tr>
                                            <td>#1357</td>
                                            <td>March 45, 2020</td>
                                            <td>MRF 145/70 R12 MILAZE X3 69T TUBE-TYPE TYRE</td>
                                            <td>Processing</td>
                                            <td>₹125.00</td>
                                            <td><a href="/accountorderview" className="btn-small d-block"><strong>View</strong></a></td>
                                        </tr>
                                        <tr>
                                            <td>#2468</td>
                                            <td>June 29, 2020</td>
                                            <td>CEAT 145/70 R12 MILAZE X3 69T TUBELESS TYRE</td>
                                            <td>Completed</td>
                                            <td>₹364.00</td>
                                            <td><a href="my-account-orders-view" className="btn-small d-block"><strong>View</strong></a></td>
                                        </tr>
                                        <tr>
                                            <td>#2366</td>
                                            <td>August 02, 2020</td>
                                            <td>CEAT 155/80 R13 MILAZE X5 79T TUBELESS TYRE</td>
                                            <td>Completed</td>
                                            <td>₹280.00</td>
                                            <td><a href="my-account-orders-view" className="btn-small d-block"><strong>View</strong></a></td>
                                        </tr>
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


