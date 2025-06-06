





// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import FrontendLogin from '../FrontendLogin/Login';
// import Slidercart from '../Slidercart/Slidercart';

// export default function HeaderMenu({ cart }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [loggedInUser, setLoggedInUser] = useState(null);
  

//   useEffect(() => {
//     // Retrieve logged-in user from localStorage on component mount
//     const storedUser = localStorage.getItem('loggedInUser');
//     if (storedUser) {
//       setLoggedInUser(storedUser);
//     }
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const cartCount = Array.isArray(cart) ? cart.reduce((count, item) => count + (item.count || 0), 0) : 0;

//   const handleLoginSuccess = (email) => {
//     setLoggedInUser(email); // Set the logged-in user's email
//     localStorage.setItem('loggedInUser', email); // Save to localStorage
//   };

//   const handleLogout = () => {
//     setLoggedInUser(null); // Clear the logged-in user state
//     localStorage.removeItem('loggedInUser'); // Remove from localStorage
//   };

//   return (
//     <>
//       <header>
//         <div className="topHeader">
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <p>Free Shipping | Payment Plans Available At Checkout!</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mainHeader">
//           <div className="container">
//             <div className="row">
//               <div className="wrapper">
//                 <div
//                   className="mobileMenu"
//                   onClick={toggleMenu}
//                   data-bs-toggle="offcanvas"
//                   data-bs-target="#menuBox"
//                   aria-controls="menuBox"
//                 >
//                   <img src="/assets/images/icons/svg/menu.svg" alt="Menu" />
//                 </div>

//                 <Link to="/" className="logo">
//                   <img src="/assets/images/logo/logo.png" alt="Logo" />
//                 </Link>

//                 <ul className={`desktopNav ${menuOpen ? 'open' : ''}`}>
//                   <li><Link to="/">HOME</Link></li>
//                   <li><Link to="/bestdeal">BEST DEAL</Link></li>
//                   <li><Link to="/tyres">TYRES</Link></li>
//                   <li><Link to="/forcar">FOR CAR</Link></li>
//                   <li><Link to="/forbike">FOR BIKE</Link></li>
//                   <li><Link to="/forTruck">FOR TRUCK</Link></li>
//                   <li><Link to="/forTractor">FOR TRACTOR</Link></li>
//                 </ul>


                

//                 <div className="userMenu">
//                   <ul>
//                     <li><a href="#"><img src="/assets/images/icons/svg/wishlist.svg" alt="Wishlist" /></a></li>
//                     <li>
//                       <a
//                         href="#"
//                         className="cart"
//                         data-bs-toggle="offcanvas"
//                         data-bs-target="#cartBox"
//                         aria-controls="cartBox"
//                       >
//                         <img src="/assets/images/icons/svg/cart.svg" alt="Cart" />
//                         {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
//                       </a>
//                     </li>
//                   </ul>

