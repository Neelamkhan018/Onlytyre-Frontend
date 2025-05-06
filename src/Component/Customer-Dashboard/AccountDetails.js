
import React from "react";
import { Link } from "react-router-dom";

const AccountDetails = () => {
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
                        <li><a href="/my-orders">Orders</a></li>
                        <li><a href="my-account-downloads">Downloads</a></li>
                        <li><a href="/address-Book">Addresses</a></li>
                        <li className="active"><a href="/Acc-details">Account details</a></li>
                        <li><a href="/Wishlist">Wishlist</a></li>
                        <li><a href="">Logout</a></li>
                    </ul>
                </div>
                
                <div className="col-md-9">
                    <form action="">
                            <div className="row row-gap-3 mt-4">
                                <div className="col-md-6">
                                    <div>
                                        <label htmlFor="username">First name <span className="required">*</span></label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <label htmlFor="username">Last name <span className="required">*</span></label>
                                        <input type="text" />
                                    </div>
                                </div>
                                
                                <div className="col-md-12">
                                    <div>
                                        <label htmlFor="username">Email address <span className="required">*</span></label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="password">Current Password <span className="required">*</span></label>
                                    <input id="password-field2" type="password" className="form-control" name="password" />
                                    <span toggle="#password-field2" className="fa fa-fw fa-eye hidePassfield-icon toggle-password2"></span>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="password">New Password <span className="required">*</span></label>
                                    <input id="password-field3" type="password" className="form-control" name="password" />
                                    <span toggle="#password-field3" className="fa fa-fw fa-eye hidePassfield-icon toggle-password3"></span>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="password">Confirm Password <span className="required">*</span></label>
                                    <input id="password-field4" type="password" className="form-control" name="password" value="password" />
                                    <span toggle="#password-field4" className="fa fa-fw fa-eye hidePassfield-icon toggle-password4"></span>
                                </div>
                                <div className="col-md-12">
                                    <button className="btn1"><span>SAVE CHANGES</span></button>
                                </div>
                            </div>
                        </form>
                </div>
            </div>
            
        </div>
    </section>
    </>
  );
};

export default AccountDetails;
