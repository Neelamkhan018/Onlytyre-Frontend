
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {Link, useNavigate} from 'react-router-dom'
// import FrontendFooter from '../Footer/FrontendFooter';
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import Nav from "react-bootstrap/Nav";
// import Tab from "react-bootstrap/Tab";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";



// const Mainheader = () => {
//     const [result, setResult] = useState([]);
//     const [fronttyre, setFronttyre] = useState('');
//     const [reartyre, setRearTyre] = useState('');
//       // const [tyreType, setTyreType] = useState('all');
//       const [width, setWidth] = useState('all');
//       const [height, setHeight] = useState('all');
//       const [customs, setCustoms] = useState('all');
//       const [seasons, setSeasons] = useState('all');
//       const [selectedImage, setSelectedImage] = useState(null); 
//       const [tyreType, setTyreType] = useState("car");
//       const [brand, setBrand] = useState("");
//       const [model, setModel] = useState("");
//       const [tyreBrand, setTyreBrand] = useState("");
//       const [season, setSeason] = useState("all");
      
//       const widthOptionsSize = [45, 50, 60, 70, 80,90,100,110,120,125,130,140,145,150,160,170,175,180,185,190,195,200,205,210,225,230,235,240,250,255,260,270,280,300,330,115,125,130,135,140,145,150,155,160,165,170,175,180,185,190, 195,200,205,210,215,220,225,235,240,245,250,255,265,270,275,285,295,305,315,325,335,345,355];
//       const heightOptionsSize = [35,40,45,50,55,60,65,70,75,80,60,65,70,75,80,90,100,600,605];
//       const customsOptionsSize = [10,11,12,13,14,15,16,17,18,19,21,23];
    
//       const seasonsOptions = [
//         { value: 'All-Season', label: 'All-Season' },
//         { value: 'Winter', label: 'Winter' },
//         { value: 'Summer', label: 'Summer' },
//       ];

//       const navigate = useNavigate();

//       const [tyreBrands, setTyreBrands] = useState([]);
//       const [selectedCarModels, setSelectedCarModels] = useState([]);
     
//       const [selectedCarBrands, setSelectedCarBrands] = useState([]); // Supports multiple selections
     
//       const [selectedBikeBrands, setSelectedBikeBrands] = useState([]);
//       const [selectedBikeModels, setSelectedBikeModels] = useState([]);
//       const [selectedTyreBrand, setSelectedTyreBrand] = useState([]);
    

//       // Initialize state for brands and models as ARRAYS (not strings)
// const [carBrands, setCarBrands] = useState([]);      // Holds list of car brands
// const [carModels, setCarModels] = useState([]);      // Holds list of car models
// const [bikeBrands, setBikeBrands] = useState([]);    // Holds list of bike brands
// const [bikeModels, setBikeModels] = useState([]);    // Holds list of bike models

// // State for SELECTED values (strings)
// const [selectedCarBrand, setSelectedCarBrand] = useState("");
// const [selectedCarModel, setSelectedCarModel] = useState("");
// const [selectedBikeBrand, setSelectedBikeBrand] = useState("");
// const [selectedBikeModel, setSelectedBikeModel] = useState("");


//        // -------------- Tyre Brand --------------------------------


//   useEffect(() => {
//     const fetchTyreBrands = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/get-tyre-brands');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setTyreBrands(data);
//       } catch (error) {
//         console.error('Failed to load tyre brands:', error);
//       }
//     };

//     fetchTyreBrands();
//   }, []);

//   const activeTyreBrands = tyreBrands.filter(brand => brand.active);



// //  ------------------------------ Car Brand / car Model -----------------------

// // Fetch car brands
// useEffect(() => {
//   const fetchCarBrands = async () => {
//     const response = await axios.get('http://localhost:8000/get-carbrand');
//     const activeBrands = response.data.filter(brand => brand.active);
//     setCarBrands(activeBrands);
//   };
//   fetchCarBrands();
// }, []);

// // Fetch car models when brand is selected
// useEffect(() => {
//   const fetchCarModels = async () => {
//     if (selectedCarBrand) {
//       const response = await axios.get(
//         `http://localhost:8000/get-carmodel?brandid=${selectedCarBrand}`
//       );
//       const activeModels = response.data.filter(model => model.active);
//       setCarModels(activeModels);
//     }
//   };
//   fetchCarModels();
// }, [selectedCarBrand]);

// // Handle car brand selection change
// const handleCarBrandsChange = (selectedOptions) => {
//   console.log('Selected car brands:', selectedOptions); // Debugging log
//   setSelectedCarBrands(selectedOptions || []);
// };

// // Handle car model selection change
// const handleCarModelsChange = (selectedOptions) => {
//   setSelectedCarModels(selectedOptions || []);
// };


// // // -------------------------- Bike Brand / Model--------------------


//   // Fetch bike brands
// useEffect(() => {
//   const fetchBikeBrands = async () => {
//     const response = await axios.get('http://localhost:8000/get-bikebrand');
//     const activeBrands = response.data.filter(brand => brand.active);
//     setBikeBrands(activeBrands);
//   };
//   fetchBikeBrands();
// }, []);

// // Fetch bike models when brand is selected
// useEffect(() => {
//   const fetchBikeModels = async () => {
//     if (selectedBikeBrand) {
//       const response = await axios.get(
//         `http://localhost:8000/get-bikemodel?brandid=${selectedBikeBrand}`
//       );
//       const activeModels = response.data.filter(model => model.active);
//       setBikeModels(activeModels);
//     }
//   };
//   fetchBikeModels();
// }, [selectedBikeBrand]);

//   // Handle bike brand selection change
//   const handleBikeBrandsChange = (selectedOptions) => {
//     setSelectedBikeBrands(selectedOptions);
//   };

//   // Handle bike model selection change
//   const handleBikeModelsChange = (selectedOptions) => {
//     setSelectedBikeModels(selectedOptions);
//   };




   

//     const handleSearch1 = async () => {
//       try {
//           // Get brand and model names
//           const vehicleBrandName = tyreType === "car" 
//               ? carBrands.find(brand => brand._id === selectedCarBrand)?.name 
//               : bikeBrands.find(brand => brand._id === selectedBikeBrand)?.name;
  
//           const vehicleModelName = tyreType === "car" 
//               ? carModels.find(model => model._id === selectedCarModel)?.name 
//               : bikeModels.find(model => model._id === selectedBikeModel)?.name;
  
//           // Get tyre brand name
//           const tyreBrandName = tyreBrands.find(brand => brand._id === tyreBrand)?.name;
  
//           const basePath = tyreType === "car" ? "searchcar" : "searchbike";
  
//           // Encode components for URL safety
//           const encodedBrand = encodeURIComponent(vehicleBrandName);
//           const encodedModel = encodeURIComponent(vehicleModelName);
//           const encodedTyreBrand = encodeURIComponent(tyreBrandName);
//           const encodedSeason = encodeURIComponent(season);
  
//           // Construct API URL with names
//           const searchUrl = `http://localhost:8000/searchcarbike/${tyreType}/${encodedBrand}/${encodedModel}/${encodedTyreBrand}/${encodedSeason}`;
  
//           const response = await axios.get(searchUrl);
  
//           // Navigate to the results page with the fetched data
//           navigate(`/${basePath}/${tyreType}/${encodedBrand}/${encodedModel}/${encodedTyreBrand}/${encodedSeason}`, {
//               state: { 
//                   results: response.data,
//                   searchParams: {
//                       tyreType,
//                       brandId: tyreType === "car" ? selectedCarBrand : selectedBikeBrand,
//                       modelId: tyreType === "car" ? selectedCarModel : selectedBikeModel,
//                       tyreBrandId: tyreBrand,
//                       season
//                   }
//               }
//           });
//       } catch (error) {
//           console.error("Error fetching data:", error);
//           alert("There was an error fetching the tyre data. Please try again.");
//       }
//   };
      

//       const handleSearch = async () => {
//         try {
//             // API call to fetch results based on selected filters (width, height, customs, seasons)
//             const response = await axios.get(`http://localhost:8000/searchsize/${width}/${height}/${customs}/${seasons}`);
            
//             // Navigate to the "Search by Size" page with results
//             navigate(`/Searchsize/${width}/${height}/${customs}/${seasons}`, { state: { results: response.data } });
            
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };
    
    
    
// // ------ GET api------ // 


// useEffect(() => {
//   fetch('http://localhost:8000/get-tyres')
//     .then(response => response.json())
//     .then(data => {
//       const firstTenTyres = data.slice(0, 10); // Get the first 10 tyres
//       setResult(firstTenTyres); // Update the state with the first 10 tyres
//     })
//     .catch(error => console.error('Error fetching data:', error));
// }, []);
   

// const handleTyreTypeChange = (type) => {
//   setTyreType(type);
//   console.log(`Tyre type selected: ${type}`); // Debug log
//   // Add any additional functionality here
// };

