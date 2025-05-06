





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





import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FrontendLogin from '../FrontendLogin/Login';
import Slidercart from '../Slidercart/Slidercart';

export default function HeaderMenu({ cart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(storedUser);
    }

    const loadCart = () => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        const cartItems = JSON.parse(storedCart);
        setCartCount(cartItems.reduce((count, item) => count + (item.count || 0), 0));
      }
    };

    loadCart();

    window.addEventListener('cartUpdated', loadCart);
    return () => window.removeEventListener('cartUpdated', loadCart);
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

                <ul
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

                      <li style={{ padding: '10px 15px' }}>
                        <Link to="/accessories" style={{ textDecoration: 'none', color: 'black' }}>ACCESSORIES</Link>
                      </li>
                     
                    </ul>
                  </li>

                  <li><Link to="/batteries">BATTERIES</Link></li> 
                  <li><Link to="/alloywheel">ALLOY WHEEL</Link></li>
                


                 

                </ul>

                <div className="userMenu">
                  <ul>
                    <li>
                      <a href="#"><img src="/assets/images/icons/svg/wishlist.svg" alt="Wishlist" /></a>
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
                        <li><Link to="#" className="dropdown-item">Subscription details</Link></li>
                        <li><Link to="#" className="dropdown-item">Billing History</Link></li>
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