//                   {/* Display email when user is logged in */}
//                   {loggedInUser ? (
//                     <div className="btn-group loggedIN">
//                       <button
//                         type="button"
//                         className="btn btn-secondary"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                       >
//                         {/* <div className="profile">N</div> */}
//                         <div className="profile">{loggedInUser.charAt(0).toUpperCase()}</div> {/* Display first letter of logged-in user's name */}
//                         <div className="name">{loggedInUser}</div> {/* Display logged-in email */}
//                       </button>
//                       <ul className="dropdown-menu dropdown-menu-end">
//                         <li><Link to="my-account" className="dropdown-item">Edit Profile</Link></li>
//                         <li><Link to="#" className="dropdown-item">Subscription details</Link></li>
//                         <li><Link to="#" className="dropdown-item">Billing History</Link></li>
//                         <li>
//                           <Link to="#" className="dropdown-item" onClick={handleLogout}>
//                             <img src="/assets/images/icons/svg/logout-2.svg" alt="Logout" /> Logout
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   ) : (
//                     <Link
//                       to="#"
//                       className="btn1"
//                       data-bs-toggle="offcanvas"
//                       data-bs-target="#loginBox"
//                       aria-controls="loginBox"
//                     >
//                       <img src="/assets/images/icons/svg/user.svg" alt="User Icon" />
//                       <span>Login/Register</span>
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <FrontendLogin onLoginSuccess={handleLoginSuccess} />

//       <Slidercart  cart={cart}/>
//     </>
//   );
// }





// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import FrontendLogin from '../FrontendLogin/Login';
// import Slidercart from '../Slidercart/Slidercart';

// export default function HeaderMenu({ cart }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [cartCount, setCartCount] = useState(0);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('loggedInUser');
//     if (storedUser) {
//       setLoggedInUser(storedUser);
//     }

//     const loadCart = () => {
//       const storedCart = localStorage.getItem('cart');
//       if (storedCart) {
//         const cartItems = JSON.parse(storedCart);
//         setCartCount(cartItems.reduce((count, item) => count + (item.count || 0), 0));
//       }
//     };

//     loadCart();

//     window.addEventListener('cartUpdated', loadCart);
//     return () => window.removeEventListener('cartUpdated', loadCart);
//   }, []);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const handleLoginSuccess = (email) => {
//     setLoggedInUser(email);
//     localStorage.setItem('loggedInUser', email);
//   };

//   const handleLogout = () => {
//     setLoggedInUser(null);
//     localStorage.removeItem('loggedInUser');
//   };

//   return (
//     <>
//       <header>
//         <div className="topHeader">
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <p>Free Shipping | Payment Plans Available At Checkout!</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mainHeader">
//           <div className="container">
//             <div className="row">
//               <div
//                 className="wrapper"
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                   flexWrap: 'wrap'
//                 }}
//               >
//                 <div
//                   className="mobileMenu"
//                   onClick={toggleMenu}
//                   data-bs-toggle="offcanvas"
//                   data-bs-target="#menuBox"
//                   aria-controls="menuBox"
//                 >
//                   <img src="/assets/images/icons/svg/menu.svg" alt="Menu" />
//                 </div>

//                 <Link to="/" className="logo">
//                   <img src="/assets/images/logo/logo.png" alt="Logo" />
//                 </Link>

//                 <ul
//                   className={`desktopNav ${menuOpen ? 'open' : ''}`}
//                   style={{
//                     display: 'flex',
//                     listStyle: 'none',
//                     padding: 0,
//                     margin: 0,
//                     flexWrap: 'nowrap',
//                     gap: '20px',
//                     alignItems: 'center',
//                     whiteSpace: 'nowrap'
//                   }}
//                 >
//                   <li><Link to="/">HOME</Link></li>
//                   <li><Link to="/bestdeal">BEST DEAL</Link></li>
//                   <li><Link to="/tyres">TYRES</Link></li>
//                   <li><Link to="/forcar">CAR</Link></li>
//                   <li><Link to="/forbike">BIKE</Link></li>

//                   <li
//                     style={{ position: 'relative' }}
//                     onMouseEnter={() => setDropdownOpen(true)}
//                     onMouseLeave={() => setDropdownOpen(false)}
//                   >
//                     <Link to="#">HEAVY VEHICLES</Link>
//                     <ul
//                       style={{
//                         position: 'absolute',
//                         top: '100%',
//                         left: 0,
//                         display: dropdownOpen ? 'block' : 'none',
//                         listStyle: 'none',
//                         padding: 0,
//                         margin: 0,
//                         backgroundColor: 'white',
//                         boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
//                         zIndex: 1000
//                       }}
//                     >
//                       <li style={{ padding: '10px 15px' }}>
//                         <Link to="/forTruck" style={{ textDecoration: 'none', color: 'black' }}>TRUCK</Link>
//                       </li>
//                       <li style={{ padding: '10px 15px' }}>
//                         <Link to="/forTractor" style={{ textDecoration: 'none', color: 'black' }}>TRACTOR</Link>
//                       </li>

//                       <li style={{ padding: '10px 15px' }}>
//                         <Link to="/accessories" style={{ textDecoration: 'none', color: 'black' }}>ACCESSORIES</Link>
//                       </li>
                     
//                     </ul>
//                   </li>

//                   <li><Link to="/batteries">BATTERIES</Link></li> 
//                   <li><Link to="/alloywheel">ALLOY WHEEL</Link></li>
                


                 

//                 </ul>

//                 <div className="userMenu">
//                   <ul>
//                     <li>
//                       <a href="#"><img src="/assets/images/icons/svg/wishlist.svg" alt="Wishlist" /></a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="cart"
//                         data-bs-toggle="offcanvas"
//                         data-bs-target="#cartBox"
//                         aria-controls="cartBox"
//                       >
//                         <img src="/assets/images/icons/svg/cart.svg" alt="Cart" />
//                         {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
//                       </a>
//                     </li>
//                   </ul>

//                   {loggedInUser ? (
//                     <div className="btn-group loggedIN">
//                       <button
//                         type="button"
//                         className="btn btn-secondary"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                       >
//                         <div className="profile">{loggedInUser.charAt(0).toUpperCase()}</div>
//                         <div className="name">{loggedInUser}</div>
//                       </button>
//                       <ul className="dropdown-menu dropdown-menu-end">
//                         <li><Link to="/my-account" className="dropdown-item">Edit Profile</Link></li>
//                         <li><Link to="#" className="dropdown-item">Subscription details</Link></li>
//                         <li><Link to="#" className="dropdown-item">Billing History</Link></li>
//                         <li>
//                           <Link to="#" className="dropdown-item" onClick={handleLogout}>
//                             <img src="/assets/images/icons/svg/logout-2.svg" alt="Logout" /> Logout
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   ) : (
//                     <Link
//                       to="#"
//                       className="btn1"
//                       data-bs-toggle="offcanvas"
//                       data-bs-target="#loginBox"
//                       aria-controls="loginBox"
//                     >
//                       <img src="/assets/images/icons/svg/user.svg" alt="User Icon" />
//                       <span>Login/Register</span>
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <FrontendLogin onLoginSuccess={handleLoginSuccess} />
//       <Slidercart cart={cart} />
//     </>
//   );
// }










import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FrontendLogin from '../FrontendLogin/Login';
import Slidercart from '../Slidercart/Slidercart';

export default function HeaderMenu({ cart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [wishlistCount, setWishlistCount] = useState(0);


  
useEffect(() => {
  const storedUser = localStorage.getItem('loggedInUser');
  if (!storedUser) return;

  setLoggedInUser(storedUser);

  const wishlistKey = `wishlist_${storedUser}`;
  const cartKey = `cart_${storedUser}`;

  // const loadCart = () => {
  //   const storedCart = localStorage.getItem(cartKey);
  //   if (storedCart) {
  //     const cartItems = JSON.parse(storedCart);
  //     setCartCount(cartItems.reduce((count, item) => count + (item.count || 1), 0));
  //   } else {
  //     setCartCount(0);
  //   }
  // };

      const loadCart = () => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        const cartItems = JSON.parse(storedCart);
        setCartCount(cartItems.reduce((count, item) => count + (item.count || 0), 0));
      }
    };

  const loadWishlist = () => {
    const storedWishlist = localStorage.getItem(wishlistKey);
    if (storedWishlist) {
      const wishlistItems = JSON.parse(storedWishlist);
      setWishlistCount(wishlistItems.length);
    } else {
      setWishlistCount(0);
    }
  };

  loadCart();
  loadWishlist();

  window.addEventListener('cartUpdated', loadCart);
  window.addEventListener('wishlistUpdated', loadWishlist);

  return () => {
    window.removeEventListener('cartUpdated', loadCart);
    window.removeEventListener('wishlistUpdated', loadWishlist);
  };
}, []);




  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLoginSuccess = (email) => {
    setLoggedInUser(email);
    localStorage.setItem('loggedInUser', email);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <>
      <header>
        <div className="topHeader">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>Free Shipping | Payment Plans Available At Checkout!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mainHeader">
          <div className="container">
            <div className="row">
              <div
                className="wrapper"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap'
                }}
              >
                <div
                  className="mobileMenu"
                  onClick={toggleMenu}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#menuBox"
                  aria-controls="menuBox"
                >
                  <img src="/assets/images/icons/svg/menu.svg" alt="Menu" />
                </div>

                <Link to="/" className="logo">
                  <img src="/assets/images/logo/logo.png" alt="Logo" />
                </Link>

                {/* <ul
                  className={`desktopNav ${menuOpen ? 'open' : ''}`}
                  style={{
                    display: 'flex',
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    flexWrap: 'nowrap',
                    gap: '20px',
                    alignItems: 'center',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <li><Link to="/">HOME</Link></li>
                  <li><Link to="/bestdeal">BEST DEAL</Link></li>
                  <li><Link to="/tyres">TYRES</Link></li>
                  <li><Link to="/forcar">CAR</Link></li>
                  <li><Link to="/forbike">BIKE</Link></li>

                  <li
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link to="#">HEAVY VEHICLES</Link>
                    <ul
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        display: dropdownOpen ? 'block' : 'none',
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        backgroundColor: 'white',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                        zIndex: 1000
                      }}
                    >
                      <li style={{ padding: '10px 15px' }}>
                        <Link to="/forTruck" style={{ textDecoration: 'none', color: 'black' }}>TRUCK</Link>
                      </li>
                      <li style={{ padding: '10px 15px' }}>
                        <Link to="/forTractor" style={{ textDecoration: 'none', color: 'black' }}>TRACTOR</Link>
                      </li>
                     
                    </ul>
                  </li>
                   <li><Link to="/accessories">ACCESSORIES</Link></li>
                  <li><Link to="/batteries">BATTERIES</Link></li> 
                  <li><Link to="/alloywheel">ALLOY WHEEL</Link></li>
                


                 

                </ul> */}
                

                <ul 
  className={`navbar-nav d-flex flex-lg-row flex-column gap-3 align-items-lg-center desktopNav ${menuOpen ? 'open' : ''}`} 
  style={{
    display: 'flex',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    gap: window.innerWidth <= 768 ? '10px' : '20px',
    alignItems: window.innerWidth <= 768 ? 'flex-start' : 'center',
    whiteSpace: 'nowrap'
  }}
