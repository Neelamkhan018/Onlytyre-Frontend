

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import FrontendFooter from '../Footer/FrontendFooter';


// import url from "../../env.js"


// const ForBike = () => {
//   const [sortedTyres, setSortedTyres] = useState([]);
//   const [bikeBrands, setBikeBrands] = useState([]);
//   const [tyreBrands, setTyreBrands] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedBikeBrands, setSelectedBikeBrands] = useState([]);
//   const [selectedTyreBrands, setSelectedTyreBrands] = useState([]);
//   const [sortOption, setSortOption] = useState('');
//   const [allBikeTyres, setAllBikeTyres] = useState([]);
  

//   useEffect(() => {
//     const fetchInitialData = async () => {
//       setLoading(true);
//       try {
//         const [tyresRes, bikeBrandsRes, tyreBrandsRes] = await Promise.all([
//           fetch(`${url.nodeapipath}/get-tyres`),
//           fetch(`${url.nodeapipath}/get-bikebrand`),
//           fetch(`${url.nodeapipath}/get-tyre-brands`),
//         ]);

//         const [tyresData, bikeBrandsData, tyreBrandsData] = await Promise.all([
//           tyresRes.json(),
//           bikeBrandsRes.json(),
//           tyreBrandsRes.json(),
//         ]);

//         const bikeTyres = tyresData.filter(t => t.tyreType === 'bike');
//         setSortedTyres(bikeTyres);
//         setAllBikeTyres(bikeTyres);
//         setBikeBrands(bikeBrandsData);
//         setTyreBrands(tyreBrandsData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInitialData();
//   }, []);
  
  


//   useEffect(() => {
//     const fetchFilteredTyres = async () => {
//       setLoading(true);
//       try {
//         let filteredTyres = [];

//         // Fetch tyres based on selected bike brands
//         if (selectedBikeBrands.length > 0) {
//           const bikeRequests = selectedBikeBrands.map(id =>
//             fetch(`${url.nodeapipath}/get-forbike/${id}`).then(res => res.json())
//           );
//           const bikeResponses = await Promise.all(bikeRequests);
//           filteredTyres = bikeResponses.flatMap(res => res.brand || []);
//         } else {
//           filteredTyres = allBikeTyres; // If no bike brands selected, show all tyres
//         }

//         // Further filter tyres based on selected tyre brands
//         if (selectedTyreBrands.length > 0) {
//           filteredTyres = filteredTyres.filter(tyre =>
//             selectedTyreBrands.some(id => tyre.tyreBrand.includes(id))
//           );
//         }

//         // Removing duplicates
//         const uniqueTyres = [...new Map(filteredTyres.map(t => [t._id, t])).values()];

//         setSortedTyres(uniqueTyres);
//       } catch (error) {
//         console.error('Error fetching tyres:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFilteredTyres();
//   }, [selectedBikeBrands, selectedTyreBrands, allBikeTyres]);




  
//   const handleBikeBrandToggle = (brandId) => {
//     setSelectedBikeBrands(prev =>
//       prev.includes(brandId) ? prev.filter(id => id !== brandId) : [...prev, brandId]
//     );
//   };

//   const handleTyreBrandToggle = (brandId) => {
//     setSelectedTyreBrands(prev =>
//       prev.includes(brandId) ? prev.filter(id => id !== brandId) : [...prev, brandId]
//     );
//   };

//   // const handleSortChange = (event) => {
//   //   const value = event.target.value;
//   //   setSortOption(value);

//   //   let tyres = [...sortedTyres];
//   //   switch (value) {
//   //     case 'price-asc':
//   //       tyres.sort((a, b) => a.price - b.price);
//   //       break;
//   //     case 'price-desc':
//   //       tyres.sort((a, b) => b.price - a.price);
//   //       break;
//   //     case 'rating-asc':
//   //       tyres.sort((a, b) => a.rating - b.rating);
//   //       break;
//   //     case 'rating-desc':
//   //       tyres.sort((a, b) => b.rating - a.rating);
//   //       break;
//   //     case 'newest':
//   //       tyres.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
//   //       break;
//   //     default:
//   //       break;
//   //   }
//   //   setSortedTyres(tyres);
//   // };


//   const handleSortChange = (event) => {
//     const value = event.target.value;
//     setSortOption(value);
  
//     let tyres = [...sortedTyres];
  
//     switch (value) {
//       case 'price-asc':
//         tyres.sort((a, b) => a.Salesprice - b.Salesprice);
//         break;
//       case 'price-desc':
//         tyres.sort((a, b) => b.Salesprice - a.Salesprice);
//         break;
//       case 'rating-asc':
//         tyres.sort((a, b) => a.rating - b.rating);
//         break;
//       case 'rating-desc':
//         tyres.sort((a, b) => b.rating - a.rating);
//         break;
//       case 'newest':
//         tyres.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
//         break;
//       default:
//         break;
//     }
    
