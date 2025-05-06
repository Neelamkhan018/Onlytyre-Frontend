



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import FrontendFooter from '../Footer/FrontendFooter';
import HeaderMenu from '../Menu/HeaderMenu';


import url from "../../env.js"




export default function Showproduct() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [allTyres, setAllTyres] = useState([]);
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(873690);
  const [sortOption, setSortOption] = useState('');
  const [sortedTyres, setSortedTyres] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleBrandClick = async (brandId) => {
    console.log('Selected Brand ID:', brandId);
    setSelectedBrand(brandId);
    let tyres = [];

    if (brandId === 'All') {
      tyres = allTyres;
    } else {
      try {
        const response = await fetch(`${url.nodeapipath}/get-tyre/${brandId}`);
        const data = await response.json();

        if (response.ok) {
          const carTyres = data.carTyres || [];
          const bikeTyres = data.bikeTyres || [];
          tyres = [...carTyres, ...bikeTyres];
        } else {
          console.error('No tyres found for this brand');
          tyres = [];
        }
      } catch (error) {
        console.error('Error fetching tyre data:', error);
        tyres = [];
      }
    }
    // Update sorted tyres with filtering and sorting
    setSortedTyres(sortAndFilterTyres(tyres));
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOption(value);
  };

  const sortAndFilterTyres = (tyres) => {
    // First filter by price
    let filteredTyres = tyres.filter(
      (tyre) => tyre.price >= minPrice && tyre.price <= maxPrice
    );

    // Then apply sorting based on the selected sort option
    switch (sortOption) {
      case 'price-asc':
        filteredTyres.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredTyres.sort((a, b) => b.price - a.price);
        break;
      case 'rating-asc':
        filteredTyres.sort((a, b) => a.rating - b.rating);
        break;
      case 'rating-desc':
        filteredTyres.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filteredTyres.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      default:
        break;
    }
    return filteredTyres;
  };

  useEffect(() => {
    const fetchTyres = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url.nodeapipath}/get-tyres`);
        const data = await response.json();

        if (Array.isArray(data)) {
          const carTyres = data.filter((tyre) => tyre.tyreType === 'car');
          const bikeTyres = data.filter((tyre) => tyre.tyreType === 'bike');
          const uniqueCarTyres = [...new Map(carTyres.map((t) => [t._id, t])).values()];
          const uniqueBikeTyres = [...new Map(bikeTyres.map((t) => [t._id, t])).values()];

          setAllTyres([...uniqueCarTyres, ...uniqueBikeTyres]);
          setSortedTyres(sortAndFilterTyres([...uniqueCarTyres, ...uniqueBikeTyres]));
        } else {
          console.error('Unexpected data format:', data);
          setSortedTyres([]);
        }
      } catch (error) {
        console.error('Error fetching tyres:', error);
        setSortedTyres([]);
      } finally {
        setLoading(false);
      }
    };

    const fetchBrands = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url.nodeapipath}/get-tyre-brands`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error('Error fetching tyre brands:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTyres();
    fetchBrands();
  }, []);

  return (
    <>
      <div className="showPage-container">
        <div className="container-page">
          <Header />
          <HeaderMenu />
          <div className="orange-navbar">
            <div className="orange-name">
              <Link to="/home"><p>Home</p></Link>
              <div className="vl"></div>
            </div>
            <div className="orange-name-shop">
              <p>Shop</p>
            </div>
          </div>

          <div className="default-sorting">
            <select value={sortOption} onChange={handleSortChange}>
              <option value="" disabled>
                Default Sorting
              </option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-asc">Rating: Low to High</option>
              <option value="rating-desc">Rating: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          <div className="forcontainer">
            <div className="tyre-brand-name">
              <p
                className={selectedBrand === 'All' ? 'active' : ''}
                onClick={() => handleBrandClick('All')}
              >
                All
              </p>

              {brands?.map((brand) => (
                <p
                  key={brand._id}
                  className={selectedBrand === brand._id ? 'active' : ''}
                  onClick={() => handleBrandClick(brand._id)}
                >
                  {brand.name}
                </p>
              ))}
            </div>

            <hr className="hr-line" />

            <div className="price-filter">
              <h3>Filter by Price</h3>
              <div className="slider-container">
                <svg
                  className="svg-line"
                  width="212"
                  height="17"
                  viewBox="0 0 212 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="8.5" x2="212" y2="8.5" stroke="#FE9832" strokeWidth="3" />
                  <rect width="3" height="17" fill="#FE9832" />
                  <rect x="209" width="3" height="17" fill="#FE9832" />
                </svg>
                <input
                  type="range"
                  min="1000"
                  max="873690"
                  step="1000"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  className="range-slider"
                  id="maxPrice"
                />
              </div>
              <div className="price-range-label">
                <span>Price: ₹{minPrice.toLocaleString()} - ₹{maxPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* <div className="show-container">
            {sortedTyres.map((tyre) => {
              const isNew = new Date() - new Date(tyre.createdAt) < 30 * 24 * 60 * 60 * 1000;
              const isOnSale = tyre.Salesprice < tyre.price;

              return (
                <div key={tyre._id} className="tyre-item">
              
                </div>
              );
            })}
          </div> */}


     {/* Filtered Tyres Display */}
     <div className="show-container">
            {sortedTyres
            .filter((tyre) => tyre.price >= minPrice && tyre.price <= maxPrice) // Filter tyres by price
            .map((tyre) => {
              const isNew = (new Date() - new Date(tyre.createdAt)) < 30 * 24 * 60 * 60 * 1000; // within 30 days
              const isOnSale = tyre.Salesprice < tyre.price;


  // Define car and bike icons (small SVGs)
  const carIcon = (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="8" fill="#FE9832"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5359 17.6195C11.5382 18.2819 11.151 18.8805 10.555 19.1357C9.95892 19.3909 9.27167 19.2523 8.81413 18.7848C8.35657 18.3172 8.21899 17.6129 8.46561 17.0006C8.71223 16.3884 9.2944 15.989 9.94029 15.989C10.3627 15.9882 10.7681 16.1596 11.0673 16.4653C11.3666 16.7711 11.5351 17.1862 11.5359 17.6195Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3727 17.6195C19.3751 18.2819 18.9878 18.8805 18.3918 19.1357C17.7958 19.3909 17.1085 19.2523 16.651 18.7848C16.1934 18.3172 16.0559 17.6129 16.3025 17.0006C16.5491 16.3884 17.1312 15.989 17.7771 15.989C18.1995 15.9882 18.605 16.1596 18.9041 16.4653C19.2034 16.7711 19.3719 17.1862 19.3727 17.6195Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.9582 12.4928C6.8511 12.7844 7.00067 13.1076 7.29228 13.2147C7.58389 13.3218 7.90712 13.1723 8.01423 12.8807L6.9582 12.4928ZM8.04708 11.1597L7.52363 10.9538C7.52207 10.9578 7.52055 10.9618 7.51908 10.9658L8.04708 11.1597ZM12.3476 9.3125C12.6582 9.3125 12.9101 9.06066 12.9101 8.75C12.9101 8.43934 12.6582 8.1875 12.3476 8.1875V9.3125ZM7.48622 13.2492C7.79688 13.2492 8.04872 12.9974 8.04872 12.6867C8.04872 12.3761 7.79688 12.1242 7.48622 12.1242V13.2492ZM6.52901 12.6867L6.52473 13.2492H6.52901V12.6867ZM5.73122 13.493L5.16872 13.4889V13.493H5.73122ZM5.16872 14.75C5.16872 15.0606 5.42056 15.3125 5.73122 15.3125C6.04188 15.3125 6.29372 15.0606 6.29372 14.75H5.16872ZM7.48622 12.1242C7.17555 12.1242 6.92372 12.3761 6.92372 12.6867C6.92372 12.9974 7.17555 13.2492 7.48622 13.2492V12.1242ZM12.3476 13.2492C12.6582 13.2492 12.9101 12.9974 12.9101 12.6867C12.9101 12.3761 12.6582 12.1242 12.3476 12.1242V13.2492ZM18.1427 12.8807C18.2498 13.1723 18.573 13.3218 18.8646 13.2147C19.1562 13.1076 19.3058 12.7844 19.1987 12.4928L18.1427 12.8807ZM18.1098 11.1597L18.6378 10.9658C18.6363 10.9618 18.6348 10.9578 18.6333 10.9538L18.1098 11.1597ZM12.3476 8.1875C12.0369 8.1875 11.7851 8.43934 11.7851 8.75C11.7851 9.06066 12.0369 9.3125 12.3476 9.3125V8.1875ZM18.6707 13.2492C18.9813 13.2492 19.2332 12.9974 19.2332 12.6867C19.2332 12.3761 18.9813 12.1242 18.6707 12.1242V13.2492ZM12.3476 12.1242C12.0369 12.1242 11.7851 12.3761 11.7851 12.6867C11.7851 12.9974 12.0369 13.2492 12.3476 13.2492V12.1242ZM18.6707 12.1242C18.36 12.1242 18.1082 12.3761 18.1082 12.6867C18.1082 12.9974 18.36 13.2492 18.6707 13.2492V12.1242ZM21.0216 12.6867V13.2492H21.0254L21.0216 12.6867ZM21.8187 13.493H22.3812V13.4889L21.8187 13.493ZM21.2562 14.75C21.2562 15.0606 21.5081 15.3125 21.8187 15.3125C22.1294 15.3125 22.3812 15.0606 22.3812 14.75H21.2562ZM16.1815 18.182C16.4922 18.182 16.744 17.9301 16.744 17.6195C16.744 17.3088 16.4922 17.057 16.1815 17.057V18.182ZM11.5359 17.057C11.2252 17.057 10.9734 17.3088 10.9734 17.6195C10.9734 17.9301 11.2252 18.182 11.5359 18.182V17.057ZM19.3727 17.057C19.062 17.057 18.8102 17.3088 18.8102 17.6195C18.8102 17.9301 19.062 18.182 19.3727 18.182V17.057ZM21.021 17.6195L21.0252 17.057H21.021V17.6195ZM21.8187 16.8132L22.3812 16.8173V16.8132H21.8187ZM22.3812 14.75C22.3812 14.4393 22.1294 14.1875 21.8187 14.1875C21.5081 14.1875 21.2562 14.4393 21.2562 14.75H22.3812ZM8.34471 18.182C8.65536 18.182 8.90721 17.9301 8.90721 17.6195C8.90721 17.3088 8.65536 17.057 8.34471 17.057V18.182ZM6.52901 17.6195V17.057H6.52473L6.52901 17.6195ZM5.73122 16.8132H5.1687L5.16873 16.8173L5.73122 16.8132ZM6.29372 14.75C6.29372 14.4393 6.04188 14.1875 5.73122 14.1875C5.42056 14.1875 5.16872 14.4393 5.16872 14.75H6.29372ZM12.9101 8.75C12.9101 8.43934 12.6582 8.1875 12.3476 8.1875C12.0369 8.1875 11.7851 8.43934 11.7851 8.75H12.9101ZM11.7851 12.6867C11.7851 12.9974 12.0369 13.2492 12.3476 13.2492C12.6582 13.2492 12.9101 12.9974 12.9101 12.6867H11.7851ZM5.73122 14.1875C5.42056 14.1875 5.16872 14.4393 5.16872 14.75C5.16872 15.0606 5.42056 15.3125 5.73122 15.3125V14.1875ZM7.1886 15.3125C7.49925 15.3125 7.7511 15.0606 7.7511 14.75C7.7511 14.4393 7.49925 14.1875 7.1886 14.1875V15.3125ZM21.8187 15.3125C22.1294 15.3125 22.3812 15.0606 22.3812 14.75C22.3812 14.4393 22.1294 14.1875 21.8187 14.1875V15.3125ZM20.2999 14.1875C19.9893 14.1875 19.7374 14.4393 19.7374 14.75C19.7374 15.0606 19.9893 15.3125 20.2999 15.3125V14.1875ZM8.01423 12.8807L8.57509 11.3537L7.51908 10.9658L6.9582 12.4928L8.01423 12.8807ZM8.57054 11.3657C8.84418 10.6701 9.11844 10.159 9.46116 9.82034C9.77995 9.50536 10.1853 9.3125 10.8068 9.3125V8.1875C9.90441 8.1875 9.21033 8.48664 8.67045 9.0201C8.1545 9.5299 7.81086 10.2237 7.52363 10.9538L8.57054 11.3657ZM10.8068 9.3125H12.3476V8.1875H10.8068V9.3125ZM7.48622 12.1242H6.52901V13.2492H7.48622V12.1242ZM6.53328 12.1243C6.1694 12.1215 5.82225 12.2673 5.56746 12.5247L6.36714 13.3161C6.41159 13.2712 6.46854 13.2488 6.52473 13.2492L6.53328 12.1243ZM5.56746 12.5247C5.31315 12.7818 5.1713 13.1289 5.16872 13.4889L6.2937 13.497C6.29421 13.4262 6.32221 13.3614 6.36714 13.3161L5.56746 12.5247ZM5.16872 13.493V14.75H6.29372V13.493H5.16872ZM7.48622 13.2492H12.3476V12.1242H7.48622V13.2492ZM19.1987 12.4928L18.6378 10.9658L17.5818 11.3537L18.1427 12.8807L19.1987 12.4928ZM18.6333 10.9538C18.346 10.2237 18.0024 9.5299 17.4864 9.0201C16.9466 8.48664 16.2525 8.1875 15.3501 8.1875V9.3125C15.9716 9.3125 16.377 9.50536 16.6957 9.82034C17.0385 10.159 17.3127 10.6701 17.5863 11.3657L18.6333 10.9538ZM15.3501 8.1875H12.3476V9.3125H15.3501V8.1875ZM18.6707 12.1242H12.3476V13.2492H18.6707V12.1242ZM18.6707 13.2492H21.0216V12.1242H18.6707V13.2492ZM21.0254 13.2492C21.1386 13.2485 21.2551 13.3458 21.2562 13.497L22.3812 13.4889C22.3758 12.7436 21.7789 12.1192 21.0179 12.1243L21.0254 13.2492ZM21.2562 13.493V14.75H22.3812V13.493H21.2562ZM16.1815 17.057H11.5359V18.182H16.1815V17.057ZM19.3727 18.182H21.021V17.057H19.3727V18.182ZM21.0166 18.182C21.3805 18.1848 21.7277 18.039 21.9825 17.7815L21.1828 16.9902C21.1383 17.0351 21.0814 17.0574 21.0252 17.057L21.0166 18.182ZM21.9825 17.7815C22.2368 17.5245 22.3786 17.1774 22.3812 16.8173L21.2562 16.8092C21.2557 16.88 21.2277 16.9448 21.1828 16.9902L21.9825 17.7815ZM22.3812 16.8132V14.75H21.2562V16.8132H22.3812ZM8.34471 17.057H6.52901V18.182H8.34471V17.057ZM6.52473 17.057C6.46854 17.0574 6.41159 17.0351 6.36714 16.9902L5.56746 17.7815C5.82225 18.039 6.1694 18.1848 6.53328 18.182L6.52473 17.057ZM6.36714 16.9902C6.32221 16.9448 6.29421 16.88 6.2937 16.8092L5.16873 16.8173C5.17131 17.1774 5.31315 17.5245 5.56746 17.7815L6.36714 16.9902ZM6.29372 16.8132V14.75H5.16872L5.1687 16.8132H6.29372ZM11.7851 8.75V12.6867H12.9101V8.75H11.7851ZM5.73122 15.3125H7.1886V14.1875H5.73122V15.3125ZM21.8187 14.1875H20.2999V15.3125H21.8187V14.1875Z" fill="white"/>
    </svg>
    
    );
    
    const bikeIcon = (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="8" fill="#FE9832"/>
      <path d="M15.125 8.9375H17.375L20.1875 17.375" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.1875 19.625C21.4301 19.625 22.4375 18.6176 22.4375 17.375C22.4375 16.1324 21.4301 15.125 20.1875 15.125C18.9449 15.125 17.9375 16.1324 17.9375 17.375C17.9375 18.6176 18.9449 19.625 20.1875 19.625Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.8125 19.625C9.05514 19.625 10.0625 18.6176 10.0625 17.375C10.0625 16.1324 9.05514 15.125 7.8125 15.125C6.56986 15.125 5.5625 16.1324 5.5625 17.375C5.5625 18.6176 6.56986 19.625 7.8125 19.625Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.8125 12.875C10.2875 12.875 12.3125 14.9 12.3125 17.375H15.6875C15.6875 14.9 17.7125 12.875 20.1875 12.875C20.6375 12.875 21.1437 12.9312 21.5375 13.1" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.9375 11.1875H14.5625L14.3375 11.525C13.4375 12.9875 11.75 13.775 10.0625 13.4375" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
    );                 
              return (
                <div key={tyre._id} className="tyre-card">
                  <div className='img-container'>
                    {isOnSale && (
                      <div className="tyre-status sale">
                        <span>Sale</span>
                      </div>
                    )}
                    {isNew && (
                      <div className="tyre-status new">
                        <span>New</span>
                      </div>
                    )}
                    {/* <img src={`${url.nodeapipath}/uploads/${tyre.avatarImages}`} alt={tyre.title} className="tyre-image" /> */}
                <img src={`https://tyres.blr1.digitaloceanspaces.com/${tyre.avatarImages}`} alt={tyre.title} className='tyre-image' />


              {/* Render icon based on tyreType */}
              <div className="tyre-type-icon">
                {tyre.tyreType === "car" ? carIcon : tyre.tyreType === "bike" ? bikeIcon : null}
            </div>
               </div>
                  <div className="tyre-details">
                    <h2>{tyre.title}</h2>
                    <div className="price-section">
                      {tyre.Salesprice && <span className="Sales-price">₹ {tyre.Salesprice}</span>}
                      <span className="tyre-price">₹ {tyre.price}</span>
                    </div>
                    <p className="tyre-description">
                      {/* {tyre.description} */}
                    </p>
                  </div>
                  <Link to={`/details/${tyre._id}/${tyre.tyreType}`}>
                    <button className='tyre-button'><span>View Details</span></button>
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}
