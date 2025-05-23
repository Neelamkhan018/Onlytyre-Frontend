// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import FrontendFooter from '../Footer/FrontendFooter';

// import url from "../../env.js";

// const Batteries = () => {
//   const [sortedBatteries, setSortedBatteries] = useState([]);
//   const [batteryBrands, setBatteryBrands] = useState([]);
//   const [tyreBrands, setTyreBrands] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedBatteryBrands, setSelectedBatteryBrands] = useState([]);
//   const [selectedTyreBrands, setSelectedTyreBrands] = useState([]);
//   const [sortOption, setSortOption] = useState('');
//   const [allBatteries, setAllBatteries] = useState([]);

//   // Fetch initial data
//   useEffect(() => {
//     const fetchInitialData = async () => {
//       setLoading(true);
//       try {
//         const [batteriesRes, batteryBrandsRes, tyreBrandsRes] = await Promise.all([
//           fetch(`${url.nodeapipath}/get-tyres`), // Adjust this endpoint to fetch batteries
//           fetch(`${url.nodeapipath}/get-Batterybrand`), // Endpoint for battery brands
//           fetch(`${url.nodeapipath}/get-tyre-brands`), // Endpoint for tyre brands
//         ]);
  
//         const [batteriesData, batteryBrandsData, tyreBrandsData] = await Promise.all([
//           batteriesRes.json(),
//           batteryBrandsRes.json(),
//           tyreBrandsRes.json(),
//         ]);
  
//         const filteredBatteries = batteriesData.filter(b => b.tyreType === 'battery'); // Filter for specific battery type
//         setSortedBatteries(filteredBatteries); // Store sorted batteries
//         setAllBatteries(filteredBatteries); // Store original batteries
//         setBatteryBrands(batteryBrandsData);
//         setTyreBrands(tyreBrandsData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchInitialData();
//   }, []);
  

// //   // Fetch filtered batteries based on selected brands
// //   useEffect(() => {
// //     const fetchFilteredBatteries = async () => {
// //       setLoading(true);
// //       try {
// //         let batteryResults = [];
// //         let tyreResults = [];

// //         // Fetch batteries based on selected battery brands
// //         if (selectedBatteryBrands.length > 0) {
// //           const batteryRequests = selectedBatteryBrands.map(id =>
// //             fetch(`${url.nodeapipath}/get-forbattery/${id}`).then(res => res.json())
// //           );
// //           const batteryResponses = await Promise.all(batteryRequests);
// //           batteryResults = batteryResponses.flatMap(res => res.batteries || []);
// //         }

// //         // Fetch tyres based on selected tyre brands
// //         if (selectedTyreBrands.length > 0) {
// //           const tyreRequests = selectedTyreBrands.map(id =>
// //             fetch(`${url.nodeapipath}/get-fortyre/${id}`).then(res => res.json())
// //           );
// //           const tyreResponses = await Promise.all(tyreRequests);
// //           tyreResults = tyreResponses.flatMap(res => res.tyres || []);
// //         }

// //         let filteredBatteries = [];

// //         // Combine filtering logic
// //         if (selectedBatteryBrands.length > 0 && selectedTyreBrands.length > 0) {
// //             filteredBatteries = batteryResults.filter(battery =>
// //                 selectedBatteryBrands.includes(battery?.batteryBrand) &&
// //                 selectedTyreBrands.includes(battery?.tyreBrand)
// //               );                          
// //         } else if (selectedBatteryBrands.length > 0) {
// //           filteredBatteries = batteryResults;
// //         } else if (selectedTyreBrands.length > 0) {
// //           filteredBatteries = tyreResults;
// //         } else {
// //           filteredBatteries = allBatteries; // Use original list when no filters
// //         }

// //         const uniqueBatteries = [...new Map(filteredBatteries.map(b => [b._id, b])).values()];
// //         setSortedBatteries(uniqueBatteries);
// //       } catch (error) {
// //         console.error('Error fetching batteries:', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchFilteredBatteries();
// //   }, [selectedBatteryBrands, selectedTyreBrands, allBatteries]);

