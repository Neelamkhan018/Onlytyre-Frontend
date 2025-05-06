
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import {  matchPath } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';

// import '../src/assets/scss/ekka.css';

// import '../src/assets/scss/ekka.css.map'

import Home from './Component/Home/Home.js';
import Mainheader from './Component/MainHeader/Mainheader.js';
import Showproduct from './Component/showProduct/Showproduct.js';
import FrontendFooter from './Component/Footer/FrontendFooter.js';
import ProductDeatails from './Component/ProductDetails/ProductDeatails.js';
import AddtoCart from './Component/AddtoCart/AddtoCart.js';
import HeaderMenu from './Component/Menu/HeaderMenu.js';
import Buynow from './Component/Buynow/Buynow.js';
import Register from './Component/FrontendLogin/Register.js';
import FrontendLogin from './Component/FrontendLogin/Login.js';
import AddressBook from './Component/Customer-Dashboard/AddressBook.js';
import Myaccount from './Component/Customer-Dashboard/Myaccount.js';
import Myorders from './Component/Customer-Dashboard/Myorders.js';
import Forcar from './Component/Carbrand/Forcar.js';
import ForBike from './Component/Bike/ForBike.js';
import SearchBike from './Component/Bike/Searchbike.js';
import Searchcar from './Component/Carbrand/Searchcar.js';
import Slidercart from './Component/Slidercart/Slidercart.js';
import BillingAddress from './Component/Customer-Dashboard/BillingAddress.js';
import Shippingaddress from './Component/Customer-Dashboard/ShippingAddress.js';
import BestDeal from './Component/Bestdeal/Bestdeal.js';
import Tyres from './Component/Tyres/Tyres.js';
import Loginpage from './Component/FrontendLogin/Loginpage.js';
import Searchsize from './Component/Searchsize/Searchsize.js';
import ForTruck from './Component/Truck/ForTruck.js';
import SearchTruck from './Component/Truck/SearchTruck.js';
import ForTractor from './Component/Tractor/ForTractor.js';
import SearchTractor from './Component/Tractor/SearchTractor.js';
import Batteries from './Component/Battery/Batteries.js';
import AlloyWheels from './Component/AlloyWheel/AlloyWheel.js';
import Accessories from './Component/Accessories/Accessories.js';
import Wishlist from './Component/Customer-Dashboard/Wishlist.js';
import AccountDetails from './Component/Customer-Dashboard/AccountDetails.js';
import AccountOrderView from './Component/Customer-Dashboard/AccountOrdersView.js';





