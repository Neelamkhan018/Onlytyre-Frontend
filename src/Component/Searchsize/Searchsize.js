


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import FrontendFooter from '../Footer/FrontendFooter';
// import HeaderMenu from '../Menu/HeaderMenu';
// import { useLocation } from 'react-router-dom';



// export default function Searchsize() {


//   const [selectedBrand, setSelectedBrand] = useState('All');
//   const [allTyres, setAllTyres] = useState([]);
//   const [minPrice, setMinPrice] = useState(1000);
//   const [maxPrice, setMaxPrice] = useState(873690);
//   const [sortOption, setSortOption] = useState('');
//   const [sortedTyres, setSortedTyres] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [carBrands, setCarBrands] = useState([]);
// const [bikeBrands, setBikeBrands] = useState([]);
//     const [selectedBrands, setSelectedBrands] = useState([]);


  
//   const location = useLocation();
//     // const CarResults = location.state?.results || []; 
//     const [CarResults, setCarResult] = useState(location.state?.results || []); // Set initial state from location or empty array

    


// const handleBrandClick = async (brandId) => {
//     setSelectedBrand(brandId); // Update the selected brand
  
//     setLoading(true); // Set loading state to true
//     try {
//       const response = await fetch(`http://localhost:8000/get-forcar/${brandId}`); // Fetch tyres for the selected brand
//       const data = await response.json();
  
//       // Remove duplicate tyres based on _id
//       const tyres = [...new Map(data.brand.map((t) => [t._id, t])).values()];
  
//       setCarResult(tyres); // Update the car results with the sorted tyres state
//     } catch (error) {
//       console.error('Error fetching tyres:', error);
//     } finally {
//       setLoading(false); // Set loading state to false
//     }
//   };
  
  

// useEffect(() => {
//     const fetchTyres = async () => {
//         setLoading(true);
//         try {
//             const response = await fetch('http://localhost:8000/get-tyres');
//             const data = await response.json();

//             // Remove duplicates based on _id
//             const uniqueTyres = [...new Map(data.map(t => [t._id, t])).values()];

//             // Update state with all tyres
//             setSortedTyres(uniqueTyres);
//         } catch (error) {
//             console.error('Error fetching tyres:', error);
//         } finally {
//             setLoading(false);
//         }
//     };


//     const fetchBrands = async () => {
//         try {
//             // Fetch car brands
//             const carResponse = await fetch('http://localhost:8000/get-carbrand');
//             const carData = await carResponse.json();
    
//             // Fetch bike brands
//             const bikeResponse = await fetch('http://localhost:8000/get-bikebrand');
//             const bikeData = await bikeResponse.json();
    
//             // Update state with both car and bike brands
//             setCarBrands(carData);
//             setBikeBrands(bikeData);
//         } catch (error) {
//             console.error('Error fetching brands:', error);
//         }
//     };
    

//     fetchTyres();
//     fetchBrands();
// }, []);




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



//   return (
//     <>

//       <section className="breadcrumbs">
//         <div className="container">
//           <ul>
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//             <li>
//               Size
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
import { Link } from 'react-router-dom';
import FrontendFooter from '../Footer/FrontendFooter';
import { useLocation } from 'react-router-dom';


import url from "../../env.js"



export default function Searchsize() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [allTyres, setAllTyres] = useState([]);
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(873690);
  const [sortOption, setSortOption] = useState('');
  const [sortedTyres, setSortedTyres] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  
  const location = useLocation();
  const [CarResults, setCarResult] = useState(location.state?.results || []);

  const handleBrandChange = (brandId) => {
    setSelectedBrands((prevSelected) => {
      if (prevSelected.includes(brandId)) {
        return prevSelected.filter((id) => id !== brandId); // Remove brand if already selected
      } else {
        return [...prevSelected, brandId]; // Add brand if not selected
      }
    });
  };

  useEffect(() => {

    window.scrollTo(0, 0); // 👈 scroll to top when the component loads

    const fetchTyres = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url.nodeapipath}/get-tyres`);
        const data = await response.json();
        const uniqueTyres = [...new Map(data.map(t => [t._id, t])).values()];
        setSortedTyres(uniqueTyres);
      } catch (error) {
        console.error('Error fetching tyres:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchBrands = async () => {
      try {
        const response = await fetch(`${url.nodeapipath}/get-tyre-brands`);
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchTyres();
    fetchBrands();
  }, []);

  const filteredTyres = CarResults.filter((tyre) => {
    const isBrandSelected = selectedBrands.length === 0 || selectedBrands.includes(tyre.brandId);
    const isPriceInRange = tyre.price >= minPrice && tyre.price <= maxPrice;
    return isBrandSelected && isPriceInRange;
  });

  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Size</li>
          </ul>
        </div>
      </section>
      <section className="padding-block-500">
        <div className="container">
          <div className="row row-gap-5">
            <div className="col-md-3 hideMobile">
              <div className="siderFilter">
                
              </div>
            </div>
            <div className="col-md-9">
              <div className="row gx-4 justify-content-start row-gap-5 mt-5">

{CarResults 

.sort((a, b) => {
  switch (sortOption) {
    case "popularity":
      return b.popularity - a.popularity; // Replace `popularity` with your actual field name
    case "rating-desc":
      return b.rating - a.rating; // Replace `rating` with your actual field name
    case "newest":
      return new Date(b.createdAt) - new Date(a.createdAt);
    case "price-asc":
      return a.price - b.price;
    case "price-desc":
      return b.price - a.price;
    default:
      return 0; // Default sorting (no change)
  }
})


    .filter((tyre) => tyre.price >= minPrice && tyre.price <= maxPrice) // Filter tyres by price
    .map((tyre) => {
      const isNew = (new Date() - new Date(tyre.createdAt)) < 30 * 24 * 60 * 60 * 1000; // within 30 days
      const isOnSale = tyre.Salesprice < tyre.price;

      return (
        <div className="col" key={tyre.id}>
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
</ul>

              {/* <img src={`${url.nodeapipath}/uploads/${tyre.avatarImages}`} alt={tyre.title}  /> */}
              <img src={`https://tyres.blr1.digitaloceanspaces.com/${tyre.avatarImages}`} alt={tyre.title} />
              
            </div>
            <div className="details">
            {/* <div className="brand">{tyre.tyreBrand}</div> */}
            {/* <div className="brand">{tyre.tyreBrand.join(', ')}</div> */}

            <div className="brand">
  {brands.find((brand) => String(brand._id) === String(tyre.tyreBrand))?.name || 'Unknown Brand'}
</div>

              <h2>{tyre.title}</h2>
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
}