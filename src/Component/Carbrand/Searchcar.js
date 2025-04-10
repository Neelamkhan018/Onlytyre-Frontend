


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import FrontendFooter from '../Footer/FrontendFooter';
// import HeaderMenu from '../Menu/HeaderMenu';
// import { useLocation } from 'react-router-dom';



// export default function Searchcar() {


//   const [selectedBrand, setSelectedBrand] = useState('All');
//   const [allTyres, setAllTyres] = useState([]);
//   const [minPrice, setMinPrice] = useState(1000);
//   const [maxPrice, setMaxPrice] = useState(873690);
//   const [sortOption, setSortOption] = useState('');
//   const [sortedTyres, setSortedTyres] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [loading, setLoading] = useState(false);

  
//   const location = useLocation();
//     // const CarResults = location.state?.results || []; 
//     const [CarResults, setCarResult] = useState(location.state?.results || []); // Set initial state from location or empty array

    

// const handleBrandClick = async (brandId) => {
//   setSelectedBrand(brandId);  // Update the selected brand

//   setLoading(true);  // Set loading state to true
//   try {
//     let response;

//     // Fetch tyres based on the selected brand
//     if (brandId === 'All') {
//       response = await fetch('http://localhost:8000/get-tyres');  // Get all tyres
//     } else {
//       response = await fetch(`http://localhost:8000/get-forcar/${brandId}`);  // Get tyres for the selected brand
//     }

//     const data = await response.json();

//     // Filter tyres based on type (car tyres for "car" type)
//     let tyres = brandId === 'All' 
//       ? data.filter((tyre) => tyre.tyreType === 'car') 
//       : data.brand;

//     // Remove duplicate tyres based on _id
//     tyres = [...new Map(tyres.map((t) => [t._id, t])).values()];

//     setCarResult(tyres);  // Update the car results with the sorted tyres state
//   } catch (error) {
//     console.error('Error fetching tyres:', error);
//   } finally {
//     setLoading(false);  // Set loading state to false
//   }
// };



//   useEffect(() => {
//     const fetchTyres = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('http://localhost:8000/get-tyres');
//         const data = await response.json();
//         const carTyres = data.filter(tyre => tyre.tyreType === 'car');
//         const uniqueCarTyres = [...new Map(carTyres.map(t => [t._id, t])).values()];
//         setSortedTyres(uniqueCarTyres);
//       } catch (error) {
//         console.error('Error fetching tyres:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchBrands = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/get-carbrand');
//         const data = await response.json();
//         setBrands(data);
//       } catch (error) {
//         console.error('Error fetching brands:', error);
//       }
//     };

//     fetchTyres();
//     fetchBrands();
//   }, []);

//   const handleSortChange = (event) => {
//     const value = event.target.value;
//     setSortOption(value);

//     // let tyres = [...sortedTyres];

//     let tyres = [...sortedTyres, ...CarResults];
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
//               Car
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
//   <h3>Car Brand</h3>
//   <form action="">
//     <ul>
//       <li>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             id="allCar"
//             checked={selectedBrand.length === 0 || selectedBrand.includes('All')}
//             onChange={() => handleBrandClick('All')}
//           />
//           <label className="form-check-label" htmlFor="allCar">
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
//               checked={selectedBrand.includes(brand._id)}
//               onChange={() => handleBrandClick(brand._id)}
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





//         <div className="box">
//           <h3>Bike Brand</h3>
//           <form action="">
//             <ul>
//               <li>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     id="allBike"
//                   />
//                   <label className="form-check-label" htmlFor="allBike">
//                     All
//                   </label>
//                 </div>
//               </li>
//               <li>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     id="Royal Enfield"
//                   />
//                   <label className="form-check-label" htmlFor="Royal Enfield">
//                     Royal Enfield
//                   </label>
//                 </div>
//               </li>
//               <li>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     id="Hero"
//                   />
//                   <label className="form-check-label" htmlFor="Hero">
//                     Hero
//                   </label>
//                 </div>
//               </li>
//               <li>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     id="Bajaj"
//                   />
//                   <label className="form-check-label" htmlFor="Bajaj">
//                     Bajaj
//                   </label>
//                 </div>
//               </li>
//               <li>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     id="Yamaha"
//                   />
//                   <label className="form-check-label" htmlFor="Yamaha">
//                     Yamaha
//                   </label>
//                 </div>
//               </li>
//               <li>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     id="TVS"
//                   />
//                   <label className="form-check-label" htmlFor="TVS">
//                     TVS
//                   </label>
//                 </div>
//               </li>
//             </ul>
//           </form>
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
  
  

//     {CarResults 


//   .sort((a, b) => {
//     switch (sortOption) {
//       case "popularity":
//         return b.popularity - a.popularity; // Replace `popularity` with your actual field name
//       case "rating-desc":
//         return b.rating - a.rating; // Replace `rating` with your actual field name
//       case "newest":
//         return new Date(b.createdAt) - new Date(a.createdAt);
//       case "price-asc":
//         return a.price - b.price;
//       case "price-desc":
//         return b.price - a.price;
//       default:
//         return 0; // Default sorting (no change)
//     }
//   })


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



export default function Searchcar() {
    const { carBrand, carModel, tyreBrand, season } = useParams();
    const [sortedTyres, setSortedTyres] = useState([]);
    const [loading, setLoading] = useState(false);

   

    useEffect(() => {

        window.scrollTo(0, 0); // 👈 scroll to top when the component loads

        const fetchTyres = async () => {
            setLoading(true);
            try {
                const queryParams = new URLSearchParams();
                if (carBrand) queryParams.append("carBrand", carBrand);
                if (carModel) queryParams.append("carModel", carModel);
                if (tyreBrand) queryParams.append("tyreBrand", tyreBrand);
                if (season) queryParams.append("season", season);

                const response = await fetch(`${url.nodeapipath}/get-tyres?${queryParams.toString()}`);
                const data = await response.json();
                console.log("API Response:", data); // Log the response

                // Filter tyres for 'car' type only
                const filteredTyres = data.filter(tyre => tyre.tyreType === "car");

                // Apply additional filtering based on selected criteria
                const finalFilteredTyres = filteredTyres.filter(tyre => {
                    const matchesBrand = tyreBrand ? tyre.tyreBrand.includes(tyreBrand) : true;
                    const matchesSeason = season && season !== "all" ? tyre.seasons === season : true;
                    const matchesCarBrand = carBrand ? tyre.carbrand.includes(carBrand) : true;
                    const matchesCarModel = carModel ? tyre.carModel.includes(carModel) : true;

                    return matchesBrand && matchesSeason && matchesCarBrand && matchesCarModel;
                });

                setSortedTyres(finalFilteredTyres); // Update sorted tyres
            } catch (error) {
                console.error("Error fetching tyres:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTyres();
    }, [carBrand, carModel, tyreBrand, season]); // Re-run when URL params change

    return (
        <>
          
            <section className="breadcrumbs">
                <div className="container">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Car</li>
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