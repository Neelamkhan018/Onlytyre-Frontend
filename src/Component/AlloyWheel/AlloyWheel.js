// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import FrontendFooter from '../Footer/FrontendFooter';

// import url from "../../env.js";

// const AlloyWheels = () => {
//   const [sortedAlloyWheels, setSortedAlloyWheels] = useState([]);
//   const [alloyWheelBrands, setAlloyWheelBrands] = useState([]);
//   const [tyreBrands, setTyreBrands] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedAlloyWheelBrands, setSelectedAlloyWheelBrands] = useState([]);
//   const [selectedTyreBrands, setSelectedTyreBrands] = useState([]);
//   const [sortOption, setSortOption] = useState('');
//   const [allAlloyWheels, setAllAlloyWheels] = useState([]);

//   // Fetch initial data
//   useEffect(() => {
//     const fetchInitialData = async () => {
//       setLoading(true);
//       try {
//         const [alloyWheelsRes, alloyWheelBrandsRes, tyreBrandsRes] = await Promise.all([
//           fetch(`${url.nodeapipath}/get-tyres`), // Endpoint for alloy wheels
//           fetch(`${url.nodeapipath}/get-alloybrand`), // Endpoint for alloy wheel brands
//           fetch(`${url.nodeapipath}/get-tyre-brands`), // Endpoint for tyre brands
//         ]);
  
//         const [alloyWheelsData, alloyWheelBrandsData, tyreBrandsData] = await Promise.all([
//           alloyWheelsRes.json(),
//           alloyWheelBrandsRes.json(),
//           tyreBrandsRes.json(),
//         ]);
  
//         const filteredAlloyWheels = alloyWheelsData.filter(a => a.tyreType === 'alloywheel'); // Filter for alloy wheels
//         setSortedAlloyWheels(filteredAlloyWheels); // Store sorted alloy wheels
//         setAllAlloyWheels(filteredAlloyWheels); // Store original alloy wheels
//         setAlloyWheelBrands(alloyWheelBrandsData);
//         setTyreBrands(tyreBrandsData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchInitialData();
//   }, []);


// // Fetch filtered alloy wheels based on selected brands
// useEffect(() => {
//     const fetchFilteredAlloyWheels = async () => {
//       setLoading(true);
//       try {
//         let alloyResults = [];
//         let tyreResults = [];
  
//         // Fetch alloy wheels based on selected alloy wheel brands
//         if (selectedAlloyWheelBrands.length > 0) {
//             const alloyRequests = selectedAlloyWheelBrands.map(id =>
//                 fetch(`${url.nodeapipath}/get-foralloywheel/${id}`).then(res => res.json())
//               );
//           const alloyResponses = await Promise.all(alloyRequests);
//           alloyResults = alloyResponses.flatMap(res => res.alloyWheels || []);
//         }
  
//         // Optional: Fetch tyres based on selected tyre brands (if needed for further filtering)
//         if (selectedTyreBrands.length > 0) {
//           const tyreRequests = selectedTyreBrands.map(id =>
//             fetch(`${url.nodeapipath}/get-fortyre/${id}`).then(res => res.json())
//           );
//           const tyreResponses = await Promise.all(tyreRequests);
//           tyreResults = tyreResponses.flatMap(res => res.tyres || []);
//         }
  
//         let filteredAlloyWheels = [];
  
//         // Combine filtering logic (optional logic with tyreBrands)
//         if (selectedAlloyWheelBrands.length > 0 && selectedTyreBrands.length > 0) {
//           filteredAlloyWheels = alloyResults.filter(alloy =>
//             selectedAlloyWheelBrands.some(id => alloy.AlloyWheelBrand?.includes(id)) &&
//             selectedTyreBrands.some(id => alloy.tyreBrand.includes(id))
//           );
//         } else if (selectedAlloyWheelBrands.length > 0) {
//           filteredAlloyWheels = alloyResults;
//         } else if (selectedTyreBrands.length > 0) {
//           filteredAlloyWheels = tyreResults;
//         } else {
//           filteredAlloyWheels = allAlloyWheels; // fallback to original data
//         }
  
//         const uniqueAlloyWheels = [...new Map(filteredAlloyWheels.map(item => [item._id, item])).values()];
//         setSortedAlloyWheels(uniqueAlloyWheels);
//       } catch (error) {
//         console.error('Error fetching alloy wheels:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchFilteredAlloyWheels();
//   }, [selectedAlloyWheelBrands, selectedTyreBrands, allAlloyWheels]);
  


//   // Handle Alloy Wheel Brand Checkbox Toggle
//   const handleAlloyWheelBrandToggle = (brandId) => {
//     setSelectedAlloyWheelBrands(prev =>
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

//     let alloyWheels = [...sortedAlloyWheels];

//     switch (value) {
//       case 'price-asc':
//         alloyWheels.sort((a, b) => a.Salesprice - b.Salesprice);
//         break;
//       case 'price-desc':
//         alloyWheels.sort((a, b) => b.Salesprice - a.Salesprice);
//         break;
//       case 'rating-asc':
//         alloyWheels.sort((a, b) => a.rating - b.rating);
//         break;
//       case 'rating-desc':
//         alloyWheels.sort((a, b) => b.rating - a.rating);
//         break;
//       case 'newest':
//         alloyWheels.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
//         break;
//       default:
//         break;
//     }

