
import { Link } from "react-router-dom";
import React from "react";
import HeaderMenu from "../Menu/HeaderMenu";


import url from "../../env.js"



const Addresses = () => {
  return (

    <>
    <HeaderMenu/>
    
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
                        <li><a href="my-account">Dashboard</a></li>
                        <li><a href="my-account-orders">Orders</a></li>
                        <li><a href="my-account-downloads">Downloads</a></li>
                        <li className="active"><a href="my-account-address">Addresses</a></li>
                        <li><a href="my-account-details">Account details</a></li>
                        <li><a href="my-account-wishlist">Wishlist</a></li>
                        <li><a href="">Logout</a></li>
                    </ul>
                </div>
                
                <div className="col-md-9">
                <p>The following addresses will be used on the checkout page by default.</p>
                        <div className="row row-gap-4 mt-4">
                            <div className="col-md-6">
                                <h3 className="ff-primary fs-22">BILLING ADDRESS</h3>
                                <Link to="/billing">Add Address</Link>
                                <p className="mt-3">You have not set up this type of address yet.</p>
                            </div>
                            <div className="col-md-6">
                                <h3 className="ff-primary fs-22">SHIPPING ADDRESS</h3>
                                <a href="/Shipping">Add Address</a>
                                <p className="mt-3">You have not set up this type of address yet.</p>
                            </div>
                        </div>
                </div>
            </div>
            
        </div>
    </section>
    </>
  );
};

export default Addresses;