//   return (
//     <>
//       <section className="banner">
//         <div className="container">
//           <div className="wrapper">
//             <Swiper
//               loop={true}
//               slidesPerView={1}
//               autoplay={{
//                 delay: 3500,
//                 disableOnInteraction: true,
//               }}
//               speed={1500}
//               modules={[Autoplay]}
//             >
//               <SwiperSlide>
//                 <div className="row align-items-center">
//                   <div className="col-md-6">
//                     <div className="details">
//                       <h1>The Easiest Way to Buy Tyres Online</h1>
//                       <ul>
//                         <li>No Money Down Payment Plans*</li>
//                         <li>Fast and Free Shipping</li>
//                       </ul>
//                       <Link href="/" className="btn2">
//                         <span>SHOP TYRES NOW</span>
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <img
//                       src="assets/images/banner/001.png"
//                       className="bannerImg"
//                       alt=""
//                     />
//                   </div>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="row align-items-center">
//                   <div className="col-md-6">
//                     <div className="details">
//                       <h1>The Easiest Way to Buy Tyres Online</h1>
//                       <ul>
//                         <li>No Money Down Payment Plans*</li>
//                         <li>Fast and Free Shipping</li>
//                       </ul>
//                       <Link href="/" className="btn2">
//                         <span>SHOP TYRES NOW</span>
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <img
//                       src="assets/images/banner/001.png"
//                       className="bannerImg"
//                       alt=""
//                     />
//                   </div>
//                 </div>
//               </SwiperSlide>
//             </Swiper>
//           </div>
//         </div>
//       </section>
//       <section className="whyChoose | padding-block-500">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h1 className="heading1 text-center">
//                 Why you should choose us?
//               </h1>
//             </div>
//           </div>
//           <div className="row row-gap-4 mt-5">
//             <div className="col-md-4">
//               <div className="box">
//                 <div className="icon">
//                   <img
//                     src="assets/images/icons/svg/delivery-truck.svg"
//                     alt=""
//                   />
//                 </div>
//                 <h2>Fast and free delivery</h2>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Aenean sagittis, libero et egestas scelerisque
//                 </p>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="box">
//                 <div className="icon">
//                   <img src="assets/images/icons/svg/support.svg" alt="" />
//                 </div>
//                 <h2>Fast and free delivery</h2>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Aenean sagittis, libero et egestas scelerisque
//                 </p>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="box">
//                 <div className="icon">
//                   <img
//                     src="assets/images/icons/svg/secure-shield-password-protect-safe.svg"
//                     alt=""
//                   />
//                 </div>
//                 <h2>Fast and free delivery</h2>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Aenean sagittis, libero et egestas scelerisque
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="searchBanner">
//         <div className="container">
//           <div className="wrapper">
//             <div className="row row-gap-4 align-items-center">
//               <div className="col-md-6">
//                 <div className="details">
//                   <h1>The Easiest Way to Buy Tyres Online</h1>
//                   <ul>
//                     <li>No Money Down Payment Plans*</li>
//                     <li>Fast and Free Shipping</li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <Tab.Container id="left-tabs-example" defaultActiveKey="size">
//                   <div className="homeFilterSearch">
//                     <Nav variant="pills">
//                       <Nav.Item>
//                         <Nav.Link eventKey="size" onClick={() => handleTyreTypeChange('size')}>
//                           <svg
//                             width="36"
//                             height="36"
//                             viewBox="0 0 36 36"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <g clipPath="url(#clip0_16_50)">
//                               <path d="M18 0C8.05908 0 0 8.05908 0 18C0 27.9409 8.05908 36 18 36C27.9409 36 36 27.9409 36 18C36 8.05908 27.9409 0 18 0ZM18 33C9.71592 33 3.00002 26.2841 3.00002 18C3.00002 9.71592 9.71592 3.00002 18 3.00002C26.2841 3.00002 33 9.71592 33 18C33 26.2841 26.2841 33 18 33Z" />
//                               <path d="M26.4853 9.51471C26.4853 9.51464 26.4853 9.51464 26.4853 9.51471C26.4852 9.51464 26.4852 9.51464 26.4853 9.51471C24.3137 7.34311 21.3137 6 18 6C11.3726 6 6 11.3726 6 18C6 24.6275 11.3726 30 18 30C21.3137 30 24.3137 28.6569 26.4852 26.4854C28.6568 24.3138 30 21.3138 30 18.0001C30 14.6864 28.6569 11.6862 26.4853 9.51471ZM25.336 23.2149L23.1683 21.0472C23.4504 20.5697 23.6693 20.0505 23.8109 19.5H26.8748C26.6454 20.8674 26.1082 22.1305 25.336 23.2149ZM9.12518 19.5H12.189C12.3307 20.0505 12.5496 20.5697 12.8317 21.047L10.664 23.2148C9.8918 22.1305 9.35461 20.8674 9.12518 19.5ZM10.664 12.7853L12.8317 14.953C12.5497 15.4305 12.3307 15.9496 12.189 16.5H9.12518C9.35461 15.1326 9.8918 13.8696 10.664 12.7853ZM18 21C17.1723 21 16.423 20.6649 15.8802 20.123C15.8798 20.1224 15.8793 20.1218 15.8788 20.1214C15.8783 20.1209 15.8776 20.1204 15.8771 20.1199C15.3352 19.5771 15.0001 18.8278 15.0001 18.0001C15.0001 17.1724 15.3352 16.4231 15.8771 15.8803C15.8777 15.8798 15.8783 15.8793 15.8788 15.8788C15.8793 15.8783 15.8798 15.8777 15.8802 15.8772C16.423 15.3353 17.1723 15.0001 18 15.0001C19.6571 15.0001 21 16.343 21 18.0002C21 19.6573 19.6571 21 18 21ZM21.0469 12.8316C20.5696 12.5496 20.0504 12.3307 19.5 12.189V9.12518C20.8674 9.35461 22.1303 9.8918 23.2147 10.6639L21.0469 12.8316ZM16.5 12.189C15.9496 12.3307 15.4304 12.5496 14.953 12.8317L12.7853 10.664C13.8697 9.8918 15.1327 9.35461 16.5 9.12518V12.189ZM14.953 23.1684C15.4304 23.4504 15.9495 23.6694 16.5 23.8111V26.8749C15.1326 26.6455 13.8696 26.1083 12.7852 25.3361L14.953 23.1684ZM19.5 23.811C20.0504 23.6693 20.5696 23.4504 21.0469 23.1684L23.2147 25.3361C22.1304 26.1083 20.8674 26.6454 19.5 26.8749V23.811ZM23.811 16.5C23.6693 15.9496 23.4504 15.4303 23.1683 14.9529L25.3361 12.7852C26.1083 13.8695 26.6455 15.1325 26.8749 16.5H23.811V16.5Z" />
//                             </g>
//                             <defs>
//                               <clipPath id="clip0_16_50">
//                                 <rect width="36" height="36" fill="white" />
//                               </clipPath>
//                             </defs>
//                           </svg>
//                           <span>BY SIZE</span>
//                         </Nav.Link>
//                       </Nav.Item>


//                       <Nav.Item>
//                         <Nav.Link eventKey="car" onClick={() => handleTyreTypeChange('car')} >

//                           <svg
//                             width="36"
//                             height="36"
//                             viewBox="0 0 36 36"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               clipRule="evenodd"
//                               d="M10 29C12.2091 29 14 27.2091 14 25C14 22.7909 12.2091 21 10 21C7.79086 21 6 22.7909 6 25C6 27.2091 7.79086 29 10 29ZM10 27.6666C11.4728 27.6666 12.6667 26.4727 12.6667 25C12.6667 23.5272 11.4728 22.3333 10 22.3333C8.52726 22.3333 7.33336 23.5272 7.33336 25C7.33336 26.4727 8.52726 27.6666 10 27.6666Z"
//                             />
//                             <path
//                               fillRule="evenodd"
//                               clipRule="evenodd"
//                               d="M26 29C28.2091 29 30 27.2091 30 25C30 22.7909 28.2091 21 26 21C23.7909 21 22 22.7909 22 25C22 27.2091 23.7909 29 26 29ZM26 27.6666C27.4728 27.6666 28.6667 26.4727 28.6667 25C28.6667 23.5272 27.4728 22.3333 26 22.3333C24.5273 22.3333 23.3334 23.5272 23.3334 25C23.3334 26.4727 24.5273 27.6666 26 27.6666Z"
//                             />
//                             <path d="M3.91647 14.9856C3.70225 15.5688 4.0014 16.2153 4.58461 16.4295C5.16784 16.6437 5.8143 16.3446 6.02851 15.7614L3.91647 14.9856ZM6.09423 12.3195L5.04732 11.9077C5.0442 11.9156 5.04115 11.9236 5.03821 11.9316L6.09423 12.3195ZM14.6952 8.625C15.3165 8.625 15.8202 8.12131 15.8202 7.5C15.8202 6.87868 15.3165 6.375 14.6952 6.375V8.625ZM4.9725 16.4985C5.59381 16.4985 6.0975 15.9948 6.0975 15.3735C6.0975 14.7522 5.59381 14.2485 4.9725 14.2485V16.4985ZM3.05808 15.3735L3.04953 16.4985H3.05808V15.3735ZM1.46249 16.986L0.337493 16.9779V16.986H1.46249ZM0.337493 19.5C0.337493 20.1213 0.841172 20.625 1.46249 20.625C2.08381 20.625 2.5875 20.1213 2.5875 19.5H0.337493ZM4.9725 14.2485C4.35117 14.2485 3.8475 14.7522 3.8475 15.3735C3.8475 15.9948 4.35117 16.4985 4.9725 16.4985V14.2485ZM14.6952 16.4985C15.3165 16.4985 15.8202 15.9948 15.8202 15.3735C15.8202 14.7522 15.3165 14.2485 14.6952 14.2485V16.4985ZM26.2854 15.7614C26.4996 16.3446 27.1461 16.6437 27.7293 16.4295C28.3125 16.2153 28.6116 15.5688 28.3974 14.9856L26.2854 15.7614ZM26.2197 12.3195L27.2757 11.9316C27.2727 11.9236 27.2697 11.9156 27.2666 11.9077L26.2197 12.3195ZM14.6952 6.375C14.0739 6.375 13.5702 6.87868 13.5702 7.5C13.5702 8.12131 14.0739 8.625 14.6952 8.625V6.375ZM27.3414 16.4985C27.9627 16.4985 28.4664 15.9948 28.4664 15.3735C28.4664 14.7522 27.9627 14.2485 27.3414 14.2485V16.4985ZM14.6952 14.2485C14.0739 14.2485 13.5702 14.7522 13.5702 15.3735C13.5702 15.9948 14.0739 16.4985 14.6952 16.4985V14.2485ZM27.3414 14.2485C26.7201 14.2485 26.2164 14.7522 26.2164 15.3735C26.2164 15.9948 26.7201 16.4985 27.3414 16.4985V14.2485ZM32.0433 15.3735V16.4985H32.0508L32.0433 15.3735ZM33.6375 16.986H34.7625V16.9779L33.6375 16.986ZM32.5125 19.5C32.5125 20.1213 33.0162 20.625 33.6375 20.625C34.2588 20.625 34.7625 20.1213 34.7625 19.5H32.5125ZM22.3631 26.364C22.9844 26.364 23.4881 25.8603 23.4881 25.239C23.4881 24.6177 22.9844 24.114 22.3631 24.114V26.364ZM13.0718 24.114C12.4505 24.114 11.9468 24.6177 11.9468 25.239C11.9468 25.8603 12.4505 26.364 13.0718 26.364V24.114ZM28.7454 24.114C28.1241 24.114 27.6204 24.6177 27.6204 25.239C27.6204 25.8603 28.1241 26.364 28.7454 26.364V24.114ZM32.042 25.239L32.0505 24.114H32.042V25.239ZM33.6375 23.6265L34.7625 23.6346V23.6265H33.6375ZM34.7625 19.5C34.7625 18.8787 34.2588 18.375 33.6375 18.375C33.0162 18.375 32.5125 18.8787 32.5125 19.5H34.7625ZM6.68947 26.364C7.31079 26.364 7.81447 25.8603 7.81447 25.239C7.81447 24.6177 7.31079 24.114 6.68947 24.114V26.364ZM3.05808 25.239V24.114H3.04953L3.05808 25.239ZM1.46249 23.6265H0.337463L0.337522 23.6346L1.46249 23.6265ZM2.5875 19.5C2.5875 18.8787 2.08381 18.375 1.46249 18.375C0.841172 18.375 0.337493 18.8787 0.337493 19.5H2.5875ZM15.8202 7.5C15.8202 6.87868 15.3165 6.375 14.6952 6.375C14.0739 6.375 13.5702 6.87868 13.5702 7.5H15.8202ZM13.5702 15.3735C13.5702 15.9948 14.0739 16.4985 14.6952 16.4985C15.3165 16.4985 15.8202 15.9948 15.8202 15.3735H13.5702ZM1.46249 18.375C0.841172 18.375 0.337493 18.8787 0.337493 19.5C0.337493 20.1213 0.841172 20.625 1.46249 20.625V18.375ZM4.37725 20.625C4.99857 20.625 5.50225 20.1213 5.50225 19.5C5.50225 18.8787 4.99857 18.375 4.37725 18.375V20.625ZM33.6375 20.625C34.2588 20.625 34.7625 20.1213 34.7625 19.5C34.7625 18.8787 34.2588 18.375 33.6375 18.375V20.625ZM30.5999 18.375C29.9786 18.375 29.4749 18.8787 29.4749 19.5C29.4749 20.1213 29.9786 20.625 30.5999 20.625V18.375ZM6.02851 15.7614L7.15024 12.7074L5.03821 11.9316L3.91647 14.9856L6.02851 15.7614ZM7.14114 12.7313C7.68841 11.3401 8.23695 10.3179 8.92239 9.64068C9.55996 9.01071 10.3707 8.625 11.6137 8.625V6.375C9.80888 6.375 8.42073 6.97329 7.34097 8.04019C6.30906 9.0598 5.62179 10.4473 5.04732 11.9077L7.14114 12.7313ZM11.6137 8.625H14.6952V6.375H11.6137V8.625ZM4.9725 14.2485H3.05808V16.4985H4.9725V14.2485ZM3.06663 14.2485C2.33886 14.243 1.64455 14.5345 1.13498 15.0495L2.73433 16.6321C2.82324 16.5423 2.93715 16.4976 3.04953 16.4985L3.06663 14.2485ZM1.13498 15.0495C0.626369 15.5635 0.342661 16.2577 0.337493 16.9779L2.58747 16.9941C2.58847 16.8525 2.64448 16.7229 2.73433 16.6321L1.13498 15.0495ZM0.337493 16.986V19.5H2.5875V16.986H0.337493ZM4.9725 16.4985H14.6952V14.2485H4.9725V16.4985ZM28.3974 14.9856L27.2757 11.9316L25.1637 12.7074L26.2854 15.7614L28.3974 14.9856ZM27.2666 11.9077C26.6921 10.4473 26.0049 9.0598 24.9729 8.04019C23.8932 6.97329 22.505 6.375 20.7002 6.375V8.625C21.9432 8.625 22.754 9.01071 23.3915 9.64068C24.077 10.3179 24.6255 11.3401 25.1727 12.7313L27.2666 11.9077ZM20.7002 6.375H14.6952V8.625H20.7002V6.375ZM27.3414 14.2485H14.6952V16.4985H27.3414V14.2485ZM27.3414 16.4985H32.0433V14.2485H27.3414V16.4985ZM32.0508 16.4985C32.2773 16.497 32.5103 16.6915 32.5125 16.9941L34.7625 16.9779C34.7517 15.4872 33.5579 14.2384 32.0358 14.2485L32.0508 16.4985ZM32.5125 16.986V19.5H34.7625V16.986H32.5125ZM22.3631 24.114H13.0718V26.364H22.3631V24.114ZM28.7454 26.364H32.042V24.114H28.7454V26.364ZM32.0333 26.364C32.7611 26.3695 33.4554 26.0779 33.965 25.563L32.3657 23.9803C32.2767 24.0702 32.1629 24.1149 32.0505 24.114L32.0333 26.364ZM33.965 25.563C34.4736 25.0489 34.7573 24.3547 34.7625 23.6346L32.5125 23.6184C32.5115 23.76 32.4555 23.8896 32.3657 23.9803L33.965 25.563ZM34.7625 23.6265V19.5H32.5125V23.6265H34.7625ZM6.68947 24.114H3.05808V26.364H6.68947V24.114ZM3.04953 24.114C2.93715 24.1149 2.82324 24.0702 2.73433 23.9803L1.13499 25.563C1.64455 26.0779 2.33886 26.3695 3.06663 26.364L3.04953 24.114ZM2.73433 23.9803C2.64448 23.8896 2.58847 23.76 2.58747 23.6184L0.337522 23.6346C0.342689 24.3547 0.626369 25.0489 1.13499 25.563L2.73433 23.9803ZM2.5875 23.6265V19.5H0.337493L0.337463 23.6265H2.5875ZM13.5702 7.5V15.3735H15.8202V7.5H13.5702ZM1.46249 20.625H4.37725V18.375H1.46249V20.625ZM33.6375 18.375H30.5999V20.625H33.6375V18.375Z" />
//                           </svg>

