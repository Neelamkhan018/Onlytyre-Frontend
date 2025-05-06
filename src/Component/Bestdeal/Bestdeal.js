
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import FrontendFooter from "../Footer/FrontendFooter";

// const BestDeal = () => {
//   const [bestDeals, setBestDeals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedSort, setSelectedSort] = useState("popularity");
//   const [selectedBrand, setSelectedBrand] = useState('All');
//   const [brands, setBrands] = useState([]);
//   const [sortedTyres, setSortedTyres] = useState([]);



// const [selectedBrands, setSelectedBrands] = useState([]);




// const handleBrandClick = async (brandId) => {
//   setLoading(true);

//   setSelectedBrands((prevSelected) => {
//     let updatedBrands;

//     if (brandId === "All") {
//       updatedBrands = []; // Clear all selected brands
//     } else {
//       updatedBrands = prevSelected.includes(brandId)
//         ? prevSelected.filter((id) => id !== brandId) // Remove if already selected
//         : [...prevSelected, brandId]; // Add if not selected
//     }

//     fetchTyresForBrands(updatedBrands);
//     return updatedBrands;
//   });
// };




// // Function to fetch tyres for selected brands
// const fetchTyresForBrands = async (brands) => {
//   try {
//     let tyreData = [];

//     if (brands.length === 0) {
//       // If no brand selected, fetch all tyres
//       const response = await fetch("http://localhost:8000/get-tyres");
//       if (!response.ok) throw new Error("Failed to fetch all tyres");
//       tyreData = await response.json();
//     } else {
//       // Fetch tyres for each selected brand
//       const fetchPromises = brands.map((id) =>
//         fetch(`http://localhost:8000/get-fortyre/${id}`).then((res) => res.json())
//       );

//       const responses = await Promise.all(fetchPromises);
//       tyreData = responses.flatMap((res) => res.tyres || []);
//     }

//     // Remove duplicate tyres
//     const uniqueTyres = [...new Map(tyreData.map((t) => [t._id, t])).values()];

//     setSortedTyres(uniqueTyres.length > 0 ? uniqueTyres : []);
//   } catch (error) {
//     console.error("Error fetching tyres:", error);
//     alert(error.message || "Error loading tyres");
//   } finally {
//     setLoading(false);
//   }
// };



//   useEffect(() => {
//     const fetchTyres = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch("http://localhost:8000/get-bestdeal");
//         const data = await response.json();
//         if (data.success) {
//           setBestDeals([...data.carDeals, ...data.bikeDeals]); // Combine Car & Bike Deals
//         }
//       } catch (error) {
//         console.error("Error fetching tyres:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTyres();
//   }, []);

//   useEffect(() => {
//     const fetchBrands = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/get-tyre-brands');
//         const data = await response.json();
//         setBrands(data);
//       } catch (error) {
//         console.error('Error fetching brands:', error);
//       }
//     };
//     fetchBrands();
//   }, []);

//   const sortDeals = (deals, sortBy) => {
//     switch (sortBy) {
//       case "popularity":
//         return deals.sort((a, b) => b.popularity - a.popularity);
//       case "date":
//         return deals.sort((a, b) => new Date(b.date) - new Date(a.date));
//       case "discount-highest":
//         return deals.sort((a, b) => {
//           const discountA = (a.price - a.Salesprice) / a.price;
//           const discountB = (b.price - b.Salesprice) / b.price;
//           return discountB - discountA;
//         });
//       case "discount-lowest":
//         return deals.sort((a, b) => {
//           const discountA = (a.price - a.Salesprice) / a.price;
//           const discountB = (b.price - b.Salesprice) / b.price;
//           return discountA - discountB;
//         });
//       case "discount-30-plus":
//         return deals.filter(tyre => (tyre.price - tyre.Salesprice) / tyre.price > 0.30);
//       case "discount-20-less":
//         return deals.filter(tyre => (tyre.price - tyre.Salesprice) / tyre.price < 0.20);
//       default:
//         return deals;
//     }
//   };

//   useEffect(() => {
//     if (bestDeals.length > 0) {
//       const sorted = sortDeals([...bestDeals], selectedSort);
//       setSortedTyres(sorted);
//     }
//   }, [selectedSort, bestDeals]);


//   useEffect(() => {
//     if (bestDeals.length > 0) {
//       setSortedTyres(sortDeals([...bestDeals], "discount-highest")); // Sort from high to low discount
//     }
//   }, [bestDeals]);
  
  


