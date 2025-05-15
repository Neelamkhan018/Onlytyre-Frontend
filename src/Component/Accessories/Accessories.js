import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FrontendFooter from '../Footer/FrontendFooter';

import url from "../../env.js";

const Accessories = () => {
  const [sortedAccessories, setSortedAccessories] = useState([]);
  const [accessoryBrands, setAccessoryBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAccessoryBrands, setSelectedAccessoryBrands] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [allAccessories, setAllAccessories] = useState([]);

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const [accessoriesRes, accessoryBrandsRes] = await Promise.all([
          fetch(`${url.nodeapipath}/get-tyres`), // Endpoint for accessories
          fetch(`${url.nodeapipath}/get-accessoriesbrand`), // Endpoint for accessory brands
        ]);
  
        const [accessoriesData, accessoryBrandsData] = await Promise.all([
          accessoriesRes.json(),
          accessoryBrandsRes.json(),
        ]);
  
        const filteredAccessories = accessoriesData.filter(a => a.tyreType === 'accessories'); // Filter for specific accessory type
        setSortedAccessories(filteredAccessories); // Store sorted accessories
        setAllAccessories(filteredAccessories); // Store original accessories
        setAccessoryBrands(accessoryBrandsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchInitialData();
  }, []);

  useEffect(() => {
    const fetchFilteredAccessories = async () => {
      setLoading(true);
      try {
        let accessoryResults = [];

        // Fetch accessories based on selected accessory brands
        if (selectedAccessoryBrands.length > 0) {
          const accessoryRequests = selectedAccessoryBrands.map(id =>
            fetch(`${url.nodeapipath}/get-foraccessories/${id}`).then(res => res.json())
          );
          const accessoryResponses = await Promise.all(accessoryRequests);
          accessoryResults = accessoryResponses.flatMap(res => res.accessories || []);
        } else {
          accessoryResults = allAccessories; // Use original list when no filters
        }

        const uniqueAccessories = [...new Map(accessoryResults.map(a => [a._id, a])).values()];
        setSortedAccessories(uniqueAccessories);
      } catch (error) {
        console.error('Error fetching accessories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredAccessories();
  }, [selectedAccessoryBrands, allAccessories]);

  // Handle Accessory Brand Checkbox Toggle
  const handleAccessoryBrandToggle = (brandId) => {
    setSelectedAccessoryBrands(prev =>
      prev.includes(brandId) ? prev.filter(id => id !== brandId) : [...prev, brandId]
    );
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOption(value);

    let accessories = [...sortedAccessories];

    switch (value) {
      case 'price-asc':
        accessories.sort((a, b) => a.Salesprice - b.Salesprice);
        break;
      case 'price-desc':
        accessories.sort((a, b) => b.Salesprice - a.Salesprice);
        break;
      case 'rating-asc':
        accessories.sort((a, b) => a.rating - b.rating);
        break;
      case 'rating-desc':
        accessories.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        accessories.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      default:
        break;
    }

    setSortedAccessories([...accessories]); // Ensure React detects the state update
  };

  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Accessories</li>
          </ul>
        </div>
      </section>

      <section className="padding-block-500">
        <div className="container">
          <div className="row row-gap-5">
            <div className="col-md-3 hideMobile">
              <div className="siderFilter">
                {/* Accessory Brands Filter */}
                <div className="box">
                  <h3>Accessory Brand</h3>
                  <form action="">
                    <ul>
                      <li>
                      <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="allAccessoryBrands"
                            checked={selectedAccessoryBrands.length === 0}
                            onChange={() => setSelectedAccessoryBrands([])} // Clear all selections when "All" is checked
                          />
                          <label className="form-check-label" htmlFor="allAccessoryBrands">All</label>
                        </div>
                      </li>

                      <ul>
                        {accessoryBrands.map(brand => (
                          <li key={brand._id}>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`accessory-${brand._id}`}
                                checked={selectedAccessoryBrands.includes(brand._id)}
                                onChange={() => handleAccessoryBrandToggle(brand._id)}
                              />
                              <label className="form-check-label" htmlFor={`accessory-${brand._id}`}>{brand.name}</label>
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
                {sortedAccessories.map(accessory => {
                  const isNew = (new Date() - new Date(accessory.createdAt)) < 30 * 24 * 60 * 60 * 1000;
                  const isOnSale = accessory.Salesprice < accessory.price;

                  return (
                    <div className="col" key={accessory._id}>
                      <div className="singleProduct">
                        <div className="photo">
                          {isOnSale && <div className="sale">SALE</div>}
                          {isNew && <div className="new">NEW</div>}
                          <ul className="cate">
  {accessory.accessoryType === 'car' && (
    <li>
      <img
        src="assets/images/icons/png/car.png"
        className="car"
        alt="Car Icon"
      />     
    </li>
  )}

  {accessory.accessoryType === 'bike' && (
    <li>
      <img
        src="assets/images/icons/png/bike.png"
        className="bike"
        alt="Bike Icon"
      />
    </li>
  )}
  </ul>
                          {/* <img src={`${url.nodeapipath}/uploads/${accessory.avatarImages}`} alt={accessory.title} /> */}
                      <img src={`https://tyres.blr1.digitaloceanspaces.com/${accessory.avatarImages}`} alt={accessory.title} />

                        </div>
                        <div className="details">
                          <div className="brand">{accessory.brand}</div>
                          <h2 style={{
                  display:"-webkit-box",
                  WebkitLineClamp : 2,
                  WebkitBoxOrient:"vertical",
                  overflow:"hidden",
                  textOverflow:"ellipsis",
                  maxWidth:"100%"
                }} >{accessory.title}</h2>
                          <div className="price">
                            <div className="new">₹{accessory.Salesprice}</div>
                            {isOnSale && <div className="old">₹{accessory.price}</div>}
                          </div>
                          <Link to={`/accessories/${accessory.slug}`} className="btn2">
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

export default Accessories;