

// import { useParams, Link } from 'react-router-dom';
// import FrontendFooter from '../Footer/FrontendFooter';
// import React, { useState, useEffect } from 'react'; // Add useEffect import
// import { Swiper, SwiperSlide } from 'swiper/react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


// const types = ["Home Delivery", "Get Fitted"];


// const Radio = ({ id, value, className, onChange, checked, ...args }) => {
//   return (
//     <div className="box">

//       <input
//         type="radio"
//         value={value}
//         id={id}
//         name="tabs"
//         onChange={onChange}
//         {...args}
//       />
//       <label htmlFor={id}>{value}</label>
//     </div>
//   );
// };


// const ProductDetails = ({ addToCart  }) => {
//     const [startDate, setStartDate] = useState(new Date());
//     const [thumbsSwiper, setThumbsSwiper] = useState(null);
//     const [value, setValue] = useState("One");

//   // const { id, tyreType , title  } = useParams();

//   const { slug, tyreType   } = useParams();
//   const [tyre, setTyre] = useState(null); // Change to handle a single tyre
//   const [successMessage, setSuccessMessage] = useState('');
//   const [cities, setCities] = useState([]);
//   const [quantity, setQuantity] = useState(1); 
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [selectedAddress, setSelectedAddress] = useState(null); // Track selected address
//   const [pincode, setPincode] = useState('');
//   const [leastTime, setLeastTime] = useState('');
//   const [addresses, setAddresses] = useState([]);
//   const [bikeBrandName, setBikeBrandName] = useState('');
//   const [bikeModelName, setBikeModelName] = useState('');

//    // Scroll to top when component mounts or slug/tyreType changes
//    useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [slug, tyreType]);

  
//   useEffect(() => {
//     if (tyre?.bikeBrand) {
//       fetch(`http://localhost:8000/get-bikebrand/${tyre.bikeBrand}`)
//         .then((res) => res.json())
//         .then((data) => setBikeBrandName(data.name));
//     }
  
//     if (tyre?.bikeModel) {
//       fetch(`http://localhost:8000/get-bikemodel/${tyre.bikeModel}`)
//         .then((res) => res.json())
//         .then((data) => setBikeModelName(data.name));
//     }
//   }, [tyre]);



// const fetchAddresses = async () => {
//   if (!leastTime) {
//       return;
//   }

//   console.log("Least Time:", leastTime);
//   console.log("Pincode:", pincode);
//   console.log("Tyre Object:", tyre); // Log the entire tyre object

//   const tyreId = tyre ? tyre._id : null; // Use _id instead of id
//   console.log("Tyre ID:", tyreId);

//   try {
//       const response = await fetch(`http://localhost:8000/get-addresses?leastTime=${leastTime}&pincode=${pincode}&tyreId=${tyreId}`);
//       const data = await response.json();

//       console.log(data); // Log the response data to check if prices are included

//       if (response.ok) {
//           if (data.businesses.length === 0) {
//               alert("No addresses available for the selected time slot.");
//           }
//           setAddresses(data.businesses);
//       } else {
//           alert(data.message || "No addresses found");
//           setAddresses([]);
//       }
//   } catch (error) {
//       console.error("Error fetching addresses:", error);
//       alert("Failed to fetch addresses");
//   }
// };


// useEffect(() => {
//   fetchAddresses();
// }, [leastTime, pincode]);  // Add pincode to the dependency array



// // useEffect(() => {
// //   const saveDeliveryOption = async () => {
// //     if (tyre && tyre._id && value && leastTime) {
// //       try {
// //         // Ensure proper case matching
// //         const formattedValue = types.find(t => t.toLowerCase() === value.toLowerCase());
        
// //         const response = await fetch('http://localhost:8000/select-delivery-option', {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //           body: JSON.stringify({
// //             tyreId: tyre._id,
// //             deliveryType: formattedValue,
// //             leastTime: leastTime
// //           }),
// //         });

// //         // ... rest of the code
// //       } catch (error) {
// //         console.error('Error saving delivery option:', error);
// //       }
// //     }
// //   };
// //   saveDeliveryOption();
// // }, [tyre, value, leastTime]);


// useEffect(() => {
//   const saveDeliveryOption = async () => {
//     console.log("Saving delivery option with:", {
//       tyreId: tyre?._id,
//       value,
//       leastTime
//     });

//     if (tyre && tyre._id && value && leastTime) {
//       try {
//         const formattedValue = types.find(t => t.toLowerCase() === value.toLowerCase());
//         console.log("Formatted Delivery Type:", formattedValue);

//         const response = await fetch('http://localhost:8000/select-delivery-option', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             tyreId: tyre._id,
//             deliveryType: formattedValue,
//             leastTime: leastTime
//           }),
//         });

//         const data = await response.json();
//         console.log("Delivery option save response:", data);
        
//         if (response.ok) {
//           console.log("✅ Delivery option saved successfully");
//         }
//       } catch (error) {
//         console.error('Error saving delivery option:', error);
//       }
//     }
//   };
//   saveDeliveryOption();
// }, [tyre, value, leastTime]);

