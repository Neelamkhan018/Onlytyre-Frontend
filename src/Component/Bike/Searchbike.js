


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import FrontendFooter from '../Footer/FrontendFooter';
// import HeaderMenu from '../Menu/HeaderMenu';
// import { useLocation } from 'react-router-dom';



// export default function SearchBike() {

//   const [selectedBrand, setSelectedBrand] = useState('All');

//   const [allTyres, setAllTyres] = useState([]); // State to hold all tyres
//   const [minPrice, setMinPrice] = useState(1000); // Initial min price
//   const [maxPrice, setMaxPrice] = useState(873690); // Initial max price
//   const [sortOption, setSortOption] = useState(''); // Sorting option state
//   const [sortedTyres, setSortedTyres] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const location = useLocation();
//   // const bikeResults = location.state?.results || []; 

//   const [bikeResults, setBikeResults] = useState([]);

  



//   const handleBrandClick = async (brandId) => {
//     setSelectedBrand(brandId);  // Update the selected brand
  
//     setLoading(true);  // Set loading state to true
//     try {
//       const response = brandId === 'All'
//         ? await fetch('http://localhost:8000/get-tyres')  // Fetch all tyres
//         : await fetch(`http://localhost:8000/get-forbike/${brandId}`);  // Fetch tyres for the selected bike brand
  
//       const data = await response.json();
  
//       // Filter tyres based on type (bike tyres for "bike" type)
//       let tyres = brandId === 'All' 
//         ? data.filter(tyre => tyre.tyreType === 'bike') 
//         : data.brand;
  
//       // Remove duplicate tyres based on _id
//       tyres = [...new Map(tyres.map(t => [t._id, t])).values()];
  
//       setBikeResults(tyres);  // Update the bike results with the filtered tyres
//     } catch (error) {
//       console.error('Error fetching tyres:', error);
//     } finally {
//       setLoading(false);  // Set loading state to false
//     }
//   };
  
//   useEffect(() => {
//     const fetchTyres = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('http://localhost:8000/get-tyres'); // Fetch all tyres
//         const data = await response.json();
//         console.log('Fetched tyres:', data);
        
//         // Filter only car tyres
//         const BikeTyres = data.filter(tyre => tyre.tyreType === 'bike');
        
//         // Remove duplicates
//         const uniqueBikeTyres = [...new Map(BikeTyres.map(t => [t._id, t])).values()];
        
//         setSortedTyres(uniqueBikeTyres);
//       } catch (error) {
//         console.error('Error fetching tyres:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
  

//     const fetchBrands = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/get-bikebrand'); // Fetch car brands
//         const data = await response.json();
//         setBrands(data);
//         console.log('Fetched brands:', data);
//       } catch (error) {
//         console.error('Error fetching brands:', error);
//       }
//     };

//     fetchTyres();
//     fetchBrands();
//   }, []); // Runs only once on mount


 

//   const handleSortChange = (event) => {
//     const value = event.target.value;
//     setSortOption(value);

//     // let tyres = [...sortedTyres];  

//     let tyres = [...sortedTyres, ...bikeResults];
//     switch (value) {
//       case 'price-asc':
//         tyres.sort((a, b) => a.price - b.price);
//         break;
//       case 'price-desc':
//         tyres.sort((a, b) => b.price - a.price);
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

//     setSortedTyres(tyres);
//   };

//   return (
//     <>
//     <HeaderMenu />
//       <section className="breadcrumbs">
//         <div className="container">
//           <ul>
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//             <li>
//               Bike
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

        


// <div className="box">
//   <h3>Bike Brand</h3>
//   <form action="">
//     <ul>
//       <li>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             id="allBike"
//             checked={selectedBrand.includes('All')} // Check if 'All' is selected
//             onChange={() => handleBrandClick('All')}
//           />
//           <label className="form-check-label" htmlFor="allBike">
//             All
//           </label>
//         </div>
//       </li>
//       {brands.map((brand) => (
//         <li key={brand._id}>
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id={`brand-${brand._id}`}
//               checked={selectedBrand.includes(brand._id)} // Check if this brand is selected
//               onChange={() => handleBrandClick(brand._id)} // Pass the brand's ID
//             />
//             <label className="form-check-label" htmlFor={`brand-${brand._id}`}>
//               {brand.name}
//             </label>
//           </div>
//         </li>
//       ))}
//     </ul>
//   </form>
// </div>



        
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
  
//     {bikeResults