//   const handleSortChange = (event) => {
//     setSelectedSort(event.target.value);
//   };


//   return (
//     <>
//       <section className="breadcrumbs">
//         <div className="container">
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li>Bestdeal</li>
//           </ul>
//         </div>
//       </section>

//       <section className="padding-block-500">
//         <div className="container">
//           <div className="row row-gap-5">
//             <div className="col-md-3 hideMobile">
//               <div className="siderFilter">
//               <div className="box">
//           <h3>FILTER BY PRICE</h3>
  
//         </div>
//                 <div className="box">
                  
//                   <h3>Tyre Brand</h3>
//                   <form>
//                     <ul>
            

// <li>
//   <div className="form-check">
//     <input
//       className="form-check-input"
//       type="checkbox"
//       id="allCar"
//       checked={selectedBrands.length === 0} // Checked if no brand is selected
//       onChange={() => handleBrandClick("All")}
//     />
//     <label className="form-check-label" htmlFor="allCar">
//       All
//     </label>
//   </div>
// </li>


// {brands.map((brand) => (
//   <li key={brand._id}>
//     <div className="form-check">
//       <input
//         className="form-check-input"
//         type="checkbox"
//         id={`brand-${brand._id}`}
//         checked={selectedBrands.includes(brand._id)}
//         onChange={() => handleBrandClick(brand._id)}
//       />
//       <label className="form-check-label" htmlFor={`brand-${brand._id}`}>
//         {brand.name}
//       </label>
//     </div>
//   </li>
// ))}




//                     </ul>
//                   </form>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-9">
//               <div className="row align-items-center">
//                 <div className="col-6 col-md-9">
//                 <a
//                   href=""
//                   className="showsidebar"
//                   data-bs-toggle="offcanvas"
//                   data-bs-target="#sideBarFilter"
//                   aria-controls="sideBarFilter"
//                 >
//                   <img src="assets/images/icons/svg/menu.svg" alt="" /> Show Sidebar
//                 </a>
//                   </div>

//                   <div className="col-6 col-md-3">
//                   <form action="">
//                     <select
//                       name="orderby"
//                       className="orderby"
//                       aria-label="Shop order"
//                       value={selectedSort}
//                       onChange={handleSortChange}
//                     >
//                       <option value="menu_order">Default sorting</option>
//                       <option value="popularity">Sort by popularity</option>
//                       <option value="date">Sort by latest</option>
//                       <option value="discount-highest">Sort by highest discount</option>
//                       <option value="discount-lowest">Sort by lowest discount</option>
//                       <option value="discount-30-plus">Sort by discount 30%</option>
//                       <option value="discount-20-less">Sort by discount 20%</option>
//                     </select>
//                   </form>
//              </div>
//               </div>

//               <div className="row gx-4 justify-content-start row-gap-5 mt-5">
//                 {loading ? (
//                   <p>Loading best deals...</p>
//                 ) : sortedTyres.length === 0 ? (
//                   <p>No best deals available at the moment.</p>
//                 ) : (
//                   sortedTyres.map((tyre) => (
//                     <div className="col" key={tyre._id}>
//                       <div className="singleProduct">
//                         <div className="photo">
//                           <div className="sale">SALE</div>
//                           <div className="new">NEW</div>
                                                     
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
//                           <img src={`http://localhost:8000/uploads/${tyre.avatarImages}`} alt={tyre.title}  />
//                         </div>
//                         <div className="details">
                          
//                           <div className="brand">{tyre.brand}</div>
//                           <h2>{tyre.title}</h2>
//                           <h2>{tyre.description}</h2>
//                          <div className="price">
//                            <div className="new">₹{tyre.Salesprice}</div>
//                            <div className="old">₹{tyre.price}</div>
//                          </div>
//                         <p className="discount text-success">
//                          <strong> Discount: {Math.round(((tyre.price - tyre.Salesprice) / tyre.price) * 100)}% OFF </strong>
//                          </p>
//                           <Link to={`/${tyre.tyreType}/${tyre.slug}`} className="btn2">
//                             VIEW DETAILS
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <FrontendFooter/>
//     </>
//   );
// };

// export default BestDeal;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FrontendFooter from "../Footer/FrontendFooter";


import url from "../../env.js"


