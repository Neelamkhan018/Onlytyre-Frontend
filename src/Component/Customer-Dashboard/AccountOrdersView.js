
// import React from "react";

// const AccountOrderView = () => {
//   return (
//     <>
//       <section className="titleBanner">
//         <div className="container">
//           <div className="row">
//             <div className="d-flex flex-column align-items-center">
//               <h1>Order Details</h1>
//               <ul>
//                 <li>#1357, March 45, 2020</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="shoppingCart | padding-block-500">
//         <div className="container">
//           <div className="row row-gap-5">
//             <div className="col-md-7">
//               <div className="table-responsive">
//                 <table className="table align-middle">
//                   <thead>
//                     <tr>
//                       <th>Product</th>
//                       <th>Subtotal</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>
//                         <div className="product">
//                           <div className="photo">
//                             <img src="/assets/images/products/001.png" alt="" />
//                           </div>
//                           <div className="details">
//                             <div className="brand">MRF</div>
//                             <h2>Lorem ipsum dolor sit amet</h2>
//                             <h3>₹5555</h3>
//                             <span>
//                               <strong>Schedule Date & Time : </strong>
//                               <br></br>14:20, Monday, 30 Dec 2024,
//                             </span>
//                           </div>
//                         </div>
//                       </td>

//                       <td>
//                         <div className="subTotal">₹5555</div>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         <div className="product">
//                           <div className="photo">
//                             <img src="/assets/images/products/001.png" alt="" />
//                           </div>
//                           <div className="details">
//                             <div className="brand">MRF</div>
//                             <h2>Lorem ipsum dolor sit amet</h2>
//                             <h3>₹5555</h3>
//                             <span>
//                               <strong>Schedule Date & Time : </strong>
//                               <br></br>14:20, Monday, 30 Dec 2024,
//                             </span>
//                           </div>
//                         </div>
//                       </td>

//                       <td>
//                         <div className="subTotal">₹5555</div>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//             <div className="col-md-5">
//               <div className="row row-gap-4">
//                 <div className="col-12">
//                   <div className="optionCart">
//                     <div className="sec">
//                       <h3 className="title">Order number:</h3>
//                       <div className="price">24920</div>
//                     </div>
//                     <div className="sec">
//                       <h3 className="title">Date: </h3>
//                       <div className="price">April 25, 2025</div>
//                     </div>
//                     <div className="sec">
//                       <h3 className="title">Status</h3>
//                       <div className="price">Processing</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-12">
//                   <div className="optionCart">
//                     <div className="sec">
//                       <h3 className="title">Subtotal</h3>
//                       <div className="price">₹319</div>
//                     </div>
//                     <div className="sec">
//                       <h3 className="title">Coupon Discount</h3>
//                       <div className="price">-₹319</div>
//                     </div>
//                     <div className="sec">
//                       <h3 className="titleTotal">Total</h3>
//                       <div className="priceTotal">₹319</div>
//                     </div>
//                     <div className="sec"><a href="" className="btn2">Download Invoice</a></div>
//                   </div>
//                 </div>


//                 <div className="col-12">
//                   <div className="optionCart">
//                     <div className="sec">
//                       <h3 className="title">Billing address</h3>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique arcu vel lectus venenatis scelerisque. </p>
//                     </div>
//                     <div className="sec">
//                       <h3 className="title">Shipping address</h3>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique arcu vel lectus venenatis scelerisque. </p>
//                     </div>
                    
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AccountOrderView;




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import url from "../../env.js"; // Assuming URL path is correct

const AccountOrderView = () => {
  const { orderId } = useParams(); // Get orderId from URL
  const [order, setOrder] = useState(null);






const [address, setAddress] = useState(null);

useEffect(() => {
  const fetchOrderDetails = async () => {
    try {
      const res = await fetch(`${url.nodeapipath}/orders/${orderId}`);
      const data = await res.json();
      setOrder(data);

      // Once order is loaded, fetch address using customer ID
      if (data?.customer?._id) {
        const addrRes = await fetch(`${url.nodeapipath}/get-address/${data.customer._id}`);
        const addrData = await addrRes.json();
        setAddress(addrData);
      }
    } catch (err) {
      console.error("Failed to fetch order or address details:", err);
    }
  };

  fetchOrderDetails();
}, [orderId]);
















  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const res = await fetch(`${url.nodeapipath}/orders/${orderId}`);
        const data = await res.json();
        setOrder(data);
      } catch (err) {
        console.error("Failed to fetch order details:", err);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (!order) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <>
      <section className="titleBanner">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column align-items-center">
              <h1>Order Details</h1>
              <ul>
                <li>#{order.orderId}, {new Date(order.date).toLocaleDateString()}</li>
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
                    {order.items.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <div className="product">
                            <div className="photo">
                              <img src={item.image} alt={item.title} />
                            </div>
                            <div className="details">
                              <div className="brand">{item.brand}</div>
                              <h2>{item.title}</h2>
                              <h3>₹{item.price}</h3>
                              <span>
                                <strong>Schedule Date & Time: </strong>
                                <br />
                                {item.scheduleDate}, {item.scheduleTime}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="subTotal">₹{(item.price * item.quantity).toFixed(2)}</div>
                        </td>
                      </tr>
                    ))}
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
                      <div className="price">{order.orderId}</div>
                    </div>
                    <div className="sec">
                      <h3 className="title">Date: </h3>
                      <div className="price">{new Date(order.date).toLocaleDateString()}</div>
                    </div>
                    <div className="sec">
                      <h3 className="title">Status</h3>
                      <div className="price">{order.status}</div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="optionCart">
                    <div className="sec">
                      <h3 className="title">Subtotal</h3>
                      <div className="price">₹{order.totalAmount.toFixed(2)}</div>
                    </div>
                    <div className="sec">
                      <h3 className="title">Coupon Discount</h3>
                      <div className="price">-₹{order.couponDiscount}</div>
                    </div>
                    <div className="sec">
                      <h3 className="titleTotal">Total</h3>
                      <div className="priceTotal">₹{order.totalAmount}</div>
                    </div>
                    <div className="sec">
                      <a href="" className="btn2">Download Invoice</a>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="optionCart">
                    <div className="sec">
                      <h3 className="title">Billing address</h3>
                      <p>
  {address?.billingAddress ? (
    <>
      {address.billingAddress.firstName} {address.billingAddress.lastName}<br />
      {address.billingAddress.streetAddress}<br />
      {address.billingAddress.townOrCity}, <br/>
      {address.billingAddress.state} - {address.billingAddress.pincode}
    </>
  ) : (
    "No billing address found"
  )}
</p>
                    </div>
                    <div className="sec">
                      <h3 className="title">Shipping address</h3>
                     <p>
  {address?.shippingAddress ? (
    <>
      {address.shippingAddress.firstName} {address.shippingAddress.lastName}<br />
      {address.shippingAddress.streetAddress}<br />
      {address.shippingAddress.townOrCity}, <br/>
      {address.shippingAddress.state} - {address.shippingAddress.pincode}
    </>
  ) : (
    "No shipping address found"
  )}
</p>
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