//   useEffect(() => {
//     setLoading(true);  // Start loading
    
//     // Construct the URL with the slug
//     const encodedSlug = encodeURIComponent(slug);
//     const url = `http://localhost:8000/get-details/${encodedSlug}/${tyreType}`;

//     // Fetch data using the slug
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setTyre(data);  // Set tyre data to state
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setError('Failed to load tyre details. Please try again later.');
//       })
//       .finally(() => {
//         setLoading(false);  // Stop loading
//       });
//   }, [slug, tyreType]);  // Dependency array to re-fetch if slug or tyreType changes



// const handleSelectAddress = (address) => {
//   setSelectedAddress(address); // Set the selected address
//   // Assuming the address object has a prices array and you want to select the first price
//   if (address.prices && address.prices.length > 0) {
//     const selectedPrice = address.prices[0].price; // Get the first price
//     setTyre((prevTyre) => ({
//       ...prevTyre,
//       selectedPrice, // Add selected price to tyre object
//       clientId: address.clientId // Store the clientId of the selected address
//     }));
//   }
// };





// const handleAddToCart = (tyre) => {
//   // Debug: Check delivery type before adding to cart
//   console.log("Selected Delivery Type:", value);
//   console.log("Available Types:", types);

//   const cartItem = {
//     ...tyre,
//     scheduleDate: startDate,
//     leastTime: leastTime,  // Changed from timeSlot to leastTime
//     deliveryType: value, // Add this line to include delivery type
//     quantity: quantity,
//     selectedAddress: selectedAddress ? selectedAddress.storename : '',
//     selectedPrice: tyre.selectedPrice || 0,
//     clientId: tyre.clientId // Include the clientId of the selected dealer
//   };

//   // Debug: Log full cart item
//   console.log("Cart Item being added:", cartItem);
//   console.log("Does cartItem have deliveryType?", !!cartItem.deliveryType);

//   addToCart(cartItem);
//   setSuccessMessage('Item successfully added to cart!');
//   setTimeout(() => setSuccessMessage(''), 3000);
//   window.dispatchEvent(new Event('cartUpdated'));
// };



//   // Handle quantity increment
// const handleIncrement = () => {
//   setQuantity((prevQuantity) => prevQuantity + 1);
// };

// // Handle quantity decrement (ensure it doesn't go below 1)
// const handleDecrement = () => {
//   setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
// };

//   let isOne = value === "Home Delivery";
//   let isTwo = value === "GEt fitted";




//   return (
//     <>