//                           <span>BY CAR</span>
//                         </Nav.Link>
//                       </Nav.Item>



//                       <Nav.Item>
//                         <Nav.Link eventKey="bike"  onClick={() => handleTyreTypeChange('bike')}>
//                           <svg
//                             width="32"
//                             height="32"
//                             viewBox="0 0 32 32"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               clipRule="evenodd"
//                               d="M17 7C17 6.44772 17.4477 6 18 6H22C22.4304 6 22.8126 6.27543 22.9487 6.68377L27.9487 21.6838C28.1233 22.2077 27.8402 22.774 27.3162 22.9487C26.7923 23.1233 26.226 22.8402 26.0513 22.3162L21.2792 8H18C17.4477 8 17 7.55228 17 7Z"
//                             />
//                             <path
//                               fillRule="evenodd"
//                               clipRule="evenodd"
//                               d="M27 19C25.3431 19 24 20.3431 24 22C24 23.6569 25.3431 25 27 25C28.6569 25 30 23.6569 30 22C30 20.3431 28.6569 19 27 19ZM22 22C22 19.2386 24.2386 17 27 17C29.7614 17 32 19.2386 32 22C32 24.7614 29.7614 27 27 27C24.2386 27 22 24.7614 22 22Z"
//                             />
//                             <path
//                               fillRule="evenodd"
//                               clipRule="evenodd"
//                               d="M5 19C3.34315 19 2 20.3431 2 22C2 23.6569 3.34315 25 5 25C6.65685 25 8 23.6569 8 22C8 20.3431 6.65685 19 5 19ZM0 22C0 19.2386 2.23858 17 5 17C7.76142 17 10 19.2386 10 22C10 24.7614 7.76142 27 5 27C2.23858 27 0 24.7614 0 22Z"
//                             />
//                             <path
//                               fillRule="evenodd"
//                               clipRule="evenodd"
//                               d="M4 14C4 13.4477 4.44772 13 5 13C9.61441 13 13.4435 16.5142 13.9445 21H18.0555C18.5565 16.5142 22.3856 13 27 13C27.8556 13 28.9126 13.1031 29.7939 13.4809C30.3015 13.6984 30.5367 14.2863 30.3191 14.7939C30.1016 15.3015 29.5137 15.5367 29.0061 15.3191C28.4874 15.0969 27.7444 15 27 15C23.1523 15 20 18.1523 20 22C20 22.5523 19.5523 23 19 23H13C12.4477 23 12 22.5523 12 22C12 18.1523 8.84772 15 5 15C4.44772 15 4 14.5523 4 14Z"
//                             />
//                             <path
//                               fillRule="evenodd"
//                               clipRule="evenodd"
//                               d="M16.168 10.4453C16.3534 10.1671 16.6657 10 17 10H23C23.5523 10 24 10.4477 24 11C24 11.5523 23.5523 12 23 12H17.5352L17.4418 12.14C15.6323 15.0663 12.2306 16.6659 8.80389 15.9806C8.26233 15.8723 7.91112 15.3454 8.01943 14.8039C8.12774 14.2623 8.65457 13.9111 9.19613 14.0194C11.7632 14.5328 14.3554 13.3395 15.7484 11.0759C15.7547 11.0656 15.7612 11.0554 15.768 11.0453L16.168 10.4453Z"
//                             />
//                           </svg>

//                           <span>BY BIKE</span>
//                         </Nav.Link>
//                       </Nav.Item>


//                       <Nav.Item>
//                         <Nav.Link eventKey="truck">
//                           <svg
//                             width="32"
//                             height="32"
//                             viewBox="0 0 32 32"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <g clipPath="url(#clip0_16_121)">
//                               <mask
//                                 id="mask0_16_121"
//                                 maskUnits="userSpaceOnUse"
//                                 x="0"
//                                 y="0"
//                                 width="32"
//                                 height="32"
//                               >
//                                 <path d="M32 0H0V32H32V0Z" fill="white" />
//                               </mask>
//                               <g mask="url(#mask0_16_121)">
//                                 <path
//                                   d="M31.929 15.632L29.118 8.54498C29.0442 8.35854 28.9161 8.19858 28.7502 8.08588C28.5844 7.97318 28.3885 7.91293 28.188 7.91296H21.812C21.5468 7.91296 21.2924 8.01834 21.1049 8.20587C20.9174 8.39341 20.812 8.64775 20.812 8.91296V22.087H19.937V8.91296C19.937 8.64775 19.8316 8.39341 19.6441 8.20587C19.4566 8.01834 19.2022 7.91296 18.937 7.91296H1C0.734783 7.91296 0.480444 8.01834 0.292908 8.20587C0.105371 8.39341 0 8.64775 0 8.91296V23.087C0 23.3522 0.105371 23.6065 0.292908 23.7941C0.480444 23.9816 0.734783 24.087 1 24.087H2.59C2.79625 24.7122 3.19449 25.2565 3.728 25.6423C4.26151 26.0281 4.9031 26.2357 5.56149 26.2357C6.21988 26.2357 6.86151 26.0281 7.39502 25.6423C7.92853 25.2565 8.32674 24.7122 8.53299 24.087H23.465C23.6712 24.7122 24.0695 25.2565 24.603 25.6423C25.1365 26.0281 25.7781 26.2357 26.4365 26.2357C27.0949 26.2357 27.7365 26.0281 28.27 25.6423C28.8035 25.2565 29.2017 24.7122 29.408 24.087H31C31.2652 24.087 31.5196 23.9816 31.7071 23.7941C31.8946 23.6065 32 23.3522 32 23.087V16C32.0001 15.8739 31.976 15.749 31.929 15.632ZM27.51 9.91296L29.725 15.5H22.812V9.91296H27.51ZM5.56201 24.236C5.3348 24.2358 5.11274 24.1682 4.92392 24.0418C4.7351 23.9155 4.588 23.7359 4.50119 23.526C4.41438 23.316 4.39174 23.085 4.43619 22.8622C4.48063 22.6394 4.59015 22.4347 4.75089 22.2741C4.91162 22.1135 5.11635 22.0042 5.3392 21.96C5.56206 21.9157 5.79304 21.9385 6.00293 22.0255C6.21282 22.1125 6.39222 22.2598 6.51843 22.4487C6.64464 22.6377 6.71201 22.8598 6.71201 23.087C6.71174 23.3918 6.59045 23.6841 6.37482 23.8995C6.15918 24.115 5.86684 24.236 5.56201 24.236ZM17.687 22.087H8.534C8.32774 21.4617 7.92954 20.9175 7.39603 20.5317C6.86251 20.1459 6.22089 19.9382 5.5625 19.9382C4.90411 19.9382 4.26249 20.1459 3.72897 20.5317C3.19546 20.9175 2.79726 21.4617 2.591 22.087H2V9.91296H17.936V22.087H17.687ZM26.437 24.236C26.2098 24.2358 25.9877 24.1682 25.7989 24.0418C25.6101 23.9155 25.463 23.7359 25.3762 23.526C25.2894 23.316 25.2667 23.085 25.3112 22.8622C25.3556 22.6394 25.4652 22.4347 25.6259 22.2741C25.7866 22.1135 25.9913 22.0042 26.2142 21.96C26.4371 21.9157 26.668 21.9385 26.8779 22.0255C27.0878 22.1125 27.2672 22.2598 27.3934 22.4487C27.5196 22.6377 27.587 22.8598 27.587 23.087C27.5867 23.3918 27.4655 23.6841 27.2498 23.8995C27.0342 24.115 26.7418 24.236 26.437 24.236ZM29.409 22.087C29.2027 21.4617 28.8045 20.9175 28.271 20.5317C27.7375 20.1459 27.0959 19.9382 26.4375 19.9382C25.7791 19.9382 25.1375 20.1459 24.604 20.5317C24.0705 20.9175 23.6723 21.4617 23.466 22.087H22.812V16.5H30V22.087H29.409Z"
                                 
//                                 />
//                                 <path
//                                   d="M25.25 17.167H23.875C23.7424 17.167 23.6152 17.2197 23.5215 17.3134C23.4277 17.4072 23.375 17.5344 23.375 17.667C23.375 17.7996 23.4277 17.9268 23.5215 18.0205C23.6152 18.1143 23.7424 18.167 23.875 18.167H25.25C25.3826 18.167 25.5098 18.1143 25.6035 18.0205C25.6973 17.9268 25.75 17.7996 25.75 17.667C25.75 17.5344 25.6973 17.4072 25.6035 17.3134C25.5098 17.2197 25.3826 17.167 25.25 17.167Z"
//                                 />
//                               </g>
//                             </g>
//                             <defs>
//                               <clipPath id="clip0_16_121">
//                                 <rect width="32" height="32" />
//                               </clipPath>
//                             </defs>
//                           </svg>

//                           <span>BY TRUCK</span>
//                         </Nav.Link>
//                       </Nav.Item>
//                     </Nav>
//                     <Tab.Content>
                    

// <Tab.Pane eventKey="size">
//     <div className="row">
//         <div className="col-12">
//             <div className="head">
//                 <h4>SEARCH BY SIZE</h4>
//                 <img src="assets/images/size.jpg" alt="" />
//             </div>
//         </div>
//     </div>

//     <form>
//         <div className="row row-gap-3 mt-2">
//             <div className="col-6">
//                 <label htmlFor="width">WIDTH</label>
//                 <select id="width" value={width} onChange={(e) => setWidth(e.target.value)}>
//                     <option value="all"></option>
//                     {widthOptionsSize.map(option => (
//                         <option key={option} value={option}>{option}</option>
//                     ))}
//                 </select>
//             </div>

