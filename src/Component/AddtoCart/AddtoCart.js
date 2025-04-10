
    

// import React, { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { format } from 'date-fns';
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import FrontendFooter from '../Footer/FrontendFooter';



// export default function AddtoCart() {
//   const [cart, setCart] = useState([]);
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const loadData = () => {
//       const storedCart = localStorage.getItem('cart');
//       if (storedCart) {
//         setCart(JSON.parse(storedCart));
//       }

//       const user = localStorage.getItem('loggedInUser');
//       if (user) {
//         setLoggedInUser(user);
//       }
//       setIsLoading(false);
//     };

//     loadData();
//   }, [location]);

//   // Sync cart with localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const incrementCount = (id) => {
//     setCart(prevCart => {
//       const updatedCart = prevCart.map(item =>
//         item._id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
//       );
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   const decrementCount = (id) => {
//     setCart(prevCart => {
//       const updatedCart = prevCart
//         .map(item => 
//           item._id === id ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) } : item
//         );
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   const removeFromCart = (id) => {
//     const updatedCart = cart.filter(item => item._id !== id);
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   // Calculate subtotal
//   const calculateSubtotal = () => {
//     return cart.reduce((total, item) => total + item.Salesprice * (item.quantity || 1), 0);
//   };

//   const deliveryCharges = 0;
//   const totalAmount = calculateSubtotal() + deliveryCharges;

//   const handleCheckout = () => {
//     if (!loggedInUser) {
//       alert("Please log in or register to proceed to checkout.");
//       navigate('/front-register');
//     } else {
//       navigate('/buy');
//     }
//   };

//   if (isLoading) return <div className="loading-spinner">Loading Cart...</div>;

//   return (
//     <>
//       <section className="cartBanner">
//         <div className="container">
//           <div className="row">
//             <div className="d-flex flex-column align-items-center">
//               <h1>My Cart</h1>
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
//                       <th></th>
//                       <th>Product</th>
//                       <th>Quantity</th>
//                       <th>Subtotal</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cart.length === 0 ? (
//                       <tr>
//                         <td colSpan="4"><p>Your cart is empty</p></td>
//                       </tr>
//                     ) : (
//                       cart.map(item => (
//                         <tr key={item._id}>
//                           <td>
//                             <a href="#" className="close" onClick={() => removeFromCart(item._id)}>
//                               <span aria-hidden="true">×</span>
//                             </a>
//                           </td>
//                           <td>
//                             <div className="product">
//                               <div className="photo">
//                                 <img src={`http://localhost:8000/uploads/${item.avatarImages}`} alt={item.avatarImages} />
//                               </div>
//                               <div className="details">
//                                 <div className="brand">{item.brand}</div>
//                                 <h2>{item.title}</h2>
//                                 <h3>₹{item.Salesprice}</h3>
//                                 <div className="schedule-service">
//                                   <p>Schedule Service</p>
//                                 </div>
//                                 <span>
//                                   <strong>Schedule Date & Time : </strong>
//                                   <br />
//                                   {item.scheduleDate && item.timeSlot
//                                     ? `${format(new Date(item.scheduleDate), 'HH:mm, EEEE, dd MMM yyyy')} `
//                                     : "Not Scheduled"}
//                                 </span>
//                               </div>
//                             </div>
//                           </td>
//                           <td>
//                             <div className="quantity">
//                               <div className="number">
//                                 <button
//                                   onClick={(e) => {
//                                     e.stopPropagation();
//                                     decrementCount(item._id);
//                                   }}
//                                   className="minus border-end-0"
//                                 >
//                                   -
//                                 </button>
//                                 <div>
//                                   <span>{item.quantity || 1}</span>
//                                 </div>
//                                 <button
//                                   onClick={(e) => {
//                                     e.stopPropagation();
//                                     incrementCount(item._id);
//                                   }}
//                                   className="plus border-start-0"
//                                 >
//                                   +
//                                 </button>
//                               </div>
//                             </div>
//                           </td>
//                           <td>
//                             <div className="subTotal">₹{item.Salesprice * (item.quantity || 1)}</div>
//                           </td>
//                         </tr>
//                       ))
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//  <div className="col-md-5">
//    <div className="optionCart">
//      <div className="coupon">
//        <form action="">
//          <input
//           type="text"
//           placeholder="Enter Coupon Code"
//         />
//         <a href="" className="btn1">
//           APPLY COUPON
//         </a>
//       </form>
//     </div>



// <div className="recommendedServices">
//         <Swiper
//           loop={true}
//           slidesPerView={1.5}
//           spaceBetween={10}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
          
//           navigation={true}
//           modules={[Autoplay, Pagination, Navigation]}
//         >
//           {cart.length === 0 ? (
//             <SwiperSlide>
//               <p>Your cart is empty</p>
//             </SwiperSlide>
//           ) : (
//             cart.map((item) => (
//               <SwiperSlide key={item._id}>
//                 <div className="product">
//                   <div className="details">
//                     <h3>{item.title}</h3>
//                     <p>{item.description}</p>
//                     <div className="price">
//                       <div className="new">₹{item.Salesprice}</div>
//                       <div className="old">₹{item.price}</div>
//                     </div>
//                   </div>

//                   <div className="rightbox">
//                     <div className="photo">
//                       <img
//                         src={`http://localhost:8000/uploads/${item.avatarImages}`}
//                         alt={item.avatarImages}
//                       />
//                     </div>
//                     <button
//                       onClick={() => incrementCount(item._id)}
//                       className="btn1"
//                     >
//                       ADD
//                     </button>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))
//           )}
//         </Swiper>
//       </div>



//     <div className="sec mt-3">
//       <h3 className="title">Subtotal</h3>
//       <div className="price">₹{calculateSubtotal()}</div>
//     </div>
//     <div className="sec">
//       <h3 className="title">Shipping Charges</h3>
//       <div className="price">
//         {deliveryCharges === 0 ? "Free" : `₹${deliveryCharges}`}
//       </div>
//     </div>
//     <div className="sec">
//       <h3 className="title">Coupon Discount</h3>

//     </div>
//     <div className="sec">
//       <h3 className="titleTotal">Total</h3>
//       <div className="priceTotal">₹{totalAmount}</div>
//     </div>
//     <div className="sec">
 

// <button onClick={handleCheckout} className="btn2">
//                     PROCEED TO CHECKOUT
//                   </button>

//     </div>
//   </div>
// </div>
// </div>
//      </div>
//      </section>

//      <FrontendFooter/>

//     </>
//   );
// };




import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FrontendFooter from '../Footer/FrontendFooter';

import url from "../../env.js"



export default function AddtoCart() {
  const [cart, setCart] = useState([]);
  const [loggedInUser , setLoggedInUser ] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loadData = () => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }

      const user = localStorage.getItem('loggedInUser');
      if (user) {
        setLoggedInUser (user);
      }
      setIsLoading(false);
    };

    loadData();
  }, [location]);





  

  // Sync cart with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const incrementCount = (id) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item =>
        item._id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
      return updatedCart; // Return updated cart
    });
  };

  const decrementCount = (id) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item => 
        item._id === id ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) } : item
      );
      return updatedCart; // Return updated cart
    });
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item._id !== id);
    setCart(updatedCart);
  };

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.selectedPrice || item.Salesprice) * (item.quantity || 1), 0);
  };

  const deliveryCharges = 0; // Set your delivery charges here
  const totalAmount = calculateSubtotal() + deliveryCharges;

 