>
  <li><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>HOME</Link></li>
  <li><Link to="/bestdeal" style={{ textDecoration: 'none', color: 'black' }}>BEST DEAL</Link></li>
  <li><Link to="/tyres" style={{ textDecoration: 'none', color: 'black' }}>TYRES</Link></li>
  <li><Link to="/forcar" style={{ textDecoration: 'none', color: 'black' }}>CAR</Link></li>
  <li><Link to="/forbike" style={{ textDecoration: 'none', color: 'black' }}>BIKE</Link></li>


  <li
    style={{ position: 'relative', cursor: 'pointer' }}
    onMouseEnter={() => setDropdownOpen('heavy')}
    onMouseLeave={() => setDropdownOpen(null)}
  >
    <Link
      to="#"
      style={{
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        gap:'5px',
      }}
    >
      HEAVY VEHICLES <span style={{ fontSize: '0.7em', marginTop: '2px' }}>▼</span>
    </Link>

    <ul
      style={{
        position: window.innerWidth <= 768 ? 'static' : 'absolute',
        top: window.innerWidth <= 768 ? 'auto' : '100%',
        left: 0,
        display: dropdownOpen === 'heavy' ? 'block' : 'none',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        backgroundColor: 'white',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
        borderRadius: '6px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        minWidth: '180px'
      }}
    >
      <li style={{ padding: '12px 16px', cursor: 'pointer' }}>
        <Link to="/forTruck" style={{ textDecoration: 'none', color: 'black' }}>TRUCK</Link>
      </li>
      <li style={{ padding: '12px 16px', cursor: 'pointer' }}>
        <Link to="/forTractor" style={{ textDecoration: 'none', color: 'black' }}>TRACTOR</Link>
      </li>
    </ul>
  </li>


  <li
    style={{ position: 'relative', cursor: 'pointer' }}
    onMouseEnter={() => setDropdownOpen('parts')}
    onMouseLeave={() => setDropdownOpen(null)}
  >
    <Link
      to="#"
      style={{
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
      }}
    >
      PARTS & ACCESSORIES <span style={{ fontSize: '0.7em', marginTop: '2px' }}>▼</span>
    </Link>

    <ul
      style={{
        position: window.innerWidth <= 768 ? 'static' : 'absolute',
        top: window.innerWidth <= 768 ? 'auto' : '100%',
        left: 0,
        display: dropdownOpen === 'parts' ? 'block' : 'none',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        backgroundColor: 'white',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
        borderRadius: '6px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        minWidth: '180px'
      }}
    >
      <li style={{ padding: '12px 16px', cursor: 'pointer' }}>
        <Link to="/accessories" style={{ textDecoration: 'none', color: 'black' }}>ACCESSORIES</Link>
      </li>
      <li style={{ padding: '12px 16px', cursor: 'pointer' }}>
        <Link to="/batteries" style={{ textDecoration: 'none', color: 'black' }}>BATTERIES</Link>
      </li>
      <li style={{ padding: '12px 16px', cursor: 'pointer' }}>
        <Link to="/alloywheel" style={{ textDecoration: 'none', color: 'black' }}>ALLOY WHEEL</Link>
      </li>
    </ul>
  </li>