//     setSortedAlloyWheels([...alloyWheels]); // Ensure React detects the state update
//   };

//   return (
//     <>
//       <section className="breadcrumbs">
//         <div className="container">
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li>Alloy Wheels</li>
//           </ul>
//         </div>
//       </section>

//       <section className="padding-block-500">
//         <div className="container">
//           <div className="row row-gap-5">
//             <div className="col-md-3 hideMobile">
//               <div className="siderFilter">
//                 {/* Alloy Wheel Brands Filter */}
//                 <div className="box">
//                   <h3>Alloy Wheel Brand</h3>
//                   <form action="">
//                     <ul>
//                       <li>
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="checkbox"
//                             id="allAlloyWheelBrands"
//                             checked={selectedAlloyWheelBrands.length === 0}
//                             onChange={() => setSelectedAlloyWheelBrands([])} // Clear all selections when "All" is checked
//                           />
//                           <label className="form-check-label" htmlFor="allAlloyWheelBrands">All</label>
//                         </div>
//                       </li>

//                       <ul>
//                         {alloyWheelBrands.map(brand => (
//                           <li key={brand._id}>
//                             <div className="form-check">
//                               <input
//                                 className="form-check-input"
//                                 type="checkbox"
//                                 id={`alloyWheel-${brand._id}`}
//                                 checked={selectedAlloyWheelBrands.includes(brand._id)}
//                                 onChange={() => handleAlloyWheelBrandToggle(brand._id)}
//                               />
//                               <label className="form-check-label" htmlFor={`alloyWheel-${brand._id}`}>{brand.name}</label>
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
//   {sortedAlloyWheels.map(alloyWheel => {
//     const isNew = (new Date() - new Date(alloyWheel.createdAt)) < 30 * 24 * 60 * 60 * 1000;
//     const isOnSale = alloyWheel.Salesprice < alloyWheel.price;

//     return (
//       <div className="col" key={alloyWheel._id}>
//         <div className="singleProduct">
//           <div className="photo">
//             {isOnSale && <div className="sale">SALE</div>}
//             {isNew && <div className="new">NEW</div>}
//             <ul className="cate">
//               {alloyWheel.tyreType === 'alloywheel' && (
//                 <li>
//                   <img
//                     src="assets/images/icons/png/alloywheel.png"
//                     alt="Alloy Wheel Icon"
//                     width="20px"
//                   />
//                   <span>Alloy Wheel</span>
//                 </li>
//               )}
//             </ul>
//             <img
//               className="img-fluid"
//               src={`${url.nodeapipath}/uploads/${alloyWheel.avatarImages}`}
//               alt={alloyWheel.title}
//             />
//           </div>
//           <div className="details">
//             <div className="brand">{alloyWheel.brand}</div>
//             <h2>{alloyWheel.title}</h2>
//             <div className="price">
//               <div className="new">₹{alloyWheel.Salesprice}</div>
//               {isOnSale && <div className="old">₹{alloyWheel.price}</div>}
//             </div>
//             <Link to={`/alloywheel/${alloyWheel.slug}`} className="btn2">
//               VIEW DETAILS
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   })}
// </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       <FrontendFooter />
//     </>
//   );
// };

// export default AlloyWheels;





import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FrontendFooter from '../Footer/FrontendFooter';

import url from "../../env.js";