// <section className="breadcrumbs">
//   <div className="container">
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       {tyre ? (
//         <li>{tyre.title}</li>
//       ) : (
//         <li>No tyres found</li>
//       )}
//     </ul>
//   </div>
// </section>


//       <section className="productPage | padding-block-900">
//         <div className="container">
//           <div className="row row-gap-4">
// <div className="col-md-6 slider">
//   <Swiper
//     spaceBetween={10}
//     navigation={true}
//     thumbs={{ swiper: thumbsSwiper }}
//     modules={[FreeMode, Navigation, Thumbs]}
//     className="mySwiper1"
//   >
//     {/* Render main tyre image */}
//     {tyre ? (
//       <SwiperSlide>
//         <img
//           src={`http://localhost:8000/uploads/${tyre.avatarImages}`}
//           alt={tyre.avatarImages}
//           className="avatarImages"
//         />
//       </SwiperSlide>
//     ) : (
//       <SwiperSlide>No tyre image available</SwiperSlide>
//     )}
//   </Swiper>

//   <Swiper
//     onSwiper={setThumbsSwiper}
//     spaceBetween={10}
//     slidesPerView={4}
//     freeMode={true}
//     watchSlidesProgress={true}
//     modules={[FreeMode, Navigation, Thumbs]}
//     className="mySwiper2"
//   >
//     {/* Render thumbnail images dynamically */}
//     {tyre ? (
//       <>
//         {tyre.thumb1Images && (
//           <SwiperSlide>
//             <img
//               src={`http://localhost:8000/uploads/${tyre.thumb1Images}`}
//               alt={tyre.thumb1Images}
//               className="thumb1Images"
//             />
//           </SwiperSlide>
//         )}
//         {tyre.thumb2Images && (
//           <SwiperSlide>
//             <img
//               src={`http://localhost:8000/uploads/${tyre.thumb2Images}`}
//               alt={tyre.thumb2Images}
//               className="thumb2Images"
//             />
//           </SwiperSlide>
//         )}
//         {tyre.thumb3Images && (
//           <SwiperSlide>
//             <img
//               src={`http://localhost:8000/uploads/${tyre.thumb3Images}`}
//               alt={tyre.thumb3Images}
//               className="thumb3Images"
//             />
//           </SwiperSlide>
//         )}
//         {tyre.thumb4Images && (
//           <SwiperSlide>
//             <img
//               src={`http://localhost:8000/uploads/${tyre.thumb4Images}`}
//               alt={tyre.thumb4Images}
//               className="thumb4Images"
//             />
//           </SwiperSlide>
//         )}
//       </>
//     ) : (
//       <SwiperSlide>No thumbnails available</SwiperSlide>
//     )}
//   </Swiper>
// </div>



//             <div className="col-md-6">
//               <div className="details-wrapper">
                

// <div className="head">
//   {/* Brand Logos */}
//   <div className="logo">
//     {tyre && tyre.tyreBrand && tyre.tyreBrand.map((brand, index) => (
//       <div key={index}>
//         {brand.image && brand.image.length > 0 && (
//           brand.image.map((imageItem, idx) => (
//             <img 
//               key={idx} 
//               src={`http://localhost:8000/uploads/${imageItem}`} 
//               alt={`brand-logo-${idx}`} 
//               className="brand-logo" 
//             />
//           ))
//         )}
//       </div>
//     ))}
//   </div>

//   {/* Brand Title */}
//   <h1>{tyre ? tyre.title : "Default Title"}</h1>

//   {/* Price Section */}
//   <div className="price">
//     {tyre && tyre.Salesprice && <div className="new">₹{tyre.Salesprice}</div>}
//     <div className="old">₹{tyre ? tyre.price : "Default Price"}</div>
//   </div>

//   {/* Description */}
//   <p>
//     {tyre ? tyre.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit bibendum ligula vitae porta. Nam nec arcu id velit auctor convallis. Quisque ornare accumsan nibh, eu iaculis metus ultrices sit amet."}
//   </p>
// </div>



                
// <div className="tabs">
//   {types.map((item) => (
//     <Radio
//       key={item}
//       id={item.replace(/\s+/g, '-').toLowerCase()}
//       value={item}
//       checked={value === item}
//       onChange={(e) => {
//         console.log("Delivery Type Changed:", e.target.value);
//         setValue(e.target.value);
//       }}
//     />
//   ))}
// </div>

//                 {value === types[0] && <p></p>}
//                 {value === types[1] && (
               

//     <div className="address">
//   <form
//     onSubmit={(e) => {
//       e.preventDefault(); // Prevent form submission
//       fetchAddresses(); // Trigger address fetch manually (if needed)
//     }}
//   >
//     <div className="row">
//       <div className="col-6 col-md-4">
//         <label htmlFor="pincode">Enter Pincode</label>
//         <input
//           type="text"
//           id="pincode"
//           value={pincode}
//           onChange={(e) => setPincode(e.target.value)}
//         />
//       </div>
//       <div className="col-6 col-md-4">
//         <label htmlFor="date">Select Date</label>
//         <DatePicker
//           id="date"
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//         />
//       </div>

// <div className="col-6 col-md-4">
//     <label htmlFor="time-slot">Select Time Slot</label>
//     <select
//         id="time-slot"
//         value={leastTime}
//         onChange={(e) => setLeastTime(e.target.value)} // Update leastTime and trigger useEffect
//         className="form-control"
//     >
//         <option value="">Select</option>
//         <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
//         <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
//         <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
//         <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
//         <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM</option>
//     </select>
// </div>

//     </div>
//   </form>

// <div className="row row-gap-4 mt-4">
//   {addresses.length > 0 ? (
//     addresses.map((business, index) => (
//       <div className="col-md-4" key={index}>
//         <div
//           className={`box ${selectedAddress === business ? "active" : ""}`} // Add 'active' class if selected
//           onClick={() => handleSelectAddress(business)} // Handle address selection
//         >
//           <h4>{business.storename}</h4>
//           <p>{business.address}</p>
//           {business.prices && business.prices.length > 0 && ( // Check if prices exist
//             <div>
//               <h5></h5>
//               {business.prices.map((price, priceIndex) => (
//                 <p key={priceIndex}><strong>₹{price.price}</strong></p>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     ))
//   ) : (
//     <div className="col-12">
//       <p>No addresses available for the selected time slot.</p>
//     </div>
//   )}
// </div>


// </div>
//                 )}






//                 <div className="addCart | mt-4">
                
// <div className={`number`}>
//   <span 
//     className="minus border-end-0"
//     onClick={handleDecrement}
//   >
//     -
//   </span>
//   <input 
//     type="text" 
//     value={quantity} // Use quantity state instead of defaultValue
//     onChange={(e) => setQuantity(e.target.value)} // Allows direct input modification
//   />
//   <span 
//     className="plus border-start-0"
//     onClick={handleIncrement}
//   >
//     +
//   </span>
// </div>



//   {/* Add to Cart Button */}
//   <button 
//     className="btn2 hideMobile" 
//     onClick={() => handleAddToCart(tyre)}
//   >
//     <span className="cart-text">Add to cart</span>
//   </button>

//   {/* Show success message after adding to cart */}
//   {successMessage && (
//     <div className="success-message">
//       {successMessage}
//     </div>
//   )}
// </div>



// <div className="compatibleVehicle | mt-4">
//     <h3>Compatible Vehicles</h3>
//     {tyre ? (
//       <ul>
//         {tyre.tyreType === 'car' && (
//           <>
//             <li>{tyre.carbrand}</li>
//             <li>{tyre.carModel}</li>
//           </>
//         )}
//         {tyre.tyreType === 'bike' && (
//           <>
//             <li>{bikeBrandName || 'Loading...'}</li>
//             <li>{bikeModelName || 'Loading...'}</li>
//           </>
//         )}
//       </ul>
//     ) : (
//       <p>No tyres found</p>
//     )}
//   </div>



//  <div className={`contentDetails | mt-4`}>
//   {tyre ? (
//     <ul>
//       <li>
//         <div className="title">Width</div>
//         <div className="text">{tyre.width} CM</div>
//       </li>
//       <li>
//         <div className="title">Height</div>
//         <div className="text">{tyre.height} CM</div>
//       </li>
//       <li>
//         <div className="title">Customs</div>
//         <div className="text">{tyre.customs} CM</div>
//       </li>
//       <li>
//         <div className="title">Manufacturer’s warranty</div>
//         <div className="text">{tyre.warranty} </div>
//       </li>
//       <li>
//         <div className="title">Seasons</div>
//         <div className="text">{tyre.seasons}</div>
//       </li>
//       <li>
//         <div className="title">Material</div>
//         <div className="text">{tyre.material}</div>
//       </li>
      
//       <li>
//         <div className="title">Speed Rating</div>
//         <div className="text">{tyre.speedRating}</div>
//       </li>

//       <li>
//         <div className="title">Load Capacity</div>
//         <div className="text">{tyre.loadCapacity}</div>
//       </li>



//     </ul>
//   ) : (
//     <p>No tyres found</p>
//   )}
// </div> 

//               </div>
//             </div>
//           </div>
//         </div>
// {/* description section */}
// <div 
//   className="reason-to-choose" 
//   style={{
//     fontSize: '45px',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     margin: '20px 0',
//     color: '#333', // Change the color as needed
//     textTransform: 'uppercase', // Makes the text uppercase
//   }}
// >
//   Reason to choose
// </div>

// {tyre ? (
//   <>
//     <div
//       className="description-info"
//       style={{
//         padding: '10px',
//         fontSize: '16px',
//         lineHeight: '1.6',
//         color: '#555',
//       }}
//       dangerouslySetInnerHTML={{ __html: tyre.description1 }}
//     ></div>
//   </>
// ) : (
//   <p style={{ color: 'red', textAlign: 'center' }}>No tyres found</p>
// )}


 

//       </section>
//       <FrontendFooter/>
//     </>
//   );
// };

// export default ProductDetails;









import { useParams, Link } from 'react-router-dom';
import FrontendFooter from '../Footer/FrontendFooter';
import React, { useState, useEffect } from 'react'; // Add useEffect import
import { Swiper, SwiperSlide } from 'swiper/react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


import url from "../../env.js"




const types = ["Home Delivery", "Get Fitted"];


const Radio = ({ id, value, className, onChange, checked, ...args }) => {
  return (
    <div className="box">

      <input
        type="radio"
        value={value}
        id={id}
        name="tabs"
        onChange={onChange}
        {...args}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};


const ProductDetails = ({ addToCart  }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [value, setValue] = useState("One");

  // const { id, tyreType , title  } = useParams();

  const { slug, tyreType   } = useParams();
  const [tyre, setTyre] = useState(null); // Change to handle a single tyre
  const [successMessage, setSuccessMessage] = useState('');
  const [cities, setCities] = useState([]);
  const [quantity, setQuantity] = useState(1); 
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedAddress, setSelectedAddress] = useState(null); // Track selected address
  const [pincode, setPincode] = useState('');
  const [leastTime, setLeastTime] = useState('');
  const [addresses, setAddresses] = useState([]);
 
const [batteryBrandName, setBatteryBrandName] = useState('');
const [batteryModelName, setBatteryModelName] = useState('');
const [alloyWheelBrandName, setAlloyWheelBrandName] = useState('');
const [alloyWheelModelName, setAlloyWheelModelName] = useState('');
const [selectedImage, setSelectedImage] = useState(tyre?.avatarImages || ""); // Avatar is default

  // Collect valid thumbnails
  const thumbnailImages = [
    tyre?.thumb1Images,
    tyre?.thumb2Images,
    tyre?.thumb3Images,
    tyre?.thumb4Images
  ].filter(Boolean); // Removes any empty values




  const [isInWishlist, setIsInWishlist] = useState(false); // Track if item is in wishlist


  
   // Scroll to top when component mounts or slug/tyreType changes
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, tyreType]);


  useEffect(() => {
    const fetchNames = async () => {
      if (tyre) {
        if (tyre.batteryBrand) {
          const response = await fetch(`${url.nodeapipath}/get-batterybrand/${tyre.BatteryBrand}`);
          const data = await response.json();
          setBatteryBrandName(data.name);
        }
        if (tyre.BatteryModel) {
          const response = await fetch(`${url.nodeapipath}/get-batterymodel/${tyre.BatteryModel}`);
          const data = await response.json();
          setBatteryModelName(data.name);
        }
  
        if (tyre.alloywheelBrand) {
          const response = await fetch(`${url.nodeapipath}/get-alloybrand/${tyre.alloywheelBrand}`);
          const data = await response.json();
          setAlloyWheelBrandName(data.name);
        }
        if (tyre.alloywheelModel) {
          const response = await fetch(`${url.nodeapipath}/get-AlloyWheelmodel/${tyre.alloywheelModel}`);
          const data = await response.json();
          setAlloyWheelModelName(data.name);
        }
  
      }
    };
  
    fetchNames();
  }, [tyre]);



const fetchAddresses = async () => {
  if (!leastTime) {
      return;
  }

  console.log("Least Time:", leastTime);
  console.log("Pincode:", pincode);
  console.log("Tyre Object:", tyre); // Log the entire tyre object

  const tyreId = tyre ? tyre._id : null; // Use _id instead of id
  console.log("Tyre ID:", tyreId);

  try {
      const response = await fetch(`${url.nodeapipath}/get-addresses?leastTime=${leastTime}&pincode=${pincode}&tyreId=${tyreId}`);
      const data = await response.json();

      console.log(data); // Log the response data to check if prices are included

      if (response.ok) {
          if (data.businesses.length === 0) {
              alert("No addresses available for the selected time slot.");
          }
          setAddresses(data.businesses);
      } else {
          alert(data.message || "No addresses found");
          setAddresses([]);
      }
  } catch (error) {
      console.error("Error fetching addresses:", error);
      alert("Failed to fetch addresses");
  }
};


useEffect(() => {
  fetchAddresses();
}, [leastTime, pincode]);  // Add pincode to the dependency array



useEffect(() => {
  const saveDeliveryOption = async () => {
    console.log("Saving delivery option with:", {
      tyreId: tyre?._id,
      value,
      leastTime
    });

    if (tyre && tyre._id && value && leastTime) {
      try {
        const formattedValue = types.find(t => t.toLowerCase() === value.toLowerCase());
        console.log("Formatted Delivery Type:", formattedValue);

        const response = await fetch(`${url.nodeapipath}/select-delivery-option`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            tyreId: tyre._id,
            deliveryType: formattedValue,
            leastTime: leastTime
          }),
        });

        const data = await response.json();
        console.log("Delivery option save response:", data);
        
        if (response.ok) {
          console.log("✅ Delivery option saved successfully");
        }
      } catch (error) {
        console.error('Error saving delivery option:', error);
      }
    }
  };
  saveDeliveryOption();
}, [tyre, value, leastTime]);




  useEffect(() => {
    setLoading(true);  // Start loading
    
    // Construct the URL with the slug
    const encodedSlug = encodeURIComponent(slug);
    const urls = `${url.nodeapipath}/get-details/${encodedSlug}/${tyreType}`;

    // Fetch data using the slug
    fetch(urls)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setTyre(data);  // Set tyre data to state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load tyre details. Please try again later.');
      })
      .finally(() => {
        setLoading(false);  // Stop loading
      });
  }, [slug, tyreType]);  // Dependency array to re-fetch if slug or tyreType changes




