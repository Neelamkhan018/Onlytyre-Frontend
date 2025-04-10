


import React from "react";

export default function FrontendFooter() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="padding-block-500">
            <div className="row row-gap-5">
              <div className="col-md-6">
                <div className="contactDetails">
                  <h1>We’re Happy to Help!</h1>
                  <p>
                    Need help choosing the right products for your vehicle? Our
                    team of highly trained experts has the knowledge and passion
                    to help. Just pick up the phone and give us a ring.
                    <br></br>
                    <br></br>
                    Or let’s chat via email. We love solving problems and
                    lending a hand (or an ear).
                  </p>
                  <ul>
                    <li>
                      <img
                        src="/assets/images/icons/svg/phone-call-orange.svg"
                        alt=""
                      />
                      <p>
                        (833) 847-3463<br></br>
                        Mon-Fri: 8am - 8pm EST<br></br>
                        Sat: 9am - 1pm EST
                      </p>
                    </li>
                    <li>
                      <img
                        src="/assets/images/icons/svg/mail-orange.svg"
                        alt=""
                      />
                      <p>
                      info@onlytyre.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row row-gap-5">
                  <div className="col-md-4 col-6">
                    <h2>Information</h2>
                    <ul className="footerNav">
                      <li><a href="">About Us</a></li>
                      <li><a href="">Delivery Information</a></li>
                      <li><a href="">Privacy Policy</a></li>
                      <li><a href="">Terms & Conditions</a></li>
                      <li><a href="">Affiliate</a></li>
                      <li><a href="">Contact Us</a></li>
                      <li><a href="http://admin.onlytyre.com/create-login">Dealer Login</a></li>

                    </ul>
                  </div>
                  <div className="col-md-4 col-6">
                    <h2>My Account</h2>
                    <ul className="footerNav">
                      <li><a href="">My Account</a></li>
                      <li><a href="">Lost password</a></li>
                      <li><a href="">Track My Order</a></li>
                      <li><a href="">Wishlist</a></li>
                    </ul>
                  </div><div className="col-md-4">
                    <h2>Follow Us on</h2>
                    <ul className="footerSocial">
                      <li><a href=""><img src="/assets/images/icons/svg/instagram.svg" alt="" /></a></li>
                      <li><a href=""><img src="/assets/images/icons/svg/facebook.svg" alt="" /></a></li>
                      <li><a href=""><img src="/assets/images/icons/svg/youtube.svg" alt="" /></a></li>
                      <li><a href=""><img src="/assets/images/icons/svg/linkedin.svg" alt="" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <p>All Right Reserved By Tyre King Copyright © 2025</p>
          </div>
        </div>
      </footer>
    </>
  );
};


