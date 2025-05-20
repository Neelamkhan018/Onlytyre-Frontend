
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import FrontendFooter from '../Footer/FrontendFooter';


// const ForTyre = () => {

//   const [selectedBrand, setSelectedBrand] = useState('All');
//   const [allTyres, setAllTyres] = useState([]);
//   const [minPrice, setMinPrice] = useState(1000);
//   const [maxPrice, setMaxPrice] = useState(873690);
//   const [sortOption, setSortOption] = useState('');
//   const [sortedTyres, setSortedTyres] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [loading, setLoading] = useState(false);


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



// // Fetch tyres for multiple selected brands
// const fetchTyresForBrands = async (brands) => {
//   try {
//     let tyreData = [];

//     if (brands.length === 0) {
//       // If no brands are selected, fetch all tyres
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

//     const fetchBrands = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/get-tyre-brands'); //check box brand fetching
//         const data = await response.json();
//         setBrands(data);
//       } catch (error) {
//         console.error('Error fetching brands:', error);
//       }
//     };

//     fetchBrands();
//   }, []);




//   useEffect(() => {
//     const fetchTyres = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('http://localhost:8000/get-tyres');
//         const data = await response.json();
//         console.log('Fetched tyres:', data);
        
//         // Filter car tyres and remove duplicates
//         const carTyres = data.filter(tyre => tyre.tyreType === 'car');
//         const uniqueCarTyres = [...new Map(carTyres.map(t => [t._id, t])).values()];
        
//         // Filter bike tyres and remove duplicates
//         const bikeTyres = data.filter(tyre => tyre.tyreType === 'bike');
//         const uniqueBikeTyres = [...new Map(bikeTyres.map(t => [t._id, t])).values()];
        
//         // Combine both car and bike tyres
//         setSortedTyres([...uniqueCarTyres, ...uniqueBikeTyres]);
//       } catch (error) {
//         console.error('Error fetching tyres:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchTyres();
//   }, []);
  

 

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
  



//   const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);



//   return (
//     <>
  
//       <section className="breadcrumbs">
//         <div className="container">
//           <ul>
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//             <li>
//               Tyres
//             </li>
//           </ul>
//         </div>
//       </section>
//       <section className="padding-block-500">
//       <div className="container">
//         <div className="row row-gap-5">
//             <div className="col-md-3 hideMobile">
//               {/* <Sidefilter ></Sidefilter> */}


//               <div className="siderFilter">
//         <div className="box">
//           <h3>FILTER BY PRICE</h3>
  
//         </div>
//         <div className="box">
//           <h3>Tyre Brand</h3>
// <form action="">
//   <ul>


// <li>
//   <div className="form-check">
//     <input
//       className="form-check-input"
//       type="checkbox"
//       id="allCar"
//       checked={selectedBrands.length === 0}
//       onChange={() => handleBrandClick("All")}
//     />
//     <label className="form-check-label" htmlFor="allCar">
//       All
//     </label>
//   </div>
// </li>

// <ul>
//   {brands.map((brand) => (
//     <li key={brand._id}>
//       <div className="form-check">
//         <input
//           className="form-check-input"
//           type="checkbox"
//           id={`brand-${brand._id}`}
//           checked={selectedBrands.includes(brand._id)}
//           onChange={() => handleBrandClick(brand._id)}
//         />
//         <label className="form-check-label" htmlFor={`brand-${brand._id}`}>
//           {brand.name}
//         </label>
//       </div>
//     </li>
//   ))}
// </ul>

//   </ul>
// </form>
//         </div>


//       </div>
//           </div>
//           <div className="col-md-9">
//             <div className="row align-items-center">
//               <div className="col-6 col-md-9">
//                 <a
//                   href=""
//                   className="showsidebar"
//                   data-bs-toggle="offcanvas"
//                   data-bs-target="#sideBarFilter"
//                   aria-controls="sideBarFilter"
//                 >
//                   <img src="assets/images/icons/svg/menu.svg" alt="" /> Show Sidebar
//                 </a>
//               </div>

// <div className="col-6 col-md-3">
// <form action="">
//   <select
//     value={sortOption}
//     onChange={handleSortChange}
//     name="orderby"
//     className="orderby"
//     aria-label="Shop order"
//      defaultValue="popularity"
//   >
//     <option value="menu_order">
//       Default Sorting
//     </option>
//     <option value="popularity">Sort by Popularity</option>
//     <option value="rating-desc">Sort by Average Rating</option>
//     <option value="newest">Sort by Latest</option>
//     <option value="price-asc">Sort by Price: Low to High</option>
//     <option value="price-desc">Sort by Price: High to Low</option>
//   </select>
//   </form>
// </div>


//             </div>

// <div className="row gx-4 justify-content-start row-gap-5 mt-5">
  
