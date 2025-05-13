


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);



 const [loggedInUser, setLoggedInUser] = useState("");
  



useEffect(() => {
  const storedUser = localStorage.getItem('loggedInUser');
  if (storedUser) {
    setLoggedInUser(storedUser);
  }
}, []);




   const handleLogout = () => {
    setLoggedInUser (null);
    localStorage.removeItem('loggedInUser');  // ✅ CORRECTED key
  };





  // useEffect(() => {
  //   const loadWishlist = () => {
  //     const storedWishlist = localStorage.getItem("wishlist");
  //     if (storedWishlist) {
  //       setWishlist(JSON.parse(storedWishlist));
  //     } else {
  //       setWishlist([]);
  //     }
  //   };

  //   loadWishlist();

  //   window.addEventListener("wishlistUpdated", loadWishlist);

  //   return () => {
  //     window.removeEventListener("wishlistUpdated", loadWishlist);
  //   };
  // }, []);




useEffect(() => {
  const storedUser = localStorage.getItem('loggedInUser');
  if (storedUser) {
    setLoggedInUser(storedUser);
  }
}, []);

useEffect(() => {
  if (!loggedInUser) return;

  const key = `wishlist_${loggedInUser}`;

  const loadWishlist = () => {
    const storedWishlist = localStorage.getItem(key);
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    } else {
      setWishlist([]);
    }
  };

  loadWishlist();

  window.addEventListener("wishlistUpdated", loadWishlist);

  return () => {
    window.removeEventListener("wishlistUpdated", loadWishlist);
  };
}, [loggedInUser]);




  const handleRemove = (id) => {
  const key = `wishlist_${loggedInUser}`;
  const updatedWishlist = wishlist.filter((item) => item._id !== id);
  localStorage.setItem(key, JSON.stringify(updatedWishlist));
  setWishlist(updatedWishlist);
  window.dispatchEvent(new Event("wishlistUpdated"));
};


  return (
    <>
      <section className="titleBanner">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column align-items-center">
              <h1>My Account</h1>
              <ul>
                <li>
                  <Link to="/">HOME</Link>
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
                        <li><a href="/Acc-details">Account details</a></li>
                        <li className="active"><a href="/Wishlist">Wishlist</a></li>
                        <li><a href="" onClick={handleLogout}>Logout</a></li>
                    </ul>
                </div>

            <div className="col-md-9">
              <div className="row">
                {wishlist.length === 0 ? (
                  <p>Your wishlist is empty.</p>
                ) : (
                  wishlist.map((item) => (
                    <div className="col-md-3" key={item._id}>
                      <div className="singleProduct">
                        <div className="photo">
                          {item.sale && <div className="sale">SALE</div>}
                          {item.isNew && <div className="new">NEW</div>}
                          <ul className="cate">
                            {item.icons?.includes("bike") && (
                              <li>
                                <img
                                  src="/assets/images/icons/png/bike.png"
                                  className="bike"
                                  alt=""
                                />
                              </li>
                            )}
                            {item.icons?.includes("car") && (
                              <li>
                                <img
                                  src="/assets/images/icons/png/car.png"
                                  className="car"
                                  alt=""
                                />
                              </li>
                            )}
                            {item.icons?.includes("front") && (
                              <li>
                                <img
                                  src="/assets/images/icons/png/front.png"
                                  className="front"
                                  alt=""
                                />
                              </li>
                            )}
                            {item.icons?.includes("rear") && (
                              <li>
                                <img
                                  src="/assets/images/icons/png/rear.png"
                                  className="rear"
                                  alt=""
                                />
                              </li>
                            )}
                          </ul>
                <img src={`https://tyres.blr1.digitaloceanspaces.com/${item.avatarImages}`} alt={item.avatarImages} />

                        </div>
                        <div className="details">
                          {/* <div className="brand">{item.brand || "Brand"}</div> */}
                          <h2>{item.title}</h2>
                          {/* Price Section */}
                        <div className="price">
                         {item && item.price && <div className="new">₹{item.Salesprice}</div>}
                         <div className="old">₹{item ? item.price : "Default Price"}</div>
                        </div>
                        
                          <button
                            onClick={() => handleRemove(item._id)}
                            className="btn1"
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
