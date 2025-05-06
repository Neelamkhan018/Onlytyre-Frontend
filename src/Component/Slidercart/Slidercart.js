


// import React, { useEffect, useState } from "react";


// const Slidercart = () => {
//   const [cart, setCart] = useState([]);



//   useEffect(() => {
//     const loadCart = () => {
//       const storedCart = localStorage.getItem('cart');
//       if (storedCart) {
//         setCart(JSON.parse(storedCart));
//       }
//     };
  
//     loadCart(); // Initial load
  
//     // Listen for custom event
//     window.addEventListener('cartUpdated', loadCart);
  
//     // Cleanup
//     return () => window.removeEventListener('cartUpdated', loadCart);
//   }, []);


//   const removeFromCart = (id) => {
//     const updatedCart = cart.filter(item => item._id !== id);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };


//   const calculateSubtotal = () => {
//     return cart.reduce((total, item) => total + (item.selectedPrice * (item.quantity || 1)), 0);
//   };


//   return (
//     <>
//       <div
//         className="offcanvas offcanvas-end rightboxCanvas"
//         tabIndex="-1"
//         id="cartBox"
//         aria-labelledby="cartBoxLabel"
//       >
//         <div className="offcanvas-header">
//           <h5 id="offcanvasRightLabel">Cart</h5>
//           <button
//             type="button"
//             className="btn-close text-reset"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div className="offcanvas-body">
       

// <ul className="modalCart">
//   {cart.length === 0 ? (
//     <li>Your cart is empty.</li>
//   ) : (
//     cart.map(item => (
//       <li key={item._id}>
//         <div className="photo">
//           <img src={`http://localhost:8000/uploads/${item.avatarImages}`} alt={item.title} />
//         </div>
//         <div className="details">
//           <div className="brand">{item.brand}</div>
//           <h2>{item.title}</h2>
//           <h3>₹{item.selectedPrice} × {item.quantity || 1} </h3> {/* Display selected price */}
//         </div>
//         <div className="close" onClick={() => removeFromCart(item._id)}>×</div>
//       </li>
//     ))
//   )}
// </ul>


//         </div>
//         <div className="offcanvas-footer">
//           <div className="total">
//             <h4>Subtotal</h4>
//             <div className="price">₹{calculateSubtotal()}</div>
//           </div>
//           <div>
//             <a href="/addtocart" className="btn2" >
//               CHECKOUT
//             </a>

            
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Slidercart;





import React, { useEffect, useState } from 'react';


import url from "../../env.js"



const Slidercart = ({ cart, setCart }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = () => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    };

    loadCart(); // Initial load

    // Listen for custom event
    window.addEventListener('cartUpdated', loadCart);

    // Cleanup
    return () => window.removeEventListener('cartUpdated', loadCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    // Dispatch a custom event to notify other components
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.selectedPrice * (item.quantity || 1)), 0);
  };

  return (
    <>
      <div
        className="offcanvas offcanvas-end rightboxCanvas"
        tabIndex="-1"
        id="cartBox"
        aria-labelledby="cartBoxLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Cart</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="modalCart">
            {cartItems.length === 0 ? (
              <li>Your cart is empty.</li>
            ) : (
              cartItems.map(item => (
                <li key={item._id}>
                  <div className="photo">
                    {/* <img src={`${url.nodeapipath}/uploads/${item.avatarImages}`} alt={item.title} /> */}
                <img src={`https://tyres.blr1.digitaloceanspaces.com/${item.avatarImages}`} alt={item.avatarImages} />

                  </div>
                  <div className="details">
                    <div className="brand">{item.brand}</div>
                    <h2>{item.title}</h2>
                    <h3>₹{item.selectedPrice} × {item.quantity || 1} </h3>
                  </div>
                  <div className="close" onClick={() => removeFromCart(item._id)}>×</div>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="offcanvas-footer">
          <div className="total">
            <h4>Subtotal</h4>
            <div className="price">₹{calculateSubtotal()}</div>
          </div>
          <div>
            <a href="/addtocart" className="btn2">
              CHECKOUT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slidercart;