// .sort((a, b) => {
//   switch (sortOption) {
//     case "popularity":
//       return b.popularity - a.popularity; // Replace `popularity` with your actual field name
//     case "rating-desc":
//       return b.rating - a.rating; // Replace `rating` with your actual field name
//     case "newest":
//       return new Date(b.createdAt) - new Date(a.createdAt);
//     case "price-asc":
//       return a.price - b.price;
//     case "price-desc":
//       return b.price - a.price;
//     default:
//       return 0; // Default sorting (no change)
//   }
// })

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
//                 <ul className="cate">
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




import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import FrontendFooter from '../Footer/FrontendFooter';


import url from "../../env.js"



export default function SearchBike() {
    const { bikeBrand, bikeModel, tyreBrand, season } = useParams(); // Capture URL parameters
    const [sortedTyres, setSortedTyres] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortOption, setSortOption] = useState('menu_order'); // Default sorting option

    useEffect(() => {

        window.scrollTo(0, 0); // 👈 scroll to top when the component loads
        
        const fetchTyres = async () => {
            setLoading(true);
            try {
                const queryParams = new URLSearchParams();
                if (bikeBrand) queryParams.append("bikeBrand", bikeBrand);
                if (bikeModel) queryParams.append("bikeModel", bikeModel);
                if (tyreBrand) queryParams.append("tyreBrand", tyreBrand);
                if (season) queryParams.append("season", season);

                const response = await fetch(`${url.nodeapipath}/get-tyres?${queryParams.toString()}`);
                const data = await response.json();
                console.log("API Response:", data); // Log the response

                // Filter tyres for 'bike' type only
                const filteredTyres = data.filter(tyre => tyre.tyreType === "bike");

                // Apply additional filtering based on selected criteria
                const finalFilteredTyres = filteredTyres.filter(tyre => {
                    const matchesBrand = tyreBrand ? tyre.tyreBrand.includes(tyreBrand) : true;
                    const matchesSeason = season && season !== "all" ? tyre.seasons === season : true;
                    const matchesBikeBrand = bikeBrand ? tyre.bikeBrand.includes(bikeBrand) : true;
                    const matchesBikeModel = bikeModel ? tyre.bikeModel.includes(bikeModel) : true;

                    return matchesBrand && matchesSeason && matchesBikeBrand && matchesBikeModel;
                });

                setSortedTyres(finalFilteredTyres); // Update sorted tyres
            } catch (error) {
                console.error("Error fetching tyres:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTyres();
    }, [bikeBrand, bikeModel, tyreBrand, season]); // Re-run when URL params change



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
                   

                        
                        <div className="col-md-9">
                            {loading ? (
                                <p>Loading...</p>
                            ) : (
                                <div className="row gx-4 justify-content-start row-gap-5 mt-5">
                                    {sortedTyres.length > 0 ? (
                                        sortedTyres.map((tyre) => {
                                            const isNew = (new Date() - new Date(tyre.createdAt)) < 30 * 24 * 60 * 60 * 1000;
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
                              src={`${process.env.PUBLIC_URL}/assets/images/icons/png/car.png`}
                              className="car"
                              alt="Car Icon"
                            />
                          </li>
                        )}
                        
                        {tyre.tyreType === 'bike' && (
                          <>
                            <li>
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/images/icons/png/bike.png`}
                                className="bike"
                                alt="Bike Icon"
                              />
                            </li>
                            {tyre.fronttyre && (
                              <li>
                                <img
                                  src={`${process.env.PUBLIC_URL}/assets/images/icons/png/front.png`}
                                  className="front"
                                  alt="Front Tyre Icon"
                                />
                              </li>
                            )}
                            {tyre.reartyre && (
                              <li>
                                <img
                                  src={`${process.env.PUBLIC_URL}/assets/images/icons/png/rear.png`}
                                  className="rear"
                                  alt="Rear Tyre Icon"
                                />
                              </li>
                            )}
                          </>
                        )}
                        
                                                            </ul>
                                                            <img src={`${url.nodeapipath}/uploads/${tyre.avatarImages}`} alt={tyre.title} />
                                                        </div>
                                                        <div className="details">
                                                            <div className="brand">{tyre.tyreBrand.join(', ')}</div>
                                                            <h2>{tyre.title}</h2>
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
                                        })
                                    ) : (
                                        <p>No tyres found for the selected criteria.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <FrontendFooter />
        </>
    );
}