// useEffect(() => {
//     const fetchFilteredBatteriesAndTyres = async () => {
//       setLoading(true);
//       try {
//         let batteryResults = [];
//         let tyreResults = [];
  
//         // Fetch batteries based on selected battery brands
//         if (selectedBatteryBrands.length > 0) {
//           const batteryRequests = selectedBatteryBrands.map(id =>
//             fetch(`${url.nodeapipath}/get-forbattery/${id}`).then(res => res.json())
//           );
//           const batteryResponses = await Promise.all(batteryRequests);
//           batteryResults = batteryResponses.flatMap(res => res.batteries || []);
//         }
  
//         // Fetch tyres based on selected tyre brands
//         if (selectedTyreBrands.length > 0) {
//           const tyreRequests = selectedTyreBrands.map(id =>
//             fetch(`${url.nodeapipath}/get-fortyre/${id}`).then(res => res.json())
//           );
//           const tyreResponses = await Promise.all(tyreRequests);
//           tyreResults = tyreResponses.flatMap(res => res.tyres || []);
//         }
  
//         // Filter to include only Yokohama tyres
//         const yokohamaTyres = tyreResults.filter(tyre => tyre.brand === 'Yokohama');
  
//         let filteredItems = [];
  
//         // Combine battery results with filtered Yokohama tyres
//         if (selectedBatteryBrands.length > 0) {
//           filteredItems = [...batteryResults, ...yokohamaTyres];
//         } else {
//           filteredItems = yokohamaTyres; // Only show Yokohama tyres if no battery brands are selected
//         }
  
//         // Remove duplicates based on _id
//         const uniqueItems = [...new Map(filteredItems.map(item => [item._id, item])).values()];
//         setSortedBatteries(uniqueItems);
//       } catch (error) {
//         console.error('Error fetching batteries and tyres:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchFilteredBatteriesAndTyres();
//   }, [selectedBatteryBrands, selectedTyreBrands]);


//   // Handle Battery Brand Checkbox Toggle
//   const handleBatteryBrandToggle = (brandId) => {
//     setSelectedBatteryBrands(prev =>
//       prev.includes(brandId) ? prev.filter(id => id !== brandId) : [...prev, brandId]
//     );
//   };

//   // Handle Tyre Brand Checkbox Toggle
//   const handleTyreBrandToggle = (brandId) => {
//     setSelectedTyreBrands(prev =>
//       prev.includes(brandId) ? prev.filter(id => id !== brandId) : [...prev, brandId]
//     );
//   };

//   const handleSortChange = (event) => {
//     const value = event.target.value;
//     setSortOption(value);

//     let batteries = [...sortedBatteries];

//     switch (value) {
//       case 'price-asc':
//         batteries.sort((a, b) => a.Salesprice - b.Salesprice);
//         break;
//       case 'price-desc':
//         batteries.sort((a, b) => b.Salesprice - a.Salesprice);
//         break;
//       case 'rating-asc':
//         batteries.sort((a, b) => a.rating - b.rating);
//         break;
//       case 'rating-desc':
//         batteries.sort((a, b) => b.rating - a.rating);
//         break;
//       case 'newest':
//         batteries.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
//         break;
//       default:
//         break;
//     }

//     setSortedBatteries([...batteries]); // Ensure React detects the state update
//   };

//   return (
//     <>
//       <section className="breadcrumbs">
//         <div className="container">
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li>Batteries</li>
//           </ul>
//         </div>
//       </section>

//       <section className="padding-block-500">
//         <div className="container">
//           <div className="row row-gap-5">
//             <div className="col-md-3 hideMobile">
//               <div className="siderFilter">
//                 {/* Battery Brands Filter */}
//                 <div className="box">
//                   <h3>Battery Brand</h3>
//                   <form action="">
//                     <ul>
//                       <li>
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="checkbox"
//                             id="allBatteryBrands"
//                             checked={selectedBatteryBrands.length === 0}
//                             onChange={() => setSelectedBatteryBrands([])} // Clear all selections when "All" is checked
//                           />
//                           <label className="form-check-label" htmlFor="allBatteryBrands">All</label>
//                         </div>
//                       </li>