export default function App() {
    const [cart, setCart] = useState([]);
 


  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);



  const addToCart = (newItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item._id === newItem._id);
      let updatedCart;

      if (existingItem) {
        // If the item already exists in the cart, increase its count
        updatedCart = prevCart.map(item =>
          item._id === newItem._id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        // If the item is new, set initial date and time for the item
        newItem.count = 1;
        newItem.selectedDate = new Date(); // Default to the current date/time
        updatedCart = [...prevCart, newItem];
      }

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };


  function HeaderMenuWrapper({ cart }) {
    const location = useLocation();
    
    // Define frontend routes where HeaderMenu should be displayed
    const frontendRoutes = [
        '/', '/main', '/menu', '/show', '/addtocart', '/Shipping' ,
        '/forcar', '/forbike', '/tyres', '/Loginpage','/billing' ,
        '/front-register', '/bestdeal', '/forTruck', '/forTractor' ,
        '/batteries' , '/alloywheel' , '/accessories' , '/my-account' , 
        '/my-orders' ,'/address-Book' , '/Acc-details' , '/Wishlist' , '/accountorderview'
    ];
  
    // Check if the current route matches a static route
    const isStaticRoute = frontendRoutes.includes(location.pathname);
  
    // Check if the current route matches any specific dynamic route
    const isSearchBikeRoute = matchPath("/Searchbike/:tyreType/:bikeBrand/:bikeModel/:tyreBrand/:season", location.pathname);
    const isSearchCarRoute = matchPath("/Searchcar/:tyreType/:carBrand/:carModel/:tyreBrand/:season", location.pathname);
    const isSearchTruckRoute = matchPath("/SearchTruck/:tyreType/:TruckBrand/:TruckModel/:tyreBrand/:season", location.pathname);
    const isSearchTractorRoute = matchPath("/SearchTractor/:tyreType/:TractorBrand/:TractorModel/:tyreBrand/:season", location.pathname); // ✅ New route
    const isSearchSizeRoute = matchPath("/Searchsize/:width/:height/:customs/:seasons", location.pathname);
  
    // General dynamic route pattern
    const isDynamicRoute = matchPath("/:tyreType/:slug", location.pathname) || 
                           isSearchBikeRoute || 
                           isSearchCarRoute || 
                           isSearchTruckRoute || 
                           isSearchTractorRoute ||  // ✅ Included here too
                           isSearchSizeRoute;
  
    // Render HeaderMenu if the route matches
    if (isStaticRoute || isDynamicRoute) {
        return <HeaderMenu cart={cart} />;
    }
  
    return null; // Return nothing if no matching route
  }
  


 
    return (
        <>
         
            <Router>
          
            <HeaderMenuWrapper cart={cart} />
                <Routes>

                    {/* Dashboard */}
                   

                  
                   {/* Frontend  */}

                   {/* <HeaderMenu cart={cart} /> */}
                    <Route path="/" element={<Home/>} />
                    <Route path="/main" element={<Mainheader/>} />
                    {/* <Route path="/menu" element={<HeaderMenu />} /> */}
                    <Route path="/show" element={<Showproduct />} />
                    <Route path="/footer" element={<FrontendFooter />} />
                    <Route path="/:tyreType/:slug" element={<ProductDeatails addToCart={addToCart} />} />
                    <Route path="/addtocart" element={<AddtoCart cart={cart}/>} />
                    <Route path="/buy" element={<Buynow />} />
                    <Route path="/front-register" element={<Register/>} />
                    <Route path="/front-login" element={<FrontendLogin/>} />
                    <Route path="/address-book" element={<AddressBook/>} />
                    <Route path="/my-account" element={<Myaccount />} />            
                    <Route path="/my-orders" element={<Myorders/>} />
                    <Route path="/Wishlist" element={<Wishlist/>} />
                    <Route path="/Acc-details" element={<AccountDetails/>} />

                    <Route path="/forcar" element={<Forcar/>} />
                    <Route path="/forbike" element={<ForBike/>} />
                    <Route path="/Searchbike/:tyreType/:bikeBrand/:bikeModel/:tyreBrand/:season" element={<SearchBike />} />
                    <Route path="/Searchcar/:tyreType/:carBrand/:carModel/:tyreBrand/:season" element={<Searchcar />} />
                    <Route path="/Slidercart" element={<Slidercart/>} />
                    <Route path="/billing" element={<BillingAddress/>} />
                    <Route path="/Shipping" element={<Shippingaddress/>} />
                    <Route path="/bestdeal" element={<BestDeal/>} />
                    <Route path="/tyres" element={<Tyres/>} />
                    <Route path="/Slidercart" element={<Slidercart cart={cart} />} />
                    <Route path="/Loginpage" element={<Loginpage/>} />
                    <Route path="/Searchsize/:width/:height/:customs/:seasons" element={<Searchsize/>} />

                    <Route path="/forTruck" element={<ForTruck/>} />
                    <Route path="/SearchTruck/:tyreType/:TruckBrand/:TruckModel/:tyreBrand/:season" element={<SearchTruck/>} />

                    <Route path="/forTractor" element={<ForTractor/>} />
                    <Route path="/SearchTractor/:tyreType/:TractorBrand/:TractorModel/:tyreBrand/:season" element={<SearchTractor/>} />

                    <Route path="/batteries" element={<Batteries/>} />

                    <Route path="/alloywheel" element={<AlloyWheels/>} />

                    <Route path="/accessories" element={<Accessories/>} />

                    <Route path="/accountorderview" element={<AccountOrderView/>} />








                </Routes>
                
            </Router>
            
        </>
    );
}