const handleSelectAddress = (address) => {
  setSelectedAddress(address); // Set the selected address
  // Assuming the address object has a prices array and you want to select the first price
  if (address.prices && address.prices.length > 0) {
    const selectedPrice = address.prices[0].price; // Get the first price
    setTyre((prevTyre) => ({
      ...prevTyre,
      selectedPrice, // Add selected price to tyre object
      clientId: address.clientId // Store the clientId of the selected address
    }));
  }
};





const handleAddToCart = (tyre) => {
  // Debug: Check delivery type before adding to cart
  console.log("Selected Delivery Type:", value);
  console.log("Available Types:", types);

  const cartItem = {
    ...tyre,
    scheduleDate: startDate,
    leastTime: leastTime,  // Changed from timeSlot to leastTime
    deliveryType: value, // Add this line to include delivery type
    quantity: quantity,
    selectedAddress: selectedAddress ? selectedAddress.storename : '',
    selectedPrice: value === "Home Delivery" ? tyre.Salesprice : tyre.selectedPrice || 0, // Use Salesprice for Home Delivery
    clientId: tyre.clientId // Include the clientId of the selected dealer
  };

  // Debug: Log full cart item
  console.log("Cart Item being added:", cartItem);
  console.log("Does cartItem have deliveryType?", !!cartItem.deliveryType);

  addToCart(cartItem);
  setSuccessMessage('Item successfully added to cart!');
  setTimeout(() => setSuccessMessage(''), 3000);
  window.dispatchEvent(new Event('cartUpdated'));
};

  // Handle quantity increment