const BestDeal = () => {
  const [bestDeals, setBestDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSort, setSelectedSort] = useState("popularity");
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [brands, setBrands] = useState([]);
  const [sortedTyres, setSortedTyres] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);


  const handleBrandClick = async (brandId) => {
    setLoading(true);

    setSelectedBrands((prevSelected) => {
      let updatedBrands;

      if (brandId === "All") {
        updatedBrands = []; // Clear all selected brands
      } else {
        updatedBrands = prevSelected.includes(brandId)
          ? prevSelected.filter((id) => id !== brandId) // Remove if already selected
          : [...prevSelected, brandId]; // Add if not selected
      }

      fetchTyresForBrands(updatedBrands);
      return updatedBrands;
    });
  };

  // Function to fetch tyres for selected brands
  const fetchTyresForBrands = async (brands) => {
    try {
      let tyreData = [];

      if (brands.length === 0) {
        // If no brand selected, fetch all tyres
        const response = await fetch(`${url.nodeapipath}/get-tyres`);
        if (!response.ok) throw new Error("Failed to fetch all tyres");
        tyreData = await response.json();
      } else {
        // Fetch tyres for each selected brand
        const fetchPromises = brands.map((id) =>
          fetch(`${url.nodeapipath}/get-fortyre/${id}`).then((res) => res.json())
        );

        const responses = await Promise.all(fetchPromises);
        tyreData = responses.flatMap((res) => res.tyres || []);
      }

      // Remove duplicate tyres
      const uniqueTyres = [...new Map(tyreData.map((t) => [t._id, t])).values()];

      setSortedTyres(uniqueTyres.length > 0 ? uniqueTyres : []);
    } catch (error) {
      console.error("Error fetching tyres:", error);
      alert(error.message || "Error loading tyres");
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   const fetchTyres = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch(`${url.nodeapipath}/get-bestdeal`);
  //       const data = await response.json();
  //       if (data.success) {
  //         // Combine Car, Bike, Truck & Tractor Deals
  //         setBestDeals([...data.carDeals, ...data.bikeDeals, ...data.truckDeals, ...data.tractorDeals]);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching tyres:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchTyres();
  // }, []);


useEffect(() => {
  const fetchTyres = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url.nodeapipath}/get-bestdeal`);
      const data = await response.json();
      if (data.success) {
        // Combine Car, Bike, Truck, Tractor, Battery, Alloy Wheel & Accessory Deals
        setBestDeals([
          ...data.carDeals,
          ...data.bikeDeals,
          ...data.truckDeals,
          ...data.tractorDeals,
          ...data.batteryDeals, // Include battery deals
          ...data.alloyWheelDeals, // Include alloy wheel deals
          ...data.accessoryDeals // Include accessory deals
        ]);
      }
    } catch (error) {
      console.error("Error fetching tyres:", error);
    } finally {
      setLoading(false);
    }
  };
  fetchTyres();
}, []);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch(`${url.nodeapipath}/get-tyre-brands`);
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };
    fetchBrands();
  }, []);

  const sortDeals = (deals, sortBy) => {
    switch (sortBy) {
      case "popularity":
        return deals.sort((a, b) => b.popularity - a.popularity);
      case "date":
        return deals.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "discount-highest":
        return deals.sort((a, b) => {
          const discountA = (a.price - a.Salesprice) / a.price;
          const discountB = (b.price - b.Salesprice) / b.price;
          return discountB - discountA;
        });
      case "discount-lowest":
        return deals.sort((a, b) => {
          const discountA = (a.price - a.Salesprice) / a.price;
          const discountB = (b.price - b.Salesprice) / b.price;
          return discountA - discountB;
        });
      case "discount-30-plus":
        return deals.filter(tyre => (tyre.price - tyre.Salesprice) / tyre.price > 0.30);
      case "discount-20-less":
        return deals.filter(tyre => (tyre.price - tyre.Salesprice) / tyre.price < 0.20);
      default:
        return deals;
    }
  };

  useEffect(() => {
    if (bestDeals.length > 0) {
      const sorted = sortDeals([...bestDeals], selectedSort);
      setSortedTyres(sorted);
    }
  }, [selectedSort, bestDeals]);

  useEffect(() => {
    if (bestDeals.length > 0) {
      setSortedTyres(sortDeals([...bestDeals], "discount-highest")); // Sort from high to low discount
    }
  }, [bestDeals]);

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Bestdeal</li>
          </ul>
        </div>
      </section>

      <section className="padding-block-500">
        <div className="container">
          <div className="row row-gap-5">
            <div className="col-md-3 hideMobile">
              <div className="siderFilter">
                <div className="box">
                  <h3>Tyre Brand</h3>
                  <form>
                    <ul>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="allCar"
                            checked={selectedBrands.length === 0} // Checked if no brand is selected
                            onChange={() => handleBrandClick("All")}
                          />
                          <label className="form-check-label" htmlFor="allCar">
                            All
                          </label>
                        </div>
                      </li>
                      {brands.map((brand) => (
                        <li key={brand._id}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`brand-${brand._id}`}
                              checked={selectedBrands.includes(brand._id)}
                              onChange={() => handleBrandClick(brand._id)}
                            />
                            <label className="form-check-label" htmlFor={`brand-${brand._id}`}>
                              {brand.name}
                            </label>
                          </div>
                        </li>
                      ))}
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
                      name="orderby"
                      className="orderby"
                      aria-label="Shop order"
                      value={selectedSort}
                      onChange={handleSortChange}
                    >
                      <option value="menu_order">Default sorting</option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="date">Sort by latest</option>
                      <option value="discount-highest">Sort by highest discount</option>
                      <option value="discount-lowest">Sort by lowest discount</option>
                      <option value="discount-30-plus">Sort by discount 30%</option>
                      <option value="discount-20-less">Sort by discount 20%</option>
                    </select>
                  </form>
                </div>
              </div>

              <div className="row gx-4 justify-content-start row-gap-5 mt-5">
                {loading ? (
                  <p>Loading best deals...</p>
                ) : sortedTyres.length === 0 ? (
                  <p>No best deals available at the moment.</p>
                ) : (
                  sortedTyres.map((tyre) => (
                    <div className="col" key={tyre._id}>
                      <div className="singleProduct">
                        <div className="photo">
                          <div className="sale">SALE</div>
                          <div className="new">NEW</div>
                          <ul className="cate">
                            {tyre.tyreType === 'car' && (
                              <li>
                                <img
                                  src="assets/images/icons/png/car.png"
                                  className="car"
                                  alt="Car Icon"
                                />
                              </li>
                            )}
                            {tyre.tyreType === 'bike' && (
                              <>
                                <li>
                                  <img
                                    src="assets/images/icons/png/bike.png"
                                    className="bike"
                                    alt="Bike Icon"
                                  />
                                </li>
                                {tyre.fronttyre && (
                                  <li>
                                    <img
                                      src="assets/images/icons/png/front.png"
                                      className="front"
                                      alt="Front Tyre Icon"
                                    />
                                  </li>
                                )}
                                {tyre.reartyre && (
                                  <li>
                                    <img
                                      src="assets/images/icons/png/rear.png"
                                      className="rear"
                                      alt="Rear Tyre Icon"
                                    />
                                  </li>
                                )}
                              </>
                            )}
                            {tyre.tyreType === 'truck' && (
                              <li>
                                <img
                                  src="assets/images/icons/png/truck.svg"
                                  className="truck"
                                  alt="Truck Icon"
                                />
                              </li>
                            )}
                            {tyre.tyreType === 'tractor' && (
                              <li>
                                <img
                                  src="assets/images/icons/png/tractor.svg"
                                  className="tractor"
                                  alt="Tractor Icon"
                                />
                              </li>
                            )}
                          </ul>
                          {/* <img src={`${url.nodeapipath}/uploads/${tyre.avatarImages}`} alt={tyre.title} /> */}
                      <img src={`https://tyres.blr1.digitaloceanspaces.com/${tyre.avatarImages}`} alt={tyre.title} />

                        </div>
                        <div className="details">
                          <div className="brand">{tyre.brand}</div>
                          <h2>{tyre.title}</h2>
                          <h2>{tyre.description}</h2>
                          <div className="price">
                            <div className="new">₹{tyre.Salesprice}</div>
                            <div className="old">₹{tyre.price}</div>
                          </div>
                          <p className="discount text-success">
                            <strong> Discount: {Math.round(((tyre.price - tyre.Salesprice) / tyre.price) * 100)}% OFF </strong>
                          </p>
                          <Link to={`/${tyre.tyreType}/${tyre.slug}`} className="btn2">
                            VIEW DETAILS
                          </Link>
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
      <FrontendFooter />
    </>
  );
};

export default BestDeal;