
import React from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
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
              <h3 className="ff-primary fs-22 fw-semibold border-bottom pb-2">
                MY ACCOUNT
              </h3>
              <ul className="leftMenu">
                <li>
                  <a href="/my-account">Dashboard</a>
                </li>
                <li>
                  <a href="/my-orders">Orders</a>
                </li>
                <li>
                  <a href="my-account-downloads">Downloads</a>
                </li>
                <li>
                  <a href="/address-Book">Addresses</a>
                </li>
                <li>
                  <a href="/Acc-details">Account details</a>
                </li>
                <li className="active">
                  <a href="/Wishlist">Wishlist</a>
                </li>
                <li>
                  <a href="">Logout</a>
                </li>
              </ul>
            </div>

            <div className="col-md-9">
              <div className="row">
                <div className="col-md-3">
                  <div className="singleProduct">
                    <div className="photo">
                      <div className="sale">SALE</div>
                      <div className="new">NEW</div>
                      <ul className="cate">
                        <li>
                          <img
                            src="assets/images/icons/png/bike.png"
                            className="bike"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/icons/png/car.png"
                            className="car"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/icons/png/front.png"
                            className="front"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/icons/png/rear.png"
                            className="rear"
                            alt=""
                          />
                        </li>
                      </ul>
                      <img src="assets/images/products/001.png" alt="" />
                    </div>
                    <div className="details">
                      <div className="brand">MRF</div>
                      <h2>Lorem ipsum dolor sit amet, consectetur...</h2>
                      <div className="price">
                        <div className="new">₹5555</div>
                        <div className="old">₹5555</div>
                      </div>
                      <Link href="/product-page" className="btn1">
                        REMOVE
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="singleProduct">
                    <div className="photo">
                      <div className="sale">SALE</div>
                      <div className="new">NEW</div>
                      <ul className="cate">
                        <li>
                          <img
                            src="assets/images/icons/png/bike.png"
                            className="bike"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/icons/png/car.png"
                            className="car"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/icons/png/front.png"
                            className="front"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/icons/png/rear.png"
                            className="rear"
                            alt=""
                          />
                        </li>
                      </ul>
                      <img src="assets/images/products/001.png" alt="" />
                    </div>
                    <div className="details">
                      <div className="brand">MRF</div>
                      <h2>Lorem ipsum dolor sit amet, consectetur...</h2>
                      <div className="price">
                        <div className="new">₹5555</div>
                        <div className="old">₹5555</div>
                      </div>
                      <Link href="/product-page" className="btn1">
                        REMOVE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