//     setSortedTyres([...tyres]); // Ensure React detects the state update
//   };
  

//   return (
//    <>
//   <section className="breadcrumbs">
//     <div className="container">
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li>Bike</li>
//       </ul>
//     </div>
//   </section>
  
//   <section className="padding-block-500">
//     <div className="container">
//       <div className="row row-gap-5">
//         <div className="col-md-3 hideMobile">
//           <div className="siderFilter">
       
  
 
//        {/* Bike Brands Filter */}
// <div className="box">
//   <h3>Bike Brand</h3>
//   <form>
//     <ul>
//       <li>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             id="allBike"
//             checked={selectedBikeBrands.length === 0}
//             onChange={() => setSelectedBikeBrands([])}
//           />
//           <label className="form-check-label" htmlFor="allBike">
//             All
//           </label>
//         </div>
//       </li>

//       {bikeBrands.map((brand) => (
//         <li key={brand._id}>
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id={`bike-brand-${brand._id}`}
//               checked={selectedBikeBrands.includes(brand._id)}
//               onChange={() => handleBikeBrandToggle(brand._id)}
//             />
//             <label className="form-check-label" htmlFor={`bike-brand-${brand._id}`}>
//               {brand.name}
//             </label>
//           </div>
//         </li>
//       ))}
//     </ul>
//   </form>
// </div>

  
    
//             {/* Tyre Brands Filter */}
//   <div className="box">
//   <h3>Tyre Brand</h3>
//   <form action="">
//   <ul>
//   <li>
//   <div className="form-check">
//     <input
//     className="form-check-input"
//       type="checkbox"
//       id="allTyreBrands"
//       checked={selectedTyreBrands.length === 0}
//       onChange={() => setSelectedTyreBrands([])} // Clear all selections when "All" is checked
//     />
//     <label className="form-check-label" htmlFor="allTyreBrands">All</label>
//   </div>
//   </li>
  
//   <ul>
//   {tyreBrands
//   .filter(brand => brand.category === 'bike') // Filter to show only car brands
//   .map(brand => (
//   <li key={brand._id}>
//     <div className="form-check">
//       <input
//       className="form-check-input"
//         type="checkbox"
//         id={`tyre-${brand._id}`}
//         checked={selectedTyreBrands.includes(brand._id)}
//         onChange={() => handleTyreBrandToggle(brand._id)}
//       />
//       <label className="form-check-label" htmlFor={`tyre-${brand._id}`}>{brand.name}</label>
//     </div>
//   </li>
//   ))}
//   </ul>
//   </ul>
//   </form>
//   </div>
  
//           </div>
//         </div>
  
//         <div className="col-md-9">
//           <div className="row align-items-center">
//             <div className="col-6 col-md-9">
//               <a
//                 href=""
//                 className="showsidebar"
//                 data-bs-toggle="offcanvas"
//                 data-bs-target="#sideBarFilter"
//                 aria-controls="sideBarFilter"
//               >
//                 <img src="assets/images/icons/svg/menu.svg" alt="" /> Show Sidebar
//               </a>
//             </div>
  
//             <div className="col-6 col-md-3">
//               <form action="">
//                 <select
//                   value={sortOption}
//                   onChange={handleSortChange}
//                   name="orderby"
//                   className="orderby"
//                   aria-label="Shop order"
//                 >
//                   <option value="menu_order">Default Sorting</option>
//                   <option value="price-asc">Price: Low to High</option>
//                   <option value="price-desc">Price: High to Low</option>
//                   <option value="rating-desc">Top Rated</option>
//                   <option value="newest">Newest Arrivals</option>
//                 </select>
//               </form>
//             </div>
//           </div>
  
//           <div className="row gx-4 justify-content-start row-gap-5 mt-5">
//             {sortedTyres
//               // .filter(tyre => tyre.price >= minPrice && tyre.price <= maxPrice)
//               .map(tyre => {
//                 const isNew = (new Date() - new Date(tyre.createdAt)) < 30 * 24 * 60 * 60 * 1000;
//                 const isOnSale = tyre.Salesprice < tyre.price;
  
//                 return (
//                   <div className="col" key={tyre._id}>
//                     <div className="singleProduct">
//                       <div className="photo">
//                         {isOnSale && <div className="sale">SALE</div>}
//                         {isNew && <div className="new">NEW</div>}
                                                     
// <ul className="cate">
//   {tyre.tyreType === 'car' && (
//     <li>
//       <img
//         src="assets/images/icons/png/car.png"
//         className="car"
//         alt="Car Icon"
//       />
//     </li>
//   )}