//             <div className="col-6">
//                 <label htmlFor="height">HEIGHT</label>
//                 <select id="height" value={height} onChange={(e) => setHeight(e.target.value)}>
//                     <option value="all"></option>
//                     {heightOptionsSize.map(option => (
//                         <option key={option} value={option}>{option}</option>
//                     ))}
//                 </select>
//             </div>

//             <div className="col-6">
//                 <label htmlFor="customs">CUSTOMS</label>
//                 <select id="customs" value={customs} onChange={(e) => setCustoms(e.target.value)}>
//                     <option value="all"></option>
//                     {customsOptionsSize.map(option => (
//                         <option key={option} value={option}>{option}</option>
//                     ))}
//                 </select>
//             </div>

//             <div className="col-6">
//                 <label htmlFor="weather">WEATHER</label>
//                 <select id="weather" value={seasons} onChange={(e) => setSeasons(e.target.value)}>
//                     <option value="all"></option>
//                     {seasonsOptions.map(option => (
//                         <option key={option.value} value={option.value}>{option.label}</option>
//                     ))}
//                 </select>
//             </div>

//             <div className="col-12 d-flex justify-content-center mt-3">
//                 <button type="button" className="btn1" onClick={handleSearch}>
//                     <span>FIND TYRE</span>
//                 </button>
//             </div>
//         </div>
//     </form>
// </Tab.Pane>



//         {/* SEARCH BY CAR */}
// <Tab.Pane eventKey="car">
//   <div className="row">
//     <div className="col-12">
//       <div className="head">
//         <h4>SEARCH BY CAR</h4>
//         <img src="assets/images/car.jpg" alt="Car" />
//       </div>
//     </div>
//   </div>
//   <form>
//     <div className="row row-gap-3 mt-2">
//        <div className="col-6">
//         <label htmlFor="carBrand">CAR BRAND</label>
//         <select 
//   value={selectedCarBrand} 
//   onChange={(e) => setSelectedCarBrand(e.target.value)}
// >
//   <option value="">Select Car Brand</option>
//   {carBrands.map(brand => (
//     <option key={brand._id} value={brand._id}>
//       {brand.name}
//     </option>
//   ))}
// </select>
//       </div>

//       <div className="col-6">
//         <label htmlFor="carModel">CAR MODEL</label>
//         <select
//   value={selectedCarModel}
//   onChange={(e) => setSelectedCarModel(e.target.value)}
// >
//   <option value="">Select Car Model</option>
//   {carModels.map(model => (
//     <option key={model._id} value={model._id}>
//       {model.name}
//     </option>
//   ))}
// </select>
//       </div> 

//       <div className="col-6">
//         <label htmlFor="tyreBrand">TYRE BRAND</label>
//         <select id="tyreBrand" value={tyreBrand} onChange={(e) => setTyreBrand(e.target.value)}>
//           <option value="">Select Tyre Brand</option>
//           {tyreBrands.map(option => (
//             <option key={option._id} value={option._id}>{option.name}</option>
//           ))}
//         </select>
//       </div>

//       <div className="col-6">
//         <label htmlFor="season">SEASON</label>
//         <select id="season" value={season} onChange={(e) => setSeason(e.target.value)}>
          
//           {seasonsOptions.map(option => (
//             <option key={option.value} value={option.value}>{option.label}</option>
//           ))}
//         </select>
//       </div>

//       <div className="col-12 d-flex justify-content-center mt-3">
//         <button type="button" className="btn1" onClick={() => { setTyreType("car"); handleSearch1(); }}>
//           <span>FIND TYRE</span>
//         </button>
//       </div>
//     </div>
//   </form>
// </Tab.Pane>

// {/* SEARCH BY BIKE */}
// <Tab.Pane eventKey="bike">
//   <div className="row">
//     <div className="col-12">
//       <div className="head">
//         <h4>SEARCH BY BIKE</h4>
//         <img src="assets/images/bike.jpg" alt="Bike" />
//       </div>
//     </div>
//   </div>
//   <form>
//     <div className="row row-gap-3 mt-2">
//       <div className="col-6">
//         <label htmlFor="bikeBrand">BIKE BRAND</label>
  
// <select 
//   value={selectedBikeBrand} 
//   onChange={(e) => setSelectedBikeBrand(e.target.value)}
// >
//   <option value="">Select Bike Brand</option>
//   {bikeBrands.map(brand => (
//     <option key={brand._id} value={brand._id}>
//       {brand.name}
//     </option>
//   ))}
// </select>
//       </div>



//       <div className="col-6">
//         <label htmlFor="bikeModel">BIKE MODEL</label>

// <select
//   value={selectedBikeModel}
//   onChange={(e) => setSelectedBikeModel(e.target.value)}
// >
//   <option value="">Select Bike Model</option>
//   {bikeModels.map(model => (
//     <option key={model._id} value={model._id}>
//       {model.name}
//     </option>
//   ))}
// </select>
//       </div>

//       <div className="col-6">
//         <label htmlFor="tyreBrand">TYRE BRAND</label>
//         <select id="tyreBrand" value={tyreBrand} onChange={(e) => setTyreBrand(e.target.value)}>
//           <option value="">Select Tyre Brand</option>
//           {tyreBrands.map(option => (
//             <option key={option._id} value={option._id}>{option.name}</option>
//           ))}
//         </select>
//       </div>

//       <div className="col-6">
//         <label htmlFor="season">SEASON</label>
//         <select id="season" value={season} onChange={(e) => setSeason(e.target.value)}>
          
//           {seasonsOptions.map(option => (
//             <option key={option.value} value={option.value}>{option.label}</option>
//           ))}
//         </select>
//       </div>

//       <div className="col-12 d-flex justify-content-center mt-3">
//         <button type="button" className="btn1" onClick={() => { setTyreType("bike"); handleSearch1(); }}>
//           <span>FIND TYRE</span>
//         </button>
//       </div>
//     </div>
//   </form>
// </Tab.Pane>





//                       <Tab.Pane eventKey="truck">
//                         <div className="row">
//                           <div className="col-12">
//                             <div className="head">
//                               <h4>SEARCH BY TRUCK</h4>
//                               <img src="assets/images/truck.jpg" alt="" />
//                             </div>
//                           </div>
//                         </div>
//                         <form action="">
//                           <div className="row row-gap-3 mt-2">
//                             <div className="col-6">
//                               <label htmlFor="">WIDTH</label>
//                               <select>
//                                 <option value="1">One</option>
//                                 <option value="2">Two</option>
//                                 <option value="3">Three</option>
//                               </select>
//                             </div>
//                             <div className="col-6">
//                               <label htmlFor="">HEIGHT</label>
//                               <select>
//                                 <option value="1">One</option>
//                                 <option value="2">Two</option>
//                                 <option value="3">Three</option>
//                               </select>
//                             </div>
//                             <div className="col-6">
//                               <label htmlFor="">Customs</label>
//                               <select>
//                                 <option value="1">One</option>
//                                 <option value="2">Two</option>
//                                 <option value="3">Three</option>
//                               </select>
//                             </div>
//                             <div className="col-6">
//                               <label htmlFor="">WEATHER</label>
//                               <select>
//                                 <option value="1">One</option>
//                                 <option value="2">Two</option>
//                                 <option value="3">Three</option>
//                               </select>
//                             </div>
//                             <div className="col-12 d-flex justify-content-center mt-3">
//                               <Link href="/" className="btn1">
//                                 <span>FIND TYRE</span>
//                               </Link>
//                             </div>
//                           </div>
//                         </form>
//                       </Tab.Pane>

//                     </Tab.Content>
//                   </div>
//                 </Tab.Container>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
   
// <section className="padding-block-500">
//   <div className="container">
//     <div className="row">
//       <div className="col-12">
//         <h1 className="heading1 text-center">Best Seller</h1>
//       </div>
//     </div>
  
//     <div className="row gx-4 row-gap-5 mt-5">
//       {result.map((tyre) => {
//         const isNew = (new Date() - new Date(tyre.createdAt)) < 30 * 24 * 60 * 60 * 1000; // within 1 hour
//         const isOnSale = tyre.Salesprice < tyre.price;
          

//         return (
//           <div className="col" key={tyre._id}>
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



//                 <img src={`http://localhost:8000/uploads/${tyre.avatarImages}`}  alt={tyre.avatarImages}  />

                
                
//               </div>
//               <div className="details">
//                 <div className="brand">{tyre.tyreBrand}</div>
      
//                 <h2>{tyre.title}</h2>
//                 <div className="price">
//                   <div className="new">₹{tyre.Salesprice}</div>
//                   <div className="old">₹{tyre.price}</div>
//                 </div>
         

// <Link to={`/${tyre.tyreType}/${tyre.slug}`} className='btn2' onClick={() => window.scrollTo(0, 0)}>
//             VIEW DETAILS 
//               </Link>

//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// </section>





//       <section className="bg-neutral-150 | padding-block-500">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h1 className="heading1 text-center">
//                 Popular Tyre Brands We Carry
//               </h1>
//             </div>
//           </div>
//         </div>
//         <div className="mt-5">
//           <Swiper
//             spaceBetween={30}
//             loop={true}
//             slidesPerView={6}
//             centeredSlides={true}
//             speed={1500}
//             autoplay={{
//               delay: 0,
//               disableOnInteraction: true,
//             }}
//             modules={[Autoplay, Pagination, Navigation]}
//           >
//             <SwiperSlide>
//               <div className="clientLogo">
//                 <img src="assets/images/brands/001.jpg" alt="" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="clientLogo">
//                 <img src="assets/images/brands/002.jpg" alt="" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="clientLogo">
//                 <img src="assets/images/brands/003.jpg" alt="" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="clientLogo">
//                 <img src="assets/images/brands/001.jpg" alt="" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="clientLogo">
//                 <img src="assets/images/brands/002.jpg" alt="" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="clientLogo">
//                 <img src="assets/images/brands/003.jpg" alt="" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="clientLogo">
//                 <img src="assets/images/brands/001.jpg" alt="" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="clientLogo">
//                 <img src="assets/images/brands/002.jpg" alt="" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="clientLogo">
//                 <img src="assets/images/brands/003.jpg" alt="" />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </section>

//         <FrontendFooter/>
//     </>
//   );
// };

// export default Mainheader;








import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import FrontendFooter from '../Footer/FrontendFooter';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


import url from "../../env.js"