</ul>


                <div className="userMenu">
                  <ul>
<li style={{ position: "relative", display: "inline-block" }}>
  <Link to="/Wishlist">
    <img
      src="/assets/images/icons/svg/wishlist.svg"
      alt="Wishlist"
      style={{ width: "24px", height: "auto" }}
    />
    {wishlistCount > 0 && (
      <span
        style={{
          position: "absolute",
          top: "-5px",
          right: "-5px",
          backgroundColor: "red",
          color: "white",
          fontSize: "10px",
          fontWeight: "bold",
          borderRadius: "50%",
          padding: "2px 6px",
          minWidth: "18px",
          height: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "1",
        }}
      >
        {wishlistCount}
      </span>
    )}
  </Link>
</li>


                    <li>
                      <a
                        href="#"
                        className="cart"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#cartBox"
                        aria-controls="cartBox"
                      >
                        <img src="/assets/images/icons/svg/cart.svg" alt="Cart" />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                      </a>
                    </li>
                  </ul>

                  {loggedInUser ? (
                    <div className="btn-group loggedIN">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="profile">{loggedInUser.charAt(0).toUpperCase()}</div>
                        <div className="name">{loggedInUser}</div>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li><Link to="/my-account" className="dropdown-item">Edit Profile</Link></li>
                      {/* <li><Link to="#" className="dropdown-item">Subscription details</Link></li>
                        <li><Link to="#" className="dropdown-item">Billing History</Link></li> */}
                        <li>
                          <Link to="#" className="dropdown-item" onClick={handleLogout}>
                            <img src="/assets/images/icons/svg/logout-2.svg" alt="Logout" /> Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link
                      to="#"
                      className="btn1"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#loginBox"
                      aria-controls="loginBox"
                    >
                      <img src="/assets/images/icons/svg/user.svg" alt="User Icon" />
                      <span>Login/Register</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <FrontendLogin onLoginSuccess={handleLoginSuccess} />
      <Slidercart cart={cart} />
    </>
  );
}