//                       <ul>
//                         {batteryBrands.map(brand => (
//                           <li key={brand._id}>
//                             <div className="form-check">
//                               <input
//                                 className="form-check-input"
//                                 type="checkbox"
//                                 id={`battery-${brand._id}`}
//                                 checked={selectedBatteryBrands.includes(brand._id)}
//                                 onChange={() => handleBatteryBrandToggle(brand._id)}
//                               />
//                               <label className="form-check-label" htmlFor={`battery-${brand._id}`}>{brand.name}</label>
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     </ul>
//                   </form>
//                 </div>

//                 {/* Tyre Brands Filter */}
//                 <div className="box">
//                   <h3>Tyre Brand</h3>
//                   <form action="">
//                     <ul>
//                       <li>
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="checkbox"
//                             id="allTyreBrands"
//                             checked={selectedTyreBrands.length === 0}
//                             onChange={() => setSelectedTyreBrands([])} // Clear all selections when "All" is checked
//                           />
//                           <label className="form-check-label" htmlFor="allTyreBrands">All</label>
//                         </div>
//                       </li>

//                       <ul>
//                         {tyreBrands.map(brand => (
//                           <li key={brand._id}>
//                             <div className="form-check">
//                               <input
//                                 className="form-check-input"
//                                 type="checkbox"
//                                 id={`tyre-${brand._id}`}
//                                 checked={selectedTyreBrands.includes(brand._id)}
//                                 onChange={() => handleTyreBrandToggle(brand._id)}
//                               />
//                               <label className="form-check-label" htmlFor={`tyre-${brand._id}`}>{brand.name}</label>
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     </ul>
//                   </form>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-9">
//               <div className="row align-items-center">
//                 <div className="col-6 col-md-9">
//                   <a
//                     href=""
//                     className="showsidebar"
//                     data-bs-toggle="offcanvas"
//                     data-bs-target="#sideBarFilter"
//                     aria-controls="sideBarFilter"
//                   >
//                     <img src="assets/images/icons/svg/menu.svg" alt="" /> Show Sidebar
//                   </a>
//                 </div>

//                 <div className="col-6 col-md-3">
//                   <form action="">
//                     <select
//                       value={sortOption}
//                       onChange={handleSortChange}
//                       name="orderby"
//                       className="orderby"
//                       aria-label="Shop order"
//                     >
//                       <option value="menu_order">Default Sorting</option>
//                       <option value="price-asc">Price: Low to High</option>
//                       <option value="price-desc">Price: High to Low</option>
//                       <option value="rating-desc">Top Rated</option>
//                       <option value="newest">Newest Arrivals</option>
//                     </select>
//                   </form>
//                 </div>
//               </div>

//               <div className="row gx-4 justify-content-start row-gap-5 mt-5">
//                 {sortedBatteries.map(battery => {
//                   const isNew = (new Date() - new Date(battery.createdAt)) < 30 * 24 * 60 * 60 * 1000;
//                   const isOnSale = battery.Salesprice < battery.price;

//                   return (
//                     <div className="col" key={battery._id}>
//                       <div className="singleProduct">
//                         <div className="photo">
//                           {isOnSale && <div className="sale">SALE</div>}
//                           {isNew && <div className="new">NEW</div>}
//                           <ul className="cate">
//                             {battery.tyreType === 'battery' && (
//                               <li>
//                                 <img
//                                   src="assets/images/icons/png/battery.svg"
//                                   className="battery"
//                                   alt="Battery Icon"
//                                 />
//                               </li>
//                             )}
//                           </ul>
//                           <img src={`${url.nodeapipath}/uploads/${battery.avatarImages}`} alt={battery.title} />
//                         </div>
//                         <div className="details">
//                           <div className="brand">{battery.brand}</div>
//                           <h2>{battery.title}</h2>
//                           <div className="price">
//                             <div className="new">₹{battery.Salesprice}</div>
//                             {isOnSale && <div className="old">₹{battery.price}</div>}
//                           </div>
//                           <Link to={`/battery/${battery.slug}`} className="btn2">
//                             VIEW DETAILS
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <FrontendFooter />
//     </>
//   );
// };