const AlloyWheels = () => {
  const [sortedAlloyWheels, setSortedAlloyWheels] = useState([]);
  const [alloyWheelBrands, setAlloyWheelBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAlloyWheelBrands, setSelectedAlloyWheelBrands] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [allAlloyWheels, setAllAlloyWheels] = useState([]);

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const [alloyWheelsRes, alloyWheelBrandsRes] = await Promise.all([
          fetch(`${url.nodeapipath}/get-tyres`), // Endpoint for alloy wheels
          fetch(`${url.nodeapipath}/get-alloybrand`), // Endpoint for alloy wheel brands
        ]);
  
        const [alloyWheelsData, alloyWheelBrandsData] = await Promise.all([
          alloyWheelsRes.json(),
          alloyWheelBrandsRes.json(),
        ]);
  
        const filteredAlloyWheels = alloyWheelsData.filter(a => a.tyreType === 'alloywheel'); // Filter for alloy wheels
        setSortedAlloyWheels(filteredAlloyWheels); // Store sorted alloy wheels
        setAllAlloyWheels(filteredAlloyWheels); // Store original alloy wheels
        setAlloyWheelBrands(alloyWheelBrandsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchInitialData();
  }, []);

  // Fetch filtered alloy wheels based on selected brands
  useEffect(() => {
    const fetchFilteredAlloyWheels = async () => {
      setLoading(true);
      try {
        let alloyResults = [];

        // Fetch alloy wheels based on selected alloy wheel brands
        if (selectedAlloyWheelBrands.length > 0) {
          const alloyRequests = selectedAlloyWheelBrands.map(id =>
            fetch(`${url.nodeapipath}/get-foralloywheel/${id}`).then(res => res.json())
          );
          const alloyResponses = await Promise.all(alloyRequests);
          alloyResults = alloyResponses.flatMap(res => res.alloyWheels || []);
        } else {
          alloyResults = allAlloyWheels; // fallback to original data
        }

        const uniqueAlloyWheels = [...new Map(alloyResults.map(item => [item._id, item])).values()];
        setSortedAlloyWheels(uniqueAlloyWheels);
      } catch (error) {
        console.error('Error fetching alloy wheels:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchFilteredAlloyWheels();
  }, [selectedAlloyWheelBrands, allAlloyWheels]);

  // Handle Alloy Wheel Brand Checkbox Toggle
  const handleAlloyWheelBrandToggle = (brandId) => {
    setSelectedAlloyWheelBrands(prev =>
      prev.includes(brandId) ? prev.filter(id => id !== brandId) : [...prev, brandId]
    );
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOption(value);

    let alloyWheels = [...sortedAlloyWheels];

    switch (value) {
      case 'price-asc':
        alloyWheels.sort((a, b) => a.Salesprice - b.Salesprice);
        break;
      case 'price-desc':
        alloyWheels.sort((a, b) => b.Salesprice - a.Salesprice);
        break;
      case 'rating-asc':
        alloyWheels.sort((a, b) => a.rating - b.rating);
        break;
      case 'rating-desc':
        alloyWheels.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        alloyWheels.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      default:
        break;
    }

    setSortedAlloyWheels([...alloyWheels]); // Ensure React detects the state update
  };

  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Alloy Wheels</li>
          </ul>
        </div>
      </section>

      <section className="padding-block-500">
        <div className="container">
          <div className="row row-gap-5">
            <div className="col-md-3 hideMobile">
              <div className="siderFilter">
                {/* Alloy Wheel Brands Filter */}
                <div className="box">
                  <h3>Alloy Wheel Brand</h3>
                  <form action="">
                    <ul>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="allAlloyWheelBrands"
                            checked={selectedAlloyWheelBrands.length === 0}
                            onChange={() => setSelectedAlloyWheelBrands([])} // Clear all selections when "All" is checked
                          />
                          <label className="form-check-label" htmlFor="allAlloyWheelBrands">All</label>
                        </div>
                      </li>

                      <ul>
                        {alloyWheelBrands.map(brand => (
                          <li key={brand._id}>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`alloyWheel-${brand._id}`}
                                checked={selectedAlloyWheelBrands.includes(brand._id)}
                                onChange={() => handleAlloyWheelBrandToggle(brand._id)}
                              />
                              <label className="form-check-label" htmlFor={`alloyWheel-${brand._id}`}>{brand.name}</label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </ul>
                  </form>
                </div>
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
                      <option value="rating-desc">Top Rated</option>
                      <option value="newest">Newest Arrivals</option>
                    </select>
                  </form>
                </div>
              </div>

              <div className="row gx-4 justify-content-start row-gap-5 mt-5">
                {sortedAlloyWheels.map(alloyWheel => {
                  const isNew = (new Date() - new Date(alloyWheel.createdAt)) < 30 * 24 * 60 * 60 * 1000;
                  const isOnSale = alloyWheel.Salesprice < alloyWheel.price;

                  return (
                    <div className="col" key={alloyWheel._id}>
                      <div className="singleProduct">
                        <div className="photo">
                          {isOnSale && <div className="sale">SALE</div>}
                          {isNew && <div className="new">NEW</div>}
                          <ul className="cate">
  {alloyWheel.alloywheelType === 'car' && (
    <li>
      <img
        src="assets/images/icons/png/car.png"
        className="car"
        alt="Car Icon"
      />     
    </li>
  )}

  {alloyWheel.alloywheelType === 'bike' && (
    <li>
      <img
        src="assets/images/icons/png/bike.png"
        className="bike"
        alt="Bike Icon"
      />
    </li>
  )}
  </ul>
                          <img
                            className="img-fluid"
                            // src={`${url.nodeapipath}/uploads/${alloyWheel.avatarImages}`}
                            src={`https://tyres.blr1.digitaloceanspaces.com/${alloyWheel.avatarImages}`} 

                            alt={alloyWheel.title}
                          />
                        </div>
                        <div className="details">
                          <div className="brand">{alloyWheel.brand}</div>
                          <h2 style={{
                  display:"-webkit-box",
                  WebkitLineClamp : 2,
                  WebkitBoxOrient:"vertical",
                  overflow:"hidden",
                  textOverflow:"ellipsis",
                  maxWidth:"100%"
                }} >{alloyWheel.title}</h2>
                          <div className="price">
                            <div className="new">₹{alloyWheel.Salesprice}</div>
                            {isOnSale && <div className="old">₹{alloyWheel.price}</div>}
                          </div>
                          <Link to={`/alloywheel/${alloyWheel.slug}`} className="btn2">
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

export default AlloyWheels;
        