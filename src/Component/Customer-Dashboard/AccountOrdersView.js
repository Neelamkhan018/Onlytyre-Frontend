
import React from "react";

const AccountOrderView = () => {
  return (
    <>
      <section className="titleBanner">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column align-items-center">
              <h1>Order Details</h1>
              <ul>
                <li>#1357, March 45, 2020</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="shoppingCart | padding-block-500">
        <div className="container">
          <div className="row row-gap-5">
            <div className="col-md-7">
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="product">
                          <div className="photo">
                            <img src="/assets/images/products/001.png" alt="" />
                          </div>
                          <div className="details">
                            <div className="brand">MRF</div>
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <h3>₹5555</h3>
                            <span>
                              <strong>Schedule Date & Time : </strong>
                              <br></br>14:20, Monday, 30 Dec 2024,
                            </span>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="subTotal">₹5555</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="product">
                          <div className="photo">
                            <img src="/assets/images/products/001.png" alt="" />
                          </div>
                          <div className="details">
                            <div className="brand">MRF</div>
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <h3>₹5555</h3>
                            <span>
                              <strong>Schedule Date & Time : </strong>
                              <br></br>14:20, Monday, 30 Dec 2024,
                            </span>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="subTotal">₹5555</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row row-gap-4">
                <div className="col-12">
                  <div className="optionCart">
                    <div className="sec">
                      <h3 className="title">Order number:</h3>
                      <div className="price">24920</div>
                    </div>
                    <div className="sec">
                      <h3 className="title">Date: </h3>
                      <div className="price">April 25, 2025</div>
                    </div>
                    <div className="sec">
                      <h3 className="title">Status</h3>
                      <div className="price">Processing</div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="optionCart">
                    <div className="sec">
                      <h3 className="title">Subtotal</h3>
                      <div className="price">₹319</div>
                    </div>
                    <div className="sec">
                      <h3 className="title">Coupon Discount</h3>
                      <div className="price">-₹319</div>
                    </div>
                    <div className="sec">
                      <h3 className="titleTotal">Total</h3>
                      <div className="priceTotal">₹319</div>
                    </div>
                    <div className="sec"><a href="" className="btn2">Download Invoice</a></div>
                  </div>
                </div>


                <div className="col-12">
                  <div className="optionCart">
                    <div className="sec">
                      <h3 className="title">Billing address</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique arcu vel lectus venenatis scelerisque. </p>
                    </div>
                    <div className="sec">
                      <h3 className="title">Shipping address</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique arcu vel lectus venenatis scelerisque. </p>
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

export default AccountOrderView;