// export default Batteries;




// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import FrontendFooter from '../Footer/FrontendFooter';

// import url from "../../env.js";

// const Batteries = () => {
//   const [sortedBatteries, setSortedBatteries] = useState([]);
//   const [batteryBrands, setBatteryBrands] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedBatteryBrands, setSelectedBatteryBrands] = useState([]);
//   const [sortOption, setSortOption] = useState('');
//   const [allBatteries, setAllBatteries] = useState([]);

//   // Fetch initial data
//   useEffect(() => {
//     const fetchInitialData = async () => {
//       setLoading(true);
//       try {
//         const [batteriesRes, batteryBrandsRes] = await Promise.all([
//           fetch(`${url.nodeapipath}/get-tyres`), // Adjust this endpoint to fetch batteries
//           fetch(`${url.nodeapipath}/get-Batterybrand`), // Endpoint for battery brands
//         ]);
  
//         const [batteriesData, batteryBrandsData] = await Promise.all([
//           batteriesRes.json(),
//           batteryBrandsRes.json(),
//         ]);
  
//         const filteredBatteries = batteriesData.filter(b => b.tyreType === 'battery'); // Filter for specific battery type
//         setSortedBatteries(filteredBatteries); // Store sorted batteries
//         setAllBatteries(filteredBatteries); // Store original batteries
//         setBatteryBrands(batteryBrandsData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchInitialData();
//   }, []);

//   useEffect(() => {
//     const fetchFilteredBatteries = async () => {
//       setLoading(true);
//       try {
//         let batteryResults = [];

//         // Fetch batteries based on selected battery brands
//         if (selectedBatteryBrands.length > 0) {
//           const batteryRequests = selectedBatteryBrands.map(id =>
//             fetch(`${url.nodeapipath}/get-forbattery/${id}`).then(res => res.json())
//           );
//           const batteryResponses = await Promise.all(batteryRequests);
//           batteryResults = batteryResponses.flatMap(res => res.batteries || []);
//         } else {
//           batteryResults = allBatteries; // Use original list when no filters
//         }

//         const uniqueBatteries = [...new Map(batteryResults.map(b => [b._id, b])).values()];
//         setSortedBatteries(uniqueBatteries);
//       } catch (error) {
//         console.error('Error fetching batteries:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFilteredBatteries();
//   }, [selectedBatteryBrands, allBatteries]);

//   // Handle Battery Brand Checkbox Toggle
//   const handleBatteryBrandToggle = (brandId) => {
//     setSelectedBatteryBrands(prev =>
//       prev.includes(brandId) ? prev.filter(id => id !== brandId) : [...prev, brandId]
//     );
//   };

//   const handleSortChange = (event) => {
//     const value = event.target.value;
//     setSortOption(value);

//     let batteries = [...sortedBatteries];

//     switch (value) {
//       case 'price-asc':
//         batteries.sort((a, b) => a.Salesprice - b.Salesprice);
//         break;
//       case 'price-desc':
//         batteries.sort((a, b) => b.Salesprice - a.Salesprice);
//         break;
//       case 'rating-asc':
//         batteries.sort((a, b) => a.rating - b.rating);
//         break;
//       case 'rating-desc':
//         batteries.sort((a, b) => b.rating - a.rating);
//         break;
//       case 'newest':
//         batteries.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
//         break;
//       default:
//         break;
//     }

//     setSortedBatteries([...batteries]); // Ensure React detects the state update
//   };

//   return (
//     <>
//       <section className="breadcrumbs">
//         <div className="container">
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li>Batteries</li>
//           </ul>
//         </div>
//       </section>

//       <section className="padding-block-500">
//         <div className="container">
//           <div className="row row-gap-5">
//           <div className="col-md-3 hideMobile">
//               <div className="siderFilter">
//                 {/* Battery Brands Filter */}
//                 <div className="box">
//                   <h3>Battery Brand</h3>
//                   <form action="">
//                     <ul>
//                       <li>
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="checkbox"
//                             id="allBatteryBrands"
//                             checked={selectedBatteryBrands.length === 0}
//                             onChange={() => setSelectedBatteryBrands([])} // Clear all selections when "All" is checked
//                           />
//                           <label className="form-check-label" htmlFor="allBatteryBrands">All</label>
//                         </div>
//                       </li>