const handleIncrement = () => {
  setQuantity((prevQuantity) => prevQuantity + 1);
};

// Handle quantity decrement (ensure it doesn't go below 1)
const handleDecrement = () => {
  setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
};

  let isOne = value === "Home Delivery";
  let isTwo = value === "GEt fitted";





  // const handleAddToWishlist = () => {
  //   const storedWishlist = localStorage.getItem('wishlist');
  //   let wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];

  //   const isAlreadyInWishlist = wishlist.some(item => item._id === tyre._id);
  //   if (!isAlreadyInWishlist) {
  //     wishlist.push(tyre);
  //     localStorage.setItem('wishlist', JSON.stringify(wishlist));
      
  //     // Dispatch custom event to update the wishlist
  //     window.dispatchEvent(new Event('wishlistUpdated'));

  //     setIsInWishlist(true);  // Mark as in wishlist
  //   } else {
  //     // Optionally show a message or toast
  //     alert('Already in wishlist.');
  //   }
  // };




// // Check if the item is in wishlist when the component mounts
// useEffect(() => {
//   if (!tyre) return; // Safely check if tyre is null or undefined

//   const storedWishlist = localStorage.getItem('wishlist');
//   const wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];
//   const isAlreadyInWishlist = wishlist.some(item => item._id === tyre._id);
//   setIsInWishlist(isAlreadyInWishlist);
// }, [tyre]); // Re-run this effect when the tyre prop changes