const handleCheckout = async () => {
  console.log("🛒 Raw Cart Data from localStorage:", localStorage.getItem('cart'));
  console.log("🛒 Logged In User:", loggedInUser);

  if (!loggedInUser) {
      alert("Please log in or register to proceed to checkout.");
      navigate('/front-register');
      return;
  }

  console.log("📋 Cart Items Before Checkout:", cart);

  const orderData = {
      customerId: loggedInUser, 
      items: cart.map(item => ({
          productId: item._id,
          title: item.title,
          image: item.avatarImages ? `${url.nodeapipath}/uploads/${item.avatarImages}` : "default-image.jpg",
          price: item.selectedPrice || item.Salesprice,
          quantity: item.quantity || 1,
          deliveryType: item.deliveryType,   // ✅ Include delivery type
           leastTime: item.leastTime || "Not Specified"  ,// 🛠 Fix: Add default fallback
           clientId: item.clientId // Include the clientId of the selected dealer
      })),
      totalAmount: totalAmount,
      paymentMethod: "COD"
  };

  console.log("📦 Order Data Sent to Backend:", orderData);

  try {
      const response = await fetch(`${url.nodeapipath}/create-order`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(orderData)
      });

      const data = await response.json();

      if (response.ok) {
          alert("✅ Order successfully placed!");
          localStorage.removeItem("cart"); // Clear cart after order placement
          navigate('/buy', { state: { totalAmount } });
      } else {
          alert(`❌ Failed to place order: ${data.message}`);
      }
  } catch (error) {
      console.error("❌ Error placing order:", error);
      alert("Something went wrong. Please try again.");
  }
};




  

  if (isLoading) return <div className="loading-spinner">Loading Cart...</div>;

  return (
    <>
      <section className="cartBanner">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column align-items-center">
              <h1>My Cart</h1>
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
                      <th></th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.length === 0 ? (
                      <tr>
                        <td colSpan="4"><p>Your cart is empty</p></td>
                      </tr>
                    ) : (
                      cart.map(item => (
                        <tr key={item._id}>
                          <td>
                            <a href="#" className="close" onClick={() => removeFromCart(item._id)}>
                              <span aria-hidden="true">×</span>
                            </a>
                          </td>
                          <td>
                            <div className="product">
                              <div className="photo">
                                <img src={`${url.nodeapipath}/uploads/${item.avatarImages}`} alt={item.avatarImages} />
                              </div>
                              <div className="details">
                                <div className="brand">{item.brand}</div>
                                <h2>{item.title}</h2>
                                <h3>₹{item.selectedPrice || item.Salesprice}</h3>
                                <div className="schedule-service">
                                  <p>Schedule Service</p>
                                </div>
                                <span>
                                  <strong>Schedule Date & Time : </strong>
                                  <br />
                                  {item.scheduleDate && item.timeSlot
                                    ? `${format(new Date(item.scheduleDate), 'HH:mm, EEEE, dd MMM yyyy')} `
                                    : "Not Scheduled"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="quantity">
                              <div className="number">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    decrementCount(item._id);
                                  }}
                                  className="minus border-end-0"
                                >
                                  -
                                </button>
                                <div>
                                  <span>{item.quantity || 1}</span>
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    incrementCount(item._id);
                                  }}
                                  className="plus border-start-0"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="subTotal">₹{(item.selectedPrice || item.Salesprice) * (item.quantity || 1)}</div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-5">
              <div className="optionCart">
                <div className="coupon">
                  <form action="">
                    <input
                      type="text"
                      placeholder="Enter Coupon Code"
                    />
                    <a href="" className="btn1">
                      APPLY COUPON
                    </a>
                  </form>
                </div>

                <div className="recommendedServices">
                  <Swiper
                    loop={true}
                    slidesPerView={1.5}
                    spaceBetween={10}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                  >
                    {cart.length === 0 ? (
                      <SwiperSlide>
                        <p>Your cart is empty</p>
                      </SwiperSlide>
                    ) : (
                      cart.map((item) => (
                        <SwiperSlide key={item._id}>
                          <div className="product">
                            <div className="details">
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                              <div className="price">
                                <div className="new">₹{item.selectedPrice || item.Salesprice}</div>
                                <div className="old">₹{item.price}</div>
                              </div>
                            </div>

                            <div className="rightbox">
                              <div className="photo">
                                <img
                                  src={`${url.nodeapipath}/uploads/${item.avatarImages}`}
                                  alt={item.avatarImages}
                                />
                              </div>
                              <button
                                onClick={() => incrementCount(item._id)}
                                className="btn1"
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))
                    )}
                  </Swiper>
                </div>

                <div className="sec mt-3">
                  <h3 className="title">Subtotal</h3>
                  <div className="price">₹{calculateSubtotal()}</div>
                </div>
                <div className="sec">
                  <h3 className="title">Shipping Charges</h3>
                  <div className="price">
                    {deliveryCharges === 0 ? "Free" : `₹${deliveryCharges}`}
                  </div>
                </div>
                <div className="sec">
                  <h3 className="title">Coupon Discount</h3>
                </div>
                <div className="sec">
                  <h3 className="titleTotal">Total</h3>
                  <div className="priceTotal">₹{totalAmount}</div>
                </div>
                <div className="sec">
                  <button onClick={handleCheckout} className="btn2">
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FrontendFooter />
    </>
  );
}