//     {sortedTyres
//       .filter((tyre) => tyre.price >= minPrice && tyre.price <= maxPrice) // Filter tyres by price
//       .map((tyre) => {
//         const isNew = (new Date() - new Date(tyre.createdAt)) < 30 * 24 * 60 * 60 * 1000; // within 30 days
//         const isOnSale = tyre.Salesprice < tyre.price;

//         return (
//           <div className="col" key={tyre.id}>
//             <div className="singleProduct">
//               <div className="photo">
//                 {isOnSale && <div className="sale">SALE</div>}
//                 {isNew && <div className="new">NEW</div>}
                              
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
//                 <img src={`http://localhost:8000/uploads/${tyre.avatarImages}`} alt={tyre.title}  />
//               </div>
//               <div className="details">
//                 <div className="brand">{tyre.brand}</div>
//                 <h2>{tyre.title}</h2>
//                 <h2>{tyre.description}</h2>
//                 <div className="price">
//                   <div className="new">₹{tyre.Salesprice}</div>
//                   {isOnSale && <div className="old">₹{tyre.price}</div>}
//                 </div>
//                 <Link to={`/${tyre.tyreType}/${tyre.slug}`} className="btn2">
//                   VIEW DETAILS
//                 </Link>

//               </div>
//             </div>
//           </div>
//         );
//       })}
//   </div>
// </div>

//           </div>
//         </div>

//       </section>

//       <FrontendFooter />
//     </>
//   );
// };

// export default ForTyre;





import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FrontendFooter from '../Footer/FrontendFooter';


import url from "../../env.js"