useEffect(() => {
  if (!tyre) return;

  const user = localStorage.getItem('loggedInUser');
  if (!user) return;

  const key = `wishlist_${user}`;
  const storedWishlist = localStorage.getItem(key);
  const wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];

  const isAlreadyInWishlist = wishlist.some(item => item._id === tyre._id);
  setIsInWishlist(isAlreadyInWishlist);
}, [tyre]);





const handleAddToWishlist = () => {
  if (!tyre) return;

  const user = localStorage.getItem('loggedInUser');
  if (!user) return;

  const key = `wishlist_${user}`;
  const storedWishlist = localStorage.getItem(key);
  let wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];

  const isAlreadyInWishlist = wishlist.some(item => item._id === tyre._id);
  if (!isAlreadyInWishlist) {
    wishlist.push(tyre);
    localStorage.setItem(key, JSON.stringify(wishlist));

    window.dispatchEvent(new Event('wishlistUpdated'));
    setIsInWishlist(true);
  } else {
    alert('Already in wishlist.');
  }
};




  const buttonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  };



  return (
    <>

<section className="breadcrumbs">
  <div className="container">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {tyre ? (
        <li>{tyre.title}</li>
      ) : (
        <li>No tyres found</li>
      )}
    </ul>
  </div>
</section>





<section className="productPage | padding-block-900">
  <div className="container">
    <div className="row row-gap-4">

<div className="col-md-6 slider">
      {/* Main Image Swiper */}
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper1"
      >
        {/* First Slide: Show Selected Image if Available, Otherwise Show Avatar Image */}
        <SwiperSlide>
          <img
    src={`https://tyres.blr1.digitaloceanspaces.com/${
      selectedImage ? selectedImage : tyre?.avatarImages
    }`}
    alt="Main Image"
    className="main-image"
  />
        </SwiperSlide>

        {/* Second Slide: Always Show Avatar Image (If a Selection is Made) */}
        {thumbnailImages.length > 1 && (
          <SwiperSlide>           
<img
      src={`https://tyres.blr1.digitaloceanspaces.com/${thumbnailImages[1]}`}
      alt="Second Thumbnail"
      className="thumb2-image"
    />
          </SwiperSlide>
        )}

        {/* Third Slide: Always Show Third Thumbnail (Thumb 3) If Available */}
        {thumbnailImages.length > 2 && (
          <SwiperSlide>
<img
      src={`https://tyres.blr1.digitaloceanspaces.com/${thumbnailImages[2]}`}
      alt="Third Thumbnail"
      className="thumb3-image"
    />
          </SwiperSlide>
        )}


 {/* Fourth Slide: Always Show Fourth Thumbnail (Thumb 4) If Available */}
 {thumbnailImages.length > 3 && (
          <SwiperSlide>
            <img
      src={`https://tyres.blr1.digitaloceanspaces.com/${thumbnailImages[3]}`}
      alt="Fourth Thumbnail"
      className="thumb4-image"
    />
          </SwiperSlide>
        )}
      </Swiper>


      

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {thumbnailImages.map((image, index) => (
          <SwiperSlide key={`thumb-${index}`} onClick={() => setSelectedImage(image)}>
             <img
        src={`https://tyres.blr1.digitaloceanspaces.com/${image}`}
        alt={`Thumbnail ${index + 1}`}
        className="thumb-image"
      />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>




<div className="col-md-6">
    <div className="details-wrapper">
        <div className="head">

  {/* Brand Logos */}
  <div className="logo">
    {tyre && tyre.tyreBrand && tyre.tyreBrand.map((brand, index) => (
      <div key={index}>
        {brand.image && brand.image.length > 0 && (
          brand.image.map((imageItem, idx) => (
            <img 
              key={idx} 
              src={`https://tyres.blr1.digitaloceanspaces.com/${imageItem}`} 
              alt={`brand-logo-${idx}`} 
              className="brand-logo" 
            />
          ))
        )}
      </div>
    ))}
  </div>

  {/* Brand Title */}
  <h1>{tyre ? tyre.title : "Default Title"}</h1>

  {/* Price Section */}
  <div className="price">
    {tyre && tyre.Salesprice && <div className="new">₹{tyre.Salesprice}</div>}
    <div className="old">₹{tyre ? tyre.price : "Default Price"}</div>
  </div>


 <button onClick={handleAddToWishlist} style={{ 
  display: 'flex', 
  alignItems: 'center', 
  gap: '8px', 
  background: 'none', 
  border: 'none', 
  cursor: 'pointer', 
  padding: '0',
  fontSize: '16px',
  color: isInWishlist ? 'red' : '#333'
}}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={isInWishlist ? 'red' : 'none'}
    stroke={isInWishlist ? 'red' : '#999'}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
             2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
             C13.09 3.81 14.76 3 16.5 3 
             19.58 3 22 5.42 22 8.5
             c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
  <span>{isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>
</button>

<br/>


  {/* Description */}
  <p>
    {tyre ? tyre.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit bibendum ligula vitae porta. Nam nec arcu id velit auctor convallis. Quisque ornare accumsan nibh, eu iaculis metus ultrices sit amet."}
  </p>
</div>



                
<div className="tabs">
  {types.map((item) => (
    <Radio
      key={item}
      id={item.replace(/\s+/g, '-').toLowerCase()}
      value={item}
      checked={value === item}
      onChange={(e) => {
        console.log("Delivery Type Changed:", e.target.value);
        setValue(e.target.value);
      }}
    />
  ))}
</div>

                {value === types[0] && <p></p>}
                {value === types[1] && (
               

    <div className="address">
  <form
    onSubmit={(e) => {
      e.preventDefault(); // Prevent form submission
      fetchAddresses(); // Trigger address fetch manually (if needed)
    }}
  >
    <div className="row">
      <div className="col-6 col-md-4">
        <label htmlFor="pincode">Enter Pincode</label>
        <input
          type="text"
          id="pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
      </div>
      <div className="col-6 col-md-4">
        <label htmlFor="date">Select Date</label>
        <DatePicker
          id="date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

<div className="col-6 col-md-4">
    <label htmlFor="time-slot">Select Time Slot</label>
    <select
        id="time-slot"
        value={leastTime}
        onChange={(e) => setLeastTime(e.target.value)} // Update leastTime and trigger useEffect
        className="form-control"
    >
        <option value="">Select</option>
        <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
        <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
        <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
        <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
        <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM</option>
    </select>
</div>

    </div>
  </form>

<div className="row row-gap-4 mt-4">
  {addresses.length > 0 ? (
    addresses.map((business, index) => (
      <div className="col-md-4" key={index}>
        <div
          className={`box ${selectedAddress === business ? "active" : ""}`} // Add 'active' class if selected
          onClick={() => handleSelectAddress(business)} // Handle address selection
        >
          <h4>{business.storename}</h4>
          <p>{business.address}</p>
          {business.prices && business.prices.length > 0 && ( // Check if prices exist
            <div>
              <h5></h5>
              {business.prices.map((price, priceIndex) => (
                <p key={priceIndex}><strong>₹{price.price}</strong></p>
              ))}
            </div>
          )}
        </div>
      </div>
    ))
  ) : (
    <div className="col-12">
      <p>No addresses available for the selected time slot.</p>
    </div>
  )}
</div>


</div>
                )}






                <div className="addCart | mt-4">
                
<div className={`number`}>
  <span 
    className="minus border-end-0"
    onClick={handleDecrement}
  >
    -
  </span>
  <input 
    type="text" 
    value={quantity} // Use quantity state instead of defaultValue
    onChange={(e) => setQuantity(e.target.value)} // Allows direct input modification
  />
  <span 
    className="plus border-start-0"
    onClick={handleIncrement}
  >
    +
  </span>
</div>



  {/* Add to Cart Button */}
  <button 
    className="btn2 hideMobile" 
    onClick={() => handleAddToCart(tyre)}
  >
    <span className="cart-text">Add to cart</span>
  </button>

  {/* Show success message after adding to cart */}
  {successMessage && (
    <div className="success-message">
      {successMessage}
    </div>
  )}
</div>


<div className="compatibleVehicle | mt-4">
  <h3>Compatible Vehicles</h3>
  {tyre ? (
    <ul>
      {tyre.tyreType === 'car' && (
        <>
          <li>{tyre.carbrand}</li>
          <li>{tyre.carModel}</li>
        </>
      )}
      {tyre.tyreType === 'bike' && (
        <>
          <li>{tyre.bikeBrand}</li>
          <li>{tyre.bikeModel}</li>
        </>
      )}
      {tyre.tyreType === 'truck' && (
        <>
          <li>{tyre.truckBrand}</li>
          <li>{tyre.truckModel}</li>
        </>
      )}
      {tyre.tyreType === 'tractor' && (
        <>
          <li>{tyre.tractorBrand}</li>
          <li>{tyre.tractorModel}</li>
        </>
      )}
        {tyre.tyreType === 'battery' && (
        <>
          <li>{batteryBrandName}</li>
          <li>{batteryModelName}</li>
        </>
      )}
      {tyre.tyreType === 'alloywheel' && (
        <>
          <li>{alloyWheelBrandName}</li>
          <li>{alloyWheelModelName}</li>
        </>
      )}
      {tyre.tyreType === 'accessories' && (
        <>
          <li>{tyre.accessoryBrand}</li>
          <li>{tyre.accessoryModel}</li>
        </>
      )}
    </ul>
  ) : (
    <p>No tyres found</p>
  )}
</div>


  <div className={`contentDetails | mt-4`}>
  {tyre ? (
    <ul>


{!tyre.accessoryType && (
  <li>
    <div className="title">
      {tyre.batteryType
        ? "Battery Weight"
        : tyre.alloywheelType
        ? "Wheel Size"
        : "Width"}
    </div>
    <div className="text">
      {tyre.batteryType
        ? `${tyre.batteryweight}`
        : tyre.alloywheelType
        ? tyre.WheelSize
        : `${tyre.width} CM`}
    </div>
  </li>
)}


{!tyre.accessoryType && (
  <li>
    <div className="title">
      {tyre.batteryType
        ? "Battery Height"
        : tyre.alloywheelType
        ? "Holes"
        : "Height"}
    </div>
    <div className="text">
      {tyre.batteryType
        ? `${tyre.batteryheight}`
        : tyre.alloywheelType
        ? tyre.Holes
        : `${tyre.height} CM`}
    </div>
  </li>
)}


{!tyre.accessoryType && (
  <li>
    <div className="title">
      {tyre.batteryType
        ? "Battery Capacity"
        : tyre.alloywheelType
        ? "Color"
        : "Customs"}
    </div>
    <div className="text">
      {tyre.batteryType
        ? tyre.capacity
        : tyre.alloywheelType
        ? tyre.Color
        : `${tyre.customs} CM`}
    </div>
  </li>
)}

{!tyre.accessoryType && (
  <li>
    <div className="title">
      {tyre.batteryType ? "Voltage" : "Seasons"}
    </div>
    <div className="text">
      {tyre.batteryType ? `${tyre.voltage}` : tyre.seasons}
    </div>
  </li>
)}

{!tyre.accessoryType && (
  <li>
    <div className="title">
      {tyre.batteryType
        ? "Battery Type"
        : tyre.alloywheelType
        ? "PCD"
        : "Load Capacity"}
    </div>
    <div className="text">
      {tyre.batteryType
        ? tyre.batteryType
        : tyre.alloywheelType
        ? tyre.PCD
        : tyre.loadCapacity}
    </div>
  </li>
)}



    <li>
        <div className="title">Manufacturer’s warranty</div>
        <div className="text">{tyre.warranty} </div>
    </li>
  

<li>
  <div className="title">
    {(tyre.batteryType || tyre.alloywheelType || tyre.accessoryType) ? "Manufacturing Month" : "Material"}
  </div>
  <div className="text">
    {(tyre.batteryType || tyre.alloywheelType || tyre.accessoryType) ? tyre.manufactureMonth : tyre.material}
  </div>
</li>


<li>
  <div className="title">
    {(tyre.batteryType || tyre.alloywheelType || tyre.accessoryType) ? "Manufacturing Year" : "Speed Rating"}
  </div>
  <div className="text">
    {(tyre.batteryType || tyre.alloywheelType || tyre.accessoryType) ? tyre.manufactureYear : tyre.speedRating}
  </div>
</li>



    </ul>
  ) : (
    <p>No tyres found</p>
  )}
</div>  



              </div>
            </div>
          </div>
        </div>
{/* description section */}
<div 
  className="reason-to-choose" 
  style={{
    fontSize: '45px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '20px 0',
    color: '#333', // Change the color as needed
    textTransform: 'uppercase', // Makes the text uppercase
  }}
>
  Reason to choose
</div>

{tyre ? (
  <>
    <div
      className="description-info"
      style={{
        padding: '10px',
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#555',
      }}
      dangerouslySetInnerHTML={{ __html: tyre.description1 }}
    ></div>
  </>
) : (
  <p style={{ color: 'red', textAlign: 'center' }}>No tyres found</p>
)}


 

      </section>
      <FrontendFooter/>
    </>
  );
};

export default ProductDetails;