//                       <ul>
//                         {batteryBrands.map(brand => (
//                           <li key={brand._id}>
//                             <div className="form-check">
//                               <input
//                                 className="form-check-input"
//                                 type="checkbox"
//                                 id={`battery-${brand._id}`}
//                                 checked={selectedBatteryBrands.includes(brand._id)}
//                                 onChange={() => handleBatteryBrandToggle(brand._id)}
//                               />
//                               <label className="form-check-label" htmlFor={`battery-${brand._id}`}>{brand.name}</label>
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     </ul>
//                   </form>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-9">
//               <div className="row align-items-center">
//                 <div className="col-6 col-md-9">
//                   <a
//                     href=""
//                     className="showsidebar"
//                     data-bs-toggle="offcanvas"
//                     data-bs-target="#sideBarFilter"
//                     aria-controls="sideBarFilter"
//                   >
//                     <img src="assets/images/icons/svg/menu.svg" alt="" /> Show Sidebar
//                   </a>
//                 </div>

//                 <div className="col-6 col-md-3">
//                   <form action="">
//                     <select
//                       value={sortOption}
//                       onChange={handleSortChange}
//                       name="orderby"
//                       className="orderby"
//                       aria-label="Shop order"
//                     >
//                       <option value="menu_order">Default Sorting</option>
//                       <option value="price-asc">Price: Low to High</option>
//                       <option value="price-desc">Price: High to Low</option>
//                       <option value="rating-desc">Top Rated</option>
//                       <option value="newest">Newest Arrivals</option>
//                     </select>
//                   </form>
//                 </div>
//               </div>

//               <div className="row gx-4 justify-content-start row-gap-5 mt-5">
//                 {sortedBatteries.map(battery => {
//                   const isNew = (new Date() - new Date(battery.createdAt)) < 30 * 24 * 60 * 60 * 1000;
//                   const isOnSale = battery.Salesprice < battery.price;

//                   return (
//                     <div className="col" key={battery._id}>
//                       <div className="singleProduct">
//                         <div className="photo">
//                           {isOnSale && <div className="sale">SALE</div>}
//                           {isNew && <div className="new">NEW</div>}
//                           <ul className="cate">
//   {battery.batteryType === 'car' && (
//     <li>
//       <img
//         src="assets/images/icons/png/car.png"
//         className="car"
//         alt="Car Icon"
//       />
//     </li>
//   )}
//   {battery.batteryType === 'bike' && (
//     <li>
//       <img
//         src="assets/images/icons/png/bike.png"
//         className="bike"
//         alt="Bike Icon"
//       />
//     </li>
//   )}
// </ul>

//                           {/* <img src={`${url.nodeapipath}/uploads/${battery.avatarImages}`} alt={battery.title} /> */}
//                       <img src={`https://tyres.blr1.digitaloceanspaces.com/${battery.avatarImages}`} alt={battery.avatarImages} />

//                         </div>
//                         <div className="details">
//                           <div className="brand">{battery.brand}</div>
//                           <h2 style={{
//                   display:"-webkit-box",
//                   WebkitLineClamp : 2,
//                   WebkitBoxOrient:"vertical",
//                   overflow:"hidden",
//                   textOverflow:"ellipsis",
//                   maxWidth:"100%"
//                 }} >{battery.title}</h2>
//                           <div className="price">
//                             <div className="new">₹{battery.Salesprice}</div>
//                             {isOnSale && <div className="old">₹{battery.price}</div>}
//                           </div>
//                           <Link to={`/battery/${battery.slug}`} className="btn2">
//                             VIEW DETAILS
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <FrontendFooter />
//     </>
//   );
// };

// export default Batteries;





import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FrontendFooter from '../Footer/FrontendFooter';
import url from "../../env.js";