// {tyre.tyreType === 'bike' && (
//   <>
//     <li>
//       <img
//         src="assets/images/icons/png/bike.png"
//         className="bike"
//         alt="Bike Icon"
//       />
//     </li>
//     {tyre.fronttyre && (
//       <li>
//         <img
//           src="assets/images/icons/png/front.png"
//           className="front"
//           alt="Front Tyre Icon"
//         />
//       </li>
//     )}
//     {tyre.reartyre && (
//       <li>
//         <img
//           src="assets/images/icons/png/rear.png"
//           className="rear"
//           alt="Rear Tyre Icon"
//         />
//       </li>
//     )}
//   </>
// )}
// </ul>
//                         {/* <img src={`${url.nodeapipath}/uploads/${tyre.avatarImages}`} alt={tyre.title} /> */}
//                       <img src={`https://tyres.blr1.digitaloceanspaces.com/${tyre.avatarImages}`} alt={tyre.avatarImages} />

//                       </div>
//                       <div className="details">
//                         <div className="brand">{tyre.brand}</div>
//                         {/* <h2>{tyre.title}</h2> */}
//                           <h2 style={{
//                   display:"-webkit-box",
//                   WebkitLineClamp : 2,
//                   WebkitBoxOrient:"vertical",
//                   overflow:"hidden",
//                   textOverflow:"ellipsis",
//                   maxWidth:"100%"
//                 }} 
//                 >{tyre.title}</h2>
//                         <div className="price">
//                           <div className="new">₹{tyre.Salesprice}</div>
//                           {isOnSale && <div className="old">₹{tyre.price}</div>}
//                         </div>
//                         <Link to={`/${tyre.tyreType}/${tyre.slug}`} className="btn2">
//                           VIEW DETAILS
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
  
//   <FrontendFooter />
//   </>
//   );
//   };
// export default ForBike;





import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FrontendFooter from '../Footer/FrontendFooter';
import url from "../../env.js";