const Mainheader = () => {
    const [result, setResult] = useState([]);
      const [width, setWidth] = useState('all');
      const [height, setHeight] = useState('all');
      const [customs, setCustoms] = useState('all');
      const [seasons, setSeasons] = useState('all');
      const [tyreType, setTyreType] = useState("car");
      const [tyreBrand, setTyreBrand] = useState("");
      const [season, setSeason] = useState("all");
      
      const widthOptionsSize = [45, 50, 60, 70, 80,90,100,110,120,125,130,140,145,150,160,170,175,180,185,190,195,200,205,210,225,230,235,240,250,255,260,270,280,300,330,115,125,130,135,140,145,150,155,160,165,170,175,180,185,190, 195,200,205,210,215,220,225,235,240,245,250,255,265,270,275,285,295,305,315,325,335,345,355];
      const heightOptionsSize = [35,40,45,50,55,60,65,70,75,80,60,65,70,75,80,90,100,600,605];
      const customsOptionsSize = [10,11,12,13,14,15,16,17,18,19,21,23];
    
      const seasonsOptions = [
        { value: 'All-Season', label: 'All-Season' },
        { value: 'Winter', label: 'Winter' },
        { value: 'Summer', label: 'Summer' },
      ];

      const navigate = useNavigate();

      const [tyreBrands, setTyreBrands] = useState([]);

const [truckBrands, setTruckBrands] = useState([]); // Holds list of truck brands
const [truckModels, setTruckModels] = useState([]); // Holds list of truck models

// Selected Truck Brand & Model
const [selectedTruckBrand, setSelectedTruckBrand] = useState("");
const [selectedTruckModel, setSelectedTruckModel] = useState("");

    

      // Initialize state for brands and models as ARRAYS (not strings)
const [carBrands, setCarBrands] = useState([]);      // Holds list of car brands
const [carModels, setCarModels] = useState([]);      // Holds list of car models
const [bikeBrands, setBikeBrands] = useState([]);    // Holds list of bike brands
const [bikeModels, setBikeModels] = useState([]);    // Holds list of bike models

// State for SELECTED values (strings)
const [selectedCarBrand, setSelectedCarBrand] = useState("");
const [selectedCarModel, setSelectedCarModel] = useState("");
const [selectedBikeBrand, setSelectedBikeBrand] = useState("");
const [selectedBikeModel, setSelectedBikeModel] = useState("");


// New state for tractor brands and models
const [tractorBrands, setTractorBrands] = useState([]);
const [tractorModels, setTractorModels] = useState([]);
const [selectedTractorBrand, setSelectedTractorBrand] = useState("");
const [selectedTractorModel, setSelectedTractorModel] = useState("");


       // -------------- Tyre Brand --------------------------------


  useEffect(() => {
    const fetchTyreBrands = async () => {
      try {
        const response = await fetch(`${url.nodeapipath}/get-tyre-brands`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTyreBrands(data);
      } catch (error) {
        console.error('Failed to load tyre brands:', error);
      }
    };

    fetchTyreBrands();
  }, []);

  const activeTyreBrands = tyreBrands.filter(brand => brand.active);



//  ------------------------------ Car Brand / car Model -----------------------

// Fetch car brands
useEffect(() => {
  const fetchCarBrands = async () => {
    const response = await axios.get(`${url.nodeapipath}/get-carbrand`);
    const activeBrands = response.data.filter(brand => brand.active);
    setCarBrands(activeBrands);
  };
  fetchCarBrands();
}, []);

// Fetch car models when brand is selected
useEffect(() => {
  const fetchCarModels = async () => {
    if (selectedCarBrand) {
      const response = await axios.get(
        `${url.nodeapipath}/get-carmodel?brandid=${selectedCarBrand}`
      );
      const activeModels = response.data.filter(model => model.active);
      setCarModels(activeModels);
    }
  };
  fetchCarModels();
}, [selectedCarBrand]);



// // -------------------------- Bike Brand / Model--------------------


  // Fetch bike brands
useEffect(() => {
  const fetchBikeBrands = async () => {
    const response = await axios.get(`${url.nodeapipath}/get-bikebrand`);
    const activeBrands = response.data.filter(brand => brand.active);
    setBikeBrands(activeBrands);
  };
  fetchBikeBrands();
}, []);

// Fetch bike models when brand is selected
useEffect(() => {
  const fetchBikeModels = async () => {
    if (selectedBikeBrand) {
      const response = await axios.get(
        `${url.nodeapipath}/get-bikemodel?brandid=${selectedBikeBrand}`
      );
      const activeModels = response.data.filter(model => model.active);
      setBikeModels(activeModels);
    }
  };
  fetchBikeModels();
}, [selectedBikeBrand]);

 

//--------------------truck  brand / model ----------------------

// Fetch truck brands
useEffect(() => {
  const fetchTruckBrands = async () => {
    const response = await axios.get(`${url.nodeapipath}/get-Truckbrand`);
    const activeBrands = response.data.filter(brand => brand.active);
    setTruckBrands(activeBrands);
  };
  fetchTruckBrands();
}, []);

const fetchTruckModels = async () => {
  try {
    console.log("Fetching from:", `${url.nodeapipath}/get-Truckmodel?brandid=${selectedTruckBrand}`);

    const response = await axios.get(`${url.nodeapipath}/get-Truckmodel`, {
      params: { brandid: selectedTruckBrand },
    });

    console.log("Truck Models Response:", response.data);

    if (Array.isArray(response.data)) {
      setTruckModels(response.data);
    } else {
      console.error("Unexpected data format:", response.data);
      setTruckModels([]); // Ensure it doesn't break if data is unexpected
    }
  } catch (error) {
    console.error("Error fetching truck models:", error.response?.status, error.response?.data);
  }
};

useEffect(() => {
  if (selectedTruckBrand) {
    fetchTruckModels();
  }
}, [selectedTruckBrand]);


// --------------------------tractor brand / model-------------------------- 


// Fetch tractor brands
useEffect(() => {
  const fetchTractorBrands = async () => {
      const response = await axios.get(`${url.nodeapipath}/get-tractorbrand`);
      const activeBrands = response.data.filter(brand => brand.active);
      setTractorBrands(activeBrands);
  };
  fetchTractorBrands();
}, []);

// Fetch tractor models when brand is selected
useEffect(() => {
  const fetchTractorModels = async () => {
      if (selectedTractorBrand) {
          const response = await axios.get(`${url.nodeapipath}/get-tractormodel?brandid=${selectedTractorBrand}`);
          const activeModels = response.data.filter(model => model.active);
          setTractorModels(activeModels);
      }
  };
  fetchTractorModels();
}, [selectedTractorBrand]);



//---------------------


// Update handleSearch1 function to include tractor logic
const handleSearch1 = async () => {
  try {
      let vehicleBrandName, vehicleModelName, basePath;

      if (tyreType === "car") {
          vehicleBrandName = carBrands.find(brand => brand._id === selectedCarBrand)?.name;
          vehicleModelName = carModels.find(model => model._id === selectedCarModel)?.name;
          basePath = "searchcar";
      } else if (tyreType === "bike") {
          vehicleBrandName = bikeBrands.find(brand => brand._id === selectedBikeBrand)?.name;
          vehicleModelName = bikeModels.find(model => model._id === selectedBikeModel)?.name;
          basePath = "searchbike";
      } else if (tyreType === "truck") {
          vehicleBrandName = truckBrands.find(brand => brand._id === selectedTruckBrand)?.name;
          vehicleModelName = truckModels.find(model => model._id === selectedTruckModel)?.name;
          basePath = "searchTruck";
      } else if (tyreType === "tractor") { // New tractor case
          vehicleBrandName = tractorBrands.find(brand => brand._id === selectedTractorBrand)?.name;
          vehicleModelName = tractorModels.find(model => model._id === selectedTractorModel)?.name;
          basePath = "searchTractor";
      }

      const tyreBrandName = tyreBrands.find(brand => brand._id === tyreBrand)?.name;

      // Encode URL components
      const encodedBrand = encodeURIComponent(vehicleBrandName);
      const encodedModel = encodeURIComponent(vehicleModelName);
      const encodedTyreBrand = encodeURIComponent(tyreBrandName);
      const encodedSeason = encodeURIComponent(season);

      const searchUrl = `${url.nodeapipath}/searchcarbike/${tyreType}/${encodedBrand}/${encodedModel}/${encodedTyreBrand}/${encodedSeason}`;
      const response = await axios.get(searchUrl);

      navigate(`/${basePath}/${tyreType}/${encodedBrand}/${encodedModel}/${encodedTyreBrand}/${encodedSeason}`, {
          state: { 
              results: response.data,
              searchParams: {
                  tyreType,
                  brandId: selectedTruckBrand || selectedCarBrand || selectedBikeBrand || selectedTractorBrand,
                  modelId: selectedTruckModel || selectedCarModel || selectedBikeModel || selectedTractorModel,
                  tyreBrandId: tyreBrand,
                  season
              }
          }
      });
  } catch (error) {
      console.error("Error fetching data:", error);
      alert("There was an error fetching the tyre data. Please try again.");
  }
};


      const handleSearch = async () => {
        try {
            // API call to fetch results based on selected filters (width, height, customs, seasons)
            const response = await axios.get(`${url.nodeapipath}/searchsize/${width}/${height}/${customs}/${seasons}`);
            
            // Navigate to the "Search by Size" page with results
            navigate(`/Searchsize/${width}/${height}/${customs}/${seasons}`, { state: { results: response.data } });
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    
    
// ------ GET api------ // 


useEffect(() => {
  fetch(`${url.nodeapipath}/get-tyres`)
    .then(response => response.json())
    .then(data => {
      const firstTenTyres = data.slice(0, 10); // Get the first 10 tyres
      setResult(firstTenTyres); // Update the state with the first 10 tyres
    })
    .catch(error => console.error('Error fetching data:', error));
}, []);
   

const handleTyreTypeChange = (type) => {
  setTyreType(type);
  console.log(`Tyre type selected: ${type}`); // Debug log
  // Add any additional functionality here
};

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="wrapper">
            <Swiper
              loop={true}
              slidesPerView={1}
              autoplay={{
                delay: 3500,
                disableOnInteraction: true,
              }}
              speed={1500}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="details">
                      <h1>The Easiest Way to Buy Tyres Online</h1>
                      <ul>
                        <li>No Money Down Payment Plans*</li>
                        <li>Fast and Free Shipping</li>
                      </ul>
                      <Link href="/" className="btn2">
                        <span>SHOP TYRES NOW</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/banner/001.png"
                      className="bannerImg"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="details">
                      <h1>The Easiest Way to Buy Tyres Online</h1>
                      <ul>
                        <li>No Money Down Payment Plans*</li>
                        <li>Fast and Free Shipping</li>
                      </ul>
                      <Link href="/" className="btn2">
                        <span>SHOP TYRES NOW</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/banner/001.png"
                      className="bannerImg"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="whyChoose | padding-block-500">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="heading1 text-center">
                Why you should choose us?
              </h1>
            </div>
          </div>
          <div className="row row-gap-4 mt-5">
            <div className="col-md-4">
              <div className="box">
                <div className="icon">
                  <img
                    src="assets/images/icons/svg/delivery-truck.svg"
                    alt=""
                  />
                </div>
                <h2>Fast and free delivery</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sagittis, libero et egestas scelerisque
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="icon">
                  <img src="assets/images/icons/svg/support.svg" alt="" />
                </div>
                <h2>Fast and free delivery</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sagittis, libero et egestas scelerisque
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="icon">
                  <img
                    src="assets/images/icons/svg/secure-shield-password-protect-safe.svg"
                    alt=""
                  />
                </div>
                <h2>Fast and free delivery</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sagittis, libero et egestas scelerisque
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="searchBanner">
        <div className="container">
          <div className="wrapper">
            <div className="row row-gap-4 align-items-center">
              <div className="col-md-6">
                <div className="details">
                  <h1>The Easiest Way to Buy Tyres Online</h1>
                  <ul>
                    <li>No Money Down Payment Plans*</li>
                    <li>Fast and Free Shipping</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <Tab.Container id="left-tabs-example" defaultActiveKey="size">
                  <div className="homeFilterSearch">
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="size" onClick={() => handleTyreTypeChange('size')}>
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_16_50)">
                              <path d="M18 0C8.05908 0 0 8.05908 0 18C0 27.9409 8.05908 36 18 36C27.9409 36 36 27.9409 36 18C36 8.05908 27.9409 0 18 0ZM18 33C9.71592 33 3.00002 26.2841 3.00002 18C3.00002 9.71592 9.71592 3.00002 18 3.00002C26.2841 3.00002 33 9.71592 33 18C33 26.2841 26.2841 33 18 33Z" />
                              <path d="M26.4853 9.51471C26.4853 9.51464 26.4853 9.51464 26.4853 9.51471C26.4852 9.51464 26.4852 9.51464 26.4853 9.51471C24.3137 7.34311 21.3137 6 18 6C11.3726 6 6 11.3726 6 18C6 24.6275 11.3726 30 18 30C21.3137 30 24.3137 28.6569 26.4852 26.4854C28.6568 24.3138 30 21.3138 30 18.0001C30 14.6864 28.6569 11.6862 26.4853 9.51471ZM25.336 23.2149L23.1683 21.0472C23.4504 20.5697 23.6693 20.0505 23.8109 19.5H26.8748C26.6454 20.8674 26.1082 22.1305 25.336 23.2149ZM9.12518 19.5H12.189C12.3307 20.0505 12.5496 20.5697 12.8317 21.047L10.664 23.2148C9.8918 22.1305 9.35461 20.8674 9.12518 19.5ZM10.664 12.7853L12.8317 14.953C12.5497 15.4305 12.3307 15.9496 12.189 16.5H9.12518C9.35461 15.1326 9.8918 13.8696 10.664 12.7853ZM18 21C17.1723 21 16.423 20.6649 15.8802 20.123C15.8798 20.1224 15.8793 20.1218 15.8788 20.1214C15.8783 20.1209 15.8776 20.1204 15.8771 20.1199C15.3352 19.5771 15.0001 18.8278 15.0001 18.0001C15.0001 17.1724 15.3352 16.4231 15.8771 15.8803C15.8777 15.8798 15.8783 15.8793 15.8788 15.8788C15.8793 15.8783 15.8798 15.8777 15.8802 15.8772C16.423 15.3353 17.1723 15.0001 18 15.0001C19.6571 15.0001 21 16.343 21 18.0002C21 19.6573 19.6571 21 18 21ZM21.0469 12.8316C20.5696 12.5496 20.0504 12.3307 19.5 12.189V9.12518C20.8674 9.35461 22.1303 9.8918 23.2147 10.6639L21.0469 12.8316ZM16.5 12.189C15.9496 12.3307 15.4304 12.5496 14.953 12.8317L12.7853 10.664C13.8697 9.8918 15.1327 9.35461 16.5 9.12518V12.189ZM14.953 23.1684C15.4304 23.4504 15.9495 23.6694 16.5 23.8111V26.8749C15.1326 26.6455 13.8696 26.1083 12.7852 25.3361L14.953 23.1684ZM19.5 23.811C20.0504 23.6693 20.5696 23.4504 21.0469 23.1684L23.2147 25.3361C22.1304 26.1083 20.8674 26.6454 19.5 26.8749V23.811ZM23.811 16.5C23.6693 15.9496 23.4504 15.4303 23.1683 14.9529L25.3361 12.7852C26.1083 13.8695 26.6455 15.1325 26.8749 16.5H23.811V16.5Z" />
                            </g>
                            <defs>
                              <clipPath id="clip0_16_50">
                                <rect width="36" height="36" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span>BY SIZE</span>
                        </Nav.Link>
                      </Nav.Item>


                      <Nav.Item>
                        <Nav.Link eventKey="car" onClick={() => handleTyreTypeChange('car')} >

                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 29C12.2091 29 14 27.2091 14 25C14 22.7909 12.2091 21 10 21C7.79086 21 6 22.7909 6 25C6 27.2091 7.79086 29 10 29ZM10 27.6666C11.4728 27.6666 12.6667 26.4727 12.6667 25C12.6667 23.5272 11.4728 22.3333 10 22.3333C8.52726 22.3333 7.33336 23.5272 7.33336 25C7.33336 26.4727 8.52726 27.6666 10 27.6666Z"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M26 29C28.2091 29 30 27.2091 30 25C30 22.7909 28.2091 21 26 21C23.7909 21 22 22.7909 22 25C22 27.2091 23.7909 29 26 29ZM26 27.6666C27.4728 27.6666 28.6667 26.4727 28.6667 25C28.6667 23.5272 27.4728 22.3333 26 22.3333C24.5273 22.3333 23.3334 23.5272 23.3334 25C23.3334 26.4727 24.5273 27.6666 26 27.6666Z"
                            />
                            <path d="M3.91647 14.9856C3.70225 15.5688 4.0014 16.2153 4.58461 16.4295C5.16784 16.6437 5.8143 16.3446 6.02851 15.7614L3.91647 14.9856ZM6.09423 12.3195L5.04732 11.9077C5.0442 11.9156 5.04115 11.9236 5.03821 11.9316L6.09423 12.3195ZM14.6952 8.625C15.3165 8.625 15.8202 8.12131 15.8202 7.5C15.8202 6.87868 15.3165 6.375 14.6952 6.375V8.625ZM4.9725 16.4985C5.59381 16.4985 6.0975 15.9948 6.0975 15.3735C6.0975 14.7522 5.59381 14.2485 4.9725 14.2485V16.4985ZM3.05808 15.3735L3.04953 16.4985H3.05808V15.3735ZM1.46249 16.986L0.337493 16.9779V16.986H1.46249ZM0.337493 19.5C0.337493 20.1213 0.841172 20.625 1.46249 20.625C2.08381 20.625 2.5875 20.1213 2.5875 19.5H0.337493ZM4.9725 14.2485C4.35117 14.2485 3.8475 14.7522 3.8475 15.3735C3.8475 15.9948 4.35117 16.4985 4.9725 16.4985V14.2485ZM14.6952 16.4985C15.3165 16.4985 15.8202 15.9948 15.8202 15.3735C15.8202 14.7522 15.3165 14.2485 14.6952 14.2485V16.4985ZM26.2854 15.7614C26.4996 16.3446 27.1461 16.6437 27.7293 16.4295C28.3125 16.2153 28.6116 15.5688 28.3974 14.9856L26.2854 15.7614ZM26.2197 12.3195L27.2757 11.9316C27.2727 11.9236 27.2697 11.9156 27.2666 11.9077L26.2197 12.3195ZM14.6952 6.375C14.0739 6.375 13.5702 6.87868 13.5702 7.5C13.5702 8.12131 14.0739 8.625 14.6952 8.625V6.375ZM27.3414 16.4985C27.9627 16.4985 28.4664 15.9948 28.4664 15.3735C28.4664 14.7522 27.9627 14.2485 27.3414 14.2485V16.4985ZM14.6952 14.2485C14.0739 14.2485 13.5702 14.7522 13.5702 15.3735C13.5702 15.9948 14.0739 16.4985 14.6952 16.4985V14.2485ZM27.3414 14.2485C26.7201 14.2485 26.2164 14.7522 26.2164 15.3735C26.2164 15.9948 26.7201 16.4985 27.3414 16.4985V14.2485ZM32.0433 15.3735V16.4985H32.0508L32.0433 15.3735ZM33.6375 16.986H34.7625V16.9779L33.6375 16.986ZM32.5125 19.5C32.5125 20.1213 33.0162 20.625 33.6375 20.625C34.2588 20.625 34.7625 20.1213 34.7625 19.5H32.5125ZM22.3631 26.364C22.9844 26.364 23.4881 25.8603 23.4881 25.239C23.4881 24.6177 22.9844 24.114 22.3631 24.114V26.364ZM13.0718 24.114C12.4505 24.114 11.9468 24.6177 11.9468 25.239C11.9468 25.8603 12.4505 26.364 13.0718 26.364V24.114ZM28.7454 24.114C28.1241 24.114 27.6204 24.6177 27.6204 25.239C27.6204 25.8603 28.1241 26.364 28.7454 26.364V24.114ZM32.042 25.239L32.0505 24.114H32.042V25.239ZM33.6375 23.6265L34.7625 23.6346V23.6265H33.6375ZM34.7625 19.5C34.7625 18.8787 34.2588 18.375 33.6375 18.375C33.0162 18.375 32.5125 18.8787 32.5125 19.5H34.7625ZM6.68947 26.364C7.31079 26.364 7.81447 25.8603 7.81447 25.239C7.81447 24.6177 7.31079 24.114 6.68947 24.114V26.364ZM3.05808 25.239V24.114H3.04953L3.05808 25.239ZM1.46249 23.6265H0.337463L0.337522 23.6346L1.46249 23.6265ZM2.5875 19.5C2.5875 18.8787 2.08381 18.375 1.46249 18.375C0.841172 18.375 0.337493 18.8787 0.337493 19.5H2.5875ZM15.8202 7.5C15.8202 6.87868 15.3165 6.375 14.6952 6.375C14.0739 6.375 13.5702 6.87868 13.5702 7.5H15.8202ZM13.5702 15.3735C13.5702 15.9948 14.0739 16.4985 14.6952 16.4985C15.3165 16.4985 15.8202 15.9948 15.8202 15.3735H13.5702ZM1.46249 18.375C0.841172 18.375 0.337493 18.8787 0.337493 19.5C0.337493 20.1213 0.841172 20.625 1.46249 20.625V18.375ZM4.37725 20.625C4.99857 20.625 5.50225 20.1213 5.50225 19.5C5.50225 18.8787 4.99857 18.375 4.37725 18.375V20.625ZM33.6375 20.625C34.2588 20.625 34.7625 20.1213 34.7625 19.5C34.7625 18.8787 34.2588 18.375 33.6375 18.375V20.625ZM30.5999 18.375C29.9786 18.375 29.4749 18.8787 29.4749 19.5C29.4749 20.1213 29.9786 20.625 30.5999 20.625V18.375ZM6.02851 15.7614L7.15024 12.7074L5.03821 11.9316L3.91647 14.9856L6.02851 15.7614ZM7.14114 12.7313C7.68841 11.3401 8.23695 10.3179 8.92239 9.64068C9.55996 9.01071 10.3707 8.625 11.6137 8.625V6.375C9.80888 6.375 8.42073 6.97329 7.34097 8.04019C6.30906 9.0598 5.62179 10.4473 5.04732 11.9077L7.14114 12.7313ZM11.6137 8.625H14.6952V6.375H11.6137V8.625ZM4.9725 14.2485H3.05808V16.4985H4.9725V14.2485ZM3.06663 14.2485C2.33886 14.243 1.64455 14.5345 1.13498 15.0495L2.73433 16.6321C2.82324 16.5423 2.93715 16.4976 3.04953 16.4985L3.06663 14.2485ZM1.13498 15.0495C0.626369 15.5635 0.342661 16.2577 0.337493 16.9779L2.58747 16.9941C2.58847 16.8525 2.64448 16.7229 2.73433 16.6321L1.13498 15.0495ZM0.337493 16.986V19.5H2.5875V16.986H0.337493ZM4.9725 16.4985H14.6952V14.2485H4.9725V16.4985ZM28.3974 14.9856L27.2757 11.9316L25.1637 12.7074L26.2854 15.7614L28.3974 14.9856ZM27.2666 11.9077C26.6921 10.4473 26.0049 9.0598 24.9729 8.04019C23.8932 6.97329 22.505 6.375 20.7002 6.375V8.625C21.9432 8.625 22.754 9.01071 23.3915 9.64068C24.077 10.3179 24.6255 11.3401 25.1727 12.7313L27.2666 11.9077ZM20.7002 6.375H14.6952V8.625H20.7002V6.375ZM27.3414 14.2485H14.6952V16.4985H27.3414V14.2485ZM27.3414 16.4985H32.0433V14.2485H27.3414V16.4985ZM32.0508 16.4985C32.2773 16.497 32.5103 16.6915 32.5125 16.9941L34.7625 16.9779C34.7517 15.4872 33.5579 14.2384 32.0358 14.2485L32.0508 16.4985ZM32.5125 16.986V19.5H34.7625V16.986H32.5125ZM22.3631 24.114H13.0718V26.364H22.3631V24.114ZM28.7454 26.364H32.042V24.114H28.7454V26.364ZM32.0333 26.364C32.7611 26.3695 33.4554 26.0779 33.965 25.563L32.3657 23.9803C32.2767 24.0702 32.1629 24.1149 32.0505 24.114L32.0333 26.364ZM33.965 25.563C34.4736 25.0489 34.7573 24.3547 34.7625 23.6346L32.5125 23.6184C32.5115 23.76 32.4555 23.8896 32.3657 23.9803L33.965 25.563ZM34.7625 23.6265V19.5H32.5125V23.6265H34.7625ZM6.68947 24.114H3.05808V26.364H6.68947V24.114ZM3.04953 24.114C2.93715 24.1149 2.82324 24.0702 2.73433 23.9803L1.13499 25.563C1.64455 26.0779 2.33886 26.3695 3.06663 26.364L3.04953 24.114ZM2.73433 23.9803C2.64448 23.8896 2.58847 23.76 2.58747 23.6184L0.337522 23.6346C0.342689 24.3547 0.626369 25.0489 1.13499 25.563L2.73433 23.9803ZM2.5875 23.6265V19.5H0.337493L0.337463 23.6265H2.5875ZM13.5702 7.5V15.3735H15.8202V7.5H13.5702ZM1.46249 20.625H4.37725V18.375H1.46249V20.625ZM33.6375 18.375H30.5999V20.625H33.6375V18.375Z" />
                          </svg>

                          <span>BY CAR</span>
                        </Nav.Link>
                      </Nav.Item>



                      <Nav.Item>
                        <Nav.Link eventKey="bike"  onClick={() => handleTyreTypeChange('bike')}>
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17 7C17 6.44772 17.4477 6 18 6H22C22.4304 6 22.8126 6.27543 22.9487 6.68377L27.9487 21.6838C28.1233 22.2077 27.8402 22.774 27.3162 22.9487C26.7923 23.1233 26.226 22.8402 26.0513 22.3162L21.2792 8H18C17.4477 8 17 7.55228 17 7Z"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M27 19C25.3431 19 24 20.3431 24 22C24 23.6569 25.3431 25 27 25C28.6569 25 30 23.6569 30 22C30 20.3431 28.6569 19 27 19ZM22 22C22 19.2386 24.2386 17 27 17C29.7614 17 32 19.2386 32 22C32 24.7614 29.7614 27 27 27C24.2386 27 22 24.7614 22 22Z"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 19C3.34315 19 2 20.3431 2 22C2 23.6569 3.34315 25 5 25C6.65685 25 8 23.6569 8 22C8 20.3431 6.65685 19 5 19ZM0 22C0 19.2386 2.23858 17 5 17C7.76142 17 10 19.2386 10 22C10 24.7614 7.76142 27 5 27C2.23858 27 0 24.7614 0 22Z"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4 14C4 13.4477 4.44772 13 5 13C9.61441 13 13.4435 16.5142 13.9445 21H18.0555C18.5565 16.5142 22.3856 13 27 13C27.8556 13 28.9126 13.1031 29.7939 13.4809C30.3015 13.6984 30.5367 14.2863 30.3191 14.7939C30.1016 15.3015 29.5137 15.5367 29.0061 15.3191C28.4874 15.0969 27.7444 15 27 15C23.1523 15 20 18.1523 20 22C20 22.5523 19.5523 23 19 23H13C12.4477 23 12 22.5523 12 22C12 18.1523 8.84772 15 5 15C4.44772 15 4 14.5523 4 14Z"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.168 10.4453C16.3534 10.1671 16.6657 10 17 10H23C23.5523 10 24 10.4477 24 11C24 11.5523 23.5523 12 23 12H17.5352L17.4418 12.14C15.6323 15.0663 12.2306 16.6659 8.80389 15.9806C8.26233 15.8723 7.91112 15.3454 8.01943 14.8039C8.12774 14.2623 8.65457 13.9111 9.19613 14.0194C11.7632 14.5328 14.3554 13.3395 15.7484 11.0759C15.7547 11.0656 15.7612 11.0554 15.768 11.0453L16.168 10.4453Z"
                            />
                          </svg>

                          <span>BY BIKE</span>
                        </Nav.Link>
                      </Nav.Item>


                      <Nav.Item>
                        <Nav.Link eventKey="truck" onClick={() => handleTyreTypeChange('truck')}>
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_16_121)">
                              <mask
                                id="mask0_16_121"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="32"
                                height="32"
                              >
                                <path d="M32 0H0V32H32V0Z" fill="white" />
                              </mask>
                              <g mask="url(#mask0_16_121)">
                                <path
                                  d="M31.929 15.632L29.118 8.54498C29.0442 8.35854 28.9161 8.19858 28.7502 8.08588C28.5844 7.97318 28.3885 7.91293 28.188 7.91296H21.812C21.5468 7.91296 21.2924 8.01834 21.1049 8.20587C20.9174 8.39341 20.812 8.64775 20.812 8.91296V22.087H19.937V8.91296C19.937 8.64775 19.8316 8.39341 19.6441 8.20587C19.4566 8.01834 19.2022 7.91296 18.937 7.91296H1C0.734783 7.91296 0.480444 8.01834 0.292908 8.20587C0.105371 8.39341 0 8.64775 0 8.91296V23.087C0 23.3522 0.105371 23.6065 0.292908 23.7941C0.480444 23.9816 0.734783 24.087 1 24.087H2.59C2.79625 24.7122 3.19449 25.2565 3.728 25.6423C4.26151 26.0281 4.9031 26.2357 5.56149 26.2357C6.21988 26.2357 6.86151 26.0281 7.39502 25.6423C7.92853 25.2565 8.32674 24.7122 8.53299 24.087H23.465C23.6712 24.7122 24.0695 25.2565 24.603 25.6423C25.1365 26.0281 25.7781 26.2357 26.4365 26.2357C27.0949 26.2357 27.7365 26.0281 28.27 25.6423C28.8035 25.2565 29.2017 24.7122 29.408 24.087H31C31.2652 24.087 31.5196 23.9816 31.7071 23.7941C31.8946 23.6065 32 23.3522 32 23.087V16C32.0001 15.8739 31.976 15.749 31.929 15.632ZM27.51 9.91296L29.725 15.5H22.812V9.91296H27.51ZM5.56201 24.236C5.3348 24.2358 5.11274 24.1682 4.92392 24.0418C4.7351 23.9155 4.588 23.7359 4.50119 23.526C4.41438 23.316 4.39174 23.085 4.43619 22.8622C4.48063 22.6394 4.59015 22.4347 4.75089 22.2741C4.91162 22.1135 5.11635 22.0042 5.3392 21.96C5.56206 21.9157 5.79304 21.9385 6.00293 22.0255C6.21282 22.1125 6.39222 22.2598 6.51843 22.4487C6.64464 22.6377 6.71201 22.8598 6.71201 23.087C6.71174 23.3918 6.59045 23.6841 6.37482 23.8995C6.15918 24.115 5.86684 24.236 5.56201 24.236ZM17.687 22.087H8.534C8.32774 21.4617 7.92954 20.9175 7.39603 20.5317C6.86251 20.1459 6.22089 19.9382 5.5625 19.9382C4.90411 19.9382 4.26249 20.1459 3.72897 20.5317C3.19546 20.9175 2.79726 21.4617 2.591 22.087H2V9.91296H17.936V22.087H17.687ZM26.437 24.236C26.2098 24.2358 25.9877 24.1682 25.7989 24.0418C25.6101 23.9155 25.463 23.7359 25.3762 23.526C25.2894 23.316 25.2667 23.085 25.3112 22.8622C25.3556 22.6394 25.4652 22.4347 25.6259 22.2741C25.7866 22.1135 25.9913 22.0042 26.2142 21.96C26.4371 21.9157 26.668 21.9385 26.8779 22.0255C27.0878 22.1125 27.2672 22.2598 27.3934 22.4487C27.5196 22.6377 27.587 22.8598 27.587 23.087C27.5867 23.3918 27.4655 23.6841 27.2498 23.8995C27.0342 24.115 26.7418 24.236 26.437 24.236ZM29.409 22.087C29.2027 21.4617 28.8045 20.9175 28.271 20.5317C27.7375 20.1459 27.0959 19.9382 26.4375 19.9382C25.7791 19.9382 25.1375 20.1459 24.604 20.5317C24.0705 20.9175 23.6723 21.4617 23.466 22.087H22.812V16.5H30V22.087H29.409Z"
                                 
                                />
                                <path
                                  d="M25.25 17.167H23.875C23.7424 17.167 23.6152 17.2197 23.5215 17.3134C23.4277 17.4072 23.375 17.5344 23.375 17.667C23.375 17.7996 23.4277 17.9268 23.5215 18.0205C23.6152 18.1143 23.7424 18.167 23.875 18.167H25.25C25.3826 18.167 25.5098 18.1143 25.6035 18.0205C25.6973 17.9268 25.75 17.7996 25.75 17.667C25.75 17.5344 25.6973 17.4072 25.6035 17.3134C25.5098 17.2197 25.3826 17.167 25.25 17.167Z"
                                />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_16_121">
                                <rect width="32" height="32" />
                              </clipPath>
                            </defs>
                          </svg>

                          <span>BY TRUCK</span>
                        </Nav.Link>
                      </Nav.Item>


                      <Nav.Item>
                        <Nav.Link eventKey="tractor" onClick={() => handleTyreTypeChange('tractor')}>
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_822_50)">
                              <path
                                d="M27.8169 12.4259L26.3971 4.66388C26.3203 4.24382 25.9542 3.93872 25.5273 3.93872H14.6332C14.2275 3.93872 13.8738 4.21489 13.7754 4.60849L12.1035 11.2957H8.44344V4.82298C8.44344 4.33458 8.0475 3.93872 7.55918 3.93872C7.07086 3.93872 6.67493 4.33458 6.67493 4.82298V11.2957H1.80374C1.53726 11.2957 1.285 11.4159 1.11706 11.6228C0.949125 11.8297 0.883548 12.1014 0.938443 12.3621L2.09448 17.8536C0.815991 18.9119 0 20.5104 0 22.2959C0 25.4749 2.58634 28.0612 5.76535 28.0612C8.94435 28.0612 11.5307 25.4749 11.5307 22.2959C11.5307 22.189 11.5272 22.0829 11.5215 21.9775H15.5551C16.5569 25.4855 19.792 28.0612 23.6173 28.0612C28.2396 28.0612 32.0001 24.3007 32.0001 19.6785C32 16.5855 30.316 13.8787 27.8169 12.4259ZM25.8123 11.2957H22.0256V5.70723H24.7901L25.8123 11.2957ZM15.3237 5.70723H20.2571V11.2957H13.9265L15.3237 5.70723ZM5.76535 26.2927C3.5615 26.2927 1.76851 24.4997 1.76851 22.2959C1.76851 20.092 3.5615 18.299 5.76535 18.299C7.96919 18.299 9.76218 20.092 9.76218 22.2959C9.76218 24.4997 7.96919 26.2927 5.76535 26.2927ZM11.1382 20.209C10.3 18.0588 8.20851 16.5305 5.76535 16.5305C5.03905 16.5305 4.34438 16.6668 3.70376 16.913L2.8935 13.0642H18.4732C16.5036 14.5995 15.2344 16.9934 15.2344 19.6785C15.2344 19.8567 15.2407 20.0334 15.2517 20.209H11.1382ZM23.6173 26.2927C19.9702 26.2927 17.003 23.3256 17.003 19.6785C17.003 16.0314 19.9702 13.0642 23.6173 13.0642C27.2644 13.0642 30.2315 16.0314 30.2315 19.6785C30.2315 23.3256 27.2644 26.2927 23.6173 26.2927Z"
                                fill={tyreType === "tractor" ? "orange" : "white"}
                              />
                              <path
                                d="M23.6173 15.1942C21.1447 15.1942 19.133 17.2059 19.133 19.6785C19.133 22.1511 21.1447 24.1627 23.6173 24.1627C26.0899 24.1627 28.1015 22.1511 28.1015 19.6785C28.1015 17.2059 26.0899 15.1942 23.6173 15.1942ZM23.6173 22.3942C22.1198 22.3942 20.9015 21.176 20.9015 19.6785C20.9015 18.181 22.1198 16.9627 23.6173 16.9627C25.1147 16.9627 26.333 18.181 26.333 19.6785C26.333 21.176 25.1147 22.3942 23.6173 22.3942Z"
                                fill={tyreType === "tractor" ? "orange" : "white"}
                              />
                              <path
                                d="M5.76535 19.8578C4.42099 19.8578 3.32728 20.9515 3.32728 22.2959C3.32728 23.6402 4.42099 24.7339 5.76535 24.7339C7.1097 24.7339 8.20341 23.6402 8.20341 22.2959C8.20341 20.9515 7.1097 19.8578 5.76535 19.8578ZM5.76535 22.9654C5.39615 22.9654 5.09579 22.6651 5.09579 22.2959C5.09579 21.9267 5.39615 21.6263 5.76535 21.6263C6.13454 21.6263 6.4349 21.9267 6.4349 22.2959C6.4349 22.6651 6.13454 22.9654 5.76535 22.9654Z"
                                fill={tyreType === "tractor" ? "orange" : "white"}
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_822_50">
                                <rect width="32" height="32" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span style={{ whiteSpace: 'nowrap' }}>BY TRACTOR</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                    

<Tab.Pane eventKey="size">
    <div className="row">
        <div className="col-12">
            <div className="head">
                <h4>SEARCH BY SIZE</h4>
                <img src="assets/images/size.jpg" alt="" />
            </div>
        </div>
    </div>

    <form>
        <div className="row row-gap-3 mt-2">
            <div className="col-6">
                <label htmlFor="width">WIDTH</label>
                <select id="width" value={width} onChange={(e) => setWidth(e.target.value)}>
                    <option value="all">Select Width</option>
                    {widthOptionsSize.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>

            <div className="col-6">
                <label htmlFor="height">HEIGHT</label>
                <select id="height" value={height} onChange={(e) => setHeight(e.target.value)}>
                    <option value="all">Select Height</option>
                    {heightOptionsSize.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>

            <div className="col-6">
                <label htmlFor="customs">CUSTOMS</label>
                <select id="customs" value={customs} onChange={(e) => setCustoms(e.target.value)}>
                    <option value="all">Select Customs</option>
                    {customsOptionsSize.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>

            <div className="col-6">
                <label htmlFor="weather">WEATHER</label>
                <select id="weather" value={seasons} onChange={(e) => setSeasons(e.target.value)}>
                    
                    {seasonsOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>

            <div className="col-12 d-flex justify-content-center mt-3">
                <button type="button" className="btn1" onClick={handleSearch}>
                    <span>FIND TYRE</span>
                </button>
            </div>
        </div>
    </form>
</Tab.Pane>



        {/* SEARCH BY CAR */}
<Tab.Pane eventKey="car">
  <div className="row">
    <div className="col-12">
      <div className="head">
        <h4>SEARCH BY CAR</h4>
        <img src="assets/images/car.jpg" alt="Car" />
      </div>
    </div>
  </div>
  <form>
    <div className="row row-gap-3 mt-2">
       <div className="col-6">
        <label htmlFor="carBrand">CAR BRAND</label>
        <select 
  value={selectedCarBrand} 
  onChange={(e) => setSelectedCarBrand(e.target.value)}
>
  <option value="">Select Car Brand</option>
  {carBrands.map(brand => (
    <option key={brand._id} value={brand._id}>
      {brand.name}
    </option>
  ))}
</select>
      </div>

      <div className="col-6">
        <label htmlFor="carModel">CAR MODEL</label>
        <select
  value={selectedCarModel}
  onChange={(e) => setSelectedCarModel(e.target.value)}
>
  <option value="">Select Car Model</option>
  {carModels.map(model => (
    <option key={model._id} value={model._id}>
      {model.name}
    </option>
  ))}
</select>
      </div> 

      <div className="col-6">
        <label htmlFor="tyreBrand">TYRE BRAND</label>
        <select id="tyreBrand" value={tyreBrand} onChange={(e) => setTyreBrand(e.target.value)}>
          <option value="">Select Tyre Brand</option>
          {tyreBrands.map(option => (
            <option key={option._id} value={option._id}>{option.name}</option>
          ))}
        </select>
      </div>

      <div className="col-6">
        <label htmlFor="season">SEASON</label>
        <select id="season" value={season} onChange={(e) => setSeason(e.target.value)}>
          
          {seasonsOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <div className="col-12 d-flex justify-content-center mt-3">
        <button type="button" className="btn1" onClick={() => { setTyreType("car"); handleSearch1(); }}>
          <span>FIND TYRE</span>
        </button>
      </div>
    </div>
  </form>
</Tab.Pane>

{/* SEARCH BY BIKE */}
<Tab.Pane eventKey="bike">
  <div className="row">
    <div className="col-12">
      <div className="head">
        <h4>SEARCH BY BIKE</h4>
        <img src="assets/images/bike.jpg" alt="Bike" />
      </div>
    </div>
  </div>
  <form>
    <div className="row row-gap-3 mt-2">
      <div className="col-6">
        <label htmlFor="bikeBrand">BIKE BRAND</label>
  
<select 
  value={selectedBikeBrand} 
  onChange={(e) => setSelectedBikeBrand(e.target.value)}
>
  <option value="">Select Bike Brand</option>
  {bikeBrands.map(brand => (
    <option key={brand._id} value={brand._id}>
      {brand.name}
    </option>
  ))}
</select>
      </div>



      <div className="col-6">
        <label htmlFor="bikeModel">BIKE MODEL</label>

<select
  value={selectedBikeModel}
  onChange={(e) => setSelectedBikeModel(e.target.value)}
>
  <option value="">Select Bike Model</option>
  {bikeModels.map(model => (
    <option key={model._id} value={model._id}>
      {model.name}
    </option>
  ))}
</select>
      </div>

      <div className="col-6">
        <label htmlFor="tyreBrand">TYRE BRAND</label>
        <select id="tyreBrand" value={tyreBrand} onChange={(e) => setTyreBrand(e.target.value)}>
          <option value="">Select Tyre Brand</option>
          {tyreBrands.map(option => (
            <option key={option._id} value={option._id}>{option.name}</option>
          ))}
        </select>
      </div>

      <div className="col-6">
        <label htmlFor="season">SEASON</label>
        <select id="season" value={season} onChange={(e) => setSeason(e.target.value)}>
          
          {seasonsOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <div className="col-12 d-flex justify-content-center mt-3">
        <button type="button" className="btn1" onClick={() => { setTyreType("bike"); handleSearch1(); }}>
          <span>FIND TYRE</span>
        </button>
      </div>
    </div>
  </form>
</Tab.Pane>



<Tab.Pane eventKey="truck">
  <div className="row">
    <div className="col-12">
      <div className="head">
        <h4>SEARCH BY TRUCK</h4>
        <img src="assets/images/truck.jpg" alt="Truck" />
      </div>
    </div>
  </div>
  <form>
    <div className="row row-gap-3 mt-2">
      <div className="col-6">
        <label htmlFor="truckBrand">TRUCK BRAND</label>
        <select
          value={selectedTruckBrand}
          onChange={(e) => setSelectedTruckBrand(e.target.value)}
        >
          <option value="">Select Truck Brand</option>
          {truckBrands.map((brand) => (
            <option key={brand._id} value={brand._id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-6">
        <label htmlFor="truckModel">TRUCK MODEL</label>
        <select
          value={selectedTruckModel}
          onChange={(e) => setSelectedTruckModel(e.target.value)}
        >
          <option value="">Select Truck Model</option>
          {truckModels.map((model) => (
            <option key={model._id} value={model._id}>
              {model.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-6">
        <label htmlFor="tyreBrand">TYRE BRAND</label>
        <select
          id="tyreBrand"
          value={tyreBrand}
          onChange={(e) => setTyreBrand(e.target.value)}
        >
          <option value="">Select Tyre Brand</option>
          {tyreBrands.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-6">
        <label htmlFor="season">SEASON</label>
        <select
          id="season"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
        >
          {seasonsOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="col-12 d-flex justify-content-center mt-3">
        <button
          type="button"
          className="btn1"
          onClick={() => {
            setTyreType("truck");
            handleSearch1();
          }}
        >
          <span>FIND TYRE</span>
        </button>
      </div>
    </div>
  </form>
</Tab.Pane>


<Tab.Pane eventKey="tractor">
  <div className="row">
    <div className="col-12">
      <div className="head">
        <h4>SEARCH BY TRACTOR</h4>
        <img src="assets/images/tractor.jpg" alt="Tractor" />
      </div>
    </div>
  </div>
  <form>
    <div className="row row-gap-3 mt-2">
      <div className="col-6">
        <label htmlFor="tractorBrand">TRACTOR BRAND</label>
        <select
          value={selectedTractorBrand}
          onChange={(e) => setSelectedTractorBrand(e.target.value)}
        >
          <option value="">Select Tractor Brand</option>
          {tractorBrands.map((brand) => (
            <option key={brand._id} value={brand._id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-6">
        <label htmlFor="tractorModel">TRACTOR MODEL</label>
        <select
          value={selectedTractorModel}
          onChange={(e) => setSelectedTractorModel(e.target.value)}
        >
          <option value="">Select Tractor Model</option>
          {tractorModels.map((model) => (
            <option key={model._id} value={model._id}>
              {model.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-6">
        <label htmlFor="tyreBrand">TYRE BRAND</label>
        <select
          id="tyreBrand"
          value={tyreBrand}
          onChange={(e) => setTyreBrand(e.target.value)}
        >
          <option value="">Select Tyre Brand</option>
          {tyreBrands.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-6">
        <label htmlFor="season">SEASON</label>
        <select
          id="season"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
        >
          {seasonsOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="col-12 d-flex justify-content-center mt-3">
        <button
          type="button"
          className="btn1"
          onClick={() => {
            setTyreType("tractor");
            handleSearch1(); // Assuming this function handles the search logic
          }}
        >
          <span>FIND TYRE</span>
        </button>
      </div>
    </div>
  </form>
</Tab.Pane>

                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </section>
   
<section className="padding-block-500">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h1 className="heading1 text-center">Best Seller</h1>
      </div>
    </div>
  
    <div className="row gx-4 row-gap-5 mt-5">
      {result.map((tyre) => {
        const isNew = (new Date() - new Date(tyre.createdAt)) < 30 * 24 * 60 * 60 * 1000; // within 1 hour
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
        src="assets/images/icons/png/truck.svg" // Update this path to your truck icon
        className="truck"
        alt="Truck Icon"
      />
    </li>
  )}

  {tyre.tyreType === 'tractor' && (
    <li>
      <img
        src="assets/images/icons/png/tractor.svg" // Update this path to your tractor icon
        className="tractor"
        alt="Tractor Icon"
      />
    </li>
  )}
</ul>



                <img src={`${url.nodeapipath}/uploads/${tyre.avatarImages}`}  alt={tyre.avatarImages}  />

                
                
              </div>
              <div className="details">
                <div className="brand">{tyre.tyreBrand}</div>
      
                <h2>{tyre.title}</h2>
                <div className="price">
                  <div className="new">₹{tyre.Salesprice}</div>
                  <div className="old">₹{tyre.price}</div>
                </div>
         

<Link to={`/${tyre.tyreType}/${tyre.slug}`} className='btn2' onClick={() => window.scrollTo(0, 0)}>
            VIEW DETAILS 
              </Link>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>





      <section className="bg-neutral-150 | padding-block-500">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="heading1 text-center">
                Popular Tyre Brands We Carry
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Swiper
            spaceBetween={30}
            loop={true}
            slidesPerView={6}
            centeredSlides={true}
            speed={1500}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <div className="clientLogo">
                <img src="assets/images/brands/001.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientLogo">
                <img src="assets/images/brands/002.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientLogo">
                <img src="assets/images/brands/003.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientLogo">
                <img src="assets/images/brands/001.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientLogo">
                <img src="assets/images/brands/002.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientLogo">
                <img src="assets/images/brands/003.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientLogo">
                <img src="assets/images/brands/001.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientLogo">
                <img src="assets/images/brands/002.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientLogo">
                <img src="assets/images/brands/003.jpg" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

        <FrontendFooter/>
    </>
  );
};

export default Mainheader;