const Batteries = () => {
  const [sortedBatteries, setSortedBatteries] = useState([]);
  const [batteryBrands, setBatteryBrands] = useState([]);
  const [carBrands, setCarBrands] = useState([]);
  const [bikeBrands, setBikeBrands] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [bikeModels, setBikeModels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBatteryBrands, setSelectedBatteryBrands] = useState([]);
  const [selectedCarBrands, setSelectedCarBrands] = useState([]);
  const [selectedBikeBrands, setSelectedBikeBrands] = useState([]);
  const [selectedCarModels, setSelectedCarModels] = useState([]);
  const [selectedBikeModels, setSelectedBikeModels] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [allBatteries, setAllBatteries] = useState([]);

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const [batteriesRes, batteryBrandsRes, carBrandsRes, bikeBrandsRes] = await Promise.all([
          fetch(`${url.nodeapipath}/get-tyres`),
          fetch(`${url.nodeapipath}/get-Batterybrand`),
          fetch(`${url.nodeapipath}/get-carbrand`),
          fetch(`${url.nodeapipath}/get-bikebrand`),
        ]);

        const [batteriesData, batteryBrandsData, carBrandsData, bikeBrandsData] = await Promise.all([
          batteriesRes.json(),
          batteryBrandsRes.json(),
          carBrandsRes.json(),
          bikeBrandsRes.json(),
        ]);

        const filteredBatteries = batteriesData.filter(b => b.tyreType === 'battery');
        setSortedBatteries(filteredBatteries);
        setAllBatteries(filteredBatteries);
        setBatteryBrands(batteryBrandsData);
        setCarBrands(carBrandsData);
        setBikeBrands(bikeBrandsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Fetch car models based on selected car brands
  useEffect(() => {
    const fetchCarModels = async () => {
      if (selectedCarBrands.length > 0) {
        try {
          const query = selectedCarBrands.map(id => `brandid=${id}`).join('&');
          const response = await fetch(`${url.nodeapipath}/get-carmodel?${query}`);
          const activeModels = await response.json();
          setCarModels(activeModels.filter(model => model.active));
        } catch (error) {
          console.error('Error fetching car models:', error);
        }
      } else {
        setCarModels([]);
      }
    };

    fetchCarModels();
  }, [selectedCarBrands]);

  // Fetch bike models based on selected bike brands
  useEffect(() => {
    const fetchBikeModels = async () => {
      if (selectedBikeBrands.length > 0) {
        try {
          const query = selectedBikeBrands.map(id => `brandid=${id}`).join('&');
          const response = await fetch(`${url.nodeapipath}/get-bikemodel?${query}`);
          const activeModels = await response.json();
          setBikeModels(activeModels.filter(model => model.active));
        } catch (error) {
          console.error('Error fetching bike models:', error);
        }
      } else {
        setBikeModels([]);
      }
    };

    fetchBikeModels();
  }, [selectedBikeBrands]);

  // Handle Battery Brand Checkbox Toggle
  const handleBatteryBrandToggle = (brandId) => {
    setSelectedBatteryBrands(prev =>
      prev.includes(brandId) ? prev.filter(id => id !== brandId) : [...prev, brandId]
    );
  };

  // Handle Car Brand Checkbox Toggle
  const handleCarBrandToggle = (brandId) => {
    setSelectedCarBrands(prev =>
      prev.includes(brandId) ? prev.filter(id => id !== brandId) : [...prev, brandId]
    );
  };

  // Handle Bike Brand Checkbox Toggle
  const handleBikeBrandToggle = (brandId) => {
    setSelectedBikeBrands(prev =>
      prev.includes(brandId) ? prev.filter(id => id !== brandId) : [...prev, brandId]
    );
  };

  // Handle Car Model Checkbox Toggle
  const handleCarModelToggle = (modelId) => {
    setSelectedCarModels(prev =>
      prev.includes(modelId) ? prev.filter(id => id !== modelId) : [...prev, modelId]
    );
  };

  // Handle Bike Model Checkbox Toggle
  const handleBikeModelToggle = (modelId) => {
    setSelectedBikeModels(prev =>
      prev.includes(modelId) ? prev.filter(id => id !== modelId) : [...prev, modelId]
    );
  };

  // Fetch filtered batteries based on selected brands and models
  useEffect(() => {
    const fetchFilteredBatteries = async () => {
      setLoading(true);
      try {
        let batteryResults = [];

        // Fetch batteries based on selected battery brands
        if (selectedBatteryBrands.length > 0) {
          const batteryRequests = selectedBatteryBrands.map(id =>
            fetch(`${url.nodeapipath}/get-forbattery/${id}`).then(res => res.json())
          );
          const batteryResponses = await Promise.all(batteryRequests);
          batteryResults = batteryResponses.flatMap(res => res.batteries || []);
        } else {
          batteryResults = allBatteries; // Use original list when no filters
        }

        // Filter by selected car brands
        if (selectedCarBrands.length > 0) {
          batteryResults = batteryResults.filter(battery =>
            battery.carbrand.some(brand => selectedCarBrands.includes(brand))
          );
        }

        // Filter by selected car models
        if (selectedCarModels.length > 0) {
          batteryResults = batteryResults.filter(battery =>
            battery.carModel.some(model => selectedCarModels.includes(model))
          );
        }

        // Filter by selected bike brands
        if (selectedBikeBrands.length > 0) {
          batteryResults = batteryResults.filter(battery =>
            battery.bikeBrand.some(brand => selectedBikeBrands.includes(brand))
          );
        }

        // Filter by selected bike models
        if (selectedBikeModels.length > 0) {
          batteryResults = batteryResults.filter(battery =>
            battery.bikeModel.some(model => selectedBikeModels.includes(model))
          );
        }

        const uniqueBatteries = [...new Map(batteryResults.map(b => [b._id, b])).values()];
        setSortedBatteries(uniqueBatteries);
      } catch (error) {
        console.error('Error fetching batteries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredBatteries();
  }, [selectedBatteryBrands, selectedCarBrands, selectedCarModels, selectedBikeBrands, selectedBikeModels, allBatteries]);

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOption(value);

    let batteries = [...sortedBatteries];

    switch (value) {
      case 'price-asc':
        batteries.sort((a, b) => a.Salesprice - b.Salesprice);
        break;
      case 'price-desc':
        batteries.sort((a, b) => b.Salesprice - a.Salesprice);
        break;
      case 'rating-asc':
        batteries.sort((a, b) => (a.rating || 0) - (b.rating || 0));
        break;
      case 'rating-desc':
        batteries.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        batteries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      default:
        break;
    }

    setSortedBatteries(batteries);
  };

  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Batteries</li>
          </ul>
        </div>
      </section>

      <section className="padding-block-500">
        <div className="container">
          <div className="row row-gap-5">
            <div className="col-md-3 hideMobile">
              <div className="siderFilter">
                {/* Battery Brands Filter */}
                <div className="box">
                  <h3>Battery Brand</h3>
                  <form action="">
                    <ul>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="allBatteryBrands"
                            checked={selectedBatteryBrands.length === 0}
                            onChange={() => setSelectedBatteryBrands([])}
                          />
                          <label className="form-check-label" htmlFor="allBatteryBrands">All</label>
                        </div>
                      </li>
                      <ul>
                        {batteryBrands.map(brand => (
                          <li key={brand._id}>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`battery-${brand._id}`}
                                checked={selectedBatteryBrands.includes(brand._id)}
                                onChange={() => handleBatteryBrandToggle(brand._id)}
                              />
                              <label className="form-check-label" htmlFor={`battery-${brand._id}`}>{brand.name}</label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </ul>
                  </form>
                </div>

                {/* Car Brands Filter */}
                <div className="box">
                  <h3>Car Brand</h3>
                  <form action="">
                    <ul>
                      {carBrands.map(brand => (
                        <li key={brand._id}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`carBrand-${brand._id}`}
                              checked={selectedCarBrands.includes(brand._id)}
                              onChange={() => handleCarBrandToggle(brand._id)}
                            />
                            <label className="form-check-label" htmlFor={`carBrand-${brand._id}`}>{brand.name}</label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </form>
                </div>

                {/* Car Models Filter */}
                {selectedCarBrands.length > 0 && (
                  <div className="box">
                    <h3>Car Models</h3>
                    <form action="">
                      <ul>
                        {carModels.map(model => (
                          <li key={model._id}>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`carModel-${model._id}`}
                                checked={selectedCarModels.includes(model._id)}
                                onChange={() => handleCarModelToggle(model._id)}
                              />
                              <label className="form-check-label" htmlFor={`carModel-${model._id}`}>{model.name}</label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </form>
                  </div>
                )}

                {/* Bike Brands Filter */}
                <div className="box">
                  <h3>Bike Brand</h3>
                  <form action="">
                    <ul>
                      {bikeBrands.map(brand => (
                        <li key={brand._id}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`bikeBrand-${brand._id}`}
                              checked={selectedBikeBrands.includes(brand._id)}
                              onChange={() => handleBikeBrandToggle(brand._id)}
                            />
                            <label className="form-check-label" htmlFor={`bikeBrand-${brand._id}`}>{brand.name}</label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </form>
                </div>

                {/* Bike Models Filter */}
                {selectedBikeBrands.length > 0 && (
                  <div className="box">
                    <h3>Bike Models</h3>
                    <form action="">
                      <ul>
                        {bikeModels.map(model => (
                          <li key={model._id}>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`bikeModel-${model._id}`}
                                checked={selectedBikeModels.includes(model._id)}
                                onChange={() => handleBikeModelToggle(model._id)}
                              />
                              <label className="form-check-label" htmlFor={`bikeModel-${model._id}`}>{model.name}</label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </form>
                  </div>
                )}
              </div>
            </div>

            <div className="col-md-9">
              <div className="row align-items-center">
                <div className="col-6 col-md-9">
                  <a
                    href=""
                    className="showsidebar"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#sideBarFilter"
                    aria-controls="sideBarFilter"
                  >
                    <img src="assets/images/icons/svg/menu.svg" alt="" /> Show Sidebar
                  </a>
                </div>

                <div className="col-6 col-md-3">
                  <form action="">
                    <select
                      value={sortOption}
                      onChange={handleSortChange}
                      name="orderby"
                      className="orderby"
                      aria-label="Shop order"
                    >
                      <option value="menu_order">Default Sorting</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="rating-asc">Rating: Low to High</option>
                      <option value="rating-desc">Rating: High to Low</option>
                      <option value="newest">Newest Arrivals</option>
                    </select>
                  </form>
                </div>
              </div>

              <div className="row gx-4 justify-content-start row-gap-5 mt-5">
                {sortedBatteries.map(battery => {
                  const isNew = (new Date() - new Date(battery.createdAt)) < 30 * 24 * 60 * 60 * 1000;
                  const isOnSale = battery.Salesprice < battery.price;

                  return (
                    <div className="col" key={battery._id}>
                      <div className="singleProduct">
                        <div className="photo">
                          {isOnSale && <div className="sale">SALE</div>}
                          {isNew && <div className="new">NEW</div>}
                          <ul className="cate">
                            {battery.batteryType === 'car' && (
                              <li>
                                <img
                                  src="assets/images/icons/png/car.png"
                                  className="car"
                                  alt="Car Icon"
                                />
                              </li>
                            )}
                            {battery.batteryType === 'bike' && (
                              <li>
                                <img
                                  src="assets/images/icons/png/bike.png"
                                  className="bike"
                                  alt="Bike Icon"
                                />
                              </li>
                            )}
                          </ul>
                          <img src={`https://tyres.blr1.digitaloceanspaces.com/${battery.avatarImages}`} alt={battery.title} />
                        </div>
                        <div className="details">
                          <div className="brand">{battery.brand}</div>
                          
                          <h2 style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "100%"
                          }}>{battery.title}</h2>
                          <div className="price">
                            <div className="new">₹{battery.Salesprice}</div>
                            {isOnSale && <div className="old">₹{battery.price}</div>}
                          </div>
                          <Link to={`/battery/${battery.slug}`} className="btn2">
                            VIEW DETAILS
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FrontendFooter />
    </>
  );
};

export default Batteries;