const ForBike = () => {
  const [sortedTyres, setSortedTyres] = useState([]);
  const [bikeBrands, setBikeBrands] = useState([]);
  const [tyreBrands, setTyreBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBikeBrands, setSelectedBikeBrands] = useState([]);
  const [selectedTyreBrands, setSelectedTyreBrands] = useState([]);
  const [selectedBikeModels, setSelectedBikeModels] = useState([]);
  const [bikeModels, setBikeModels] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [allBikeTyres, setAllBikeTyres] = useState([]);

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const [tyresRes, bikeBrandsRes, tyreBrandsRes] = await Promise.all([
          fetch(`${url.nodeapipath}/get-tyres`),
          fetch(`${url.nodeapipath}/get-bikebrand`),
          fetch(`${url.nodeapipath}/get-tyre-brands`),
        ]);

        const [tyresData, bikeBrandsData, tyreBrandsData] = await Promise.all([
          tyresRes.json(),
          bikeBrandsRes.json(),
          tyreBrandsRes.json(),
        ]);

        const bikeTyres = tyresData.filter(t => t.tyreType === 'bike');
        setSortedTyres(bikeTyres);
        setAllBikeTyres(bikeTyres);
        setBikeBrands(bikeBrandsData);
        setTyreBrands(tyreBrandsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  
  // Fetch bike models based on selected bike brands
  useEffect(() => {
    const fetchBikeModels = async () => {
      if (selectedBikeBrands.length > 0) {
        try {
          const selectedBrandIds = selectedBikeBrands.map(brand => brand);
          const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');
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


  // Handle Bike Brand Checkbox Toggle
  const handleBikeBrandToggle = (brandId) => {
    setSelectedBikeBrands(prev =>
      prev.includes(brandId) ? prev.filter(id => id !== brandId) : [...prev, brandId]
    );
  };

  // Handle Tyre Brand Checkbox Toggle
  const handleTyreBrandToggle = (brandId) => {
    setSelectedTyreBrands(prev =>
      prev.includes(brandId) ? prev.filter(id => id !== brandId) : [...prev, brandId]
    );
  };

  // Handle Bike Model Checkbox Toggle
  const handleBikeModelToggle = (modelId) => {
    setSelectedBikeModels(prev =>
      prev.includes(modelId) ? prev.filter(id => id !== modelId) : [...prev, modelId]
    );
  };

  // Fetch filtered tyres based on selected brands and models
  useEffect(() => {
    const fetchFilteredTyres = async () => {
      setLoading(true);
      try {
        let filteredTyres = allBikeTyres;

        if (selectedBikeBrands.length > 0) {
          const bikeRequests = selectedBikeBrands.map(id =>
            fetch(`${url.nodeapipath}/get-forbike/${id}`).then(res => res.json())
          );
          const bikeResponses = await Promise.all(bikeRequests);
          filteredTyres = bikeResponses.flatMap(res => res.brand || []);
        }

        if (selectedTyreBrands.length > 0) {
          const tyreRequests = selectedTyreBrands.map(id =>
            fetch(`${url.nodeapipath}/get-fortyre/${id}`).then(res => res.json())
          );
          const tyreResponses = await Promise.all(tyreRequests);
          filteredTyres = tyreResponses.flatMap(res => res.tyres || []);
        }

        if (selectedBikeModels.length > 0) {
          filteredTyres = filteredTyres.filter(tyre =>
            tyre.bikeModel.some(model => selectedBikeModels.includes(model))
          );
        }

        const uniqueTyres = [...new Map(filteredTyres.map(t => [t._id, t])).values()];
        setSortedTyres(uniqueTyres);
      } catch (error) {
        console.error('Error fetching tyres:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredTyres();
  }, [selectedBikeBrands, selectedTyreBrands, selectedBikeModels, allBikeTyres]);


  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOption(value);

    let tyres = [...sortedTyres];

    switch (value) {
      case 'price-asc':
        tyres.sort((a, b) => a.Salesprice - b.Salesprice);
        break;
      case 'price-desc':
        tyres.sort((a, b) => b.Salesprice - a.Salesprice);
        break;
      case 'rating-asc':
        tyres.sort((a, b) => a.rating - b.rating);
        break;
      case 'rating-desc':
        tyres.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        tyres.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      default:
        break;
    }

    setSortedTyres([...tyres]);
  };

  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Bike</li>
          </ul>
        </div>
      </section>

      <section className="padding-block-500">
        <div className="container">
          <div className="row row-gap-5">
            <div className="col-md-3 hideMobile">
              <div className="siderFilter">
                {/* Bike Brands Filter */}
                <div className="box">
                  <h3>Bike Brand</h3>
                  <form action="">
                    <ul>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="allBikeBrands"
                            checked={selectedBikeBrands.length === 0}
                            onChange={() => setSelectedBikeBrands([])}
                          />
                          <label className="form-check-label" htmlFor="allBikeBrands">All</label>
                        </div>
                      </li>
                      <ul>
                        {bikeBrands.map(brand => (
                          <li key={brand._id}>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`bike-${brand._id}`}
                                checked={selectedBikeBrands.includes(brand._id)}
                                onChange={() => handleBikeBrandToggle(brand._id)}
                              />
                              <label className="form-check-label" htmlFor={`bike-${brand._id}`}>{brand.name}</label>
                            </div>
                          </li>
                        ))}
                      </ul>
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

                {/* Tyre Brands Filter */}
                <div className="box">
                  <h3>Tyre Brand</h3>
                  <form action="">
                    <ul>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="allTyreBrands"
                            checked={selectedTyreBrands.length === 0}
                            onChange={() => setSelectedTyreBrands([])} // Clear all selections when "All" is checked
                          />
                          <label className="form-check-label" htmlFor="allTyreBrands">All</label>
                        </div>
                      </li>
                      <ul>
                        {tyreBrands
                          .filter(brand => brand.category === 'bike') // Filter to show only bike brands
                          .map(brand => (
                            <li key={brand._id}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`tyre-${brand._id}`}
                                  checked={selectedTyreBrands.includes(brand._id)}
                                  onChange={() => handleTyreBrandToggle(brand._id)}
                                />
                                <label className="form-check-label" htmlFor={`tyre-${brand._id}`}>{brand.name}</label>
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
                {sortedTyres.map(tyre => {
                  const isNew = (new Date() - new Date(tyre.createdAt)) < 30 * 24 * 60 * 60 * 1000;
                  const isOnSale = tyre.Salesprice < tyre.price;

                  return (
                    <div className="col" key={tyre._id}>
                      <div className="singleProduct">
                        <div className="photo">
                          {isOnSale && <div className="sale">SALE</div>}
                          {isNew && <div className="new">NEW</div>}
                          <ul className="cate">
                            {tyre.tyreType === 'bike' && (
                              <li>
                                <img
                                  src="assets/images/icons/png/bike.png"
                                  className="bike"
                                  alt="Bike Icon"
                                />
                              </li>
                            )}
                          </ul>
                          <img src={`https://tyres.blr1.digitaloceanspaces.com/${tyre.avatarImages}`} alt={tyre.title} />
                        </div>
                        <div className="details">
                          <div className="brand">{tyre.brand}</div>
                          <h2 style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "100%"
                          }}>{tyre.title}</h2>
                          <div className="price">
                            <div className="new">₹{tyre.Salesprice}</div>
                            {isOnSale && <div className="old">₹{tyre.price}</div>}
                          </div>
                          <Link to={`/${tyre.tyreType}/${tyre.slug}`} className="btn2">
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

export default ForBike;