const ForTyre = () => {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [allTyres, setAllTyres] = useState([]);
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(873690);
  const [sortOption, setSortOption] = useState('');
  const [sortedTyres, setSortedTyres] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
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

  // Fetch tyres for multiple selected brands
  const fetchTyresForBrands = async (brands) => {
    try {
      let tyreData = [];

      if (brands.length === 0) {
        // If no brands are selected, fetch all tyres
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

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch(`${url.nodeapipath}/get-tyre-brands`); // Fetch tyre brands
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    const fetchTyres = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url.nodeapipath}/get-tyres`);
        const data = await response.json();
        console.log('Fetched tyres:', data);
        
        // Filter car, bike, truck, and tractor tyres and remove duplicates
        const carTyres = data.filter(tyre => tyre.tyreType === 'car');
        const uniqueCarTyres = [...new Map(carTyres.map(t => [t._id, t])).values()];
        
        const bikeTyres = data.filter(tyre => tyre.tyreType === 'bike');
        const uniqueBikeTyres = [...new Map(bikeTyres.map(t => [t._id, t])).values()];

        const truckTyres = data.filter(tyre => tyre.tyreType === 'truck');
        const uniqueTruckTyres = [...new Map(truckTyres.map(t => [t._id, t])).values()];

        const tractorTyres = data.filter(tyre => tyre.tyreType === 'tractor'); // New line for tractor tyres
        const uniqueTractorTyres = [...new Map(tractorTyres.map(t => [t._id, t])).values()]; // Remove duplicates

        // Combine all tyres
        setSortedTyres([...uniqueCarTyres, ...uniqueBikeTyres, ...uniqueTruckTyres, ...uniqueTractorTyres]);
      } catch (error) {
        console.error('Error fetching tyres:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchTyres();
  }, []);
  

  // useEffect(() => {
  //   const fetchTyres = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch(`${url.nodeapipath}/get-tyres`);
  //       const data = await response.json();
  //       console.log('Fetched tyres:', data);
        
  //       // Filter car, bike, truck, tractor tyres, batteries, alloy wheels, and accessories
  //       const carTyres = data.filter(tyre => tyre.tyreType === 'car');
  //       const uniqueCarTyres = [...new Map(carTyres.map(t => [t._id, t])).values()];
        
  //       const bikeTyres = data.filter(tyre => tyre.tyreType === 'bike');
  //       const uniqueBikeTyres = [...new Map(bikeTyres.map(t => [t._id, t])).values()];
  
  //       const truckTyres = data.filter(tyre => tyre.tyreType === 'truck');
  //       const uniqueTruckTyres = [...new Map(truckTyres.map(t => [t._id, t])).values()];
  
  //       const tractorTyres = data.filter(tyre => tyre.tyreType === 'tractor');
  //       const uniqueTractorTyres = [...new Map(tractorTyres.map(t => [t._id, t])).values()];
  
  //       const batteries = data.filter(tyre => tyre.tyreType === 'battery'); // Assuming type is used for batteries
  //       const uniqueBatteries = [...new Map(batteries.map(t => [t._id, t])).values()];
  
  //       const alloyWheels = data.filter(tyre => tyre.tyreType === 'alloywheel'); // Assuming type is used for alloy wheels
  //       const uniqueAlloyWheels = [...new Map(alloyWheels.map(t => [t._id, t])).values()];
  
  //       const accessories = data.filter(tyre => tyre.tyreType === 'accessories'); // Assuming type is used for accessories
  //       const uniqueAccessories = [...new Map(accessories.map(t => [t._id, t])).values()];
  
  //       // Combine all unique tyres, batteries, alloy wheels, and accessories
  //       setSortedTyres([
  //         ...uniqueCarTyres,
  //         ...uniqueBikeTyres,
  //         ...uniqueTruckTyres,
  //         ...uniqueTractorTyres,
  //         ...uniqueBatteries,
  //         ...uniqueAlloyWheels,
  //         ...uniqueAccessories
  //       ]);
  //     } catch (error) {
  //       console.error('Error fetching tyres:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   fetchTyres();
  // }, []);





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
  
    setSortedTyres([...tyres]); // Ensure React detects the state update
  };

  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);

  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              Tyres
            </li>
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
                  <form action="">
                    {/* <ul>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="allTyres"
                            checked={selectedBrands.length === 0}
                            onChange={() => handleBrandClick("All")}
                          />
                          <label className="form-check-label" htmlFor="allTyres">
                            All
                          </label>
                        </div>
                      </li>
                      <ul>
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
                    </ul> */}

                    {/* This is the brands checkbox list part inside your ForTyre component */}

{/* <ul>
  <li>
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id="allTyres"
        checked={selectedBrands.length === 0}
        onChange={() => handleBrandClick("All")}
      />
      <label className="form-check-label" htmlFor="allTyres">
        All
      </label>
    </div>
  </li>
  <ul>
    {(() => {
      // Filter by relevant categories
      const filteredBrands = brands.filter(brand =>
        ['car', 'bike', 'truck', 'tractor'].includes(brand.category)
      );

      // Create a Map to store unique brands by name
      const uniqueBrandsMap = new Map();
      filteredBrands.forEach(brand => {
        if (!uniqueBrandsMap.has(brand.name.toLowerCase())) {
          uniqueBrandsMap.set(brand.name.toLowerCase(), brand);
        }
      });

      // Convert Map values to an array
      const uniqueBrands = Array.from(uniqueBrandsMap.values());

      // Render checkboxes for unique brands
      return uniqueBrands.map(brand => (
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
      ));
    })()}
  </ul>
</ul> */}

<ul>
  <li>
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id="allTyres"
        checked={selectedBrands.length === 0}
        onChange={() => handleBrandClick("All")}
      />
      <label className="form-check-label" htmlFor="allTyres">
        All
      </label>
    </div>
  </li>
  <ul>
    {(() => {
      // Filter brands for relevant categories
      const filteredBrands = brands.filter(brand =>
        ['car', 'bike', 'truck', 'tractor'].includes(brand.category)
      );

      // Use Map with trimmed lowercase keys for uniqueness
      const uniqueBrandsMap = new Map();
      filteredBrands.forEach(brand => {
        const key = brand.name.trim().toLowerCase(); // trim spaces and lowercase
        if (!uniqueBrandsMap.has(key)) {
          uniqueBrandsMap.set(key, brand);
        }
      });

      const uniqueBrands = Array.from(uniqueBrandsMap.values());

      return uniqueBrands.map(brand => (
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
      ));
    })()}
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
                      defaultValue="popularity"
                    >
                      <option value="menu_order">Default Sorting</option>
                      <option value="popularity">Sort by Popularity</option>
                      <option value="rating-desc">Sort by Average Rating</option>
                      <option value="newest">Sort by Latest</option>
                      <option value="price-asc">Sort by Price: Low to High</option>
                      <option value="price-desc">Sort by Price: High to Low</option>
                    </select>
                  </form>
                </div>
              </div>

              <div className="row gx-4 justify-content-start row-gap-5 mt-5">
                {sortedTyres
                  .filter((tyre) => tyre.price >= minPrice && tyre.price <= maxPrice) // Filter tyres by price
                  .map((tyre) => {
                    const isNew = (new Date() - new Date(tyre.createdAt)) < 30 * 24 * 60 * 60 * 1000; // within 30 days
                    const isOnSale = tyre.Salesprice < tyre.price;

                    return (
                      <div className="col" key={tyre._id}>
                        <div className="singleProduct">
                          <div className="photo">
                            {isOnSale && <div className="sale">SALE</div>}
                            {isNew && <div className="new">NEW</div>}
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
                              {tyre.tyreType === 'tractor' && ( // New section for tractor tyres
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
                            {/* <h2>{tyre.title}</h2> */}
                              <h2 style={{
                  display:"-webkit-box",
                  WebkitLineClamp : 2,
                  WebkitBoxOrient:"vertical",
                  overflow:"hidden",
                  textOverflow:"ellipsis",
                  maxWidth:"100%"
                }} 
                >{tyre.title}</h2>
                            <h2>{tyre.description}</h2>
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

export default ForTyre;